package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface RentRepo extends JpaRepository<Rental, String> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Rental SET bankSlip=?1 WHERE rentalId=?2")
    void updateRentalFilePaths(String bankSlipPath, String id);
}
