# 1. Use Java 21 Alpine image (Lightweight & Fast)
FROM eclipse-temurin:21-jdk-alpine

# 2. Install Maven manually (Bypasses the missing mvnw file issue)
RUN apk add --no-cache maven

WORKDIR /app

# 3. Copy your project files
COPY . .

# 4. Build the project using the installed 'mvn' command (Not ./mvnw)
RUN mvn clean package -DskipTests

# 5. Move the jar file
RUN cp target/*.jar app.jar

# 6. Run the application
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]