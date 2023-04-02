package edu.comillas.icai.gitt.pat.spring.mvc.ssr;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ModeloFormularioContacto(
        @NotBlank(message = "El nombre es obligatorio")
        String nombre,
        @NotBlank(message = "El número de teléfono es obligatorio")
        @Pattern(regexp = "^[0-9]{10}$", message = "El número de teléfono debe tener 10 dígitos")
        Integer tlfn,
        @Email(message = "El formato del email es incorrecto")
        @NotBlank(message = "El email es obligatorio")
        String email,
        @NotBlank(message = "El mensaje no puede estar vacío")
        @Size(max = 20)
        String mensaje

) {}
