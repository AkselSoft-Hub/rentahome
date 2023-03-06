package com.fpt.rentahome;

import com.fpt.rentahome.Models.Admin;
import com.fpt.rentahome.Models.Client;
import com.fpt.rentahome.Models.Property;
import com.fpt.rentahome.Repositories.AdminRepository;
import com.fpt.rentahome.Repositories.ClientRepository;
import com.fpt.rentahome.Repositories.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Date;

@SpringBootApplication
public class RentahomeApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(RentahomeApplication.class, args);
    }

   // @Autowired
   // private PropertyRepository propertyRepository;

    @Override
    public void run(String... args) throws Exception {
       /* Property property = Property.builder()
                .category("villa")
                .description("beautifuuuuul")
                .status("pending")
                .rent_type("daily")
                .area(234)
                .bathroom_count(3)
                .price(10000)
                .location_id(1)

                .is_equipped(true)
                .room_count(2)

                .build();

        propertyRepository.save(property);*/
    }
}
