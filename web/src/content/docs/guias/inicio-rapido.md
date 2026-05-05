---
title: Inicio Rápido
description: Instala OpenCode y ponte en marcha en menos de 5 minutos
---

# Inicio Rápido con OpenCode

## 📋 Descripción General

Esta guía te ayudará a instalar OpenCode y empezar en menos de 5 minutos.

## 🚀 Métodos de Instalación

### Método 1: Script de Instalación (Recomendado)

```bash
curl -fsSL https://opencode.ai/install | bash
```

### Método 2: Gestores de Paquetes

**Homebrew (macOS/Linux):**
```bash
brew install anomalyco/tap/opencode
```

**npm:**
```bash
npm install -g opencode-ai
```

**Bun:**
```bash
bun install -g opencode-ai
```

**pnpm:**
```bash
pnpm install -g opencode-ai
```

**Yarn:**
```bash
yarn global add opencode-ai
```

### Método 3: Gestores de Paquetes del Sistema

**Arch Linux:**
```bash
sudo pacman -S opencode
```

**Arch Linux AUR (última versión):**
```bash
paru -S opencode-bin
```

**Chocolatey (Windows):**
```bash
choco install opencode
```

**Scoop (Windows):**
```bash
scoop install opencode
```

### Método 4: Descarga Binaria

1. Visita: https://github.com/anomalyco/opencode/releases
2. Descarga el binario apropiado para tu SO
3. Extrae y añade a PATH

## 🖥️ Instalación en Windows

### Recomendado: Usar WSL2 (Windows Subsystem for Linux)

```bash
# Habilitar WSL2
wsl --install

# Instalar Ubuntu o distribución preferida
wsl --install -d Ubuntu

# Luego usar los métodos de instalación de Linux
```

### Opciones Nativas para Windows:

```bash
# Usando Chocolatey
choco install opencode

# Usando Scoop
scoop install opencode

# Usando npm
npm install -g opencode-ai

# Usando Docker
docker run -it --rm ghcr.io/anomalyco/opencode
```

## ✅ Verificación

Después de la instalación, verifica que OpenCode funcione:

```bash
# Verificar versión
opencode --version

# Iniciar la TUI de OpenCode
opencode

# O ejecutar una prueba rápida
opencode run "Hola, ¿qué versión de OpenCode estoy ejecutando?"
```

## 🔧 Configuración Post-Instalación

### 1. Primera Configuración

```bash
# Iniciar OpenCode
opencode

# Verás la pantalla de bienvenida
# Presiona Enter para continuar
```

### 2. Configura Tu Primer Proveedor

```bash
# En la TUI, ejecuta:
/connect

# Sigue las instrucciones para añadir:
# 1. OpenCode Zen (recomendado para principiantes)
# 2. U otro proveedor (OpenAI, Anthropic, etc.)
```

### 3. Inicializa un Proyecto

```bash
# Navega a tu proyecto
cd /path/to/your/project

# Inicia OpenCode en el contexto del proyecto
opencode .

# Inicializa el análisis del proyecto
/init
```

## 🛠️ Solución de Problemas de Instalación

### Problemas Comunes:

**1. "Command not found: opencode"**

```bash
# Verificar ruta de instalación
which opencode

# Añadir a PATH si es necesario
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**2. Errores de Permisos**

```bash
# Corregir permisos para instalación global
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

**3. Problemas con Versión de Node.js**

```bash
# Verificar versión de Node.js
node --version

# Actualizar si es necesario (usando nvm)
nvm install 18
nvm use 18
```

**4. Configuración de WSL en Windows**

```bash
# Habilitar WSL2
wsl --install

# Instalar Ubuntu o distribución preferida
wsl --install -d Ubuntu

# Luego usar los métodos de instalación de Linux
```

## 🔄 Actualizar OpenCode

### Métodos de Actualización:

```bash
# Usando script de instalación (volver a ejecutar)
curl -fsSL https://opencode.ai/install | bash

# Usando npm
npm update -g opencode-ai

# Usando Homebrew
brew update
brew upgrade opencode

# Verificar actualizaciones
opencode --version
# Comparar con la última: https://github.com/anomalyco/opencode/releases
```

## 🗑️ Desinstalación

### Eliminar OpenCode:

```bash
# npm
npm uninstall -g opencode-ai

# Homebrew
brew uninstall opencode

# Eliminar archivos de configuración (opcional)
rm -rf ~/.config/opencode
rm -rf ~/.opencode
```

> **💡 Consejo**: Mantén tus archivos de configuración (`~/.config/opencode/`) si planeas reinstallar, ya que contienen las configuraciones de tus proveedores y personalizaciones.

## 🎯 Próximos Pasos

Después de una instalación exitosa:

1. **Configura Zen** (recomendado para principiantes) o tu proveedor preferido
2. **Inicializa un proyecto de prueba** para explorar características
3. **Prueba comandos básicos** como `/help` y `/models`
4. **Explora la TUI** con la tecla Tab para cambiar de agente

¡Ahora estás listo para explorar las powerful funcionalidades de OpenCode!

---

## 📚 ¿Qué Sigue?

- [Conceptos Fundacionales](/#-conceptos-fundamentales) - Aprende Zen, TUI y Agentes
- [Guía de Zen Model Router](/guias/zen/) - Profundiza en Zen
- [Guía de TUI Mastery](/guias/tui/) - Domina la interfaz de terminal
- [Guía de Agentes](/guias/agentes/) - Trabaja con agentes IA