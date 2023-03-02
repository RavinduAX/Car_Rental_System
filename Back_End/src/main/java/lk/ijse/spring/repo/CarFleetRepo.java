package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CarFleet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CarFleetRepo extends JpaRepository<CarFleet, Integer> {

    Boolean existsByName(String name);

    @Modifying
    @Transactional
    @Query(value = "UPDATE CarFleet SET thumbnail=?1 WHERE name=?2")
    void updateCarFleetFilePath(String thumbImg, String name);

}
