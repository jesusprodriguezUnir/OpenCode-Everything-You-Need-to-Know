---
title: Flujo de trabajo
description: Explorar, proponer, implementar y archivar un cambio con los comandos /opsx-* de OpenCode
---

## Comandos disponibles

| Comando | Para qué sirve |
|---------|----------------|
| `/opsx-explore` | Pensar una idea o investigar un problema sin crear artefactos |
| `/opsx-propose "idea"` | Crear el cambio y generar todos sus artefactos de una vez |
| `/opsx-apply [cambio]` | Implementar las tareas de `tasks.md` y marcarlas como hechas |
| `/opsx-archive [cambio]` | Archivar un cambio terminado |
| `/opsx-sync [cambio]` | Fusionar las specs delta en las specs principales sin archivar |
| `/opsx-update [cambio]` | Revisar los artefactos de un cambio y mantenerlos coherentes |

`apply`, `archive` y `update` aparecen marcados como *experimentales* en su descripción. Revisa la salida de cada paso.

## Paso a paso

### 1. Explorar (opcional)

Úsalo cuando la idea no está clara:

```text
/opsx-explore ¿Cómo debería funcionar el inicio de sesión sin contraseña?
```

Ejecútalo con el agente `plan`, que no edita archivos del proyecto.

### 2. Proponer

```text
/opsx-propose "añadir inicio de sesión sin contraseña"
```

El comando crea la carpeta del cambio en `openspec/changes/` con:

- `proposal.md`: qué se quiere y por qué.
- `specs/<ruta>/spec.md`: especificaciones delta (qué cambia en el comportamiento del sistema).
- `design.md`: cómo se va a implementar.
- `tasks.md`: lista ordenada de tareas.

Revisa los artefactos antes de implementar. Es el momento más barato para corregir un error de planteamiento.

### 3. Implementar

```text
/opsx-apply add-passwordless-login
```

Ejecútalo con el agente `build`, que sí puede editar archivos. El agente recorre `tasks.md` y marca cada tarea al completarla.

### 4. Archivar

```text
/opsx-archive add-passwordless-login
```

El archivado fusiona las specs delta en `openspec/specs/` y mueve el cambio a `openspec/changes/archive/`.

Práctica recomendada en equipo: archivar dentro del mismo PR antes de fusionarlo, para que la documentación principal quede alineada con el código.

## Agentes recomendados

| Fase | Agente | Motivo |
|------|--------|--------|
| Explorar y revisar propuestas | `plan` | Solo lectura |
| Implementar | `build` | Necesita editar archivos |

Puedes fijar el agente por defecto con `default_agent` en `opencode.json`, o indicarlo al ejecutar en modo no interactivo con `opencode run --agent plan "..."`. Consulta [Agentes](/guias/agentes/).

## Flujo sin la TUI

Los comandos también pueden lanzarse con `opencode run`:

```bash
opencode run --agent build "/opsx-apply add-passwordless-login"
```

## Errores habituales

- **El comando `/opsx-*` no aparece.** Comprueba que `.opencode/commands/` no esté ignorado por Git (ver [Instalación](/openspec/instalacion/)) y que se ejecuta desde la raíz del proyecto.
- **Se usa `/opsx:propose`.** En OpenCode el separador es un guion.
- **Las specs principales no cambian tras implementar.** Falta ejecutar `/opsx-archive` o `/opsx-sync`.
