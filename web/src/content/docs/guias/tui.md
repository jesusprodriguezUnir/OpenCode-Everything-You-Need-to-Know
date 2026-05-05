---
title: TUI Mastery
description: Domina la interfaz de terminal para máxima productividad
---

# Guía de TUI Mastery

## 🎯 Descripción General

La Interfaz de Usuario de Terminal (TUI) de OpenCode es donde ocurre la magia. Esta guía cubre todo lo que necesitas dominar la TUI para máxima productividad.

## 🖥️ Vista General del Layout de TUI

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ OpenCode v1.5.2 │ Proyecto: /Users/you/proyecto │ Modelo: gpt-5.2-codex      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ Tú: ¿Puedes ayudarme a corregir el bug en @src/utils/validation.ts?        │
│                                                                             │
│ OpenCode: Analizaré el archivo validation.ts e identificaré el bug...      │
│                                                                             │
│ [Pensando...]                                                               │
│ • Leyendo archivo: src/utils/validation.ts                                  │
│ • Analizando lógica de validación...                                       │
│ • Problema potencial encontrado en línea 45...                            │
│                                                                             │
│ El bug está en la regex de validación de email. Aquí está la corrección:  │
│                                                                             │
│ ```typescript                                                              │
│ // Antes:                                                                   │
│ const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;                                  │
│                                                                             │
│ // Después:                                                                 │
│ const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;     │
│ ```                                                                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Build] Presiona Tab para cambiar agentes • Escribe /help para comandos • │
└─────────────────────────────────────────────────────────────────────────────┘
```

## ⌨️ Atajos de Teclado Esenciales

| Atajo | Acción | Descripción |
|-------|--------|-------------|
| **Tab** | Cambiar agentes | Alternar entre modos Build y Plan |
| **Ctrl+C** | Salir | Salir de OpenCode (presiona dos veces para forzar) |
| **Ctrl+R** | Rehacer | Rehacer el último cambio deshecho |
| **Ctrl+U** | Deshacer | Deshacer el último cambio |
| **Ctrl+L** | Limpiar | Limpiar pantalla de terminal |
| **Ctrl+K** | Buscar | Buscar en historial de comandos |
| **↑/↓** | Historial | Navegar por historial de comandos |
| **@** | Búsqueda de archivos | Búsqueda fuzzy para archivos del proyecto |
| **!** | Prefijo shell | Ejecutar comando de shell |
| **/** | Modo comando | Entrar en modo de comando de barra |
| **Esc** | Cancelar | Cancelar operación actual |

## 📁 Sistema de Referencia de Archivos (@ Sintaxis)

La sintaxis `@` de OpenCode revoluciona cómo referencias archivos:

### Referencia Básica de Archivo:

```bash
# Referenciar un archivo específico
¿Puedes explicar la lógica de autenticación en @src/auth/index.ts?

# Búsqueda fuzzy - OpenCode te ayudará a encontrar el archivo
Necesito actualizar la configuración en @config
```

### Múltiples Referencias de Archivos:

```bash
# Comparar dos archivos
Compara la implementación en @src/old-impl.ts y @src/new-impl.ts

# Analizar directorio completo
¿Cuál es la estructura de @src/components/?
```

### Referencias de Líneas Específicas:

```bash
# Referenciar líneas específicas
Revisa las líneas 45-60 en @src/utils/validation.ts

# Ubicación del error
Hay un error en la línea 123 en @src/api/server.ts
```

## 💻 Integración de Comandos de Shell

Ejecuta comandos de shell directamente dentro de OpenCode:

### Comandos de Shell Básicos:

```bash
# Ejecutar cualquier comando de shell con prefijo !
!ls -la
!git status
!npm install
!docker ps
```

### Salida de Comando en Contexto:

```bash
# Usar salida de comando en tu prompt
!pwd
# OpenCode ve: "/Users/you/project"

Ahora crea un nuevo directorio aquí llamado "tests"
```

### Encadenar Comandos:

```bash
# Múltiples comandos
!git status && !git diff

# Capturar salida para análisis
!cat package.json | grep version
¿Qué versión de React estamos usando basándonos en la salida anterior?
```

## 🖼️ Análisis de Imágenes

OpenCode puede analizar imágenes arrastradas a la terminal:

### Usando Imágenes:

1. **Arrastra y suelta** cualquier archivo de imagen en la terminal
2. OpenCode automáticamente la añade al prompt
3. Referencia la imagen en tus consultas

### Ejemplo de Flujo de Trabajo:

```bash
# 1. Arrastra mockup de UI a la terminal
# 2. OpenCode detecta: [Imagen #1: dashboard-mockup.png]

