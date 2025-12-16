package com.hrk.portfolio.model;



import java.util.List;
import java.util.Map;

public class PortfolioData {
    private Profile profile;
    private Map<String, List<String>> skills;
    private List<Project> projects;
    private List<Experience> experience;
    private List<Experience> education;

    // Constructor
    public PortfolioData(Profile profile, Map<String, List<String>> skills, List<Project> projects, List<Experience> experience, List<Experience> education) {
        this.profile = profile;
        this.skills = skills;
        this.projects = projects;
        this.experience = experience;
        this.education = education;
    }

    // Getters
    public Profile getProfile() { return profile; }
    public Map<String, List<String>> getSkills() { return skills; }
    public List<Project> getProjects() { return projects; }
    public List<Experience> getExperience() { return experience; }
    public List<Experience> getEducation() { return education; }
}