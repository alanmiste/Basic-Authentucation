package alanmiste.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/goodbye")
public class GoodbyeController {

    @GetMapping
    String sayGoodbye(){
        return "Good bye";
    }
}
