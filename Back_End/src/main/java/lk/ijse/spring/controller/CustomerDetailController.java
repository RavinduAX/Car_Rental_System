package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerDetailService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerDetailController {
    @Autowired
    CustomerDetailService service;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        service.addCustomer(dto);
        return new ResponseUtil("200", dto.toString()+" Added", null);
    }

    @PutMapping(path = "/up/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("nicImg")MultipartFile nicImg, @RequestPart("licenceImg")MultipartFile licenceImg, @PathVariable String id) {
        try{
            String projectPath = String.valueOf(new File("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages"));
            File uploadsDir = new File(projectPath + "/customers");
            uploadsDir.mkdir();

            nicImg.transferTo(new File(uploadsDir.getAbsolutePath() + "//" + nicImg.getOriginalFilename()));
            licenceImg.transferTo(new File(uploadsDir.getAbsolutePath()+"//"+licenceImg.getOriginalFilename()));

            String nicImgPath = projectPath + "//customers//"+ nicImg.getOriginalFilename();
            String licenceImgPath = projectPath + "//customers//"+ licenceImg.getOriginalFilename();

            service.uploadCustomerImages(nicImgPath, licenceImgPath, id);

            return new ResponseUtil("200", "Uploaded", null);

        }catch (Exception e){
            e.printStackTrace();
            return new ResponseUtil("500", "Error", null);
        }
    }


}
