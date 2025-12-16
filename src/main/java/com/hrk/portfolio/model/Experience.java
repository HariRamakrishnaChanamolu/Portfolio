package com.hrk.portfolio.model;

public class Experience {
    private String title;       // e.g., "Full Stack Developer" or "Masters in..."
    private String subtitle;    // e.g., "Dell" or "Trine University"
    private String date;        // e.g., "Jul 2023 - Aug 2025"
    private String description; // The details

    // Constructor
    public Experience(String title, String subtitle, String date, String description) {
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.description = description;
    }

    // Getters
    public String getTitle() { return title; }
    public String getSubtitle() { return subtitle; }
    public String getDate() { return date; }
    public String getDescription() { return description; }
}