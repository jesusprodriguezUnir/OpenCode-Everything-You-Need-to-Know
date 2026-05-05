---
title: Referencia de Comandos
description: Comandos slash y CLI disponibles en OpenCode
---

# Referencia de Comandos

Todos los comandos disponibles en OpenCode para controlar tu flujo de trabajo.

---

## 📋 Comandos Slash Esenciales

### Comandos Básicos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `/help` | Muestra ayuda y comandos disponibles | `/help` |
| `/connect` | Añade o configura proveedores LLM | `/connect` |
| `/init` | Inicializa el proyecto con AGENTS.md | `/init` |
| `/undo` | Deshacer último cambio (basado en Git) | `/undo` |
| `/redo` | Rehacer último cambio deshecho | `/redo` |
| `/share` | Crear enlace compartible de conversación | `/share` |
| `/export` | Exportar conversación a markdown | `/export` |
| `/compact` | Resumir conversación larga | `/compact` |

### Comandos de Proveedor y Modelo

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `/models` | Listar modelos disponibles | `/models` |
| `/sessions` | Gestionar sesiones de conversación | `/sessions` |
| `/thinking` | Mostrar/ocultar pasos de razonamiento | `/thinking off` |
| `/themes` | Cambiar tema de la TUI | `/themes` |
| `/config` | Ver/editar configuración | `/config` |

### Comandos de Agentes

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `/agents` | Listar agentes disponibles | `/agents` |
| `/agents select` | Cambiar a un agente específico | `/agents select code-reviewer` |
| `/agents create` | Crear nuevo agente | `/agents create` |
| `/agents edit` | Editar configuración de agente | `/agents edit reviewer` |

### Comandos de Skills

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `/skills` | Listar skills disponibles | `/skills` |
| `/skills install` | Instalar nuevo skill | `/skills install url` |
| `/skills update` | Actualizar skills | `/skills update` |
| `/skills test` | Probar ejecución de skill | `/skills test review` |

---

## 💻 Comandos CLI

### Uso Básico

```bash
# Iniciar TUI interactiva
opencode

# Ejecutar comando sin interacción
opencode run "Fix the bug in @src/utils/validation.ts"

# Iniciar en directorio específico
opencode /path/to/project

# Usar modelo específico
opencode --model gpt-5.2-codex
```

### Comandos CLI Avanzados

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `opencode serve` | Iniciar servidor HTTP | `opencode serve --port 8080` |
| `opencode web` | Iniciar interfaz web | `opencode web` |
| `opencode stats` | Mostrar estadísticas de uso | `opencode stats` |
| `opencode github` | Integración con GitHub | `opencode github install` |
| `opencode agent` | Gestión de agentes | `opencode agent create` |
| `opencode models` | Gestión de modelos | `opencode models list` |

### Modo Servidor

```bash
# Iniciar servidor headless
opencode serve --port 3000 --host 0.0.0.0

# Endpoints API:
# POST /v1/chat - Enviar mensaje
# GET /v1/status - Estado del servidor
# GET /v1/models - Modelos disponibles

# Ejemplo con curl:
curl -X POST http://localhost:3000/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello OpenCode", "model": "gpt-5.2-codex"}'
```

---

## 🔧 Crear Comandos Personalizados

### Método 1: Markdown

```markdown
# .opencode/commands/analyze.md

# Comando de Análisis de Código

Analiza el código en busca de problemas de rendimiento.

## Uso
```bash
/analyze [file]
```

## Comportamiento
1. Analizar archivo especificado
2. Identificar cuellos de botella
3. Sugerir optimizaciones

## Ejemplos
```bash
/analyze @src/utils/processing.ts
/analyze @src/ --focus memory
```
```

### Método 2: JSON

```json
// .opencode/commands/optimize.json
{
  "name": "optimize",
  "description": "Optimizar rendimiento del código",
  "command": "analiza el código en $1 para oportunidades de optimización",
  "tools": ["read", "ask"],
  "agent": "performance-reviewer"
}
```

### Método 3: Script Shell

```bash
# .opencode/commands/deploy.sh
#!/bin/bash
echo "Iniciando despliegue..."
!git push origin main
!npm run build
!docker build -t myapp .
echo "¡Despliegue completo!"
```

---

## ⛓️ Encadenamiento de Comandos

### Comandos Secuenciales

```bash
# Ejecutar en secuencia
/init && /analyze @src/ && /review changed
```

### Ejecución Condicional

```bash
# Ejecutar solo si anterior succeeded
/test @src/ && /deploy

# Ejecutar alternativa si falla
/test @src/ || /fix-tests
```

### Pipeline de Salida

```bash
# Usar salida de un comando como entrada
!git status | /analyze-changes
```

---

## ⚡ Patterns Avanzados

### 1. Comandos Interactivos

```markdown
# .opencode/commands/setup.md

# Comando de Setup Interactivo

## Comportamiento
1. Preguntar tipo de proyecto (React, Node.js, Python...)
2. Solicitar preferencias de framework
3. Configurar testing
4. Generar estructura del proyecto
```

### 2. Generación de Archivos

```bash
# Uso
/generate component Button
/generate api users --method GET

# Genera:
// - Componente/endpoint
// - Tests asociados
// - Actualiza exports
```

### 3. Automatización de Workflow

```bash
# Workflow completo
/workflow "user-authentication"

# Equivalente a:
!git checkout -b feature/user-authentication
/tdd "Implementar autenticación de usuario"
/test
/pr
/review
```

---

## 🛡️ Seguridad de Comandos

### Niveles de Permiso

```yaml
permissions:
  read: true      # Puede leer archivos
  write: true    # Puede escribir archivos
  edit: true     # Puede editar archivos
  bash: true     # Puede ejecutar comandos shell
  network: false # No puede hacer requests de red
  env: false     # No puede acceder a variables de entorno
```

### Mejores Prácticas

**✓ Haz:**
- Validar todos los argumentos de entrada
- Usar permisos mínimos necesarios
- Loguear ejecución de comandos

**✗ No hagas:**
- Ejecutar comandos shell arbitrarios
- Acceder a variables de entorno sensibles
- Hacer requests de red no autorizados

---

## 🔧 Solución de Problemas

### Comando no encontrado

```bash
# Verificar ubicación
ls -la .opencode/commands/

# Recargar comandos
/commands reload

# Verificar permisos
chmod +x .opencode/commands/command.sh
```

### Error de ejecución

```bash
# Habilitar modo debug
/commands run command-name --debug

# Ver logs
!cat ~/.local/share/opencode/command-debug.log
```

### Errores de permisos

```bash
# Ver permisos del comando
/commands permissions command-name

# Ejecutar con permisos elevados (¡cuidado!)
/commands run command-name --sudo
```

---

## 🎯 Mejores Prácticas

1. **Un comando, una responsabilidad** - Mantén simple cada comando
2. **Diseña para composición** - Salida que pueda pipearse a otros
3. **Prioriza seguridad** - Valida inputs, usa mínimo privilegio
4. **Asegura confiabilidad** - Maneja errores gracefulmente
5. **Optimiza rendimiento** - Cachea operaciones caras
6. **Mantén documentación** - Ejemplos claros y ayuda precisa

---

## 📚 Relacionado

- [Guía de Skills](/guias/skills/)
- [Guía de Agentes](/guias/agentes/)
- [Guía de MCP](/avanzado/mcp/)
- [Guía de Workflows](/avanzado/workflows/)