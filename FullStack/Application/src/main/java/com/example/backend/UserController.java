package com.example.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/dashboard")
    String result()
    {
        return "Welcome to Dashboard";
    }
}
