package edu.comillas.icai.gitt.pat.spring.mvc.error;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

@ControllerAdvice
public class ManejadorErroresGlobales {

    @ResponseBody
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity errorProgramado(ResponseStatusException ex) {
        return new ResponseEntity<>(ex.getStatusCode());
    }

}
