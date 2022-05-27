package com.practice.mainApplication.services;

import com.practice.mainApplication.models.Judge;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.practice.mainApplication.repository.JudgeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JudgeService implements IJudgeService{

    @Autowired
    private final JudgeRepository judgeRepository;

    /*public JudgeService(JudgeRepository judgeRepository) {
        super();
        this.judgeRepository = judgeRepository;
    }*/

    @Override
    public List<Judge> getAll() {
        return judgeRepository.findAll();
    }
    @Override
    public Judge createJudge(Judge judge) {
        return judgeRepository.save(judge);
    }

    @Override
    public Judge getJudgeById(long id) throws Exception {
        Optional<Judge> result = judgeRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public Judge getJudgeBySurname(String name) throws Exception {
        List<Judge> result = judgeRepository.findAll().stream().filter(judge -> judge.getFullName().contains(name)).collect(Collectors.toList());
        if(!result.isEmpty()) {
            System.out.println("Result is not null: " + result.size());
            return result.get(0);
        }else {
            System.out.println("Result size: " + result.size());
            throw new Exception();
        }
    }

    @Override
    public Judge updateJudge(long id, Judge postRequest) throws Exception {
        Judge judge = judgeRepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, judge);


        return judgeRepository.saveAndFlush(judge);
    }

    @Override
    public void deleteJudge(long id) throws Exception {
        Judge judge = judgeRepository.findById(id)
                .orElseThrow(() -> new Exception());

        judgeRepository.delete(judge);
    }


}
