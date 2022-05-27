package com.practice.mainApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name ="judges")
public class Judge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName; //Полное имя
    private Date dateOfBirth; //Дата роэжения
    private Date dateOfDeath; //Дата смерти
    private int age; //Возраст
    private String path; //путь до фотографии
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "federalDistrict_id", nullable = false)
    private FederalDistrict federalDistrict; // Федеральный округ
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "regionRF_id", nullable = false)
    private RegionRF regionRF; //Субъект РФ
    private String address; //Адрес
    private long codeFIDE; //Код ФИДЕ
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "categoryRF_id", nullable = false)
    private CategoryRF categoryRF; //Категория РФ
    private Date categoryRFAssignmentDate; //Дата присвоения категории РФ
    private String categoryRFAssignedBy; //Категория РФ присвоена кем
    private Date categoryRFConfirmationDate; //Дата подтверждения категори рф
    private String categoryRFConfirmedBy; // Кем подтверждена категория РФ
    private Date categoryRFValidUntil; //Категория РФ действует до
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "categoryFIDE_id", nullable = false)
    private CategoryFIDE categoryFIDE; //Категория ФИДЕ
    private Date categoryFIDEAssignmentDate; //Дата присвоения категории ФИДЕ
    private String categoryFIDEAssignedBy; //Категория ФИДЕ присвоена кем
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "titleRF_id", nullable = false)
    private TitleRF titleRF; //Звание РФ
    private String honoraryRFTitle; //Почетно звание РФ
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name = "titleFIDE_id", nullable = false)
    private TitleFIDE titleFIDE; // Звание ФИДЕ
    private String phoneNumber1; //Номер телефона 1
    private String phoneNumber2; //Номер телефона 2
    private String email1; //Е-mail 1
    private String email2; //E-mail 2
    private String notes; //примечания

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
