# 👨‍💻 Hari's Personal Portfolio

A full-stack personal portfolio website showcasing my projects, skills, and professional journey. Built with a robust **Spring Boot** backend and a dynamic **React** frontend, deployed via **Docker**.

🚀 **Live Demo:** [https://hrk-portfolio.onrender.com](https://hrk-portfolio.onrender.com)

---

## 🛠 Tech Stack

**Frontend:**
* ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js** (Vite)
* ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS**

**Backend:**
* ![Spring](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot) **Java Spring Boot 3**
* ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) **Java 21**

**Deployment:**
* ![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) **Docker**
* ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) **Render Cloud**

---

## 📂 Project Structure

This project follows a **Monorepo** structure where the frontend is integrated into the backend as a static resource.

## 🚀 How to Run Locally

If you want to run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/portfolio.git](https://github.com/YOUR_USERNAME/portfolio.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd portfolio
    ```
3.  **Run with Maven:**
    ```bash
    ./mvnw spring-boot:run
    ```
4.  **Open Browser:**
    Go to `http://localhost:8080`

---

## 🐳 Docker Support

Build and run the container locally:

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio