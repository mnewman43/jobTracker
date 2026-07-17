package com.tracker.jobdata.controllers;

import com.tracker.jobdata.classes.Job;
import com.tracker.jobdata.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @PostMapping("/job")
    Job createJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @GetMapping("/jobs")
    List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

}
