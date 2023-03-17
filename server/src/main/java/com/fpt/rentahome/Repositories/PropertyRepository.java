package com.fpt.rentahome.Repositories;

import com.fpt.rentahome.Models.Property;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
    List<Property> filterByPrice(int min, int max);

    List<Property> findByDescriptionContaining(String search);
}
