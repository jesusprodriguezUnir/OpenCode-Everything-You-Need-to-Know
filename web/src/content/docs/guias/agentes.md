---
title: Guía de Agentes IA
description: Entiende y domina los agentes especializados de OpenCode
---

# Guía de Agentes IA

## 🎯 Entendiendo los Agentes de OpenCode

**¿Qué son los Agentes?**
Los agentes en OpenCode son personalidades de IA especializadas con:
- **Prompts**: Instrucciones personalizadas y guías de comportamiento.
- **Herramientas**: Conjuntos de permisos para acceso a archivos, comandos shell, etc.
- **Modelos**: Modelos de IA dedicados o compartidos.
- **Temperatura**: Ajustes de creatividad vs. determinismo.
- **Verbosidad**: Nivel de detalle en las respuestas.

**Tipos de Agentes:**
1. **Agentes Primarios**: Agentes de conversación principales (alternas con `Tab`).
2. **Subagentes**: Agentes especializados invocados mediante `@mención`.
3. **Agentes de Sistema**: Agentes ocultos para compactación, titulación, etc.

---

## 🤖 Agentes Integrados

### Agente Build (`primary`):
- **Modo predeterminado**: Acceso total a herramientas (`write`, `edit`, `bash`).
- **Propósito**: Implementación y cambios de código.
- **Temperatura**: 0.1 (determinista).

### Agente Plan (`primary`):
- **Activación**: Presiona `Tab` para cambiar.
- **Propósito**: Análisis, planificación, lluvia de ideas.
- **Herramientas**: Limitadas (normalmente solo lectura/consulta por defecto).
- **Temperatura**: 0.3 (ligeramente creativo).

### Subagente General (`subagent`):
- **Invocación**: Automáticamente para tareas de varios pasos.
- **Propósito**: Ejecución de tareas complejas.
- **Caso de uso**: "Investiga e implementa X".

### Subagente Explore (`subagent`):
- **Invocación**: Para exploración del código base.
- **Propósito**: Análisis de solo lectura.
- **Caso de uso**: "Explica este código base".

---

## 🔄 Patrones de Flujo de Trabajo

### Patrón 1: Ciclo Plan → Build
```bash
# 1. Empieza en modo Plan (Tab)
[Plan] ¿Cómo implementarías la autenticación de usuarios?

# 2. Revisa y refina el plan
Añade un mecanismo de refresco de token JWT

# 3. Cambia a modo Build (Tab)
[Build] Implementa el sistema de autenticación según lo planeado
```

### Patrón 2: Colaboración Multi-Agente
```bash
# Usa @menciones para invocar agentes específicos
@explore Analiza vulnerabilidades de seguridad en @src/auth/

@general Basado en el análisis, crea un plan de corrección de seguridad

[Build] Implementa las correcciones de seguridad
```

---

## 🛠️ Creación de Agentes Personalizados

### Método 1: Configuración en Markdown (Recomendado)
```markdown
# ~/.config/opencode/agents/code-reviewer.md

name: Revisor de Código
description: Agente especializado para revisiones profundas de código
model: claude-sonnet-4.6
temperature: 0.2
verbosity: high

## Instrucciones
Eres un revisor de código senior. Tu trabajo es:
1. Revisar errores, problemas de seguridad y de rendimiento.
2. Sugerir mejoras siguiendo las mejores prácticas.
3. Centrarte en legibilidad y mantenibilidad.

## Herramientas
- read: true
- ask: true
- write: false  # El revisor no hace cambios
- edit: false
- bash: false
```

### Método 2: Configuración en JSON
```json
// ~/.config/opencode/agents/code-reviewer.json
{
  "name": "Revisor de Código",
  "description": "Agente especializado para revisiones profundas de código",
  "prompt": "Eres un revisor de código senior...",
  "model": "claude-sonnet-4.6",
  "tools": {
    "read": true,
    "ask": true,
    "write": false
  }
}
```

---

## 📋 Comandos de Gestión de Agentes

| Comando | Descripción |
|---------|-------------|
| `/agents` | Listar agentes disponibles |
| `/agents select` | Cambiar a un agente específico |
| `/agents create` | Crear un nuevo agente (interactivo) |
| `/agents edit` | Editar la configuración de un agente |
| `/agents delete` | Eliminar un agente |

---

## 🎯 Mejores Prácticas

1. **Empieza Simple**: Comienza con agentes básicos (revisor, implementador) y añade complejidad gradualmente.
2. **Prompts Claros**: Sé específico sobre el rol del agente e incluye ejemplos de salida esperada.
3. **Seguridad Primero**: Restringe el acceso a `bash` para agentes que no lo necesiten.
4. **Monitoreo de Rendimiento**: Ajusta los modelos y la temperatura según los resultados obtenidos.

---

## 📚 Siguientes Pasos

- [Guía de Skills](/guias/skills/) - Crea flujos de trabajo reutilizables.
- [Guía de Workflows](/avanzado/workflows/) - Diseña flujos de desarrollo complejos.
- [Guía de MCP](/avanzado/mcp/) - Extiende OpenCode con servidores externos.
