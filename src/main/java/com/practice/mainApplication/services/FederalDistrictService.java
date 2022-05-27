package com.practice.mainApplication.services;

import com.practice.mainApplication.models.FederalDistrict;
import com.practice.mainApplication.repository.FederalDistrictRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FederalDistrictService implements IFederalDistrictService{

    @Autowired
    private final FederalDistrictRepository federalDistrictRepository;


    @Override
    public List<FederalDistrict> getAll() {
        return federalDistrictRepository.findAll();
    }

    @Override
    public FederalDistrict createFederalDistrict(FederalDistrict federalDistrict) {
        return federalDistrictRepository.save(federalDistrict);
    }

    @Override
    public FederalDistrict getFederalDistrictById(long id) throws Exception {
        Optional<FederalDistrict> result = federalDistrictRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public FederalDistrict updateFederalDistrict(long id, FederalDistrict postRequest) throws Exception {
        FederalDistrict federalDistrict = federalDistrictRepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, federalDistrict);


        return federalDistrictRepository.saveAndFlush(federalDistrict);
    }

    @Override
    public void deleteFederalDistrict(long id) throws Exception {
        FederalDistrict federalDistrict= federalDistrictRepository.findById(id)
                .orElseThrow(() -> new Exception());
        federalDistrictRepository.delete(federalDistrict);
    }

}
