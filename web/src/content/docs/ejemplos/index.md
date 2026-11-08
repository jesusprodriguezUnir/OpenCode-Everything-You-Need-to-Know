---
title: Ejemplos prácticos
description: Peticiones de ejemplo para tareas habituales con OpenCode V2
---

Estos ejemplos son peticiones que puedes escribir en la TUI. Adáptalas al lenguaje y a la estructura de tu proyecto. Las referencias con `@` apuntan a ficheros o carpetas del proyecto.

## Entender un proyecto

```text
/init
Describe la arquitectura de este proyecto: capas, módulos y puntos de entrada. @README.md
```

## Depurar un error

```text
Este error aparece al ejecutar los tests. Localiza la causa en @src/ y propón una corrección sin editar nada todavía:
<pega aquí el mensaje de error>
```

Con el agente `plan`, la petición se queda en análisis. Cuando la propuesta sea correcta, pide la implementación con `build`.

## Escribir tests

```text
Escribe tests unitarios para @src/utils/validation.ts cubriendo casos válidos, límites y errores.
```

## Revisar cambios

```text
Revisa los cambios sin confirmar del repositorio buscando errores de lógica y de seguridad. Ordena los hallazgos por severidad.
```

Para repetir esta revisión, crea un comando personalizado. Consulta [Comandos](/avanzado/comandos/).

## Refactorizar con plan

```text
Propón cómo reducir la complejidad de @src/checkout/ sin cambiar su comportamiento. Lista los pasos en orden.
```

## Ejecutar sin abrir la TUI

```bash
opencode run --agent plan "Lista los endpoints HTTP definidos en este proyecto"
```

## Siguientes pasos

- [Flujos de trabajo](/avanzado/workflows/) para organizar tareas más grandes.
- [OpenCode + OpenSpec](/openspec/) para cambios que necesitan especificaciones.
