package com.practice.mainApplication.controllers;

import com.practice.mainApplication.DTOModels.FederalDistrictDTO;
import com.practice.mainApplication.DTOModels.JudgeDTO;
import com.practice.mainApplication.models.FederalDistrict;
import com.practice.mainApplication.models.Judge;
import com.practice.mainApplication.services.FederalDistrictService;
import com.practice.mainApplication.services.JudgeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/judges")
public class JudgeController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JudgeService judgeService;
    @Autowired
    private FederalDistrictService federalDistrictService;

    public JudgeController(JudgeService judgeService) {
        super();
        this.judgeService = judgeService;
    }

    @Transactional
    @GetMapping
    public List<JudgeDTO> getAllJudges() {

        return judgeService.getAll().stream().map(judge -> modelMapper.map(judge, JudgeDTO.class))
                .collect(Collectors.toList());
    }
    @Transactional
    @GetMapping("{id}")
    public ResponseEntity<JudgeDTO> getJudgeById(@RequestParam(value="id") Long id) throws Exception {
        Judge judge = judgeService.getJudgeById(id);

        JudgeDTO postResponse = modelMapper.map(judge, JudgeDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }
    @Transactional
    @GetMapping("/{fullName}")
    public ResponseEntity<JudgeDTO> getJudgeBySurname(@RequestParam(value="surname") String surname) throws Exception {
        Judge judge = judgeService.getJudgeBySurname(surname);

        // convert entity to DTO
        JudgeDTO postResponse = modelMapper.map(judge, JudgeDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }
    @Transactional
    @PostMapping("/new")
    public ResponseEntity<JudgeDTO> createJudge(@RequestBody JudgeDTO judgeDTO) throws Exception {

        // convert DTO to entity
        Judge postRequest = modelMapper.map(judgeDTO, Judge.class);

        /////if( federalDistrictService.getAll().contains(postRequest.getFederalDistrict())) {
            Judge judge = judgeService.createJudge(postRequest);

            // convert entity to DTO
            JudgeDTO postResponse = modelMapper.map(judge, JudgeDTO.class);

            if(postResponse.getFederalDistrict().getId() == 0) {throw new  Exception("bad federal district");}

            return new ResponseEntity<JudgeDTO>(postResponse, HttpStatus.CREATED);
        /*}
        else
        {
            throw new  Exception("No such federal district");
        }*/
    }
    @Transactional
    @PutMapping("/edit/{id}")
    public ResponseEntity<JudgeDTO> updateJudge(@PathVariable long id, @RequestBody JudgeDTO judgeDTO) throws Exception {

        // convert DTO to Entity
        Judge postRequest = modelMapper.map(judgeDTO, Judge.class);

        Judge judge = judgeService.updateJudge(id, postRequest);

        // entity to DTO
        JudgeDTO postResponse = modelMapper.map(judge, JudgeDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }
    @Transactional
    @DeleteMapping("/{id}")
    public void deleteJudge(@PathVariable(name = "id") Long id) throws Exception {
        judgeService.deleteJudge(id);
    }
}
