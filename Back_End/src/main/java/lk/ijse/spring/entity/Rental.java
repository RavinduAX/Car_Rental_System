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
public class Rental {
    @Id
    private String rentalId;
    private String pickupLocation;
    private String pickupDate;
    private String pickupTime;
    private String returnDate;
    private String returnTime;
    private String status;
    private String bankSlip;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nicNo", referencedColumnName = "nicNo")
    private Customer customer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "regNo", referencedColumnName = "regNo")
    private Vehicle vehicle;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="licenseNo", referencedColumnName = "licenseNo")
    private Driver driver;

    @OneToOne(mappedBy = "rental", cascade = CascadeType.ALL)
    private Payment payment;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "nicNo", referencedColumnName = "nicNo")
//    private Customer customer;
//
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "regNo", referencedColumnName = "regNo")
//    private Vehicle vehicle;
//
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="licenseNo", referencedColumnName = "licenseNo")
//    private Driver driver;
//
//    @OneToMany(mappedBy = "rental", cascade = CascadeType.ALL)
//    private List<Payment> payments = new ArrayList<Payment>();

}
