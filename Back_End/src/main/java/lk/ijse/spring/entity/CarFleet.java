package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

@Entity
public class CarFleet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cfId;
    private String name;
    private String type;
    private String thumbnail;
}
