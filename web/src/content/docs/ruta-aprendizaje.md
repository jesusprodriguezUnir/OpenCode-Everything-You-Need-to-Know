---
title: Ruta de aprendizaje
description: Un plan de cuatro semanas para dominar OpenCode V2
---

# Ruta de aprendizaje de OpenCode

Cada semana tiene objetivos, tareas y una comprobación final. Avanza al ritmo que necesites.

## Semana 1: Fundamentos

**Objetivos**

- Instalar OpenCode V2 y abrir la TUI en un proyecto.
- Conectar un proveedor.

**Tareas**

- [ ] Completar la [guía de inicio rápido](/guias/inicio-rapido/).
- [ ] Ejecutar `/init` en un proyecto y revisar el `AGENTS.md` generado.
- [ ] Practicar referencias con `@` y la tecla líder `ctrl+x` (ver [TUI](/guias/tui/)).

**Comprobación**: puedes hacer una pregunta sobre un fichero concreto y obtener una respuesta útil.

## Semana 2: Flujo de trabajo

**Objetivos**

- Entender la diferencia entre los agentes `plan` y `build`.
- Configurar permisos básicos.

**Tareas**

- [ ] Leer [Agentes](/guias/agentes/) y usar `plan` para una tarea de análisis.
- [ ] Crear un `opencode.json` de proyecto con reglas de permisos (ver [Configuración](/guias/configuracion/)).
- [ ] Revisar un cambio con `/undo` y `/redo` en un repositorio Git.

**Comprobación**: sabes qué agente usar para explorar y cuál para editar, y por qué.

## Semana 3: Extensión

**Objetivos**

- Reutilizar instrucciones con skills y comandos.
- Conectar un servidor MCP.

**Tareas**

- [ ] Crear una skill de proyecto (ver [Skills](/guias/skills/)).
- [ ] Crear un comando personalizado (ver [Comandos](/avanzado/comandos/)).
- [ ] Añadir un servidor MCP con `opencode mcp add` (ver [MCP](/avanzado/mcp/)).

**Comprobación**: la skill se activa cuando la pides y el servidor MCP aparece en `opencode mcp list`.

## Semana 4: Flujo con especificaciones y migración

**Objetivos**

- Planificar un cambio con especificaciones antes de implementarlo.
- Dejar el entorno de equipo listo.

**Tareas**

- [ ] Seguir [OpenCode + OpenSpec](/openspec/) en un cambio pequeño.
- [ ] Revisar [Workflows](/avanzado/workflows/).
- [ ] Si vienes de la versión 1, completar [Migrar de V1 a V2](/avanzado/migracion/).

**Comprobación**: un cambio pasa de propuesta a archivado sin pasos manuales ocultos.

## Recursos

- [Referencia de comandos](/avanzado/comandos/)
- [Preguntas frecuentes](/avanzado/faq/)
- [Documentación oficial](https://opencode.ai/docs)
