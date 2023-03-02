package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarFleetDTO;

import java.util.ArrayList;

public interface CarFleetService {
    public void addfCar(CarFleetDTO dto);

    public void updatefCar(CarFleetDTO dto);

    public void deletefCar(String name);

    public ArrayList<CarFleetDTO> getAllfCar();

    public void uploadThumbImg(String thumbImgPath, String name);
}
