---
title: Skills
description: Instrucciones reutilizables en formato SKILL.md para OpenCode V2
---

Una skill es una carpeta con un fichero `SKILL.md`. Contiene instrucciones que el agente carga cuando las necesita, sin ocupar contexto en todas las sesiones.

## Dónde se buscan

**Proyecto**

- `.opencode/skills/`
- `.claude/skills/`
- `.agents/skills/`

**Global**

- `~/.config/opencode/skills/`
- `~/.claude/skills/`
- `~/.agents/skills/`

Cada skill vive en su propio directorio:

```text
.opencode/skills/revision-seguridad/
└── SKILL.md
```

## Formato

```markdown
---
name: revision-seguridad
description: Revisa cambios buscando problemas de seguridad. Úsala al revisar código que maneje autenticación, datos de usuario o entrada externa.
---

# Revisión de seguridad

1. Busca credenciales o secretos escritos en el código.
2. Comprueba que las entradas externas se validan antes de usarse.
3. Revisa las consultas a base de datos por concatenación de cadenas.
4. Resume los hallazgos por severidad.
```

Campos del frontmatter: `name`, `description` (obligatoria para que la skill sea visible), `license`, `compatibility`, `metadata` y `disable-model-invocation`.

## Uso

- **El modelo** la carga con la herramienta `skill` cuando la descripción encaja con la tarea.
- **Tú** la referencias por su identificador con `@revision-seguridad`.

Si `disable-model-invocation` está activo, solo podrás invocarla tú.

## Configuración

Para cargar rutas adicionales, usa la clave `skills` de `opencode.json`. Consulta [Configuración](/guias/configuracion/).

## Buenas prácticas

- Escribe la `description` como un disparador: di cuándo debe usarse la skill.
- Mantén cada skill centrada en una tarea. Dos skills pequeñas se activan mejor que una grande.
- Versiona las skills de proyecto en Git, salvo que contengan datos sensibles.
- No guardes secretos ni claves de API en `SKILL.md`.
