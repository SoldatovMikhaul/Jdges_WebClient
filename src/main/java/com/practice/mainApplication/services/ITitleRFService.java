package com.practice.mainApplication.services;

import com.practice.mainApplication.models.TitleRF;

import java.util.List;

public interface ITitleRFService {
    public List<TitleRF> getAll();
    public TitleRF createTitleRF(TitleRF titleRF);
    public TitleRF getTitleRFById(long id) throws Exception;
    public TitleRF updateTitleRF(long id,TitleRF titleRF) throws Exception;
    public void deleteTitleRF(long id) throws Exception;
}
