package alanmiste.backend;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api/users")
public class UserController {

    @GetMapping("login")
    String login() {
        return getUsername();
    }

    @GetMapping("me")
    String getUsername() {
        return ((User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal())
                .getUsername();
    }

    @GetMapping("logout")
    void logout(HttpSession session) {
        session.invalidate();
    }
}
