package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDTO {
    private String rentalId;
    private String pickupLocation;
    private String pickupDate;
    private String pickupTime;
    private String returnDate;
    private String returnTime;
    private String status;
    private String bankSlip;

//    private CustomerDTO customer;
//    private VehicleDTO vehicle;
//    private DriverDTO driver;

    private String customer;
    private String vehicle;
    private String driver;

}
