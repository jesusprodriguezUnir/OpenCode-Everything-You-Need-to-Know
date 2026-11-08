---
title: TUI
description: Atajos de teclado, comandos de barra y gestión de sesiones en la interfaz de terminal de OpenCode V2
---

## Tecla líder

Muchos comandos tienen atajo con la tecla líder **`ctrl+x`**. Pulsa `ctrl+x` y, en un plazo de 2 segundos, la tecla de la acción.

| Atajo | Comando | Función |
|-------|---------|---------|
| `ctrl+x c` | `/compact` | Resume la conversación para liberar contexto |
| `ctrl+x e` | `/editor` | Abre un editor externo para escribir el mensaje |
| `ctrl+x m` | `/models` | Cambia de modelo |
| `ctrl+x n` | `/new` | Empieza una sesión nueva |
| `ctrl+x l` | `/sessions` | Lista y reanuda sesiones |
| `ctrl+x r` | `/redo` | Rehace el último cambio deshecho |
| `ctrl+x u` | `/undo` | Deshace el último cambio (requiere Git) |
| `ctrl+x t` | `/themes` | Cambia el tema |
| `ctrl+x x` | `/export` | Exporta la conversación |
| `ctrl+x q` | `/exit` | Sale de la TUI |

Otros atajos:

- `ctrl+p`: paleta de comandos.
- `ctrl+t`: cambia entre las variantes del modelo actual.

## Comandos de barra

Escribe `/` en la entrada para ver la lista. Estos son los comandos documentados en V2:

| Comando | Alias | Función |
|---------|-------|---------|
| `/connect` | | Añade un proveedor |
| `/help` | | Muestra la ayuda |
| `/init` | | Genera `AGENTS.md` con el contexto del proyecto |
| `/thinking` | | Muestra u oculta los bloques de razonamiento |
| `/update` | | Actualiza OpenCode |
| `/summarize` | `/compact` | Resumen de la conversación |
| `/clear` | `/new` | Nueva sesión |
| `/quit` | `/q`, `/exit` | Salir |
| `/resume` | `/continue` | Reanudar sesiones |

Los comandos personalizados también aparecen en esta lista. Consulta [Comandos](/avanzado/comandos/).

## Referencias a ficheros

Escribe `@` seguido de parte del nombre para buscar un fichero del proyecto:

```text
¿Qué hace la validación de formularios en @src/utils/validation.ts?
```

## Sesiones

- Las sesiones se guardan y puedes reanudarlas con `/sessions` o `ctrl+x l`.
- Desde la terminal, `opencode session list` muestra las sesiones del proyecto y `opencode session delete` elimina una.
- `opencode session export` y `opencode session import` permiten copiar sesiones entre equipos.

## Agente de la sesión

OpenCode V2 usa `build` como agente primario por defecto. Puedes fijar otro con la clave `default_agent` de la configuración, o indicarlo con `--agent` al ejecutar `opencode run`. Consulta [Agentes](/guias/agentes/).

## Pensamiento del modelo

`/thinking` alterna la visualización de los bloques de razonamiento. Para que se muestren en modo no interactivo, usa `opencode run --thinking`.

## Solución de problemas

- **La TUI no se ve bien.** Prueba otra terminal con soporte de color y Unicode.
- **`ctrl+x` no hace nada.** Comprueba que tu terminal no reserva ese atajo. El plazo de la tecla líder es de 2 segundos.
- **`/undo` no funciona.** Requiere que el proyecto sea un repositorio Git.
