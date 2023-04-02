package edu.comillas.icai.gitt.pat.spring.mvc.ssr;

import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ControladorSSR {

    @GetMapping("/ayuda.html")
    public String ayuda(Model model) {
        model.addAttribute("ayuda", new ModeloFormularioContacto("",+34,"",""));
        return "ayuda.html";
    }

    @PostMapping("/ayuda.html")
    public String ayuda(
            @Valid @ModelAttribute("ayuda")
                    ModeloFormularioContacto ayuda,
            BindingResult result, Model model) {
        if (!result.hasErrors()) {
            model.addAttribute("exito", "Gracias " + ayuda.nombre() + ", tu opinión ha sido recibida.");
        }
        return "ayuda.html";
    }
}
