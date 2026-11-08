---
title: Inicio rápido
description: Instala OpenCode V2, conecta un proveedor y ejecuta tu primera sesión
---

## Requisitos

- Terminal con soporte para TUI (WezTerm, Alacritty, Windows Terminal o similar).
- Una cuenta de proveedor de modelos, o una cuenta en OpenCode Console (ver [Zen / Console](/guias/zen/)).

## 1. Instalar

Elige el método según tu sistema operativo.

**macOS y Linux: script oficial**

```bash
curl -fsSL https://opencode.ai/v2/install | bash
```

**macOS y Linux: Homebrew**

```bash
brew install anomalyco/tap/opencode-v2
```

**Con un gestor de paquetes de Node.js**

```bash
npm install -g @opencode/cli
```

Equivalentes con otros gestores: `bun install -g --trust @opencode/cli`, `pnpm add -g --allow-build=@opencode/cli @opencode/cli`, `yarn global add @opencode/cli`.

**Arch Linux (AUR)**: `paru -S opencode-beta`

**mise**: `mise use -g opencode`

### Windows

Los gestores de paquetes **no son compatibles** en Windows nativo. Tienes dos opciones:

- Descargar el binario independiente o el instalador de escritorio desde [opencode.ai](https://opencode.ai).
- Usar WSL y seguir las instrucciones de Linux dentro de la distribución.

## 2. Comprobar la instalación

```bash
opencode --version
```

## 3. Conectar un proveedor

Abre la TUI en tu proyecto y ejecuta:

```bash
cd /ruta/a/tu/proyecto
opencode
```

Dentro de la TUI, escribe `/connect` y sigue el asistente para añadir un proveedor. Para OpenCode Console, elige el proveedor **OpenCode** y pega tu clave de API.

## 4. Preparar el proyecto

Dentro de la TUI:

```text
/init
```

Este comando genera un `AGENTS.md` con el contexto del proyecto. Revísalo y ajústalo a mano.

## 5. Primera petición

```text
¿Qué hace este proyecto? @README.md
```

La referencia `@` busca ficheros del proyecto de forma aproximada.

También puedes lanzar una petición sin abrir la TUI:

```bash
opencode run "Resume la estructura de este proyecto"
```

## Actualizar

```bash
opencode upgrade
```

Dentro de la TUI puedes usar `/update`. La clave `update` de la configuración controla si OpenCode avisa o instala actualizaciones automáticamente (`disable`, `notify` o `auto`).

## Desinstalar

Revisa primero qué se eliminará:

```bash
opencode uninstall --dry-run
opencode uninstall
```

La desinstalación conserva las sesiones, la configuración y el estado.

## Siguientes pasos

- [TUI](/guias/tui/): atajos y comandos de barra.
- [Configuración](/guias/configuracion/): `opencode.json` y permisos.
- [Agentes](/guias/agentes/): cómo usar `build` y `plan`.
- Si vienes de la versión 1, lee [Migrar de V1 a V2](/avanzado/migracion/).
