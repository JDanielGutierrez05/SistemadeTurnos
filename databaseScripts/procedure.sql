CREATE or replace function CreateDuties(in fechaInicial DATE, in fechaFinal DATE, in idServicio integer)
  returns table (id INTEGER, nombre VARCHAR, aforo INT)
  as $$
BEGIN 
	RETURN QUERY SELECT id_comercio, nom_comercio, aforo_maximo FROM public.comercios;
END;$$
language plpgsql;
