---
title: OpenCode - Asistente de IA de código abierto
description: Guía en español de OpenCode V2, la herramienta de programación asistida por IA para la terminal
template: splash
hero:
  tagline: Tu asistente de programación con IA en la terminal, sin dependencia de un único proveedor
  image:
    file: ../../assets/logo.png
  actions:
    - text: Comenzar ahora
      link: /guias/inicio-rapido/
      icon: rocket
    - text: Ver ejemplos
      link: /ejemplos/
      icon: open-book
---

Manual completo para leer o imprimir sin conexión: [descarga el PDF](/manual-opencode.pdf).

## Qué es OpenCode

OpenCode es una herramienta de programación asistida por IA que funciona en la terminal. Puedes elegir el modelo que quieras a través de tu proveedor o de OpenCode Console, y adaptar el comportamiento del agente con agentes, comandos, skills y servidores MCP.

Esta guía cubre **OpenCode V2** (paquete `@opencode/cli`). Si todavía usas la versión 1 (`opencode-ai`), empieza por [Migrar de V1 a V2](/avanzado/migracion/).

## Mapa de la guía

| Sección | Contenido |
|---------|-----------|
| [Inicio rápido](/guias/inicio-rapido/) | Instalación, primer arranque y actualización |
| [TUI](/guias/tui/) | Atajos, comandos de barra y sesiones |
| [Configuración](/guias/configuracion/) | `opencode.json`, permisos y ámbitos |
| [Agentes](/guias/agentes/) | Agentes integrados y personalizados |
| [Skills](/guias/skills/) | Instrucciones reutilizables |
| [Zen / Console](/guias/zen/) | Acceso a modelos mediante OpenCode Console |
| [Comandos](/avanzado/comandos/) | CLI y comandos personalizados |
| [MCP](/avanzado/mcp/) | Servidores de herramientas externos |
| [OpenCode + OpenSpec](/openspec/) | Planificar cambios con especificaciones antes de programar |

## Nueva sección: OpenCode + OpenSpec

Si trabajas con especificaciones, la sección [OpenCode + OpenSpec](/openspec/) explica cómo usar los comandos `/opsx-*` para proponer, implementar y archivar cambios. Para el método completo, consulta la [Guía completa de OpenSpec ↗](https://openspec-ochre.vercel.app/).

## Primer ejemplo

```bash
cd /ruta/a/tu/proyecto
opencode
```

Dentro de la TUI:

```text
/init
¿Qué hace este proyecto y cómo está organizado? @README.md
```

El comando `/init` analiza el proyecto y genera un `AGENTS.md` con su contexto. Consulta la [TUI](/guias/tui/) para conocer el resto de comandos.

## Próximos pasos

1. Instala OpenCode siguiendo la [guía de inicio rápido](/guias/inicio-rapido/).
2. Conecta un proveedor con `/connect`.
3. Revisa la [ruta de aprendizaje](/ruta-aprendizaje/) de cuatro semanas.
