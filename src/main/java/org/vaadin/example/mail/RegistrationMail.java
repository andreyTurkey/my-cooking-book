package org.vaadin.example.mail;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.persistence.Column;


@Component
public class RegistrationMail {

    private final JavaMailSender mailSender;

    public RegistrationMail(@Autowired JavaMailSender javaMailSender) {
        this.mailSender = javaMailSender;
    }

    public void sendMessage() throws MessagingException {

        final MimeMessage mimeMessage = this.mailSender.createMimeMessage();
        final MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);


        messageHelper.setFrom("andrei4-09@mail.ru");
        messageHelper.setTo("andrei4-09@mail.ru");
        messageHelper.setSubject("Java 20 new hot features");
        messageHelper.setText("Java 20 new hot features. Look at the attachment.\nAlso look at my great cat!");
        //messageHelper.addInline("", FileUtils.getFile());
        //messageHelper.addAttachment("java-new-features.txt", FileUtils.getFile());
    }
}
