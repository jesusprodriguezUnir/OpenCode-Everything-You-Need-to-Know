---
title: OpenCode - Asistente de IA de Código Abierto
description: La herramienta de programación asistida por IA de código abierto
template: splash
hero:
  tagline: Tu asistente de IA en la terminal - Flexible, extensible y sin dependencias de proveedor
  image:
    file: ../../assets/logo.png
  actions:
    - text: Comenzar Ahora
      link: /guias/inicio-rapido/
      icon: rocket
    - text: Ver Ejemplos
      link: /ejemplos/
      icon: open-book
---

## ¿Qué es OpenCode?

OpenCode es una **herramienta de programación asistida por IA** que funciona directamente en tu terminal. A diferencia de otras herramientas, te da libertad total para elegir qué modelos de IA usar, sin suscripciones obligatorias ni dependencia de un solo proveedor.

OpenCode es una herramienta de programación asistida por IA que ofrece una alternativa de código abierto a herramientas como Claude Code, Cursor o GitHub Copilot.

## ¿Por qué OpenCode?

| Característica | OpenCode | Claude Code | Cursor | GitHub Copilot |
|---------------|----------|-------------|--------|----------------|
| **Flexibilidad de Modelos** | Multi-proveedor (OpenAI, Anthropic, DeepSeek, etc.) | Principalmente Anthropic | Multi-proveedor | Multi-proveedor |
| **Modelo de Precios** | Pago por uso (basado en API) | Suscripción | Suscripción | Suscripción |
| **Interfaz Principal** | Terminal nativa (CLI-first) | Web app + integraciones | Editor de escritorio | Extensión IDE |
| **Código Abierto** | Sí | Propietario | Propietario | Propietario |
| **Personalización** | Alta (archivos de config, agentes, workflows) | Moderada | Alta | Baja-Moderada |

### ¿Por qué usar OpenCode?

- **🎯 Sin dependencia de proveedor**: Usa OpenAI, Anthropic, Google, DeepSeek, modelos locales o todos a la vez
- **💰 Paga solo por lo que usas**: Sin suscripciones mensuales, precios transparentes por token
- **⌨️ Flujo de trabajo terminal-first**: Permanece en tu entorno de desarrollo sin cambiar de contexto
- **🛠️ Arquitectura extensible**: Crea skills, agentes y workflows personalizados
- **🏢 Listo para empresa**: SSO, espacios de trabajo en equipo, configuración centralizada

---

## 🚀 Ejemplos en Acción

### Ejemplo 1: Análisis de Código

```bash
# Inicia OpenCode en tu proyecto
opencode .

# Haz preguntas sobre tu código
¿Qué hace este proyecto? @README.md

# Analiza archivos específicos
Ayúdame a entender la autenticación en @src/auth/
```

### Ejemplo 2: Implementación de Funcionalidades

```bash
# Activa el modo Build (tecla Tab)
[Build] Crea un componente React para mostrar usuarios desde @api/users.ts

# OpenCode analizará tu código existente y creará el componente
```

### Ejemplo 3: Refactoring y Mejoras

```bash
# Solicita refactoring específico
[Plan] ¿Cómo mejoraría el rendimiento de @src/utils/procesamiento.js?

# Revisa el plan y activa Build para implementar
[Build] Implementa las mejoras sugeridas
```

### Ejemplo 4: Comandos de Shell Integrados

```bash
# Ejecuta comandos directamente
!git status

# Combina con análisis de IA
Ejecuta !npm test y dime qué pruebas fallan y por qué
```

> **💡 Tip**: Usa `!` seguido de cualquier comando de terminal. OpenCode captura la salida y la incluye en su contexto.

---

## 🚀 Inicio Rápido (5 Minutos)

### 1. Instalar OpenCode

```bash
# Método recomendado
curl -fsSL https://opencode.ai/install | bash

# Alternativa: Homebrew
brew install anomalyco/tap/opencode

# Verificar instalación
opencode --version
```

### 2. Configurar Zen (Recomendado para Principiantes)

```bash
# Iniciar OpenCode
opencode

# En la TUI, ejecutar:
/connect

# Selecciona "opencode" y sigue el enlace para obtener tu API key
# Zen proporciona modelos optimizados con precios por uso
```

### 3. Prueba tus Primeros Comandos

```bash
# Inicia en tu directorio de proyecto
cd /path/to/your/project
opencode .

# Pide a OpenCode que analice tu código
¿Qué hace este proyecto? @README.md

# Obtén ayuda con un archivo específico
Ayúdame a entender la autenticación en @src/auth/

# Cambia entre modos Plan y Build (tecla Tab)
[Plan] ¿Cómo implementarías esta funcionalidad?
[Build] Adelante, implméntalo
```

### 4. Atajos de Teclado Esenciales

