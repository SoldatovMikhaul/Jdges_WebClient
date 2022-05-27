package com.practice.mainApplication.services;

import com.practice.mainApplication.models.CategoryFIDE;

import java.util.List;

public interface ICategoryFIDEService {
    public List<CategoryFIDE> getAll();
    public CategoryFIDE createCategoryFIDE(CategoryFIDE categoryFIDE);
    public CategoryFIDE getCategoryFIDEById(long id) throws Exception;
    public CategoryFIDE updateCategoryFIDE(long id, CategoryFIDE categoryFIDE) throws Exception;
    public void deleteCategoryFIDE(long id) throws Exception;
}
