---
title: Configuración
description: Ficheros opencode.json, ámbitos, permisos y substituciones en OpenCode V2
---

OpenCode V2 se configura con un fichero JSON o JSONC. Los comentarios solo son válidos en `.jsonc`.

## Dónde vive la configuración

| Ámbito | Ruta |
|--------|------|
| Global (todos los proyectos) | `~/.config/opencode/opencode.json` o `opencode.jsonc` |
| Proyecto | `opencode.json` o `opencode.jsonc` en la raíz, o `.opencode/opencode.json` |

Para ver qué fuentes se están cargando y en qué orden:

```bash
opencode debug config
```

## Estructura básica

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  // Modelo por defecto, en formato proveedor/modelo
  "model": "proveedor/modelo",
  "default_agent": "build",
  "update": "notify"
}
```

Claves principales de V2: `model`, `default_agent`, `shell`, `update`, `permissions`, `agents`, `commands`, `mcp`, `skills`, `instructions` y `providers`.

`update` admite `disable`, `notify` o `auto`.

## Permisos

`permissions` es una lista ordenada de reglas con `action`, `resource` y `effect`. El efecto puede ser `allow`, `ask` o `deny`. Gana la última regla que coincide, y si ninguna coincide se pregunta.

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "permissions": [
    { "action": "read", "resource": "*", "effect": "allow" },
    { "action": "edit", "resource": "*", "effect": "ask" },
    { "action": "edit", "resource": ".env*", "effect": "deny" },
    { "action": "shell", "resource": "git status*", "effect": "allow" },
    { "action": "shell", "resource": "*", "effect": "ask" }
  ]
}
```

Acciones habituales: `read`, `edit`, `shell`, `webfetch`, `websearch`, `glob`, `grep`, `skill`, `subagent`, `question`, `external_directory` y `execute`. Las herramientas de servidores MCP usan `<servidor>_<herramienta>`.

Los permisos también pueden definirse por agente, en `agents.<id>.permissions`. Consulta [Agentes](/guias/agentes/).

## Sustituciones

Dentro de los valores puedes usar:

- `{env:NOMBRE}`: valor de una variable de entorno.
- `{file:ruta}`: contenido de un fichero.

## Claves de V1 que ya no se usan

Las claves `permission`, `agent`, `command` y `provider` están obsoletas en V2. Sustitúyelas por `permissions`, `agents`, `commands` y `providers`. La guía [Migrar de V1 a V2](/avanzado/migracion/) muestra la correspondencia completa.
