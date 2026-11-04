package org.example.restapi.section05.swagger;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.example.restapi.section02.responseentity.ResponseMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.*;


@Tag(name="SWAGGER 테스트 컨트롤러", description = "Section #5의 스웨거 테스트입니다.")
@RestController
@RequestMapping("/swagger")
public class SwaggerTestControllerImpl implements SwaggerTestController {

    private List<UserDTO> users;

    public SwaggerTestControllerImpl() {
        this.users = new ArrayList<>();

        users.add(new UserDTO(1, "user01", "pass01", "홍길동", new Date()));
        users.add(new UserDTO(2, "user02", "pass02", "유관순", new Date()));
        users.add(new UserDTO(3, "user03", "pass03", "이순신", new Date()));
    }

    // 유저 목록 전체 조회
    public ResponseEntity<org.example.restapi.section02.responseentity.ResponseMessage> findAllUsers() {

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("users", users);

        org.example.restapi.section02.responseentity.ResponseMessage responseMessage = new org.example.restapi.section02.responseentity.ResponseMessage(200, "조회 성공", responseMap);

        /*
        * application/json : HTTP의 응답이 JSON 형식의 데이터임을 의미
        * */

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(
                new MediaType("application", "json", Charset.forName("UTF-8"))
        );

        return new ResponseEntity<>(responseMessage, headers, HttpStatus.OK);
    }

    // 특정 유저 상세 조회
    public ResponseEntity<org.example.restapi.section02.responseentity.ResponseMessage> findUserByNo(@PathVariable int userNo) {
        /*
         * applicadtion/json : HTTP의 응답이 JSON 형식의 데이터임을 의미
         * */
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(
                new MediaType("application", "json", StandardCharsets.UTF_8)
        );

        UserDTO foundUser = new UserDTO();

        // 일치하는 회원 찾기
        for (UserDTO user : users) {
            if (user.getNo() == userNo) {
                foundUser = user;
                break;
            }
        }

        // 응답 데이터
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("user", foundUser);

        // 메서드 체이닝 + 빌더 패턴
        return ResponseEntity
                .ok() // 200 상태코드
                .headers(headers)
                .body(new ResponseMessage(200, "조회성공", responseMap));
    }

    /*
    * @RequestBody
    * - HTTP 요청의 본문에 담긴 데이터를 Java 객체로 변환해 매개변수에 전달하는 역할
    * */
    // 신규 유저 등록 -> 유저 정보 -> 조회를 할 수 있는 API와 연결
    public ResponseEntity<?> registUser(@RequestBody UserDTO newUser) {

        System.out.println("newUser = " + newUser);

        int lastUserNo = users.get(users.size() - 1).getNo();   // 마지막 회원의 회원번호
        int newUserNo = lastUserNo + 1;

        newUser.setNo(newUserNo);
        newUser.setEnrollAt(new Date());

        // 저장
        users.add(newUser);

        return ResponseEntity
                .created(URI.create("/entity/usesrs" + newUserNo))
                .build();
    }

    // 기존 유저 정보를 수정

    // 기존 유저 정보를 삭제
    @DeleteMapping("/users/{userNo}")
    public ResponseEntity<?> removeUser(@PathVariable int userNo) {

        UserDTO foundUser = users.stream()
                .filter(user->user.getNo() == userNo)
                .toList().get(0);

        users.remove(foundUser);

        return ResponseEntity
                .noContent()    // 204   == .ok("삭제가 완료되없습니다.")
                .build();
    }

    // 특정 회원의 정보를 전체 수정
    @PutMapping("/users/{userNo}")
    public ResponseEntity<?> updateUser(
            @PathVariable int userNo,
            @RequestBody UserDTO updateUser
    ) {

        UserDTO foundUser = users.stream()
                .filter(user->user.getNo() == userNo)
                .toList().get(0);

        foundUser.setId(updateUser.getId());
        foundUser.setName(updateUser.getName());
        foundUser.setPwd(updateUser.getPwd());

        System.out.println(users);
        return ResponseEntity.ok(updateUser);
    }
}

