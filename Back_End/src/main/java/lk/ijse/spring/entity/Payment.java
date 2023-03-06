package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

@Entity
public class Payment {
    @Id
    private String paymentId;
    private int lossDamage;
    private int rentalFee;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nicNo", referencedColumnName = "nicNo")
    private Customer customer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "rentalId", referencedColumnName = "rentalId")
    private Rental rental;

}
