package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

@Entity
public class Vehicle {
    @Id
    private String regNo;
    private String brand;
    private String type;
    private int noOfPassengers;
    private String transmissionType;
    private String fuelType;
    private double dailyRate;
    private int freeKmForDay;
    private double monthlyRate;
    private int freeKmForMonth;
    private double priceForExtraKm;
    private String color;
    private String status;
    private String milage;

    private String frontImg;
    private String sideImg;
    private String backImg;
    private String interiorImg;

    @OneToOne(mappedBy = "vehicle", cascade = CascadeType.ALL)
    private Rental rental;

//    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL)
//    private List<Rental> rentals = new ArrayList<Rental>();
}
