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
                "I am a software developer with 3 years of experience specializing in secure, cloud-native systems. Currently transitioning into AI Safety and Adversarial Machine Learning research. My expertise bridges the gap between robust software engineering (Java/Spring) and cutting-edge security research (AI Vulnerability Analysis).",
                "hariramakrishna29.ch@gmail.com",
                "+1 513-512-8620",
                "Round Rock, Texas, USA",
                "Masters in Information Systems",
                "Available",
                "https://linkedin.com/",
                "https://github.com/" ,
                 "27",
                "www.hari-portfolio.com"

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

// 3. PROJECTS (The "Archives")
        List<Project> projects = Arrays.asList(
                new Project(
                        "Docker Security Analysis",
                        "Research Paper",
                        "Conducted a large-scale empirical analysis of 50 popular Docker images. Identified 2,264 vulnerabilities and correlated 'image staleness' with security debt (R²=0.972). Established a quantitative risk model for container ecosystems.",
                        "https://doi.org/10.5281/zenodo.17516215" // <--- ADDED LINK HERE
                ),
                new Project(
                        "Adversarial AI Taxonomy (SoK)",
                        "Research Paper",
                        "Authored a 'Systematization of Knowledge' paper developing a Unified Threat Model for AI. Systematically classified attacks into Evasion, Poisoning, and Inference, analyzing the 'Robustness-Accuracy-Privacy' trilemma.",
                        "https://doi.org/10.5281/zenodo.17449778" // <--- ADDED LINK HERE
                ),
                new Project(
                        "Vulnerability Mgmt Platform",
                        "Dell (Enterprise)",
                        "Developed a cloud-based platform to track and manage software vulnerabilities (CVEs). Integrated automated security scans and built triage workflows, giving security teams real-time visibility into risks.",
                        null // <--- No link for Enterprise projects (or use "#")
                ),
                new Project(
                        "Real-Time Data Pipeline",
                        "Paycom (Enterprise)",
                        "Built an event-driven integration platform using Apache Kafka to replace legacy polling. Ingested events from Workday (HCM) to downstream microservices, reducing latency and improving data consistency.",
                        null // <--- No link for Enterprise projects
                )
        );

        // 4. EXPERIENCE (Updated from PDF)
        List<Experience> experience = Arrays.asList(
                new Experience(
                        "Full Stack Java Developer",
                        "Dell Technologies",
                        "Aug 2023 - Oct 2025",
                        "Architected backend microservices for a CVE Vulnerability Management platform using Java 21 & Spring Boot. Designed secure REST APIs and a dynamic React.js/Next.js frontend with RBAC (Keycloak). Integrated automated security tools and managed AWS deployments via Docker/Kubernetes."
                ),
                new Experience(
                        "Software Developer",
                        "Paycom",
                        "Aug 2022 - Jul 2023",
                        "Designed a real-time event-driven integration platform using Apache Kafka to sync Workday employee events. Engineered microservices for idempotent processing and optimized database performance (L2 Cache) on AWS RDS."
                )

        );

        // 5. EDUCATION SECTION
        // From CV
        List<Experience> education = Arrays.asList(
                new Experience(
                        "Masters in Information Science",
                        "Trine University, Detroit",
                        "Aug 2021 - May 2023",
                        "Focus: Data Science, Big Data, and Data Mining."
                ),
                new Experience(
                        "Bachelors in ECE",
                        "VR Siddhartha Engineering College",
                        "May 2016 - Oct 2020",
                        "Focus: Embedded Systems and Electronics."
                )
        );

        // Wrap it all up and send it to React!
        return new PortfolioData(profile, skills, projects, experience, education);
    }
}