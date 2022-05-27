package com.practice.mainApplication.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TitleRF {
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
    @OneToMany(fetch =  FetchType.EAGER, mappedBy = "titleRF", cascade = { CascadeType.PERSIST, CascadeType.REMOVE }
            ,orphanRemoval=true)
    //private Set<Judge> judges = new HashSet<Judge>();
    private List<Judge> judges;
}
