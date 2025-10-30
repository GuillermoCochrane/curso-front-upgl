@echo off
rem Script para listar primero carpetas y luego archivos en contenido.txt
set OUTPUT=contenido_completo.txt

(
    echo ===== CARPETAS en %cd% =====
    dir /b /ad
    echo.
    echo ===== ARCHIVOS en %cd% =====
    dir /b /a-d
) > %OUTPUT%

rem Recorrer cada subcarpeta de un nivel
for /d %%D in (*) do (
    echo. >> %OUTPUT%
    echo ----- Contenido de %%D ----- >> %OUTPUT%
    echo CARPETAS: >> %OUTPUT%
    dir "%%D" /b /ad >> %OUTPUT%
    echo. >> %OUTPUT%
    echo ARCHIVOS: >> %OUTPUT%
    dir "%%D" /b /a-d >> %OUTPUT%
)

echo Listado completo guardado en %OUTPUT%
pause