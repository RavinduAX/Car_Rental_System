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
public class Customer {
    @Id
    private String nicNo;
    private String nicImg;
    private String licenceNo;
    private String licenceImg;
    private String name;
    private String address;
    private String password;
    private String email;
    private int contactNo;

    @OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
    private Payment payment;

    @OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
    private Rental rental;

//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
//    private List<Payment> payments = new ArrayList<Payment>();
//
//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
//    private List<Rental> rentals = new ArrayList<Rental>();
}
