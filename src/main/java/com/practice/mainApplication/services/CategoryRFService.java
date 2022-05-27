package com.practice.mainApplication.services;

import com.practice.mainApplication.models.CategoryRF;
import com.practice.mainApplication.repository.CategoryRFRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryRFService implements  ICategoryRFService{
    @Autowired
    private final CategoryRFRepository categoryRFRepository;


    @Override
    public List<CategoryRF> getAll() {
        return categoryRFRepository.findAll();
    }

    @Override
    public CategoryRF createCategoryRF(CategoryRF categoryRF) {
        return categoryRFRepository.save(categoryRF);
    }

    @Override
    public CategoryRF getCategoryRFById(long id) throws Exception {
        Optional<CategoryRF> result = categoryRFRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public CategoryRF updateCategoryRF(long id, CategoryRF postRequest) throws Exception {
        CategoryRF federalDistrict = categoryRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, federalDistrict);


        return categoryRFRepository.saveAndFlush(federalDistrict);
    }

    @Override
    public void deleteCategoryRF(long id) throws Exception {
        CategoryRF federalDistrict= categoryRFRepository.findById(id)
                .orElseThrow(() -> new Exception());
        categoryRFRepository.delete(federalDistrict);
    }
}
