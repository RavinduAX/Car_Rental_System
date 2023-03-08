package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverDetailService {

    public void addDriver(DriverDTO dto);

    public void updateDriver(DriverDTO dto);

    public void deleteDriver(String licenseNo);

    public ArrayList<DriverDTO> getAllDrivers();

    public DriverDTO getADriver();

    DriverDTO getPswdByLNo(String license);
}
