package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverDetailRepo;
import lk.ijse.spring.service.DriverDetailService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverDetailServiceImpl implements DriverDetailService {
    @Autowired
    DriverDetailRepo repo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO dto) {
        if(repo.existsById(dto.getLicenseNo())){
            throw new RuntimeException("Driver "+dto.getLicenseNo()+ " Already Exists");
        }
        repo.save(mapper.map(dto, Driver.class));
    }
    @Override
    public void updateDriver(DriverDTO dto) {
        if(!repo.existsById(dto.getLicenseNo())){
            throw new RuntimeException("Driver "+dto.getLicenseNo()+" Not available to update");
        }
        repo.save(mapper.map(dto, Driver.class));
    }
    @Override
    public void deleteDriver(String licenseNo) {
        if(!repo.existsById(licenseNo)){
            throw new RuntimeException("Driver "+licenseNo+" Not Available To Delete");
        }
        repo.deleteById(licenseNo);
    }
    @Override
    public ArrayList<DriverDTO> getAllDrivers() {
        List<Driver> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<DriverDTO>>() {}.getType());
    }

    @Override
    public DriverDTO getADriver() {
        return mapper.map(repo.getADriver(), DriverDTO.class);
    }
}
