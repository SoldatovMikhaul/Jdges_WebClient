package com.practice.mainApplication.services;


import com.practice.mainApplication.models.RegionRF;

import java.util.List;

public interface IRegionRFService {
    public List<RegionRF> getAll();
    public RegionRF createRegionRF(RegionRF regionRF);
    public RegionRF getRegionRFById(long id) throws Exception;
    public RegionRF updateRegionRF(long id,RegionRF regionRF) throws Exception;
    public void deleteRegionRF(long id) throws Exception;
}
