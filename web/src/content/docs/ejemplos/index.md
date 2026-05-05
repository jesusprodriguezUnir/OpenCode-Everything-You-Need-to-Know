---
title: Ejemplos Prácticos
description: Casos de uso comunes de OpenCode con ejemplos paso a paso
---

# Ejemplos Prácticos de OpenCode

Aquí encontrarás ejemplos reales de cómo usar OpenCode en tu día a día como desarrollador.

---

## 🐛 Depuración y Bugs

### Encontrar y corregir un bug

```bash
# Inicia en tu proyecto
opencode .

# Describe el problema
[Plan] Hay un error en la función de login que no puedo identificar

# Analiza el código para entender el problema
Revisa @src/auth/login.ts y dime qué podría estar causando timeouts

# Implementa la corrección
[Build] Corrige el timeout en la línea 45
```

### Debug con Stack Traces

```bash
# Pega el stack trace directamente
[Plan] Este error ocurre cuando subo archivos grandes:

Error: RangeError: Maximum call stack exceeded
    at compressImage (utils/image.js:234)
    at processImage (utils/image.js:189)
    at uploadHandler (handlers/upload.js:45)

¿Cuál es la causa y cómo lo soluciono?
```

---

## 🧪 Testing

### Escribir tests para una función

```bash
# Genera tests unitarios
[Build] Crea tests unitarios para @utils/validation.js usando Vitest

# El resultado incluirá:
# - Tests para casos válidos
# - Tests para casos edge
# - Tests para casos de error
```

### Ejecutar y analizar resultados de tests

```bash
# Ejecuta tests y analiza
!npm test

# Ahora pregunta sobre los fallos
[Plan] Hay 3 tests fallando. ¿Cuál es la causa raíz de cada uno?
```

---

## 📝 Refactoring

### Mejorar código existente

```bash
# Solicita análisis de mejoras
[Plan] ¿Cómo puedo refactorizar @src/components/Table.jsx para ser más performante?

# Revisa el plan y ejecuta
[Build] Aplica las mejoras sugeridas, manteniendo la API existente
```

### Modernizar código legacy

```bash
# Conversión a patrones modernos
[Plan] Convierte este componente de class component a functional component con hooks:

@src/components/UserProfile.jsx

# Incluye:
# - useState para estado
# - useEffect para efectos
# - PropTypes o TypeScript
```

---

## 🆕 Nuevas Funcionalidades

### Crear una API REST completa

```bash
# Solicita la implementación
[Build] Crea una API REST para gestión de usuarios con:

- GET /api/users - Listar usuarios
- POST /api/users - Crear usuario
- GET /api/users/:id - Obtener usuario
- PUT /api/users/:id - Actualizar usuario
- DELETE /api/users/:id - Eliminar usuario

Usa Express.js y sigue las rutas en @src/routes/
```

### Crear componente UI

```bash
# Componente con especificaciones
[Build] Crea un componente Modal en @src/components/Modal.tsx que:
- Acepta props: isOpen, title, children, onClose
- Usa React Portal
- Incluye animación de fade
- Es accesible (WAI-ARIA)
```

---

## 🔍 Exploración de Código

### Entender un codebase nuevo

```bash
# Análisis completo del proyecto
[Explore] Analiza este proyecto y dime:
- ¿Qué tecnología usa?
- ¿Cuál es la estructura de carpetas?
- ¿Dónde está la lógica de autenticación?
- ¿Cómo se estructura la base de datos?
```

### Buscar código específico

```bash
# Encontrar dónde se usa algo
[Explore] ¿Dónde se define y usa la función `parseToken` en este proyecto?

# Encontrar patrones
[Explore] Encuentra todos los archivos que usan `useEffect` y no tienen cleanup
```

---

## ⚙️ Configuración y Mantenimiento

### Actualizar dependencias

```bash
# Revisar y actualizar paquetes
[Plan] ¿Cuáles son las dependencias desactualizadas en package.json?
Sugiere cómo actualizarlas sin romper nada
```

### Configurar CI/CD

```bash
# Crear pipeline
[Build] Crea un workflow de GitHub Actions en .github/workflows/ci.yml que:
- Ejecute tests en Node 18 y 20
- Corra lint y typecheck
- Suba coverage a Codecov
- Use caching para npm
```

---

## 🧹 Limpieza y Organización

### Eliminar código no usado

```bash
# Encontrar código muerto
[Explore] Encuentra funciones que están definidas pero nunca usadas en @src/

# Luego elimínalas
[Build] Elimina las funciones no usadas que identificaste
```

### Organizar imports

```bash
# Reordenar y limpiar
[Build] Organiza los imports en @src/App.tsx:
- Imports de Node.js primero
- Luego de terceros
- Finalmente locales
- Elimina los no usados
```

---

## 🚀 Tips Avanzados

### Chaining de comandos

```bash
# Combina análisis + implementación
!git diff --name-only | xargs -I {} echo "Analizando {}" && [Plan] ¿Qué cambios hay en estos archivos?

# Usar resultado anterior
El código que analizamos antes, ¿cómo lo haríamos más performante?
```

### Usar el modo correto

| Modo | Cuándo usarlo |
|------|----------------|
| **Plan** | Analizar, planificar, entender, explorar |
| **Build** | Escribir código, crear archivos, modificar |

> **💡 Tip**: Cambia entre modos con `Tab`. Plan es más rápido y barato porque solo lee. Build hace cambios reales.

---

## 📚 Más Recursos

- [Guía de Inicio Rápido](/guias/inicio-rapido/)
- [Guía de TUI](/guias/tui/)
- [Guía de Zen](/guias/zen/)
- [Referencia de Comandos](/avanzado/comandos/)