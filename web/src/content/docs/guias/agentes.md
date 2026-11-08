---
title: Agentes
description: Agentes integrados de OpenCode V2 y cómo crear los tuyos
---

## Agentes integrados

| Agente | Modo | Función |
|--------|------|---------|
| `build` | `primary` | Agente por defecto para programar; puede editar archivos |
| `plan` | `primary` | Explora y planifica sin editar los ficheros normales del proyecto |
| `general` | `subagent` | Investigación y tareas de varios pasos; no puede lanzar más subagentes |
| `explore` | `subagent` | Busca y lee código o fuentes web sin editar archivos |

Hay además agentes ocultos (`compaction`, `title` y `summary`) que gestionan tareas internas. No se pueden seleccionar.

## Elegir el agente primario

Por defecto se usa `build`. Para cambiarlo:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "default_agent": "plan"
}
```

Al ejecutar desde la terminal, `opencode run --agent plan "..."` usa un agente concreto para esa petición.

Si el agente indicado no existe, no es visible o no puede usarse como primario, OpenCode recurre a `build`.

## Subagentes

Un agente primario puede delegar en un subagente. Se pide en lenguaje natural:

```text
Usa el subagente explore para localizar dónde se valida el correo electrónico.
```

Los subagentes se ejecutan en sesiones hijas. Las reglas de permisos del agente padre controlan a cuáles puede llamar.

## Agentes personalizados

Un agente es un fichero Markdown en `.opencode/agents/<nombre>.md` (proyecto) o `~/.config/opencode/agents/<nombre>.md` (global). El nombre del fichero es el identificador del agente.

```markdown
---
description: Revisa cambios buscando errores de lógica y de seguridad
mode: subagent
permissions:
  - { "action": "edit", "resource": "*", "effect": "deny" }
steps: 20
---

Eres un revisor de código. Lee los cambios indicados y devuelve una lista
de problemas por severidad. No modifiques ningún fichero.
```

Campos admitidos en el frontmatter: `description`, `mode` (`primary`, `subagent` o `all`), `model` (formato `proveedor/modelo`), `permissions`, `steps`, `hidden`, `color` y `disabled`. El cuerpo del fichero es el prompt de sistema.

También puedes definir agentes en `opencode.json`, bajo la clave `agents`, con el campo `system` para el prompt:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "agents": {
    "revisor": {
      "description": "Revisa cambios sin editar",
      "mode": "subagent",
      "system": "Eres un revisor de código. No modifiques ficheros."
    }
  }
}
```

Evita los campos de la versión 1 (`temperature`, `top_p`, `prompt`, `permission`, `tools`, `maxSteps`). Usa `permissions` y `steps` en su lugar.

## Permisos por agente

Cada agente puede tener sus propias reglas, en la clave `agents.<id>.permissions` o en el frontmatter:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "agents": {
    "plan": {
      "permissions": [
        { "action": "edit", "resource": "*", "effect": "deny" }
      ]
    }
  }
}
```

Consulta [Configuración](/guias/configuracion/) para la sintaxis completa de `permissions`.

## Comprobar los agentes cargados

```bash
opencode debug agents
```

Lista todos los agentes que OpenCode ha cargado, incluidos los personalizados. Si tu agente no aparece, revisa el nombre del fichero, la ruta y el frontmatter.

## Buenas prácticas

- Un agente, una responsabilidad. Un revisor no debería poder editar archivos.
- Limita `steps` en agentes de investigación para evitar sesiones muy largas.
- Usa `plan` para diseñar y `build` solo cuando el plan esté aprobado.
- En este repositorio, el `.gitignore` ignora `.opencode/agents/`. Si quieres compartir agentes con el equipo, ajusta esa regla.
