package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class VehicleDTO {
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
}
