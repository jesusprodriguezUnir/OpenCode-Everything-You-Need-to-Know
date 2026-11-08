---
title: Referencia de comandos
description: Comandos de la CLI de OpenCode V2, comandos de barra y comandos personalizados
---

## CLI

```bash
opencode [directorio]              # Abre la TUI en el directorio indicado
opencode run "mensaje"             # Ejecuta una petición sin abrir la TUI
opencode models                    # Lista los modelos disponibles
opencode auth list                 # Lista credenciales e integraciones
opencode session list              # Lista las sesiones del proyecto
opencode serve --port 4096         # Arranca el servidor de API y web
opencode stats                     # Estadísticas de uso
opencode mcp list                  # Estado de los servidores MCP
opencode debug config              # Fuentes de configuración cargadas
opencode debug agents              # Agentes cargados
opencode debug paths               # Rutas de datos, configuración y caché
opencode upgrade                   # Actualiza OpenCode
opencode uninstall --dry-run       # Muestra qué se eliminaría
```

### `opencode run`

| Flag | Función |
|------|---------|
| `-m, --model proveedor/modelo#variante` | Modelo a usar |
| `--agent <nombre>` | Agente a usar |
| `--format default\|json` | Formato de salida |
| `-f, --file <ruta>` | Adjunta un fichero al mensaje |
| `-c, --continue` | Continúa la última sesión |
| `-s, --session <id>` | Continúa o crea la sesión indicada |
| `--fork` | Bifurca la sesión antes de continuar |
| `-w, --worktree [nombre]` | Inicia la sesión en un worktree nuevo de Git |
| `--title <texto>` | Título de la sesión |
| `--thinking` | Muestra los bloques de razonamiento |
| `--auto` | Aprueba automáticamente los permisos no denegados explícitamente |

Ejemplo para CI, en formato JSON:

```bash
opencode run --agent plan --format json "Lista los TODO del proyecto"
```

### `opencode mcp`

```bash
opencode mcp add <nombre> -- <comando> [args...]
opencode mcp add <nombre> --url https://ejemplo.com/mcp
opencode mcp list
opencode mcp auth <nombre>
opencode mcp logout <nombre>
```

Consulta [Servidores MCP](/avanzado/mcp/).

Para una lista completa de subcomandos y flags, usa `opencode --help` o `opencode <subcomando> --help`.

## Comandos de barra

Los comandos de la TUI están documentados en [TUI](/guias/tui/). Escribe `/` para verlos todos, incluidos los personalizados.

## Comandos personalizados

Un comando es una plantilla que se invoca como `/nombre` en la TUI.

**Como fichero Markdown**: `.opencode/commands/<nombre>.md` (proyecto) o `~/.config/opencode/commands/<nombre>.md` (global). Solo se admiten ficheros `.md`.

```markdown
---
description: Revisa un fichero concreto
agent: plan
---

Revisa @$1 y lista los problemas de legibilidad. Contexto adicional: $ARGUMENTS
```

Uso: `/revisar src/app.ts prioriza el manejo de errores`

Marcadores disponibles:

- `$ARGUMENTS`: todo lo que escribes tras el comando.
- `$1`, `$2`, ...: argumentos posicionales.
- `` !`comando` ``: ejecuta un comando de shell y sustituye su salida.

**Como JSON**, bajo la clave `commands`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "commands": {
    "revisar": {
      "description": "Revisa un fichero concreto",
      "template": "Revisa @$1 y lista los problemas de legibilidad.",
      "agent": "plan"
    }
  }
}
```

Campos: `template` (obligatorio), `description`, `agent`, `model` y `subagent`. La clave `subtask` está obsoleta; usa `subagent`.

Si un comando de proyecto y uno global tienen el mismo nombre, gana el de proyecto.

## Solución de problemas

- **El comando no aparece.** Comprueba la ruta y que el fichero termine en `.md`. Luego revisa `opencode debug config`.
- **Un marcador no se sustituye.** Usa `$ARGUMENTS` o `$1` exactamente así, en mayúsculas y con el signo `$`.
