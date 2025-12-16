package com.hrk.portfolio.model;

    public class Project {
        private String title;
        private String category; // e.g., "Cybersecurity Research"
        private String description;
        private String projectUrl;

        // Constructor
        public Project(String title, String category, String description,String projectUrl) {
            this.title = title;
            this.category = category;
            this.description = description;
            this.projectUrl = projectUrl;
        }

        // Getters
        public String getTitle() { return title; }
        public String getCategory() { return category; }
        public String getDescription() { return description;}
        public String getProjectUrl() { return projectUrl;}
    }

