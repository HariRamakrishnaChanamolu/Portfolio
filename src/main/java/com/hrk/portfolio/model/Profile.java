package com.hrk.portfolio.model;

public class Profile {
    // 1. Fields
    private String name;
    private String initials;
    private String title;
    private String summary;
    private String email;
    private String phone;
    private String location;
    private String degree;
    private String freelance;
    private String linkedin;
    private String github;

    private String age;
    private String website;

    // 2. Constructor (FIXED: Added 'age' and 'website' to the arguments list)
    public Profile(String name, String initials, String title, String summary, String email, String phone, String location, String degree, String freelance, String linkedin, String github, String age, String website) {
        this.name = name;
        this.initials = initials;
        this.title = title;
        this.summary = summary;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.degree = degree;
        this.freelance = freelance;
        this.linkedin = linkedin;
        this.github = github;

        this.age = age;
        this.website = website;
    }

    // 3. Getters
    public String getName() { return name; }
    public String getInitials() { return initials; }
    public String getTitle() { return title; }
    public String getSummary() { return summary; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getLocation() { return location; }
    public String getDegree() { return degree; }
    public String getFreelance() { return freelance; }
    public String getLinkedin() { return linkedin; }
    public String getGithub() { return github; }
    public String getAge() { return age; }
    public String getWebsite() { return website; }
}