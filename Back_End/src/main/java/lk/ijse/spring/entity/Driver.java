package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

@Entity
public class Driver {
    @Id
    private String licenseNo;
    private String name;
    private String address;
    private String dob;
    private String gender;
    private int contactNo;
    private String status;

    @OneToOne(mappedBy = "driver", cascade = CascadeType.ALL)
    private Rental rental;
}
