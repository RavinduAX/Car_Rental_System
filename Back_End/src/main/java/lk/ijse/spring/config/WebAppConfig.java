package lk.ijse.spring.config;

import lk.ijse.spring.advise.AppWideExceptionHandler;
import lk.ijse.spring.controller.DriverDetailController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackageClasses = {DriverDetailController.class, AppWideExceptionHandler.class})
public class WebAppConfig {
}
