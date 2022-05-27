package com.practice.mainApplication.services;

import com.practice.mainApplication.models.Judge;

import java.util.List;

public interface IJudgeService {
    public List<Judge> getAll();
    public Judge createJudge(Judge judge);
    public Judge getJudgeById(long id) throws Exception;
    public Judge getJudgeBySurname(String name) throws Exception;
    public Judge updateJudge(long id, Judge judge) throws Exception;
    public void deleteJudge(long id) throws Exception;

}
