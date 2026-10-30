package org.example.requestmapping.chap02;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/order")
public class ClassMappingTestController {

    // /order/regist GET
    @GetMapping("/regist")
    public String registOrder(Model model) {

        model.addAttribute("message", "/order/regist 요청결과");

        return "mappingResult";
    }

    // 여러개의 요청 매핑 : @RequsetMapping의 value 속성에 중괄호를 이용해 매핑할 URL을 나열 가능
    // /order/modify        POST /order/modify              POST /order/delete
    // /order/delete        DELETE /order/modify            DELETE /order/delete
    @RequestMapping(value={"modify", "delete"}, method = {RequestMethod.DELETE, RequestMethod.POST})
    public String modifyAndDelte(Model model) {

        model.addAttribute("message", "/order/modify와 /order/delete 요청결과");

        return "mappingResult";
    }

    // PathVariable : URL에서 변수를 받아올 수 있음!
    // @PathVariable(Path에 적힌 변수명) 타입 변수명
    // @PathVariable 타입 Path에 적힌 변수명
    @GetMapping("/detail/{orderNo}")
//    public String selectOrderDetail(Model model, @PathVariable int orderNo) {  아래와 동일

    public String selectOrderDetail(Model model, @PathVariable("orderNo") int orderNo) {

        model.addAttribute("message", orderNo +"번 상세 조회 주문입니다.");

        return "mappingResult";
    }

    @RequestMapping
    public String anyResult(Model model){
//        model.addAttribute()
        return "mappingResult";
    }

}
