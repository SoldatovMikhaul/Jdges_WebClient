package com.practice.mainApplication.DTOModels;

import com.practice.mainApplication.models.CategoryFIDE;
import com.practice.mainApplication.models.FederalDistrict;
import com.practice.mainApplication.models.RegionRF;
import com.practice.mainApplication.models.TitleFIDE;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
public class JudgeDTO {
    private Long id;
    private String fullName; //Полное имя
    private Date dateOfBirth; //Дата роэжения
    private Date dateOfDeath; //Дата смерти
    private int age; //Возраст
    private String path; //путь до фотографии
    private FederalDistrictDTO federalDistrict; // Федеральный округ
    private RegionRFDTO regionRF; //Субъект РФ
    private String address; //Адрес
    private long codeFIDE; //Код ФИДЕ
    private CategoryRFDTO categoryRF; //Категория РФ
    private Date categoryRFAssignmentDate; //Дата присвоения категории РФ
    private String categoryRFAssignedBy; //Категория РФ присвоена кем
    private Date categoryRFConfirmationDate; //Дата подтверждения категори рф
    private String categoryRFConfirmedBy; // Кем подтверждена категория РФ
    private Date categoryRFValidUntil; //Категория РФ действует до
    private CategoryFIDEDTO categoryFIDE; //Категория ФИДЕ
    private Date categoryFIDEAssignmentDate; //Дата присвоения категории ФИДЕ
    private String categoryFIDEAssignedBy; //Категория ФИДЕ присвоена кем
    private TitleRFDTO titleRF; //Звание РФ
    private String honoraryRFTitle; //Почетно звание РФ
    private TitleFIDEDTO titleFIDE; // Звание ФИДЕ
    private String phoneNumber1; //Номер телефона 1
    private String phoneNumber2; //Номер телефона 2
    private String email1; //Е-mail 1
    private String email2; //E-mail 2
    private String notes; //примечания
}
