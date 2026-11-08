---
title: OpenCode + OpenSpec
description: Cómo combinar OpenCode con OpenSpec para planificar cambios antes de programarlos
---

[OpenSpec](https://github.com/Fission-AI/OpenSpec) es un flujo de trabajo de desarrollo guiado por especificaciones. Antes de tocar código, el agente escribe una propuesta, las especificaciones del cambio, un diseño y una lista de tareas. Después implementa esas tareas y, al final, fusiona las especificaciones en la documentación principal del proyecto.

Esta sección explica cómo usarlo con OpenCode. Para el detalle completo del método, consulta la **[Guía completa de OpenSpec ↗](https://openspec-ochre.vercel.app/)**.

## Qué aporta a OpenCode

- **Planificación separada de la implementación.** Los artefactos de planificación se generan primero y se revisan antes de escribir código.
- **Especificaciones del proyecto.** Los cambios se acumulan en `openspec/specs/` y sirven de contexto para cambios futuros.
- **Comandos reutilizables.** `openspec init --tools opencode` instala comandos `/opsx-*` y skills en el proyecto.

## Flujo general

| Paso | Comando en OpenCode | Qué produce |
|------|---------------------|-------------|
| Explorar (opcional) | `/opsx-explore` | Ideas y preguntas aclaradas, sin artefactos |
| Proponer | `/opsx-propose "idea"` | `proposal.md`, specs delta, `design.md` y `tasks.md` |
| Implementar | `/opsx-apply` | Código que marca las tareas como completadas |
| Archivar | `/opsx-archive` | Fusiona las specs delta y mueve el cambio a `changes/archive/` |

Los comandos completos y su descripción están en [Flujo de trabajo](/openspec/flujo-de-trabajo/).

## Requisitos

- OpenCode instalado (ver [Inicio rápido](/guias/inicio-rapido/)).
- Node.js para instalar el CLI de OpenSpec por npm, o el binario standalone.
- Un proyecto con Git. Los cambios se revisan como cualquier otro código.

## Siguientes pasos

1. [Instalación y configuración](/openspec/instalacion/) en tu proyecto.
2. [Flujo de trabajo](/openspec/flujo-de-trabajo/) con explorar, proponer, implementar y archivar.
3. [Comandos del CLI](/openspec/comandos-cli/) para consultar y validar cambios desde la terminal.
