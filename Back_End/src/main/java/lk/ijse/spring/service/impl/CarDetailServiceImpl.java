package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.repo.CarDetailRepo;
import lk.ijse.spring.service.CarDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class CarDetailServiceImpl implements CarDetailService {
    @Autowired
    ModelMapper mapper;
    @Autowired
    CarDetailRepo repo;

    @Override
    public void addCar(VehicleDTO dto) {

    }

    @Override
    public void updateCar(VehicleDTO dto) {

    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public ArrayList<VehicleDTO> getAllCars() {
        return null;
    }
}
