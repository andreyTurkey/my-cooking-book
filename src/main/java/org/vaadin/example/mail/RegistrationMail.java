package org.vaadin.example.mail;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.datasource.AbstractDriverBasedDataSource;
import org.springframework.stereotype.Component;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.exception.ReadPropertiesException;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.Properties;

@Component
@Slf4j
public class RegistrationMail {

    @Value("${mail.user}") String login;
    @Value("${mail.password}") String password;

    public RegistrationMail() {
    }

    public void sendMessage(UserDto userDto) throws ReadPropertiesException, MessagingException {

        if (userDto.getEmail().isBlank()) {
            return;
        }
        final Properties props = new Properties();
        try (InputStream fis = new FileInputStream(
                "/mail.properties")) {
            props.load(fis);
        } catch (Exception e) {
            throw new ReadPropertiesException("Unable to find the specified mail.properties file");
        }

        Session session = Session.getDefaultInstance(props);

        try {

        final MimeMessage message = new MimeMessage(session);

        message.addFrom(new InternetAddress[]{new InternetAddress("andrei4-09@mail.ru")});

        message.setSubject("Регистрация на сайте my-cooking-book.ru");

        message.setText(String.format("Здравствуйте!\n" +
                        "Поздравляем с успешной регистрацией в приложении для хранения рецептов.\n" +
                "\n"+
                "Данные для входа:\n" +
                "\n" +
                "Логин: %s\n" +
        "Пароль: %s", userDto.getName(), userDto.getPassword()));

        message.addRecipient(Message.RecipientType.TO, new InternetAddress(userDto.getEmail()));

        message.setSentDate(new Date());

        Transport transport = session.getTransport("smtp");
        transport.connect("smtp.mail.ru", 465, login, password);

        transport.sendMessage(message, message.getRecipients(Message.RecipientType.TO));

        } catch (MessagingException mex) {
            log.error(mex.getMessage());
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
