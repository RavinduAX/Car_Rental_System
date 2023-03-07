package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverDetailService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverDetailController {
    @Autowired
    DriverDetailService service;

    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO dto){
        service.addDriver(dto);
        return new ResponseUtil("200", dto.toString()+" Added", null);
    }

    @GetMapping
    public ResponseUtil getAllDrier(){
        ArrayList<DriverDTO> all = service.getAllDrivers();
        return new ResponseUtil("200", "Success", all);
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto){
        service.updateDriver(dto);
        return new ResponseUtil("200", dto.toString()+" Updated", null);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteDriver(String id){
        service.deleteDriver(id);
        return new ResponseUtil("200", id+" Deleted", null);
    }

    @GetMapping(path = "/getd")
    public ResponseUtil getADriver(){
        DriverDTO dto = service.getADriver();
        return new ResponseUtil("200","Success", dto);
    }


}
