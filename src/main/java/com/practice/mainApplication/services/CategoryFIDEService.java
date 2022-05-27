package com.practice.mainApplication.services;

import com.practice.mainApplication.models.CategoryFIDE;
import com.practice.mainApplication.repository.CategoryFIDERepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryFIDEService implements ICategoryFIDEService  {
    @Autowired
    private final CategoryFIDERepository categoryFIDERepository;


    @Override
    public List<CategoryFIDE> getAll() {
        return categoryFIDERepository.findAll();
    }

    @Override
    public CategoryFIDE createCategoryFIDE(CategoryFIDE categoryFIDE) {
        return categoryFIDERepository.save(categoryFIDE);
    }

    @Override
    public CategoryFIDE getCategoryFIDEById(long id) throws Exception {
        Optional<CategoryFIDE> result = categoryFIDERepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        }else {
            throw new Exception();
        }
    }

    @Override
    public CategoryFIDE updateCategoryFIDE(long id, CategoryFIDE postRequest) throws Exception {
        CategoryFIDE categoryFIDE = categoryFIDERepository.findById(id)
                .orElseThrow(() -> new Exception());
        BeanUtils.copyProperties(postRequest, categoryFIDE);


        return categoryFIDERepository.saveAndFlush(categoryFIDE);
    }

    @Override
    public void deleteCategoryFIDE(long id) throws Exception {
        CategoryFIDE categoryFIDE= categoryFIDERepository.findById(id)
                .orElseThrow(() -> new Exception());
        categoryFIDERepository.delete(categoryFIDE);
    }
}
