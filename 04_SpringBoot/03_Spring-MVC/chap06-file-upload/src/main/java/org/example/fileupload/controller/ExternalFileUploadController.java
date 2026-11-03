package org.example.fileupload.controller;

import org.example.fileupload.dto.FileDTO;
import org.example.fileupload.util.FileUploadUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
public class ExternalFileUploadController {

    private final FileUploadUtils fileUploadUtils;

    public ExternalFileUploadController(FileUploadUtils fileUploadUtils) {
        this.fileUploadUtils = fileUploadUtils;
    }

    @PostMapping("external-single-file")
    public String externalSingleFileUpload(@RequestParam MultipartFile singleFile,
                                           @RequestParam String singleFileDescription,
                                           RedirectAttributes redirectAttributes) throws IOException {

        String filePath = fileUploadUtils.getUploadPath("img/single");
        String originalFileName = singleFile.getOriginalFilename();

        /*
         * UUID 생성
         * - 파일명의 UUID를 만들어 변환해 저장
         * */
        String savedName = createSavedName(originalFileName);

        // 경로로 해당 파일을 저장한다.
        singleFile.transferTo(new File(filePath, savedName));

        redirectAttributes.addFlashAttribute("message", "외부 단일 파일 업로드 성공!");
        // img : 서버로 이미지에 대한 요청을 보낼주소
        redirectAttributes.addFlashAttribute("img", "/uploads/img/single/" + savedName);

        redirectAttributes.addFlashAttribute("singleFileDescription", singleFileDescription);

        return "redirect:/result";
    }

    private String createSavedName(String originalFileName) {
        String extenstion = originalFileName.substring(originalFileName.lastIndexOf("."));// 확장자

        // UUID 문자열로 변경후 "-" 지우고 확장자 붙이기
        return UUID.randomUUID().toString().replace("-", "") + extenstion;
    }

    /*
    * 여러개의 이미지를 받는건 동일,
    *
    * try Catch -> database에 저장되는 것, 실제 파일이 저장되는 것을 둘 다 성공했을 시에만 완료처리가 되야한다.
    * */

    @PostMapping("external-multi-file")
    public String externalMultiFileUpload(@RequestParam(value = "multiFiles", required = false) List<MultipartFile> multiFiles,
                                          @RequestParam(value = "multiFile", required = false) List<MultipartFile> legacyMultiFiles,
                                          @RequestParam String multiFileDescription,
                                          RedirectAttributes redirectAttributes) {
        // 기존 화면에서 전송한 단수형 이름도 처리하고, 파일 미선택 요청은 결과 화면으로 돌려보낸다.
        if ((multiFiles == null || multiFiles.isEmpty()) && legacyMultiFiles != null) {
            multiFiles = legacyMultiFiles;
        }
        if (multiFiles == null || multiFiles.stream().allMatch(MultipartFile::isEmpty)) {
            redirectAttributes.addFlashAttribute("message", "업로드할 파일을 선택해주세요.");
            return "redirect:/result";
        }

        // 여러 파일들도
        String uploadPath = fileUploadUtils.getUploadPath("img/multi");
        List<FileDTO> files = new ArrayList<>();
        List<String> savedFilesPaths = new ArrayList<>();

        try {
            for (MultipartFile multiFile : multiFiles) {
                // 원본 이름꺼내기
                String originalFileName = multiFile.getOriginalFilename();
                // UUID 만들기
                String savedName = createSavedName(originalFileName);

                // DTD 리스트에 추가
                files.add(new FileDTO(originalFileName, savedName, uploadPath, multiFileDescription));
                // 파일 저장
                multiFile.transferTo(new File(uploadPath, savedName));
                // 경로 LIST에 담기 -> FlashAttribute로 리다이렉트 대상 화면에 어트리뷰트를 넘겨주기 위해
                savedFilesPaths.add("/uploads/img/multi/" + savedName);
            }

            redirectAttributes.addFlashAttribute("message", "[Success] 외부 경로에 다중 파일 업로드 성공!");
            redirectAttributes.addFlashAttribute("imgs", savedFilesPaths);
            redirectAttributes.addFlashAttribute("multiFileDescription", multiFileDescription);
        } catch (Exception exception) {
            for (FileDTO file : files) {
                new File(uploadPath, file.getSavedName()).delete();
            }
            redirectAttributes.addFlashAttribute("message", "[Failed] 외부 경로에 다중 파일 업로드 실패!!");
        }

        return "redirect:/result";
    }
}
