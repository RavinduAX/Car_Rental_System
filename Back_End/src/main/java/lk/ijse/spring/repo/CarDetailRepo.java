package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CarDetailRepo extends JpaRepository<Vehicle, String> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Vehicle SET frontImg=?1 , sideImg=?2 , backImg=?3 , interiorImg=?4 WHERE regNo=?5")
    void updateCarFilePaths(String frontImgPath, String sideImgPath, String backImgPath, String interiorImgPath, String id);
}
