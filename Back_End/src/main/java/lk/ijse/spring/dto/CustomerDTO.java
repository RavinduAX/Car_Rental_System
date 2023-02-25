package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String nicNo;
    private String nicImg;
    private String licenceNo;
    private String licenceImg;
    private String name;
    private String address;
    private String password;
    private String email;
    private int contactNo;
}
