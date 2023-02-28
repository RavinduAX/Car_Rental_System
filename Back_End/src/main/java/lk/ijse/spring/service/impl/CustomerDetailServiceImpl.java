package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerDetailRepo;
import lk.ijse.spring.service.CustomerDetailService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerDetailServiceImpl implements CustomerDetailService {
    @Autowired
    ModelMapper mapper;
    @Autowired
    CustomerDetailRepo repo;

    @Override
    public void addCustomer(CustomerDTO dto) {
        if(repo.existsById(dto.getNicNo())){
            throw new RuntimeException("Customer "+dto.getNicNo()+" Already Exists");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if(!repo.existsById(dto.getNicNo())){
            throw new RuntimeException("Customer "+dto.getNicNo()+" Not Available To Update");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public void deleteCustomer(String id) {
        if(!repo.existsById(id)){
            throw new RuntimeException("Customer "+id+" Not Available To Delete");
        }
        repo.deleteById(id);
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CustomerDTO>>() {}.getType());
    }

    @Override
    public void uploadCustomerImages(String nicImgPath, String licenceImgPath, String id) {
        if(!repo.existsById(id)){
            throw new RuntimeException("Customer "+ id +" Not Found");
        }
        repo.updateCustomerFilePaths(nicImgPath, licenceImgPath, id);
    }


}
