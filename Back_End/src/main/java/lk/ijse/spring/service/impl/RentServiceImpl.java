package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDTO;
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
    RentRepo repo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRent(RentalDTO dto) {

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
}
