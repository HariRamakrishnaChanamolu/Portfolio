# 1. Use Java 21 (Alpine Linux version)
FROM eclipse-temurin:21-jdk-alpine

# 2. Install Maven directly using Alpine's package manager
# This avoids the "missing mvnw" error completely
RUN apk add --no-cache maven

WORKDIR /app

# 3. Copy your project files
COPY . .

# 4. Build the project using the installed 'mvn' command (NOT ./mvnw)
RUN mvn clean package -DskipTests

# 5. Move the generated JAR file to the root as 'app.jar'
RUN cp target/*.jar app.jar

# 6. Expose port and run
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]