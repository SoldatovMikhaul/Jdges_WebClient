package com.practice.mainApplication.services;

import com.practice.mainApplication.models.TitleFIDE;

import java.util.List;

public interface ITitleFIDEService {
    public List<TitleFIDE> getAll();
    public TitleFIDE createTitleFIDE(TitleFIDE titleFIDE);
    public TitleFIDE getTitleFIDEById(long id) throws Exception;
    public TitleFIDE updateTitleFIDE(long id,TitleFIDE titleFIDE) throws Exception;
    public void deleteTitleFIDE(long id) throws Exception;
}
