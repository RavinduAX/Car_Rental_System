package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverDetailService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/driverDetail")
@CrossOrigin
public class DriverDetailController {
    @Autowired
    DriverDetailService service;

    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO dto){
        service.addDriver(dto);
        return new ResponseUtil("200", dto.toString()+" Added", null);
    }
}
