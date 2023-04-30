CREATE TABLE comercios(
    id_comercio INTEGER PRIMARY KEY,
    nom_comercio VARCHAR(100) NOT NULL,
    aforo_maximo INT NOT NULL)

CREATE TABLE servicios(
    id_servicio INTEGER PRIMARY KEY,
    id_comercio INTEGER,
    nom_servicio VARCHAR(100) NOT NULL,
    hora_apertura timestamp,
    hora_cierre timestamp,
    duracion INT NOT NULL,
    CONSTRAINT fk_comercios
      FOREIGN KEY(id_comercio)
	  REFERENCES comercios(id_comercio))

CREATE TABLE turnos(
     id_turno INTEGER PRIMARY KEY,
     id_servicio INTEGER,
     fecha_turno timestamp,
     hora_inicio timestamp,
     hora_fin timestamp,
     estado boolean,
    CONSTRAINT fk_servicios
      FOREIGN KEY(id_servicio)
	  REFERENCES servicios(id_servicio))

