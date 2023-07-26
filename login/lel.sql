CREATE OR REPLACE PROCEDURE public.sp_csv_bolivar(fecha_plano date)
 LANGUAGE plpgsql
AS $procedure$
DECLARE
	BEGIN
        if fecha_plano is null or fecha_plano = (now()::date)
        then
        fecha_plano=now()::date - interval '1 day';
        end if;
        EXECUTE 'COPY (
                        select trr.cod_municipio as cod_municipio,
                        case
                            when trr.fecha_pago is null then null
                            else TO_CHAR(trr.fecha_pago, ''YYYYMMDD'')
                        end as fecha_recaudo,
                        case
                            when trr.fecha_pago is null then null
                            else TO_CHAR(trr.fecha_registro, ''YYYYMMDD'')
                        end as fecha_recibid,
                        4545 as oficina,
                        trr.referencia as declaracion,
                        UPPER(rm.municipio) || ''/'' || UPPER(rm.departamento) as  municipio,
                        (trr.valor * 80) / 100 as valor_departamento,
                        0 as comision_departamento,
                        (trr.valor * 80) / 100 as valor_neto_departamento,
                        (trr.valor * 20) / 100 as valor_municipio,
                        0 as comision_municipio,
                        (trr.valor * 20) / 100 as valor_neto_municipio,
                        trr.valor as total,
                        0 as valor_sistematizacion,
                        0 as comision_sistematizacion,
                        0 as valor_neto_sistematizacion,
                        0 as valor_total_comisiones,
                        trr.valor as valor_neto_abonar,
                        trr.valor as valor_total_pago,
                        0 as tasa_comision,
                        ''PSE'' as forma_pago,
                        trr.placa as placa,
                        trr.nit as nit,
                        vpp.cus as cus,
                        0 as tipo_tarjeta
                        from tbl_recaudo_registro trr
                        inner join ref_municipios rm on rm.cod_municipio = trr.cod_municipio
                        inner join v_pagos_pse vpp on vpp.referencia = trr.referencia
                        where trr.fecha_registro = fecha_plano
                    )
                        TO ''/tmp/bolivar_'||TO_CHAR(NOW(), 'YYYYMMDDHH24MISS')||''' CSV';

	--perform py_pgmail((select correo from core_usuarios where id_usuario=_id_usuario));

	END;
	$procedure$
;