package alanmiste.backend;

import org.springframework.data.annotation.Id;

public record AppUser(
        @Id String username,
        String passwordHash
) {
}
