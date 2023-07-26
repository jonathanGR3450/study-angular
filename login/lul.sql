CREATE OR REPLACE PROCEDURE public.sp_plano_vehiculos_bolivar(fecha_plano date, correo text)
 LANGUAGE plpgsql
AS $procedure$
declare
    
begin 
	if fecha_plano is null or fecha_plano = (now()::date)
	then 
	fecha_plano=now()::date - interval '1 day';
	end if;

    create temp table tmp_cuerpo as (

    );

    EXECUTE 'COPY (select * from tmp_cuerpo) TO '''||nombre_archivo||''' CSV DELIMITER '';''';

    mensaje_ = '<html>
        <head> </head>
        <body>
        <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
            font-family: Avenir, Helvetica, sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100%;
            "
        >
            <tbody>
            <tr>
                <td
                style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    padding: 25px 0;
                    text-align: center;
                "
                >
                <a
                    href="https://www.realtechltda.com/"
                    style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    color: rgb(187, 191, 195);
                    font-size: 19px;
                    font-weight: bold;
                    text-decoration: none;
                    "
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=https://soporte.realtechltda.com/soporte&source=gmail&ust=1610829704249000&usg=AFQjCNG2KynypPQtiTHpK62SLanaUU4PIg"
                    >Realtech Ltda.
                </a>
                </td>
            </tr>
            <tr>
                <td
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(237, 239, 242);
                    border-top: 1px solid rgb(237, 239, 242);
                    margin: 0px;
                    padding: 0px;
                    width: 100%;
                    background-color: rgb(255, 255, 255);
                "
                >
                <table
                    align="center"
                    width="570"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    margin: 0px auto;
                    padding: 0px;
                    width: 570px;
                    background-color: rgb(255, 255, 255);
                    "
                >
                    <tbody>
                    <tr>
                        <td
                        style="
                            font-family: Avenir, Helvetica, sans-serif;
                            box-sizing: border-box;
                            padding: 35px;
                        "
                        >
                        <h1
                            style="
                            font-family: Avenir, Helvetica, sans-serif;
                            box-sizing: border-box;
                            color: rgb(47, 49, 51);
                            font-size: 19px;
                            font-weight: bold;
                            margin-top: 0px;
                            text-align: left;
                            "
                        >
                            Hola.
                        </h1>
                        <p
                            style="
                            font-family: Avenir, Helvetica, sans-serif;
                            box-sizing: border-box;
                            color: rgb(116, 120, 126);
                            font-size: 16px;
                            line-height: 1.5em;
                            margin-top: 0px;
                            text-align: justify;
                            "
                        !important >
                            Adjunto archivo plano de recaudos. <br/><br/>
                        </p>
                        <h1
                            style="
                            font-family: Avenir, Helvetica, sans-serif;
                            box-sizing: border-box;
                            color: rgb(47, 49, 51);
                            font-size: 19px;
                            font-weight: bold;
                            margin-top: 0px;
                            text-align: left;
                            "
                        >
                            Gracias.
                        </h1>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            </tbody>
        </table>
        <table
            align="center"
            width="570"
            cellpadding="0"
            cellspacing="0"
            style="
            font-family: Avenir, Helvetica, sans-serif;
            box-sizing: border-box;
            margin: 0px auto;
            padding: 0px;
            width: 570px;
            background-color: rgb(255, 255, 255);
            padding-top: 15px;
            "
        >
            <tr>
            <td>
                <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td
                    valign="top"
                    width="100"
                    style="padding: 0 8px 0 0; vertical-align: middle"
                    >
                    <img
                        alt="Realtech Ltda"
                        width="100"
                        height="80"
                        style="
                        moz-border-radius: 10%;
                        khtml-border-radius: 10%;
                        o-border-radius: 10%;
                        webkit-border-radius: 10%;
                        ms-border-radius: 10%;
                        border-radius: 10%;
                        "
                        src="https://soporte.realtechltda.com/assets/img/logo.png"
                    />
                    </td>
                    <td style="padding: 0; vertical-align: top" valign="top">
                    <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                        line-height: 1.4;
                        font-family: Verdana, Geneva, sans-serif;
                        font-size: 12;
                        color: #000001;
                        "
                    >
                        <tr>
                        <td>
                            <div
                            style="
                                font: 1.1em Verdana, Geneva, sans-serif;
                                color: #000001;
                                font-size: 13px;
                                font-weight: bold;
                            "
                            >
                            Mesa de servicio
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td style="padding: 4px 0">
                            <div
                            style="
                                color: #000001;
                                font-family: Verdana, Geneva, sans-serif;
                            "
                            >
                            Realtech Ltda
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <span
                            style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #68a4c4;
                            "
                            >Tel&eacute;fono:</span
                            >
                            <span
                            ><a
                                style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #000001;
                                "
                                href="tel:(1) 390 4070"
                                >(1) 390 4070 opci&oacute;n: 2</a
                            ></span
                            >
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <span
                            style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #68a4c4;
                            "
                            >Sitio:</span
                            >
                            <span style="font-family: Verdana, Geneva, sans-serif"
                            ><a
                                href="https://www.realtechltda.com/"
                                style="color: #000001"
                                target="_blank"
                                >www.realtechltda.com</a
                            ></span
                            >
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <span
                            style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #68a4c4;
                            "
                            >Correo:</span
                            >
                            <span
                            ><a
                                href="mailto:soporte@realtechltda.com"
                                target="_blank"
                                style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #000001;
                                "
                                >soporte@realtechltda.com</a
                            ></span
                            >
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <span
                            style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #68a4c4;
                            "
                            >Direcci&oacute;n:</span
                            >
                            <span
                            style="
                                font-family: Verdana, Geneva, sans-serif;
                                color: #000001;
                            "
                            >Calle 79 # 18 - 34 Of. 205</span
                            >
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </td>
            </tr>
            <tr>
            <td>
                <p
                style="
                    color: #6b6b6b;
                    font-family: Verdana, Geneva, sans-serif;
                    font-size: 10px;
                    padding-top: 15px;
                    text-align: justify;
                "
                >
                El contenido de este mensaje puede ser informaci&oacute;n
                privilegiada y confidencial de Realtech. Si usted no es el
                destinatario real del mismo, por favor informe de ello a quien lo
                env&iacute;a y destr&uacute;yalo en forma inmediata. Est&aacute;
                prohibida su retenci&oacute;n, grabaci&oacute;n, utilizaci&oacute;n
                o divulgaci&oacute;n con cualquier prop&oacute;sito. Este mensaje ha
                sido verificado con software antivirus; sin embargo, Realtech no se
                hace responsable por la presencia en el o en sus anexos de
                alg&uacute;n virus que pueda generar da&ntilde;os en los equipos o
                programas del destinatario
                </p>
            </td>
            </tr>
        </table>
        <table
            align="center"
            width="570"
            cellpadding="0"
            cellspacing="0"
            style="
            font-family: Avenir, Helvetica, sans-serif;
            box-sizing: border-box;
            margin: 0 auto;
            padding: 0;
            text-align: center;
            width: 570px;
            "
        >
            <tbody>
            <tr>
                <td
                align="center"
                style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    padding: 35px;
                "
                >
                <p
                    style="
                    font-family: Avenir, Helvetica, sans-serif;
                    box-sizing: border-box;
                    line-height: 1.5em;
                    margin-top: 0px;
                    color: rgb(174, 174, 174);
                    font-size: 12px;
                    text-align: center;
                    "
                >
                    &#169; 2021 Realtech Ltda. Todos los derechos reservados.
                </p>
                </td>
            </tr>
            </tbody>
        </table>
        </body>
    </html>
    ';    
    perform py_pgmail(array[correo], CONCAT('Archivo recaudos','-',fecha_plano), mensaje_, nombre_archivo,CONCAT(fecha_plano,'-', 'recaudos.csv'));
    
    drop table tmp_cuerpo;
end;$procedure$
;
