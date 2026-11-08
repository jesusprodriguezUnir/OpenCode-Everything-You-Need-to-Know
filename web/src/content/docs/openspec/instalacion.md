---
title: Instalación y configuración
description: Instala OpenSpec y prepara un proyecto para usarlo desde OpenCode
---

## 1. Instalar el CLI de OpenSpec

Con npm:

```bash
npm install -g @fission-ai/openspec@latest
```

También puedes instalar el binario standalone, que no necesita Node.js en tiempo de ejecución:

```bash
openspec install
```

Comprueba la instalación con `openspec version`.

## 2. Inicializar el proyecto para OpenCode

Desde la raíz del proyecto:

```bash
openspec init --tools opencode
```

Para que los artefactos se escriban en otro idioma, usa `--language`:

```bash
openspec init --tools opencode --language es
```

Revisa las opciones disponibles con `openspec init --help`.

## 3. Qué se crea

| Ruta | Contenido |
|------|-----------|
| `.opencode/commands/opsx-*.md` | Comandos: `opsx-propose`, `opsx-apply`, `opsx-archive`, `opsx-explore`, `opsx-sync`, `opsx-update` |
| `.opencode/skills/openspec-*/SKILL.md` | Skills que implementan esos flujos |
| `openspec/config.yaml` | Configuración del proyecto (esquema `spec-driven`) |
| `openspec/specs/` | Especificaciones principales del proyecto |
| `openspec/changes/archive/` | Cambios ya archivados |

En OpenCode, los comandos usan **guion** (`/opsx-propose`). En Claude Code se escriben con dos puntos (`/opsx:propose`). No mezcles ambas formas en la documentación del equipo.

## 4. Configurar el proyecto

Edita `openspec/config.yaml` para añadir restricciones que el agente no pueda deducir del código. Por ejemplo:

```yaml
schema: spec-driven

context: |
  Los diseños y las tareas deben cubrir Windows, macOS y Linux.
  Escribe todos los artefactos en español.

rules:
  tasks:
    - Divide las tareas en bloques de como máximo 2 horas
```

Describe solo restricciones de negocio o de entorno. La documentación general del código no hace falta, porque el agente la puede leer.

## 5. Workflows adicionales

Por defecto se instalan los flujos principales. Los workflows `new`, `continue`, `ff`, `bulk-archive`, `verify` y `onboard` se añaden con:

```bash
openspec config profile
```

## 6. Actualizar tras una nueva versión

Cuando actualices el CLI, regenera los archivos de instrucciones:

```bash
openspec update
```

## Aviso: el `.gitignore` puede ocultar los comandos al equipo

Si el `.gitignore` del proyecto ignora `.opencode/commands/`, `.opencode/skills/` o `.opencode/agents/`, los comandos `/opsx-*` no se compartirán con el resto del equipo. En este repositorio, el `.gitignore` raíz ignora esas tres carpetas, así que conviene revisarlo antes de hacer commit.

Para compartir el flujo, elimina esas reglas del `.gitignore` del proyecto y añade al control de versiones las carpetas `.opencode/commands/` y `.opencode/skills/`, junto con `openspec/`.

Puedes comprobar qué regla aplica con:

```bash
git check-ignore -v .opencode/commands/opsx-propose.md
```
