@echo off
where python >nul 2>nul
if errorlevel 1 (
  echo Python not found. You can also open index.html directly.
  pause
  exit /b 1
)
start http://127.0.0.1:8000
python -m http.server 8000
