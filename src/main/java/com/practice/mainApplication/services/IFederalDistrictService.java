package com.practice.mainApplication.services;

import com.practice.mainApplication.models.*;

import java.io.FileReader;
import java.util.List;

public interface IFederalDistrictService {
    public List<FederalDistrict> getAll();
    public FederalDistrict createFederalDistrict(FederalDistrict federalDistrict);
    public FederalDistrict getFederalDistrictById(long id) throws Exception;
    public FederalDistrict updateFederalDistrict(long id, FederalDistrict federalDistrict) throws Exception;
    public void deleteFederalDistrict(long id) throws Exception;
}
