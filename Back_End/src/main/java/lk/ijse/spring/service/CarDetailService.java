package lk.ijse.spring.service;

import lk.ijse.spring.dto.VehicleDTO;

import java.util.ArrayList;

public interface CarDetailService {
    public void addCar(VehicleDTO dto);

    public void updateCar(VehicleDTO dto);

    public void deleteCar(String id);

    public ArrayList<VehicleDTO> getAllCars();
}