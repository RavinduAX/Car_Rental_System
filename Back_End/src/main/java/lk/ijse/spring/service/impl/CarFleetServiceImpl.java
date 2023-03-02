package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarFleetDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.CarFleet;
import lk.ijse.spring.repo.CarFleetRepo;
import lk.ijse.spring.service.CarFleetService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarFleetServiceImpl implements CarFleetService {
    @Autowired
    CarFleetRepo repo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void addfCar(CarFleetDTO dto) {
        if(repo.existsByName(dto.getName())){
            throw new RuntimeException("Car "+dto.getName()+" Already Exists");
        }
        repo.save(mapper.map(dto, CarFleet.class));
    }

    @Override
    public void updatefCar(CarFleetDTO dto) {

    }

    @Override
    public void deletefCar(String name) {
        if(!repo.existsByName(name)){
            throw new RuntimeException("Car "+name+" not available to delete");
        }
        repo.deleteByName(name);
    }

    @Override
    public ArrayList<CarFleetDTO> getAllfCar() {
        List<CarFleet> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CarFleetDTO>>() {}.getType());
    }

    @Override
    public void uploadThumbImg(String thumbImgPath, String name) {
        if(!repo.existsByName(name)){
            throw new RuntimeException("Customer "+ name +" Not Found");
        }
        repo.updateCarFleetFilePath(thumbImgPath, name);
    }
}
