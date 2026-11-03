package org.example.fileupload.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class BasicFileUploadController {

    @GetMapping("/basic-file-upload")
    public String basicFileUploadPage() {

        return "redirect:/";
    }

    /*
    * MultipartFile
    * - Spring에서 업로드 파일을 다루는 인터페이스
    * - 파일명, 크기, 타입, 내용을 확인할 수 있다.
    * - 저장을 위해서는 원하는 저장 경로로 옮겨야한다.
    * */
    @PostMapping("/basic-file-upload")
    public String uploadFile(@RequestParam(value = "file", required = false)MultipartFile file, Model model) throws IOException {

        if (file == null || file.isEmpty() || file.getOriginalFilename() == null || file.getOriginalFilename().isBlank()) {
            model.addAttribute("message", "업로드할 파일을 선택해주세요.");
            return "main";
        }

        // 경로
//        Path uploadDirectory = Paths.get("uploads").toAbsolutePath();       // toAbsolutePath -> 절대경로
//        Path uploadDirectory1 = Paths.get("uploads").toAbsolutePath();      // 절대 경로

        // uploads 폴더를 생성한다.
        Path uploadDirectory = Paths.get("uploads/").toAbsolutePath().normalize(); // 정리된 경로
        Files.createDirectories(uploadDirectory);

        String originalFile = Paths.get(file.getOriginalFilename()).getFileName().toString();
        System.out.println("originalFile = " + originalFile);

        // 경로와 파일명을 합침
        Path savedFile = uploadDirectory.resolve(originalFile);
        System.out.println("savedFile = " + savedFile);

        /*
        * MultipartFile의 실제 내용을 지정한 경로에 저장
        * */

        file.transferTo(savedFile);
        model.addAttribute("message", "파일 업로드 성공");
        model.addAttribute("originalFileName", originalFile);
        model.addAttribute("savedPath", savedFile);

        return "main";
    }
    /*
    * 1. 파일경로가 JAVA 코드에 직접 작성되어 있음
    *   -> 운영체제나 실행환경마다 다를 때 코드를 수정해야하는 문제
    * 2. 같은 이름의 파일이 덮어씌워짐
    *   -> 여러 사용자가 같은 파일명을 업로드하면 기존 파일이 삭제될 수 있음.
    *   -> UUID 기반의 고유한 저장 파일명을 생성
    * 3. 저장한 파일을 브라우저에서 조회 불가
    *   -> 파일시스템경로는 브라우저가 조회할 수 없기에,
    *   -> WebMVCConfigurer의 addResourcehandler()로 URL과 실제 저장 경로와 연결해서 보여줄것
    * */
}


