package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarFleetDTO;
import lk.ijse.spring.service.CarFleetService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@RestController
@RequestMapping("/fleet")
@CrossOrigin
public class CarFleetController {

    @Autowired
    CarFleetService service;

    @PostMapping
    public ResponseUtil saveCar(@RequestBody CarFleetDTO dto){
        service.addfCar(dto);
        return new ResponseUtil("200", dto.toString()+" Added", null);
    }

    @PutMapping(path = "/up/{names}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseUtil uploadThumbImg(@RequestPart("thumbnail") MultipartFile thumbnail, @PathVariable String names) {
        try{
            String projectPath = String.valueOf(new File("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages"));
            File uploadsDir = new File(projectPath + "/Thumbnails");
            uploadsDir.mkdir();

            thumbnail.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + thumbnail.getOriginalFilename()));

            String thumbImgPath = projectPath + "//Thumbnails//"+ thumbnail.getOriginalFilename();

            service.uploadThumbImg(thumbImgPath, names);

            return new ResponseUtil("200", "Uploaded", null);

        }catch (Exception e){
            e.printStackTrace();
            return new ResponseUtil("500", "Error", null);
        }
    }

    @GetMapping
    public ResponseUtil getAllfCars(){
        ArrayList<CarFleetDTO> all = service.getAllfCar();
        return new ResponseUtil("200", "Success", all);
    }

}
