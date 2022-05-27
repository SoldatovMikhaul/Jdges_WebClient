package com.practice.mainApplication.services;

import com.practice.mainApplication.models.RegionRF;
import com.practice.mainApplication.repository.RegionRFRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegionRFService implements IRegionRFService {
    @Autowired
    private final RegionRFRepository regionRFRepository;


    @Override
    public List<RegionRF> getAll() {
        return regionRFRepository.findAll();
    }

    @Override
    public RegionRF createRegionRF(RegionRF regionRF) {
        return regionRFRepository.save(regionRF);
    }

    @Override
    public RegionRF getRegionRFById(long id) throws Exception {
        Optional<RegionRF> result = regionRFRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public RegionRF updateRegionRF(long id, RegionRF postRequest) throws Exception {
        RegionRF regionRF = regionRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, regionRF);


        return regionRFRepository.saveAndFlush(regionRF);
    }

    @Override
    public void deleteRegionRF(long id) throws Exception {
        RegionRF regionRF= regionRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        regionRFRepository.delete(regionRF);
    }
}
