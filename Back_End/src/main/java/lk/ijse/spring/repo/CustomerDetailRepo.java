package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface CustomerDetailRepo extends JpaRepository<Customer, String> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Customer SET nicImg=?1 , licenceImg=?2 WHERE nicNo=?3")
    void updateCustomerFilePaths(String nicImg, String licenceImg, String nicNo);

    Customer findCustomerByNicNo(String nicNo);

    Boolean existsByName(String name);

    Customer findCustomerByName(String name);
}
