package org.vaadin.example.mail;

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
public class RegistrationMail {

    private Address userEmail = new InternetAddress("andrei4-09@mail.ru");

    public RegistrationMail() throws AddressException {
    }

    public void sendMessage(UserDto userDto) throws ReadPropertiesException, MessagingException {

        final Properties props = new Properties();
        try (InputStream fis = new FileInputStream(
                "/Users/andreyturkey/Documents/mail.properties")) {
            props.load(fis);
        } catch (Exception e) {
            throw new ReadPropertiesException("Unable to find the specified mail.properties file");
        }

        Session session = Session.getDefaultInstance(props);

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

        message.addRecipient(Message.RecipientType.TO, userEmail);

        message.setSentDate(new Date());

        String userLogin = "andrei4-09@mail.ru";
        String userPassword = "dYQsCwZuXSLTVMLMEeMT";

        Transport transport = session.getTransport("smtp");
        transport.connect("smtp.mail.ru", 465, userLogin, userPassword);

        transport.sendMessage(message, message.getRecipients(Message.RecipientType.TO));
    }

    public boolean setUserEmail(UserDto userDto) throws AddressException {
        if (!userDto.getEmail().isBlank()) {
            this.userEmail = new InternetAddress(userDto.getEmail());
            return true;
        }  else {
            return false;
        }
    }
}
