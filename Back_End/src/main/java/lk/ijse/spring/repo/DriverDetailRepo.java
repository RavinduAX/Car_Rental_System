package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverDetailRepo extends JpaRepository<Driver, String> {

    @Query(value = "select * from driver order by licenseNo asc limit 1", nativeQuery = true)
    Driver getADriver();

    Driver findDriverByLicenseNo(String licenseNo);

}
