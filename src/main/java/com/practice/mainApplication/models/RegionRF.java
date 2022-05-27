package com.practice.mainApplication.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegionRF {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private int regionCode;
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @OneToMany(fetch =  FetchType.EAGER, mappedBy = "regionRF", cascade = { CascadeType.PERSIST, CascadeType.REMOVE }
            ,orphanRemoval=true)
    private List<Judge> judges;
}
