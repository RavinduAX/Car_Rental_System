package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.CarDetailService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarDetailController {

    @Autowired
    CarDetailService service;

    @PostMapping
    public ResponseUtil saveCar(@RequestBody VehicleDTO dto){
        service.addCar(dto);
        return new ResponseUtil("200", dto.getRegNo()+" Added", null);
    }

    @PutMapping(path = "/up/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("frontImg") MultipartFile frontImg, @RequestPart("sideImg")MultipartFile sideImg, @RequestPart("backImg")MultipartFile backImg, @RequestPart("interiorImg")MultipartFile interiorImg, @PathVariable String id) {
        try{
            String projectPath = String.valueOf(new File("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages"));
            File uploadsDir = new File(projectPath + "/cars");
            uploadsDir.mkdir();

            frontImg.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + frontImg.getOriginalFilename()));
            sideImg.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + sideImg.getOriginalFilename()));
            backImg.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + backImg.getOriginalFilename()));
            interiorImg.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + interiorImg.getOriginalFilename()));

            String frontImgPath = projectPath + "//cars//"+ frontImg.getOriginalFilename();
            String sideImgPath = projectPath + "//cars//"+ sideImg.getOriginalFilename();
            String backImgPath = projectPath + "//cars//"+ backImg.getOriginalFilename();
            String interiorImgPath = projectPath + "//cars//"+ interiorImg.getOriginalFilename();

            service.uploadCarImages(frontImgPath, sideImgPath, backImgPath, interiorImgPath, id);

            return new ResponseUtil("200", "Uploaded", null);

        }catch (Exception e){
            e.printStackTrace();
            return new ResponseUtil("500", "Error", null);
        }
    }

    @GetMapping
    public ResponseUtil getAllCars(){
        ArrayList<VehicleDTO> all = service.getAllCars();
        return new ResponseUtil("200", "Success", all);
    }

    @PutMapping
    public ResponseUtil updateCar(@RequestBody VehicleDTO dto){
        service.updateCar(dto);
        return new ResponseUtil("200", dto.getRegNo()+" Updated", null);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteCar(String id){
        service.deleteCar(id);
        return new ResponseUtil("200", id+" Deleted", null);
    }

    @GetMapping(params = "brand")
    public ResponseUtil getCarInfo(String brand){
        VehicleDTO dto = service.getVehicleInfo(brand);
        return new ResponseUtil("200", "Success", dto);
    }



}