Crea un componente de React que coincida con este diseño [Imagen #1]
```

### Tipos de Imagen Soportados:
- PNG, JPEG, GIF, WebP
- Capturas de pantalla, mockups, diagramos
- Diseños UI, diagramas de arquitectura

## 🔄 Cambio de Agente (Build vs Plan)

El sistema de agente dual de OpenCode es su secreto mejor guardado:

### Modo Plan (Solo Lectura):
- **Activar**: Presiona `Tab` (muestra `[Plan]` en barra de estado)
- **Propósito**: Analizar, planear, hacer lluvia de ideas sin hacer cambios
- **Caso de uso**: "¿Cómo implementarías esta funcionalidad?"

### Modo Build (Lectura-Escritura):
- **Activar**: Presiona `Tab` (muestra `[Build]` en barra de estado)
- **Propósito**: Realizar cambios reales de código
- **Caso de uso**: "Adelante, implementa el plan"

### Ejemplo de Flujo de Trabajo:

```bash
# Empezar en modo Plan (por defecto)
[Plan] ¿Cómo añadirías modo oscuro a esta app de React?

# Revisar el plan, hacer preguntas
¿Qué tal variables CSS vs Tailwind?

# Cambiar a modo Build (Tab)
[Build] ¡Suena bien! Implémentalo
```

## 💬 Gestión de Conversaciones

### Persistencia de Sesiones:
- Las conversaciones se guardan automáticamente
- Continúa donde lo dejaste
- Sistema de deshacer/rehacer basado en git

### Múltiples Sesiones:

```bash
# Listar sesiones
/sessions

# Cambiar sesiones
/sessions switch nombre-sesion

# Eliminar sesión
/sessions delete old-session
```

### Exportar Conversaciones:

```bash
# Exportar a markdown
/export

# Crea: opencode-conversation-2025-02-26.md
```

## ⚡ Características Avanzadas de TUI

### 1. Modo Compacto:

```bash
# Resumir conversaciones largas
/compact

# Enfocar en temas específicos
/compact "Enfocarse en los cambios de autenticación"
```

### 2. Integración con Editor:

```bash
# Abrir editor externo para mensajes largos
/editor

# Usa la variable de entorno $EDITOR
```

### 3. Personalización de Tema:

```bash
# Cambiar tema de TUI
/themes

# Seleccionar de temas disponibles
# Populares: catppuccin, dracula, nord, solarized
```

### 4. Visualización de Costos en Tiempo Real:
- Uso de tokens mostrado en barra de estado
- Estimaciones de costos para la sesión actual
- Precios específicos del proveedor

## 🚀 Consejos de Productividad

### 1. Navegación Rápida de Archivos:

```bash
# Usar @ con nombres parciales
@utils  # Encuentra directorio utils/ o utils.ts
@.env   # Encuentra archivos .env
@test   # Encuentra archivos de test
```

### 2. Historial de Comandos:
- Presiona `↑` para cycles through previous commands
- `Ctrl+K` para buscar en historial
- El historial persiste entre sesiones

### 3. Entrada Multi-línea:

```bash
# Shift+Enter para nuevas líneas
Esta es una consulta multi-línea
que abarca
múltiples líneas
```

### 4. Cambio Rápido de Proveedor:

```bash
# Cambiar modelo sobre la marcha
/models

# Seleccionar de la lista
# Los cambios se aplican inmediatamente
```

## 🛠️ Solución de Problemas de TUI

### Problemas Comunes:

**1. TUI no renderiza correctamente**

```bash
# Verificar compatibilidad de terminal
echo $TERM

# Intentar diferente emulador de terminal
# WezTerm o Alacritty recomendados
```

**2. Retraso de entrada o respuesta lenta**

```bash
# Verificar recursos del sistema
!top

# Intentar modelo más ligero
/models
# Seleccionar modelo más pequeño
```

**3. Imágenes no funcionan**

```bash
# Verificar soporte de imágenes en terminal
# Usar WezTerm para mejor soporte de imágenes

# Alternativa: describir imagen en texto
```

**4. Referencias de archivos no encontradas**

```bash
# Verificar directorio actual
!pwd

# Usar rutas absolutas si es necesario
@/ruta/absoluta/a/archivo.ts
```

### Optimización de Rendimiento:

```bash
# Usar temas más ligeros
/themes
# Seleccionar "minimal" o "simple"

# Desactivar pasos de pensamiento
/thinking off

# Reducir verbosidad en configuraciones del agente
```

## 🎨 Personalización de TUI

### Personalización de Keybinds:

```json
// ~/.config/opencode/keybinds.json
{
  "switch_agent": "Tab",
  "exit": ["Ctrl+C", "Ctrl+D"],
  "clear": "Ctrl+L",
  "history_search": "Ctrl+K"
}
```

### Configuración de Tema:

```json
// ~/.config/opencode/themes.json
{
  "current": "catppuccin",
  "custom": {
    "background": "#1e1e2e",
    "foreground": "#cdd6f4",
    "accent": "#89b4fa"
  }
}
```

### Personalización de Barra de Estado:

```json
// ~/.config/opencode/config.json
{
  "ui": {
    "status_bar": {
      "show_cost": true,
      "show_tokens": true,
      "show_model": true,
      "show_agent": true
    }
  }
}
```

## 🎯 Lista de Dominio

- [ ] Puedo cambiar entre modos Plan y Build con Tab
- [ ] Sé cómo referenciar archivos con sintaxis @
- [ ] Puedo ejecutar comandos de shell con prefijo !
- [ ] Entiendo cómo usar análisis de imágenes
- [ ] Conozco los atajos de teclado esenciales
- [ ] Puedo gestionar conversaciones y sesiones
- [ ] Sé cómo solucionar problemas comunes
- [ ] He personalizado la TUI a mis preferencias personales

> **💡 Consejo**: Domina la tecla `Tab` para cambiar entre modos Plan y Build. Este simple hábito mejorará dramáticamente la eficiencia de tu flujo de trabajo con OpenCode.

---

## 📚 ¿Qué Sigue?

- [Guía de Agentes](/guias/agentes/) - Trabaja con agentes IA
- [Guía de Skills](/guias/skills/) - Crea flujos de trabajo reutilizables
- [Guía de Workflows](/avanzado/workflows/) - Diseña flujos de desarrollo
- [Volver a la Guía Principal](/)