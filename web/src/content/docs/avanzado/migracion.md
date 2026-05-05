---
title: Guía de Migración
description: Coming from Cursor, Claude Code, or GitHub Copilot?
---

# Guía de Migración desde Otras Herramientas

¿Vienes de Cursor, Claude Code, GitHub Copilot u otra herramienta de coding AI? Esta guía te ayudará atransition a OpenCode.

---

## 📊 Comparativa Rápida

| Característica | OpenCode | Cursor | Claude Code | GitHub Copilot |
|----------------|----------|--------|-------------|----------------|
| **Interfaz** | Terminal (TUI) | Editor (IDE) | Web + CLI | Extensión IDE |
| **Precio** | Solo modelos | $20+/mes | $20+/mes | $10-100/mes |
| **Modelos** | Multi-proveedor | Mayormente Anthropic | Mayormente Anthropic | Mayormente OpenAI |
| **Código** | 100% open source | Propietario | Propietario | Propietario |
| **Extensible** | Skills + Agentes + MCP | Extensiones | Plugins | Copilot Chat |

---

## 🖱️ De Cursor a OpenCode

### Transiciones de Conceptos

| Cursor | OpenCode |
|--------|----------|
| Cmd+K | `@` + prompt |
| Cmd+L (Chat) | `opencode .` + chat |
| Cmd+Idx (Index) | `/init` |
| Settings | `/config` |
| Extensiones | Skills + MCP |

### Flujo de Trabajo Equivalente

**Cursor:**
```bash
# En el editor
Cmd+K "Create a button component"
```

**OpenCode:**
```bash
# En la terminal
[Build] Crea un componente Button

# O simplemente
Crea un componente Button en @src/components/
```

### Atajos de Teclado

| Acción | Cursor | OpenCode |
|--------|--------|----------|
| Chat general | Cmd+L | `opencode .` |
| Command menu | Cmd+Shift+P | `/` |
| Accept | Tab | Escribir + Enter |
| Modelo | Settings → Model | `/models` |

---

## 🌐 De Claude Code a OpenCode

### Transiciones de Conceptos

| Claude Code | OpenCode |
|-------------|----------|
| Web UI | TUI (terminal) |
| Project know | `/init` + AGENTS.md |
| MCP servers | `/mcp install` |
| Preferences | `/config` |

### Flujo de Trabajo Equivalente

**Claude Code:**
```bash
# En la web UI
"Create a React app with authentication"
```

**OpenCode:**
```bash
# En terminal
[Build] Crea una app React con autenticación usando Firebase
```

### Diferencias Clave

| Aspecto | Claude Code | OpenCode |
|---------|-------------|----------|
| **Interfaz** | Browser | Terminal |
| **Archivo contexto** | Auto | `@filename` |
| **Herramientas** | Built-in | MCP Servers |
| **Modos** | Solo uno | Plan / Build |

---

## 🤖 De GitHub Copilot a OpenCode

### Transiciones de Conceptos

| GitHub Copilot | OpenCode |
|----------------|-----------|
| Inline completion | N/A |
| Copilot Chat | Chat en terminal |
| Copilot Extensions | Skills + MCP |
| .github/copilot-indent | AGENTS.md |

### Flujo de Trabajo Equivalente

**Copilot:**
```bash
# En VS Code
// Escribe comentario
// Presiona Tab para completar
```

**OpenCode:**
```bash
# En terminal
[Build] Implementa la función que describí en @spec.md
```

### Autocompletado vs Chat

Copilot ofrece completado inline que OpenCode no tiene nativamente. Para workflows similares:

```bash
# OpenCode usa chat para código más complejo
[Build] Crea una función que valide emails y retorne boolean
```

### Extensiones

| Copilot | OpenCode |
|---------|----------|
|Extensions | Skills |
| Custom instructions | AGENTS.md |
| Context variables | `@file` |

---

## 🎯 Guía de Transición Paso a Paso

### Semana 1: Adaptación

1. **Instalar OpenCode** en tu máquina
2. **Configurar Zen** (`/connect`) - recomendado para principiantes
3. **Practicar la TUI** - aprender atajos básicos
4. **Probar proyectos simples** - pequeños cambios y refactors

### Semana 2: Workflow

1. **Usar `/init`** en tus proyectos
2. **Crear AGENTS.md** con contexto de proyecto
3. **Explorar `/models`** para entender opciones
4. **Practicar modo Plan y Build**

### Semana 3: Extensión

1. **Instalar skills** relevantes (`/skills install`)
2. **Probar MCP servers** (`/mcp install`)
3. **Crear agentes personalizados** si es necesario

### Semana 4: Optimización

1. **Personalizar configuración** (`/config`)
2. **Crear workflows** automatizados
3. **Integrar con tu stack** (Docker, GitHub Actions, etc.)

---

## 🔧 Configuración de Migración

### Importar Configuración

```bash
# Si tienes configuración previa
opencode import --from cursor ~/.cursor/
opencode import --from claude ~/.claude/
```

### AGENTS.md desde otras herramientas

```markdown
# AGENTS.md - Tu contexto de proyecto

## Entorno
- Node.js 20+
- TypeScript
- React + Vite

## Comandos del proyecto
- `npm run dev` - Desarrollo
- `npm test` - Tests
- `npm run build` - Build

## Convenciones
- Componentes en @src/components/
- Tests en @src/__tests__/
- Estilos con CSS modules
```

---

## 🚀 Ventajas de OpenCode

### Para Desarrolladores

- **Sin suscripción** - Solo paga modelos que usas
- **Multi-proveedor** - Cambia entre OpenAI, Anthropic, Google...
- **Terminal-first** - No sales de tu entorno de trabajo
- **Totalmente extensible** - Skills, agents, MCP servers

### Para Equipos

- **Configuración centralizada** - Comparte configs
- **Trabajo en equipo** - Workspaces compartidos
- **SSO** - Autenticación empresarial
- **Self-hosted** - Ejecuta localmente o en tu infrastructure

---

## ⚠️ Cosas a Considerar

### Curva de Aprendizaje

| Nivel | OpenCode | Cursor | Copilot |
|-------|----------|--------|----------|
| Inicio rápido | Medio | Bajo | Bajo |
| Dominio | Alto | Medio | Bajo |
| Personalización | Alto | Medio | Bajo |

### Funcionalidades que Cambian

- **No hay autocompletado inline** - Todo es chat
- **Interfaz de terminal** - Requiere comodidad con CLI
- **Menos "magia"** - Más explícito y controlable

---

## 📚 Recursos de Ayuda

- [Guía de Inicio Rápido](/guias/inicio-rapido/)
- [Guía de TUI](/guias/tui/)
- [Guía de Zen](/guias/zen/)
- [Referencia de Comandos](/avanzado/comandos/)
- [Servidores MCP](/avanzado/mcp/)

---

## ❓ FAQ de Migración

### ¿Puedo usar mis claves API existentes?
Sí, OpenCode acepta claves de OpenAI, Anthropic, Google, DeepSeek y otros proveedores.

### ¿Pierdo mi historial de conversaciones?
Las sesiones se guardan localmente. Puedes exportarlas con `/export`.

### ¿Funciona con VS Code?
OpenCode funciona independientemente. Puedes usar el output en cualquier editor.

### ¿Es más difícil que Cursor?
Tiene una curva de aprendizaje diferente. Pero una vez que dominas la terminal, es más poderoso y flexible.

### ¿Puedo usar los dos a la vez?
Sí, muchos desarrolladores usan Copilot para inline completions y OpenCode para tareas más complejas.