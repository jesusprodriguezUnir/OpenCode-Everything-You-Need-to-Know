---
title: Migrar de V1 a V2
description: Pasos y equivalencias para pasar de opencode-ai 1.x a @opencode/cli
---

OpenCode V2 se distribuye como `@opencode/cli`. La versión 1 se distribuye como `opencode-ai`. Los dos paquetes **no son intercambiables**, y la configuración de V1 no funciona tal cual en V2.

## 1. Instalar V2

| Método V1 | Equivalente V2 |
|-----------|----------------|
| `npm install -g opencode-ai` | `npm install -g @opencode/cli` |
| `curl -fsSL https://opencode.ai/install \| bash` | `curl -fsSL https://opencode.ai/v2/install \| bash` |
| `brew install anomalyco/tap/opencode` | `brew install anomalyco/tap/opencode-v2` |
| `bun install -g opencode-ai` | `bun install -g --trust @opencode/cli` |

En Windows, V2 no admite gestores de paquetes. Usa el binario o el instalador de escritorio, o WSL.

Desinstala V1 con el mismo gestor que usaste para instalarla, para evitar dos binarios `opencode` en el `PATH`.

## 2. Convertir la configuración

Pasa tu `opencode.json` de V1 a V2 con esta correspondencia:

| V1 | V2 | Notas |
|----|----|-------|
| `permission` (objeto `{ "herramienta": "allow" }`) | `permissions` (lista de reglas) | Cada regla tiene `action`, `resource` y `effect` |
| `mcp.<nombre>` con `enabled` | `mcp.servers.<nombre>` con `disabled` | `disabled` invierte la lógica de `enabled` |
| `agent` | `agents` | Clave de nivel superior |
| `command` | `commands` | Usa `template` en lugar de un texto suelto |
| `provider` | `providers` | |
| `subtask` en comandos | `subagent` | `subtask` queda como alias obsoleto |

Dentro de los ficheros de agentes:

| Campo de V1 | Qué hacer en V2 |
|-------------|-----------------|
| `tools` | Sustituir por `permissions` |
| `temperature` | Eliminar |
| `prompt` | Mover el texto al cuerpo del fichero `.md` o al campo `system` |
| `maxSteps` | Sustituir por `steps` |

Un ejemplo de MCP en V2:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "servers": {
      "docs": {
        "type": "remote",
        "url": "https://ejemplo.com/mcp",
        "disabled": false
      }
    }
  }
}
```

Las claves `permission`, `agent`, `command` y `provider` siguen siendo aceptadas por compatibilidad, pero están obsoletas.

## 3. Validar

```bash
opencode debug config
```

Este comando muestra las fuentes de configuración que se cargan. Si una clave no se reconoce, aparecerá ahí antes de que falle una sesión.

## 4. Comprobar las sesiones y los comandos

- Lista las sesiones con `opencode session list`.
- Exporta una sesión importante antes de desinstalar V1 con `opencode session export`.
- Mueve tus comandos personalizados de `.opencode/commands/` a la nueva estructura si usas la forma JSON.

## Qué no migra automáticamente

- La configuración global de V1 no se lee desde V2. Copia y convierte el fichero manualmente.
- Las reglas de permisos hay que reescribirlas como lista ordenada. Recuerda que gana la última regla que coincide.

## Lista de comprobación

- [ ] V2 instalado y `opencode --version` responde.
- [ ] V1 desinstalado o fuera del `PATH`.
- [ ] `opencode.json` convertido y sin claves obsoletas.
- [ ] `opencode debug config` muestra las fuentes esperadas.
- [ ] Servidores MCP arrancan (`opencode mcp list`).
- [ ] Una sesión de prueba completa sin errores de permisos.
