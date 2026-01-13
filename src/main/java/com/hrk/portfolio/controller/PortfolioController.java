package com.hrk.portfolio.controller;

import com.hrk.portfolio.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Use 5173 for Vite/React
public class PortfolioController {

    @GetMapping("/portfolio")
    public PortfolioData getPortfolio() {

        // 1. PROFILE SECTION
        // Extracted from CV & SOP
        Profile profile = new Profile(
                "Hari Ramakrishna Chanamolu",
                "HRC",
                "Software Developer | Aspiring AI Security Engineer",
                "I am a results-driven Software Developer with ample experience in architecting secure, cloud-native distributed systems. My professional journey has been defined by bridging the gap between robust software engineering (Java/Spring Boot) and cutting-edge security research. Having successfully delivered enterprise-grade solutions for global corporations, I am now expanding my expertise into AI Safety and Adversarial Machine Learning, aiming to build resilient systems that can withstand the evolving threat landscape of the future.",
                "hariramakrishna29.ch@gmail.com",
                "+1 513-512-8620",
                "Round Rock, Texas, USA",
                "Masters in Information Systems",
                "Available",
                "https://linkedin.com/",
                "https://github.com/" ,
                 "27",
                "https://hrk-portfolio.onrender.com/"

        );

        // 2. SKILLS (Updated to your "Major" tools)
        Map<String, List<String>> skills = new HashMap<>();

        skills.put("Backend_Core", Arrays.asList(
                "Java 17", "Spring Boot", "Microservices", "Spring Security", "Apache Kafka"
        ));

        skills.put("Cloud_&_DevOps", Arrays.asList(
                "AWS (ECS, EKS, Lambda)", "Docker", "Kubernetes", "Linux Systems", "CI/CD Pipelines"
        ));

        skills.put("Data_&_Caching", Arrays.asList(
                "MySQL", "PostgreSQL", "MongoDB", "Apache Cassandra", "Redis Cache"
        ));

        skills.put("Frontend_&_AI", Arrays.asList(
                "React.js", "Next.js", "HTML5 & CSS3", "AI Safety", "Adversarial ML"
        ));

// ==========================================
        // 3. PROJECTS SECTION (The Archives)
        // ==========================================
        List<Project> projects = Arrays.asList(
                new Project(
                        "Docker Security Analysis",
                        "Research Paper",
                        "Conducted a large-scale empirical analysis of 50 popular Docker images to understand the state of container security. Identified over 2,264 vulnerabilities and correlated 'image staleness' with security debt (R²=0.972). Established a quantitative risk model for container ecosystems to help DevOps teams prioritize patching.",
                        "https://doi.org/10.5281/zenodo.17516215"
                ),
                new Project(
                        "Adversarial AI Taxonomy (SoK)",
                        "Research Paper",
                        "Authored a 'Systematization of Knowledge' paper developing a Unified Threat Model for Artificial Intelligence. Systematically classified attacks into Evasion, Poisoning, and Inference categories. Analyzed the 'Robustness-Accuracy-Privacy' trilemma to provide a framework for building secure AI models.",
                        "https://doi.org/10.5281/zenodo.17449778"
                ),
                new Project(
                        "Portfolio Monorepo", // <--- NEW ADDITION
                        "Full Stack Web",
                        "A modern, full-stack personal portfolio website showcasing my professional journey. Built as a Monorepo using a robust Spring Boot backend to serve a highly optimized React (Vite) frontend. The application is containerized using Docker (Multi-stage builds) for consistency and deployed on Render Cloud. It features a responsive neon-glassmorphism UI, interactive holographic elements, and a centralized API architecture.",
                        "https://github.com/HariRamakrishnaChanamolu/Portfolio" // Make sure this link matches your repo
                ),
                new Project(
                        "Vulnerability Mgmt Platform",
                        "Dell (Enterprise)",
                        "Designed and developed a comprehensive, cloud-native Vulnerability Management Platform for enterprise security. This system aggregates security data from multiple scanners to track software vulnerabilities (CVEs) across global infrastructure. Built using a Microservices architecture with Java 17 and Spring Boot, it features an event-driven ingestion pipeline and a dynamic React.js frontend. Implemented Role-Based Access Control (RBAC) via Keycloak for secure tenant isolation and orchestrated deployment on AWS EKS using Kubernetes, significantly reducing the Mean Time to Remediate (MTTR) for critical security patches.",
                        "#" // No link for Enterprise
                ),
                new Project(
                        "Real-Time Data Pipeline",
                        "Paycom (Enterprise)",
                        "Engineered a high-throughput, Real-Time Data Integration Pipeline to synchronize critical Human Capital Management (HCM) data. Moved the legacy architecture from inefficient polling to a modern event-driven model using Apache Kafka and Spring Cloud Stream. This solution handled high-volume employee events from Workday to downstream consumers with eventual consistency. Optimized database interactions using Hibernate/JPA and implemented L2 Caching with Redis to handle peak loads, ensuring seamless data availability and system resilience.",
                        "#" // No link for Enterprise
                )
        );

        // 4. EXPERIENCE (Updated from PDF)
        List<Experience> experience = Arrays.asList(
                new Experience(
                        "Full Stack Java Developer",
                        "Dell Technologies",
                        "August  2023 - December 2025",
                        "Architected backend microservices for a CVE Vulnerability Management platform using Java 21 & Spring Boot. Designed secure REST APIs and a dynamic React.js/Next.js frontend with RBAC (Keycloak). Integrated automated security tools and managed AWS deployments via Docker/Kubernetes."
                ),
                new Experience(
                        "Software Developer",
                        "Paycom",
                        "August 2022 - July 2023",
                        "Designed a real-time event-driven integration platform using Apache Kafka to sync Workday employee events. Engineered microservices for idempotent processing and optimized database performance (L2 Cache) on AWS RDS."
                )

        );

        // 5. EDUCATION SECTION
        // From CV
        List<Experience> education = Arrays.asList(
                new Experience(
                        "Masters in Information Science",
                        "Trine University, Detroit",
                        "August 2021 - May 2023",
                        "Focus: Data Science, Big Data, and Data Mining."
                ),
                new Experience(
                        "Bachelors in ECE",
                        "VR Siddhartha Engineering College",
                        "May 2016 - October 2020",
                        "Focus: Embedded Systems and Electronics."
                )
        );

        // Wrap it all up and send it to React!
        return new PortfolioData(profile, skills, projects, experience, education);
    }
}