- **Tab**: Cambiar entre modos Plan (solo lectura) y Build (lectura-escritura)
- **@**: Referenciar archivos en tu proyecto
- **!**: Ejecutar comandos de shell
- **/**: Acceder a comandos de barra
- **Ctrl+C**: Salir de OpenCode

---

## 🎯 Características Principales

OpenCode se construye sobre cuatro pilares:

### 1. 🚀 Zen Model Router - Modelos IA a tu medida

Zen te da acceso a más de 75 modelos de IA con una sola API key. Paga por token, sin suscripciones. Modelos gratuitos disponibles para aprender.

| Característica | Descripción |
|----------------|-------------|
| **Multi-proveedor** | OpenAI, Anthropic, Google, DeepSeek y más |
| **Precios claros** | Solo pagas lo que usas |
| **Modelos gratuitos** | Para aprendizaje y pruebas |
| **Trabajo en equipo** | Espacios compartidos con facturación centralizada |

**[📖 Guía de Zen](/guias/zen/)**

### 2. ⌨️ TUI Mastery - Tu oficina en la terminal

La Terminal UI de OpenCode está diseñada para desarrolladores que viven en la terminal.

| Atajo | Función |
|-------|---------|
| `@` | Referenciar archivos en tu proyecto |
| `!` | Ejecutar comandos de shell |
| `/` | Comandos de barra (ayuda, config, etc.) |
| `Tab` | Cambiar entre modo Plan y Build |
| `Ctrl+C` | Salir de OpenCode |
| `Ctrl+S` | Guardar sesión |
| `Ctrl+L` | Limpiar pantalla |

**[🎮 Guía de TUI](/guias/tui/)**

### 3. 🤖 Agentes IA - Especialistas en tu flujo

Los agentes son asistentes IA con herramientas y permisos específicos:

- **Plan (Tab)**: Análisis y planificación - solo lectura
- **Build (Tab)**: Implementación - leer y escribir código
- **Explore**: Explorador del codebase
- **General**: Tareas complejas multi-paso
- **Tú mismo**: Crea agentes personalizados

**[🤖 Guía de Agentes](/guias/agentes/)**

### 4. 🔧 Skills - Automatiza tu trabajo

Los skills transforman flujos complejos en comandos simples:

```bash
# Instalar un skill
/skills install https://github.com/user/my-skill

# Usar un skill
/review     # Revisión de código
/deploy     # Despliegue automatizado
/test       # Ejecutar pruebas
```

**[🔧 Guía de Skills](/guias/skills/)**

---

## 🗺️ Ruta de Aprendizaje

### Semana 1: Fundamentos
- [x] Instalar OpenCode y configurar Zen
- [x] Aprender navegación básica de TUI (Tab, @, !, /)
- [x] Probar modelos gratuitos para experimentación
- [ ] Completar la [Guía de Inicio Rápido](/guias/inicio-rapido/)

### Semana 2: Flujo de Trabajo Core
- [ ] Dominar referencias de archivos e integración de shell
- [ ] Practicar ciclo Plan → Build
- [ ] Configurar tu primer agente personalizado
- [ ] Explorar la [Guía de TUI Mastery](/guias/tui/)

### Semana 3: Características Avanzadas
- [ ] Crear skills específicos del proyecto
- [ ] Configurar espacio de trabajo en equipo
- [ ] Implementar integración CI/CD
- [ ] Estudiar la [Guía de Agentes](/guias/agentes/)

### Semana 4: Dominio
- [ ] Construir servidores MCP personalizados
- [ ] Crear plantillas de skills para tu equipo
- [ ] Optimizar uso de modelos y costos
- [ ] Explorar [Ejemplos de Flujos de Trabajo](/avanzado/workflows/)

**[🎯 Ver Ruta Completa de Aprendizaje](/ruta-aprendizaje/)**

---

## ❓ Preguntas Frecuentes

### ¿OpenCode es gratuito?
OpenCode es de código abierto y gratuito para usar. Solo pagas por los modelos de IA que uses a través de la API de tu proveedor (como Zen u otros).

### ¿Qué modelos puedo usar?
OpenCode soporta múltiples proveedores incluyendo OpenAI, Anthropic, Google, DeepSeek, y muchos más a través de Zen.

### ¿Necesito conocimientos de terminal?
Para aprovechar al máximo OpenCode, es útil sentirse cómodo con la línea de comandos, pero puedes empezar con comandos básicos e ir aprendiendo.

---

## Próximos Pasos

1. **Instala OpenCode** y prueba los modelos gratuitos
2. **Practica** el ciclo Plan → Build (tecla Tab)
3. **Crea** tu primer agente o skill personalizado
4. **Únete** a la comunidad para soporte e inspiración

> **💡 Recuerda**: OpenCode es una herramienta para mejorar tus habilidades, no para reemplazarlas. Los mejores desarrolladores usan la IA como un asistente poderoso, muletas no.