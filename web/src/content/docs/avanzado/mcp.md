---
title: Servidores MCP
description: Conecta OpenCode V2 con servidores MCP locales o remotos
---

Un servidor MCP (Model Context Protocol) expone herramientas externas al agente. OpenCode las carga al arrancar y las ofrece junto con sus propias herramientas.

## Configuración

Los servidores van bajo `mcp.servers`. Cada uno es **local** (un proceso que arranca OpenCode) o **remoto** (una URL).

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "timeout": {
      "startup": 10000,
      "catalog": 10000,
      "execution": 60000
    },
    "servers": {
      "archivos": {
        "type": "local",
        "command": ["npx", "-y", "@ejemplo/servidor-mcp"],
        "environment": {
          "RUTA_BASE": "{env:HOME}/proyectos"
        },
        "disabled": false
      },
      "documentacion": {
        "type": "remote",
        "url": "https://ejemplo.com/mcp",
        "headers": {
          "Authorization": "Bearer {env:DOCS_TOKEN}"
        },
        "disabled": false
      }
    }
  }
}
```

Los valores de `timeout` están en milisegundos. `disabled: true` desactiva un servidor sin borrar su configuración.

Para servidores remotos con OAuth, la clave `oauth` admite `client_id`, `client_secret`, `scope`, `callback_port`, `redirect_uri` y `auth_server_metadata_url`.

## Añadir desde la terminal

```bash
opencode mcp add archivos -- npx -y @ejemplo/servidor-mcp
opencode mcp add documentacion --url https://ejemplo.com/mcp --header "Authorization=Bearer ..."
```

Flags de `opencode mcp add`:

- `--url`: URL de un servidor remoto.
- `--header clave=valor`: cabecera HTTP para un servidor remoto.
- `--env clave=valor`: variable de entorno para un servidor local.
- `--global`: escribe en la configuración global en lugar de la del proyecto.

No escribas secretos en el fichero de configuración. Usa `{env:NOMBRE}` y define la variable en tu entorno.

## Comprobar y autenticar

```bash
opencode mcp list
opencode mcp auth documentacion
opencode mcp logout documentacion
```

`auth` solo aplica a servidores remotos que usan OAuth.

## Nombres de las herramientas

Cada herramienta de un servidor aparece como `<servidor>_<herramienta>`. Por ejemplo, la herramienta `leer` del servidor `archivos` se llama `archivos_leer`.

Esos nombres se usan en las reglas de permisos:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "permissions": [
    { "action": "archivos_leer", "resource": "*", "effect": "allow" },
    { "action": "documentacion_*", "resource": "*", "effect": "ask" }
  ]
}
```

## Migración desde V1

En V1, los servidores se declaraban como `mcp.<nombre>` con `enabled`. En V2 van bajo `mcp.servers.<nombre>` con `disabled`. Consulta [Migrar de V1 a V2](/avanzado/migracion/).

## Solución de problemas

- **El servidor no arranca.** Ejecuta `opencode mcp list` para ver su estado. Prueba el comando de `command` directamente en la terminal.
- **Las herramientas no aparecen.** Comprueba que `disabled` es `false` y que el nombre del servidor no tiene caracteres extraños.
- **Error de autenticación.** Revisa la variable de entorno referenciada con `{env:...}` y vuelve a ejecutar `opencode mcp auth`.
- **Arranque lento.** Aumenta `mcp.timeout.startup`.
