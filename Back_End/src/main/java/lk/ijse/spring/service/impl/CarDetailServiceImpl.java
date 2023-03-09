package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.CarDetailRepo;
import lk.ijse.spring.service.CarDetailService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarDetailServiceImpl implements CarDetailService {
    @Autowired
    ModelMapper mapper;
    @Autowired
    CarDetailRepo repo;

    @Override
    public void addCar(VehicleDTO dto) {
        if(repo.existsById(dto.getRegNo())){
            throw new RuntimeException("Car "+dto.getRegNo()+" Already Exists");
        }
        repo.save(mapper.map(dto, Vehicle.class));
    }

    @Override
    public void updateCar(VehicleDTO dto) {
        if(!repo.existsById(dto.getRegNo())){
            throw new RuntimeException("Not Available fot update");
        }
        repo.save(mapper.map(dto, Vehicle.class));
    }

    @Override
    public void deleteCar(String id) {
        if(!repo.existsById(id)){
            throw new RuntimeException( id + " Not Available fot delete");
        }
        repo.deleteById(id);
    }

    @Override
    public ArrayList<VehicleDTO> getAllCars() {
        List<Vehicle> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<VehicleDTO>>() {}.getType());
    }

    @Override
    public void uploadCarImages(String frontImgPath, String sideImgPath, String backImgPath, String interiorImgPath, String id) {
        if(!repo.existsById(id)){
            throw new RuntimeException("Car "+ id +" Not Found");
        }
        repo.updateCarFilePaths(frontImgPath, sideImgPath, backImgPath, interiorImgPath, id);
    }

    @Override
    public VehicleDTO getVehicleInfo(String brand) {
        if(!repo.existsByBrand(brand)){
            throw new RuntimeException("Car "+ brand +" Not Found");
        }
        return mapper.map(repo.getVehicleInfo(brand), VehicleDTO.class);
    }

    @Override
    public int getAvaCars() {
        return repo.getAvaCarCount();
    }
}
