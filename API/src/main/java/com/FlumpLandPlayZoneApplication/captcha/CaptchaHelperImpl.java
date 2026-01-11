//package com.FlumpLandPlayZoneApplication.captcha;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import net.logicsquad.nanocaptcha.image.ImageCaptcha;
//import net.logicsquad.nanocaptcha.image.backgrounds.GradiatedBackgroundProducer;
//import net.logicsquad.nanocaptcha.image.backgrounds.SquigglesBackgroundProducer;
//import net.logicsquad.nanocaptcha.image.noise.CurvedLineNoiseProducer;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import javax.imageio.ImageIO;
//import java.io.ByteArrayOutputStream;
//import java.util.Base64;
//import java.util.Random;
//
//@Service
//@Slf4j
//@RequiredArgsConstructor
//public class CaptchaHelperImpl implements CaptchaHelper {
//
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public CaptchaInfo getCaptcha(final Integer width, final Integer height) {
//        final CaptchaInfo captchaInfo = new CaptchaInfo();
//        final GradiatedBackgroundProducer producerGradient = new GradiatedBackgroundProducer();
//        final SquigglesBackgroundProducer producerSquiggle = new SquigglesBackgroundProducer();
//        try {
//            final boolean useGradient = new Random().nextBoolean();
//            final ImageCaptcha imageCaptcha = new ImageCaptcha.Builder(width, height)
//                    .addBackground(useGradient ? producerGradient : producerSquiggle)
//                    .addContent()
//                    .addNoise(new CurvedLineNoiseProducer())
//                    .build();
//            try (ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
//                ImageIO.write(imageCaptcha.getImage(), "jpg", bos);
//                String base64Image = Base64.getEncoder().encodeToString(bos.toByteArray());
//                captchaInfo.setImage(base64Image);
//                captchaInfo.setText(this.passwordEncoder.encode(imageCaptcha.getContent()));
//            }
//        } catch (final Exception exception) {
//            log.error("Can not generate captcha", exception);
//        }
//        return captchaInfo;
//    }
//
//    @Override
//    public Boolean isCaptchaCorrect(final String userText, final String originalText) {
//        return this.passwordEncoder.matches(userText, originalText);
//    }
//}
