---
title: Diseño de Workflows
description: Aprende a diseñar flujos de trabajo eficientes asistidos por IA
---

# Diseño de Workflows

## 🎯 Resumen
Esta guía cubre flujos de trabajo probados para el desarrollo asistido por IA con OpenCode. Elige el flujo que mejor se adapte a tu tarea actual.

---

## 🔄 1. Explore → Plan → Code → Commit

El flujo más versátil para problemas complejos:

1.  **Explore**: Lee archivos relevantes, imágenes o URLs. Usa subagentes para verificar. **No** programes todavía; primero entiende.
2.  **Plan**: Pide a OpenCode que cree un plan. Revisa y refina el enfoque. Considera alternativas y pros/contras.
3.  **Code**: Implementa la solución. Verifica que sea razonable mientras avanzas. Usa tests para validar.
4.  **Commit**: Guarda los resultados con mensajes claros. Crea Pull Requests si es necesario.

### Ejemplo:
```bash
# Explore: Entiende el código
@explore Analiza @src/auth/ para ver la implementación de autenticación

# Plan: Diseña la solución
[Plan] ¿Cómo añadirías soporte para OAuth2 a la autenticación actual?

# Code: Implementa
[Build] Implementa el soporte para OAuth2 según lo planeado
```

---

## 🧪 2. Desarrollo Dirigido por Tests (TDD)

Ideal para cambios verificables con pruebas unitarias o de integración:

1.  **Escribe Tests**: Crea pruebas basadas en el comportamiento esperado. Asegúrate de que fallen inicialmente (**Red**).
2.  **Implementa**: Escribe el código mínimo necesario para que los tests pasen (**Green**).
3.  **Refactoriza**: Mejora el código manteniendo los tests en verde.

### Ejemplo:
```bash
# Inicia sesión de TDD
/tdd "Validación de registro de usuario"

# OpenCode te guiará por:
# 1. Escribir test fallido
# 2. Implementar solución mínima
# 3. Refactorizar
```

---

## 🤖 El Método BMAD (Brainstorm, Model, Act, Deliver)

BMAD es un marco sistemático para el desarrollo asistido por IA.

### Fase 1: Brainstorm (Lluvia de ideas)
**Propósito:** Explorar el espacio del problema sin restricciones.
- Investiga soluciones existentes.
- Genera múltiples enfoques.
- Considera casos borde y restricciones.

### Fase 2: Model (Modelado)
**Propósito:** Crear planes detallados y accionables.
- Selecciona el mejor enfoque.
- Diseña la arquitectura y componentes.
- Planifica la estrategia de pruebas.

### Fase 3: Act (Acción)
**Propósito:** Ejecutar el plan con precisión.
- Implementa el código siguiendo el plan.
- Sigue las mejores prácticas y patrones.
- Valida la implementación continuamente.

### Fase 4: Deliver (Entrega)
**Propósito:** Completar y desplegar la solución.
- Pruebas finales y validación.
- Optimización de rendimiento.
- Finalización de la documentación.

---

## 📊 Optimización del Flujo de Trabajo

Para maximizar tu eficiencia con OpenCode:

1.  **Identifica Cuellos de Botella**: ¿Qué pasos toman más tiempo?
2.  **Automatiza**: Usa **Skills** para tareas repetitivas (ej: `/pr`, `/docs`).
3.  **Estandariza**: Crea plantillas para flujos comunes en tu equipo.
4.  **Mide el Impacto**: Revisa estadísticas de uso y calidad de los resultados.

---

## 📚 Siguientes Pasos

- [Referencia de Comandos](/avanzado/comandos/) - Lista completa de comandos.
- [Guía de Agentes](/guias/agentes/) - Personalidades de IA.
- [Guía de MCP](/avanzado/mcp/) - Extiende OpenCode.
