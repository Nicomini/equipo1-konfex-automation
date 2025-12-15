# Proyecto de Automatización QA – Konfex

Automatización de pruebas End-to-End para la plataforma **Konfex**, enfocada en validar flujos críticos del negocio desde el frontend hasta la integración con servicios.

---

## Objetivo del Proyecto
- Garantizar la calidad de los flujos principales
- Reducir regresiones en cada release
- Integrar pruebas automáticas al pipeline CI/CD

---

## Stack Tecnológico
- Node.js
- Playwright
- TypeScript
- GitHub Actions
- Reportes HTML

---

## Estructura del Proyecto
src/
├── pages/ # Page Object Model
├── tests/ # Casos de prueba
├── fixtures/ # Datos de prueba
├── utils/ # Helpers
└── config/ # Configuraciones

---

## Prerrequisitos
- Node.js >= 18
- npm o yarn
- Git

---

## Instalación de dependencias

Clonar el repositorio:
```bash
git clone https://github.com/usuario/qa-automation-playwright.git
cd qa-automation-playwright


## Ejecuccion de los tests

# Corre todas las pruebas
npx playwright test

# Corre prueba especifica
npx playwright test tests/login.spec.ts


# Correr en modo headed
npx playwright test --headed

# Al correr la prueba y ver el report
npx playwright show-report

# La ruta
/reports/html-report/

# .env

BASE_URL=https://surprising-wholeness-production.up.railway.app
USER_EMAIL=testqa@example.com
USER_PASSWORD=testQA1!




