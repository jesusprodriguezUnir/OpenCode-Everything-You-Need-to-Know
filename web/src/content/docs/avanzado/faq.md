---
title: FAQ y solución de problemas
description: Respuestas a preguntas frecuentes y diagnóstico de problemas en OpenCode V2
---

## Instalación

### ¿Por qué no encuentro `opencode` tras instalar?

Comprueba dónde está el binario y que su directorio está en el `PATH`:

```bash
which opencode
opencode debug paths bin
```

Si instalaste V1 antes, puede haber dos binarios. Desinstala la versión que no uses.

### ¿Puedo usar gestores de paquetes en Windows?

No en V2. Descarga el binario o el instalador de escritorio desde [opencode.ai](https://opencode.ai), o usa WSL.

### ¿Puedo usar mi configuración de V1?

No directamente. Las claves cambiaron y `mcp.servers` no existe en V1. Sigue la guía [Migrar de V1 a V2](/avanzado/migracion/).

## Configuración

### ¿Qué configuración se está cargando?

```bash
opencode debug config
```

Muestra las fuentes en el orden en que se aplican.

### Aparece un aviso de clave obsoleta

Sustituye `permission`, `agent`, `command` o `provider` por `permissions`, `agents`, `commands` o `providers`. Consulta [Configuración](/guias/configuracion/).

## Proveedores

### La clave de API no funciona

Vuelve a ejecutar `/connect` y pega la clave completa. Comprueba el saldo en [OpenCode Console](https://opencode.ai/console) si usas esa cuenta.

```bash
opencode auth list
```

## Uso

### Las referencias `@archivo` no encuentran el fichero

Comprueba el directorio desde el que arrancaste OpenCode. Usa una parte del nombre o una ruta relativa al proyecto.

### OpenCode pide permiso para todo

Revisa la lista `permissions` de tu configuración. Recuerda que, si ninguna regla coincide, se pregunta. Gana siempre la última regla que coincide.

### `/undo` no funciona

El proyecto debe ser un repositorio Git.

## Agentes y comandos

### Mi agente no aparece

```bash
opencode debug agents
```

Revisa el nombre del fichero, su ruta (`.opencode/agents/` o `~/.config/opencode/agents/`) y el frontmatter.

### Mi comando `/nombre` no aparece

Comprueba que el fichero es `.md` y está en `.opencode/commands/` o `~/.config/opencode/commands/`.

## MCP

### El servidor MCP no arranca

```bash
opencode mcp list
```

Ejecuta el `command` del servidor directamente en la terminal para ver el error real.

## Actualizaciones

```bash
opencode upgrade
```

Desde la TUI puedes usar `/update`.

## Ayuda

Para una referencia completa, consulta la [documentación oficial](https://opencode.ai/docs). Si el problema persiste, incluye en tu consulta la versión de OpenCode (`opencode --version`) y la salida de `opencode debug config` con las claves sensibles eliminadas.
