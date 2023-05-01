CREATE or REPLACE function CreateDuties()
  returns table (id INTEGER, nombre VARCHAR, aforo INT)
  as $$
BEGIN 
	RETURN QUERY SELECT id_comercio, nom_comercio, aforo_maximo FROM public.comercios;
END;$$
language plpgsql;
