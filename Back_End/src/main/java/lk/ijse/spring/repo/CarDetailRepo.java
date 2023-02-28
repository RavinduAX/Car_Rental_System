package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarDetailRepo extends JpaRepository<Vehicle, String> {
}
