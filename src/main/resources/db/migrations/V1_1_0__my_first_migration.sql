CREATE TABLE categoryfide (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  short_name VARCHAR(255),
  CONSTRAINT pk_categoryfide PRIMARY KEY (id)
);

CREATE TABLE categoryrf (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  short_name VARCHAR(255),
  CONSTRAINT pk_categoryrf PRIMARY KEY (id)
);

CREATE TABLE federal_district (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  short_name VARCHAR(255),
  CONSTRAINT pk_federaldistrict PRIMARY KEY (id)
);

CREATE TABLE judges (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  date_of_birth TIMESTAMP WITHOUT TIME ZONE,
  date_of_death TIMESTAMP WITHOUT TIME ZONE,
  age INTEGER,
  path VARCHAR(255),
  federal_district_id BIGINT NOT NULL,
  regionrf_id BIGINT NOT NULL,
  address VARCHAR(255),
  codefide BIGINT,
  categoryrf_id BIGINT NOT NULL,
  categoryrfassignment_date TIMESTAMP WITHOUT TIME ZONE,
  categoryrfassigned_by VARCHAR(255),
  categoryrfconfirmation_date TIMESTAMP WITHOUT TIME ZONE,
  categoryrfconfirmed_by VARCHAR(255),
  categoryrfvalid_until TIMESTAMP WITHOUT TIME ZONE,
  categoryfide_id BIGINT NOT NULL,
  categoryfideassignment_date TIMESTAMP WITHOUT TIME ZONE,
  categoryfideassigned_by VARCHAR(255),
  titlerf_id BIGINT NOT NULL,
  honoraryrftitle VARCHAR(255),
  titlefide_id BIGINT NOT NULL,
  phone_number1 VARCHAR(255),
  phone_number2 VARCHAR(255),
  email1 VARCHAR(255),
  email2 VARCHAR(255),
  notes VARCHAR(255),
  CONSTRAINT pk_judges PRIMARY KEY (id)
);

CREATE TABLE regionrf (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  region_code INTEGER,
  CONSTRAINT pk_regionrf PRIMARY KEY (id)
);

CREATE TABLE titlefide (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  short_name VARCHAR(255),
  CONSTRAINT pk_titlefide PRIMARY KEY (id)
);

CREATE TABLE titlerf (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  full_name VARCHAR(255),
  short_name VARCHAR(255),
  CONSTRAINT pk_titlerf PRIMARY KEY (id)
);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_CATEGORYFIDE FOREIGN KEY (categoryfide_id) REFERENCES categoryfide (id);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_CATEGORYRF FOREIGN KEY (categoryrf_id) REFERENCES categoryrf (id);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_FEDERALDISTRICT FOREIGN KEY (federal_district_id) REFERENCES federal_district (id);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_REGIONRF FOREIGN KEY (regionrf_id) REFERENCES regionrf (id);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_TITLEFIDE FOREIGN KEY (titlefide_id) REFERENCES titlefide (id);

ALTER TABLE judges ADD CONSTRAINT FK_JUDGES_ON_TITLERF FOREIGN KEY (titlerf_id) REFERENCES titlerf (id);