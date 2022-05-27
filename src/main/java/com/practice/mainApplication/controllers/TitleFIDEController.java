package com.practice.mainApplication.controllers;

import com.practice.mainApplication.DTOModels.TitleFIDEDTO;
import com.practice.mainApplication.models.TitleFIDE;
import com.practice.mainApplication.services.TitleFIDEService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/titleFIDE")
@CrossOrigin(origins = "http://localhost:3000")
public class TitleFIDEController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private TitleFIDEService titleFIDEService;

    public TitleFIDEController (TitleFIDEService titleFIDEService ) {
        super();
        this.titleFIDEService = titleFIDEService;
    }

    @GetMapping
    public List<TitleFIDEDTO> getAllTitleFIDEs() {

        return titleFIDEService.getAll().stream().map(titleFIDE -> modelMapper.map(titleFIDE, TitleFIDEDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<TitleFIDEDTO> getTitleFIDEById(@RequestParam(value="id") Long id) throws Exception {
        TitleFIDE titleFIDE = titleFIDEService.getTitleFIDEById(id);

        TitleFIDEDTO postResponse = modelMapper.map(titleFIDE, TitleFIDEDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<TitleFIDEDTO> createTitleRF(@RequestBody TitleFIDEDTO titleRFDTO) {

        // convert DTO to entity
        TitleFIDE postRequest = modelMapper.map(titleRFDTO,TitleFIDE.class);

        TitleFIDE titleRF = titleFIDEService.createTitleFIDE(postRequest);

        // convert entity to DTO
        TitleFIDEDTO postResponse = modelMapper.map(titleRF, TitleFIDEDTO.class);

        return new ResponseEntity<TitleFIDEDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<TitleFIDEDTO> updateTitleRF(@PathVariable long id, @RequestBody TitleFIDEDTO titleFIDEDTO) throws Exception {

        // convert DTO to Entity
        TitleFIDE postRequest = modelMapper.map(titleFIDEDTO, TitleFIDE.class);

        TitleFIDE titleRF =titleFIDEService.updateTitleFIDE(id, postRequest);

        // entity to DTO
        TitleFIDEDTO postResponse = modelMapper.map(titleRF, TitleFIDEDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFTitleRF(@PathVariable(name = "id") Long id) throws Exception {
        titleFIDEService.deleteTitleFIDE(id);
    }
}
