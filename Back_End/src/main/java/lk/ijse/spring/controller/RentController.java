package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("/rent")
@CrossOrigin
public class RentController {
    @Autowired
    RentService service;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody RentalDTO dto){
        service.saveRent(dto);
        return new ResponseUtil("200", dto.toString()+" Added", null);
    }

    @PutMapping(path = "/up/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseUtil uploadSlip(@RequestPart("bankSlip") MultipartFile bankSlip, @PathVariable String id) {
        try{
            String projectPath = String.valueOf(new File("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages"));
            File uploadsDir = new File(projectPath + "/bankSlips");
            uploadsDir.mkdir();

            bankSlip.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + bankSlip.getOriginalFilename()));

            String bankSlipPath = projectPath + "//bankSlips//"+ bankSlip.getOriginalFilename();

            service.uploadBankSlip(bankSlipPath, id);

            return new ResponseUtil("200", "Uploaded", null);

        }catch (Exception e){
            e.printStackTrace();
            return new ResponseUtil("500", "Error", null);
        }
    }

}
