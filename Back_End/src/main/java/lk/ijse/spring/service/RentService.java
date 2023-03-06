package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;

import java.util.ArrayList;

public interface RentService {

    public void saveRent(RentalDTO dto);

    public void updateRent(RentalDTO dto);

    public void deleteRent(String rentalId);

    public ArrayList<RentalDTO> getRent();

}
