package org.example.restapi.section03.valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

// 해당 패키지에서 예외 발생 시에만 동작
@RestControllerAdvice(basePackages = "org.example.restapi.section03.valid")
public class ValidExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String>> handleValidationException(
            MethodArgumentNotValidException exception) {

        // FieldError : 특정 필드에서 발생한 검증오류정보를 담은 객체
        FieldError fieldError = exception.getBindingResult().getFieldError();

        Map<String,String> response = Map.of(
                "field", fieldError.getField(),
                "message", fieldError.getDefaultMessage()
        );

        return ResponseEntity.badRequest().body(response);
    }
}
