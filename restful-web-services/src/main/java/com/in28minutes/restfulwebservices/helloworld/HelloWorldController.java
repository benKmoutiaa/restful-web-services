package com.in28minutes.restfulwebservices.helloworld;


import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/hello-world")
@CrossOrigin("http://localhost:3000")
public class HelloWorldController {
    @GetMapping(path = "")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    ///hello-world/path-variable/in28minutes
    @GetMapping(path = "/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        //throw new RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
