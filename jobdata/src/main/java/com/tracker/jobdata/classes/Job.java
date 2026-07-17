package com.tracker.jobdata.classes;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Job {

    @Id
    @GeneratedValue
    private Long id;
    private String employer;
    private String title;
    private String salary;
    private String salaryType;

    //Getter and setter for ID
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    //Getter and setter for Employer
    public String getEmployer() {
        return employer;
    }
    public void setEmployer(String employer) {
        this.employer = employer;
    }

    //Getter and setter for Job Title
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    //Getter and setter for Salary
    public String getSalary() {
        return salary;
    }
    public void setSalary(String salary) {
        this.salary = salary;
    }

    //Getter and setter for Salary Type
    public String getSalaryType() {
        return salaryType;
    }
    public void setSalaryType(String salaryType) {
        this.salaryType = salaryType;
    }
}
