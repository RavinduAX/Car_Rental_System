package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.CarDetailRepo;
import lk.ijse.spring.repo.CustomerDetailRepo;
import lk.ijse.spring.repo.DriverDetailRepo;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo rentRepo;
    @Autowired
    CustomerDetailRepo custRepo;
    @Autowired
    DriverDetailRepo drivRepo;
    @Autowired
    CarDetailRepo carRepo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRent(RentalDTO dto) {
        if(rentRepo.existsById(dto.getRentalId())){
            throw new RuntimeException("Rent "+dto.getRentalId()+" Already Exists");
        }

        rentRepo.save(mapper.map(dto, Rental.class));

    }

    @Override
    public void updateRent(RentalDTO dto) {

    }

    @Override
    public void deleteRent(String rentalId) {

    }

    @Override
    public ArrayList<RentalDTO> getRent() {
        return null;
    }

    @Override
    public void uploadBankSlip(String bankSlipPath, String id) {
        if(!rentRepo.existsById(id)){
            throw new RuntimeException("Rent "+ id +" Not Found");
        }
        rentRepo.updateRentalFilePaths(bankSlipPath, id);
    }

}
