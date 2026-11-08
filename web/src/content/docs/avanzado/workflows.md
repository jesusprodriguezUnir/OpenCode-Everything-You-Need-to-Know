---
title: Flujos de trabajo
description: Un flujo recomendado para planificar, implementar y revisar cambios con OpenCode
---

Un flujo sencillo reduce los errores de las herramientas de programación con IA: primero se entiende el código, después se planifica y, por último, se implementa.

## Flujo recomendado

```text
Explorar (plan)  →  Planificar (plan)  →  Implementar (build)  →  Revisar  →  Confirmar
```

### 1. Explorar con `plan`

El agente `plan` lee el código sin editarlo.

```text
Explica cómo se gestiona la sesión de usuario en @src/auth/ y qué módulos dependen de ella.
```

### 2. Planificar

Pide un plan concreto y revisa las preguntas que haga el agente:

```text
Propón un plan para añadir expiración a las sesiones. Lista los ficheros que cambiarían y los riesgos.
```

Si el cambio es grande, usa [OpenCode + OpenSpec](/openspec/) para dejar el plan por escrito antes de tocar código.

### 3. Implementar con `build`

Cuando el plan esté aprobado, cambia de agente con `default_agent` o con `opencode run --agent build`. Implementa una fase cada vez:

```text
Implementa solo la primera tarea del plan. Detente al terminar para que pueda revisarla.
```

### 4. Revisar

Pide la revisión a un subagente o a un comando personalizado, con permisos de solo lectura:

```text
Usa el subagente explore para comprobar que los cambios no rompen las llamadas a validateSession.
```

### 5. Confirmar

Los cambios se confirman con Git como cualquier otro código. Antes de hacer commit, revisa el diff con tus herramientas habituales.

## Deshacer cambios

- `ctrl+x u` (`/undo`) deshace el último cambio del agente, y `ctrl+x r` (`/redo`) lo rehace.
- Requiere que el proyecto sea un repositorio Git. Sin Git, usa tu control de versiones normal.

## Buenas prácticas

- Limita los permisos de `edit` y `shell` en los agentes que no necesitan escribir.
- Usa `/compact` cuando la conversación sea larga, en lugar de empezar una sesión con todo el historial.
- Crea una sesión nueva (`/new`) para cada tarea independiente.
- Guarda las convenciones del proyecto en `AGENTS.md` para no repetirlas en cada sesión.
