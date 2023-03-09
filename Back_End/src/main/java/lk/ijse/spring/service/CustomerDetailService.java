package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerDetailService {
    public void addCustomer(CustomerDTO dto);

    public void updateCustomer(CustomerDTO dto);

    public void deleteCustomer(String id);

    public ArrayList<CustomerDTO> getAllCustomers();

    public void uploadCustomerImages(String nicImgPath, String licenceImgPath, String id);

    public CustomerDTO searchAndLoadImages(String id);

    public CustomerDTO getNicByName(String name);

    CustomerDTO getPasswordByNic(String usrNme);

    int getCountRegCustomers();
}
