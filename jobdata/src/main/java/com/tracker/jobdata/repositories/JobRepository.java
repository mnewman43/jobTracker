package com.tracker.jobdata.repositories;

import com.tracker.jobdata.classes.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
