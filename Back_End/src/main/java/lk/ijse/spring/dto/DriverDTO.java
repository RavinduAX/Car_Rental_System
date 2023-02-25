package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String licenseNo;
    private String name;
    private String address;
    private String dob;
    private String gender;
    private int contactNo;
    private String status;
}
