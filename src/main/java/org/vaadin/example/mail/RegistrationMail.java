package org.vaadin.example.mail;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.exception.ReadPropertiesException;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

@Component
@Slf4j
public class RegistrationMail {

    @Value("${mail.user}")
    String login;
    @Value("${mail.password}")
    String password;

    public RegistrationMail() {
    }

    public void sendMessage(UserDto userDto) throws ReadPropertiesException, MessagingException {

        if (userDto.getEmail().isBlank()) {
            return;
        }
        final Properties props = new Properties();
        try (InputStream fis = new FileInputStream("/properties/mail.properties")) {
            props.load(fis);
        } catch (Exception e) {
            throw new ReadPropertiesException("Unable to find the specified mail.properties file");
        }

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(login, password);
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("andrei4-09@mail.ru"));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse("andrei4-09@mail.ru")
            );
            message.setSubject("Testing Gmail TLS");
            message.setText("Dear Mail Crawler,"
                    + "\n\n Please do not spam my email!");

            Transport.send(message);

            System.out.println("Done");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}

   /* public boolean setUserEmail(UserDto userDto) throws AddressException {
        if (!userDto.getEmail().isBlank()) {
            this.userEmail = new InternetAddress(userDto.getEmail());
            return true;
        }  else {
            return false;
        }
    }*/
}
