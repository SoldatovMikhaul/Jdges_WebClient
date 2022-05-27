package com.practice.mainApplication.models;

import lombok.*;


import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FederalDistrict {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;

    public String getShortName() {
        return shortName;
    }
    private String shortName;
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @OneToMany(fetch =  FetchType.EAGER, mappedBy = "federalDistrict", cascade = { CascadeType.PERSIST, CascadeType.REMOVE }
            ,orphanRemoval=true)
    //private Set<Judge> judges = new HashSet<Judge>();
    private List<Judge> judges;

}
