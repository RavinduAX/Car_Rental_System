package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface RentRepo extends JpaRepository<Rental, String> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Rental SET bankSlip=?1 WHERE rentalId=?2")
    void updateRentalFilePaths(String bankSlipPath, String id);

//    @Query(value = "Insert into Rental (rentalId, pickupDate, pickupLocation, pickupTime, returnDate, returnTime, status, customer, driver, vehicle, bankSlip) VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11)", nativeQuery = true)
//    void saveCustomer(String rentalId, String pickupDate, String pickupLocation, String pickupTime, String returnDate, String retutnTime, String status, Customer customer, Driver driver, Vehicle vehicle, String bankSlip);

}
