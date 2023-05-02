CREATE OR REPLACE FUNCTION CreateDuties(IN fechaInicial VARCHAR, IN fechaFinal VARCHAR, IN idServicio integer)
  RETURNS TABLE (id_turno INT, id_servicio INT, fecha_turno TEXT, hora_inicio TIME, hora_final TIME, estado BOOL) as $$
DECLARE
	serviceinfo RECORD;
	horasdisponibles int;
	numeroturnos int;
	counter int;
BEGIN 
	SELECT *
	FROM public.servicios s
	WHERE s.id_servicio = idServicio INTO serviceinfo;
	horasdisponibles :=  date_part('hour', serviceinfo.hora_cierre::time - serviceinfo.hora_apertura::time);
	numeroturnos := horasdisponibles / serviceinfo.duracion;
	counter := 0;

	WHILE counter <= numeroturnos LOOP
		INSERT INTO public.turnos (id_servicio, fecha_turno, hora_inicio, hora_fin, estado)
		VALUES (serviceinfo.id_servicio, to_date(fechaInicial, 'YYYY-MM-DD'), serviceinfo.hora_apertura + (make_interval(hours => serviceinfo.duracion) * counter), serviceinfo.hora_apertura + (make_interval(hours => serviceinfo.duracion) * counter) + make_interval(hours => serviceinfo.duracion), true);
		counter := counter::int + 1;
		numeroturnos := numeroturnos::int - 1;
	END LOOP;
	
	RETURN QUERY 
		SELECT t."id_turno", t."id_servicio", to_char(t.fecha_turno, 'DD-MM-YYYY'), t."hora_inicio", t."hora_fin", t."estado" 
		FROM public.turnos t
		where t."id_servicio" = idServicio and t."fecha_turno" between to_date(fechaInicial, 'YYYY-MM-DD') and to_date(fechaFinal, 'YYYY-MM-DD');
END;
$$
language plpgsql;