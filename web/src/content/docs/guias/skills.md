---
title: Sistema de Skills
description: Aprende a automatizar tus flujos de trabajo con Skills
---

# Sistema de Skills

## 🎯 ¿Qué son las Skills de OpenCode?
Las **Skills** son definiciones de comportamiento reutilizables que transforman flujos de trabajo complejos en comandos simples y repetibles. Piensa en ellas como "macros para IA" que encapsulan procesos de varios pasos en una sola invocación.

### Características Clave:
1. **Reutilizables**: Define una vez, úsalas en cualquier lugar.
2. **Compartibles**: Súbelas a tu control de versiones y compártelas con tu equipo.
3. **Personalizables**: Modifícalas para proyectos o flujos específicos.
4. **Seguras**: Ejecución controlada mediante permisos.
5. **Descubribles**: Se listan automáticamente en la interfaz de OpenCode.

---

## 📁 Estructura de un Archivo de Skill

### Plantilla Básica (SKILL.md):
```markdown
---
name: "Nombre de la Skill"
description: "Breve descripción de lo que hace"
version: "1.0.0"
tools: ["read", "ask", "write", "edit", "bash"]
---

# Nombre de la Skill

Descripción detallada del propósito y comportamiento de la skill.

## Comportamiento
- Paso 1: Qué debe hacer OpenCode primero.
- Paso 2: Siguiente acción a tomar.
- Paso 3: Pasos finales y limpieza.

## Guías
- Mejores prácticas a seguir.
- Restricciones o requisitos.

## Ejemplos
```bash
/nombre-skill argumento1 argumento2
```
```

---

## 🚀 Creando tu Primera Skill

### Paso 1: Crear el Directorio de Skills
```bash
# Skills globales (disponibles en todos los proyectos)
mkdir -p ~/.config/opencode/skills

# Skills específicas del proyecto (recomendado para equipos)
mkdir -p .opencode/skills
```

### Paso 2: Crear el Archivo de Skill
```bash
# Ejemplo: Skill de revisión de código
cat > .opencode/skills/revisar.md << 'EOF'
---
name: "Revisar Código"
description: "Revisión exhaustiva de seguridad, rendimiento y estilo"
tools: ["read", "ask"]
---

# Revisar Código

Realiza una revisión profunda centrada en seguridad y mantenibilidad.

## Comportamiento
1. Analiza el archivo o directorio especificado.
2. Busca vulnerabilidades de seguridad.
3. Revisa implicaciones de rendimiento.
4. Sugiere mejoras específicas con ejemplos.

## Ejemplos
/revisar @src/auth/index.ts
/revisar changed
EOF
```

---

## 📋 Categorías de Skills Disponibles

### 🔹 Flujo de Desarrollo
- **`/pr`**: Crea una rama de funcionalidad, divide los cambios en commits lógicos y genera la Pull Request.
- **`/tdd`**: Guía el ciclo Red-Green-Refactor escribiendo tests primero.
- **`/refactor`**: Analiza y aplica mejoras de estructura al código de forma segura.

### 🔹 Aseguramiento de Calidad
- **`/test`**: Genera suites de pruebas completas cubriendo casos borde.
- **`/audit`**: Escanea vulnerabilidades en el código y dependencias.

### 🔹 Gestión de Proyectos
- **`/todo`**: Gestiona tareas en un archivo `todos.md` con prioridades.
- **`/docs`**: Genera documentación de API, guías de usuario y actualiza READMEs.

---

## 📋 Gestión de Skills

| Comando | Descripción |
|---------|-------------|
| `/skills list` | Ver todas las skills disponibles |
| `/skills show [nombre]` | Ver detalles de una skill específica |
| `/skills install [url/ruta]` | Instalar una nueva skill |
| `/skills update` | Actualizar las skills instaladas |
| `/skills reload` | Recargar las skills desde el disco |

---

## 🎯 Mejores Prácticas de Seguridad

1. **Gestión de Permisos**: Usa los permisos mínimos necesarios. No des acceso a `bash` si la skill solo necesita leer archivos.
2. **Validación de Entrada**: Valida los argumentos y sanea las rutas de archivos.
3. **Revisión de Terceros**: Revisa siempre el contenido de una skill antes de instalarla desde una fuente externa.

---

## 📚 Siguientes Pasos

- [Referencia de Comandos](/avanzado/comandos/) - Lista completa de comandos.
- [Guía de Workflows](/avanzado/workflows/) - Diseña flujos de desarrollo.
- [Guía de MCP](/avanzado/mcp/) - Extiende OpenCode con servidores.
