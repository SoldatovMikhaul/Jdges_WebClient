package com.practice.mainApplication.services;
import com.practice.mainApplication.models.TitleFIDE;
import com.practice.mainApplication.repository.TitleFIDERepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TitleFIDEService implements ITitleFIDEService{
    @Autowired
    private final TitleFIDERepository titleFIDERepository;


    @Override
    public List<TitleFIDE> getAll() {
        return titleFIDERepository.findAll();
    }

    @Override
    public TitleFIDE createTitleFIDE(TitleFIDE titleFIDE) {
        return titleFIDERepository.save(titleFIDE);
    }

    @Override
    public TitleFIDE getTitleFIDEById(long id) throws Exception {
        Optional<TitleFIDE> result = titleFIDERepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public TitleFIDE updateTitleFIDE(long id, TitleFIDE postRequest) throws Exception {
        TitleFIDE titleRF = titleFIDERepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, titleRF);


        return titleFIDERepository.saveAndFlush(titleRF);
    }

    @Override
    public void deleteTitleFIDE(long id) throws Exception {
        TitleFIDE titleRF= titleFIDERepository.findById(id)
                .orElseThrow(() -> new Exception());
        titleFIDERepository.delete(titleRF);
    }
}
