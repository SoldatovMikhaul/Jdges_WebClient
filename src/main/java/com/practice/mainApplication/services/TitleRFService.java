package com.practice.mainApplication.services;

import com.practice.mainApplication.models.TitleRF;
import com.practice.mainApplication.repository.TitleRFRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TitleRFService implements ITitleRFService{
    @Autowired
    private final TitleRFRepository titleRFRepository;


    @Override
    public List<TitleRF> getAll() {
        return titleRFRepository.findAll();
    }

    @Override
    public TitleRF createTitleRF(TitleRF titleRF) {
        return titleRFRepository.save(titleRF);
    }

    @Override
    public TitleRF getTitleRFById(long id) throws Exception {
        Optional<TitleRF> result = titleRFRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public TitleRF updateTitleRF(long id, TitleRF postRequest) throws Exception {
        TitleRF titleRF = titleRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, titleRF);


        return titleRFRepository.saveAndFlush(titleRF);
    }

    @Override
    public void deleteTitleRF(long id) throws Exception {
        TitleRF titleRF= titleRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        titleRFRepository.delete(titleRF);
    }
}
