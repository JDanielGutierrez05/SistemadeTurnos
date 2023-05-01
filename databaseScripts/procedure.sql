CREATE or replace function CreateDuties(in fechaInicial DATE, in fechaFinal DATE, in idServicio integer)
  returns table (id INTEGER, nombre VARCHAR, aforo INT) as $$
DECLARE
	serviceinfo RECORD;
	horasdisponibles int;
BEGIN 
	SELECT *
	FROM public.servicios s
	where s.id_servicio = idServicio into serviceinfo;
	RAISE NOTICE 'info servicio(%)', serviceinfo;
	horasdisponibles :=  date_part('hour', serviceinfo.hora_cierre::time - serviceinfo.hora_apertura::time);
	RAISE NOTICE 'horasdisponibles(%)', horasdisponibles;
END;
$$
language plpgsql;
