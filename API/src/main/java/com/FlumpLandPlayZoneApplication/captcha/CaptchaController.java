//package com.FlumpLandPlayZoneApplication.captcha;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@RequiredArgsConstructor
//@RestController("/captcha")
//public class CaptchaController {
//
//    private final CaptchaHelper captchaHelper;
//
//    @GetMapping("")
//    public ResponseEntity<CaptchaInfo> getCaptcha(@PathVariable("width") Integer width, @PathVariable("height") Integer height) {
//        return ResponseEntity.ok(captchaHelper.getCaptcha(width, height));
//    }
//
//}
