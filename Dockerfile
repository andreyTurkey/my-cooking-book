FROM amazoncorretto:17
ENV JAVA_TOOL_OPTIONS -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8081
COPY target/*.jar app.jar
RUN mkdir -p /photo
RUN mkdir -p /properties
COPY ./mail.properties /properties
COPY ./src/main/webapp/Pizza.png /photo
ENTRYPOINT ["java","-jar","/app.jar"]