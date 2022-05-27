package com.practice.mainApplication.services;

import com.practice.mainApplication.models.CategoryRF;

import java.util.List;

public interface ICategoryRFService {
    public List<CategoryRF> getAll();
    public CategoryRF createCategoryRF(CategoryRF categoryRF);
    public CategoryRF getCategoryRFById(long id) throws Exception;
    public CategoryRF updateCategoryRF(long id, CategoryRF categoryRF) throws Exception;
    public void deleteCategoryRF(long id) throws Exception;
}
