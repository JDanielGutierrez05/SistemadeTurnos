CREATE TABLE comercios(
    id_comercio INTEGER PRIMARY KEY,
    nom_comercio VARCHAR(100) NOT NULL,
    aforo_maximo INT NOT NULL);

CREATE TABLE servicios(
    id_servicio SERIAL PRIMARY KEY,
    id_comercio INTEGER,
    nom_servicio VARCHAR(100) NOT NULL,
    hora_apertura TIME NOT NULL,
    hora_cierre TIME NOT NULL,
    duracion INT NOT NULL,
    CONSTRAINT fk_comercios
      FOREIGN KEY(id_comercio)
	  REFERENCES comercios(id_comercio));

CREATE TABLE turnos(
     id_turno SERIAL PRIMARY KEY,
     id_servicio INTEGER,
     fecha_turno DATE NOT NULL,
     hora_inicio TIME NOT NULL,
     hora_fin TIME NOT NULL,
     estado BOOLEAN NOT NULL,
    CONSTRAINT fk_servicios
      FOREIGN KEY(id_servicio)
	  REFERENCES servicios(id_servicio))

