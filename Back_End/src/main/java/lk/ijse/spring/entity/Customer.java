package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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

    @OneToOne(mappedBy = "customer")
    private Payment payment;

    @OneToOne(mappedBy = "customer")
    private Rental rental;
}
