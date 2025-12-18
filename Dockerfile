# Use direct Java 21 JDK for both building and running
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy all files
COPY . .

# Give permission to execute the build script
RUN chmod +x mvnw

# Build the project using the internal JDK 21
RUN ./mvnw clean package -DskipTests

# Move the created JAR to a simple name
RUN cp target/*.jar app.jar

# Run the app
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]