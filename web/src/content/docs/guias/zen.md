---
title: Zen Model Router
description: La puerta de entrada a modelos IA optimizados para programación
---

# Guía de Zen Model Router

## 🎯 ¿Qué es Zen?

**OpenCode Zen** es un gateway de modelos seleccionado que proporciona modelos IA verificados y optimizados específicamente para tareas de programación con precios por uso.

### Beneficios Clave:

- **Modelos Verificados**: Probados y evaluados para programación
- **Transparencia de Costos**: Paga por token, sin suscripciones mensuales
- **Sin Bloqueo**: Funciona junto con otros proveedores
- **Características de Equipo**: Gestión de espacios de trabajo, facturación centralizada
- **Soporte BYOK**: Trae tus propias claves de OpenAI/Anthropic

## 📊 Especificaciones Clave

| Característica | Especificación |
|----------------|----------------|
| **Soporte de Modelos** | 75+ proveedores vía AI SDK |
| **Modelo de Precios** | Pago por token |
| **Modelos Gratuitos** | MiniMax M2.5 Free, Big Pickle (beta) |
| **Ejemplo de Costo** | GPT 5.2 Codex: $1.75/1M input, $14/1M output |
| **Características de Equipo** | Gestión de espacios de trabajo, facturación centralizada |
| **Soporte BYOK** | ✅ Sí (trae tus propias claves) |

## 🚀 Cómo Funciona Zen

### Configuración Paso a Paso:

1. **Regístrate**: Visita [opencode.ai/auth](https://opencode.ai/auth)
2. **Añade Facturación**: Añade tarjeta de crédito para uso por uso
3. **Obtén tu API Key**: Copia tu única API key de Zen
4. **Configura en OpenCode**:
   ```bash
   opencode
   /connect
   # Selecciona "opencode" y pega tu clave
   ```
5. **Selecciona Modelos**: Usa `/models` para ver los modelos seleccionados disponibles

## 💰 Modelos Disponibles y Precios

| Modelo | Costo Input | Costo Output | Mejor Para |
|--------|-------------|--------------|------------|
| **GPT 5.2 Codex** | $1.75/1M | $14/1M | Programación general, tareas complejas |
| **Claude Sonnet 4.6** | $3-6/1M | $15-22.50/1M | Razonamiento, análisis |
| **Gemini 2.5 Pro** | $2.50/1M | $10/1M | Tareas multimodales |
| **Qwen 2.5 Coder** | $0.50/1M | $2/1M | Programación económica, tareas simples |
| **MiniMax M2.5 Free** | Gratis | Gratis | Aprendizaje, experimentación |

## 🤔 Zen vs Proveedores Directos

### ✅ Usa Zen Cuando:
- Quieres modelos seleccionados y optimizados para programación
- Prefieres pago por uso sobre suscripciones mensuales
- Necesitas acceso a múltiples proveedores con una sola API key
- Quieres los últimos modelos sin configuración manual
- Es nuevo en programación con IA y quieres una experiencia guiada

### 🔷 Usa Proveedores Directos Cuando:
- Ya tienes créditos de API existentes
- Necesitas versiones específicas de modelos no disponibles en Zen
-Tienes acuerdos empresariales con proveedores específicos
- Usas modelos locales o autoalojados

## 💸 Comparación de Costos

| Herramienta | Modelo de Precios | Costo Mensual (Promedio) | Flexibilidad de Modelos |
|-------------|-------------------|--------------------------|------------------------|
| **OpenCode Zen** | Pago por uso | $5-50 (basado en uso) | 75+ modelos |
| **Claude Code Pro** | Suscripción | $20/mes | Solo Claude |
| **Cursor Pro** | Suscripción | $20/mes | Selección limitada |
| **GitHub Copilot** | Suscripción | $10/mes | Solo modelos de GitHub |

> **💡 Consejo**: Comienza con los modelos gratuitos de Zen (MiniMax M2.5 Free) para aprender OpenCode, luego actualiza a modelos de pago según sea necesario.

## 🛠️ Características Avanzadas de Zen

### 1. Cambio de Modelo

```bash
# Cambiar entre modelos sobre la marcha
/models
# Selecciona de la lista usando flechas
```

### 2. Monitoreo de Uso

```bash
# Verificar tu uso de tokens
!opencode stats
# o en TUI, los costos se muestran en tiempo real
```

### 3. Espacios de Trabajo en Equipo
- Crear espacios de trabajo en equipo para facturación compartida
- Establecer límites de uso mensuales por miembro del equipo
- Selección centralizada de modelos para consistencia

### 4. BYOK (Trae Tu Propia Clave)
- Usar tus claves existentes de OpenAI/Anthropic
- Todavía acceder a los modelos seleccionados de Zen
- Facturación y gestión unificada

## 🚨 Solución de Problemas de Zen

### Problemas Comunes:

**1. "API key inválida"**
- Regenera la clave en [opencode.ai/auth](https://opencode.ai/auth)

**2. "No hay modelos disponibles"**
- Verifica el estado de facturación, puede que necesites añadir método de pago

**3. "Rate limited"**
- Actualiza tu plan o espera al reinicio

**4. "Modelo no responde"**
- Prueba un modelo alternativo o verifica el estado del proveedor

### Comandos de Depuración:

```bash
# Verificar estado de conexión
!opencode models --provider opencode

# Probar API key
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.opencode.ai/v1/models
```

> **🚨 NOTA DE SEGURIDAD**: Nunca hagas commit de tu API key de Zen al control de versiones. Usa variables de entorno o el almacenamiento seguro de credenciales de OpenCode.

## 📊 Zen vs Suscripciones Tradicionales

### Modelo Tradicional (Claude Code, Cursor):
- Suscripción mensual ($20/mes)
- Limitado a modelos específicos
- Pagas incluso si no lo usas
- Bloqueo del proveedor

### Modelo Zen:
- Paga por token usado
- Acceso a 75+ modelos
- Sin compromiso mensual
- Mezcla y combina proveedores
- Precios transparentes

### Ejemplo de Cálculo de Costo:
- 100,000 tokens input + 50,000 tokens output
- Usando GPT 5.2 Codex: (0.1 * $1.75) + (0.05 * $14) = $0.175 + $0.70 = $0.875
- El mismo uso en Claude Code: $20/mes (mínimo)

> **📊 Uso Real**: La mayoría de los desarrolladores gastan $5-20/mes con Zen, significativamente menos que las suscripciones fijas, mientras obtienen acceso a mejores modelos.

## 🎯 Mejores Prácticas

1. **Empieza Gratis**: Comienza con MiniMax M2.5 Free para aprender
2. **Monitorea Uso**: Usa `!opencode stats` regularmente
3. **Elige Sabiamente**: Combina modelo con tarea (programación vs análisis)
4. **Establece Límites**: Usa límites de espacio de trabajo en equipo para control de costos
5. **Mantente Actualizado**: Se añaden nuevos modelos regularmente

## 🔗 Recursos Relacionados

- [Sitio Web de OpenCode](https://opencode.ai)
- [Panel de Zen](https://opencode.ai/auth)
- [Estado de Modelos](https://status.opencode.ai)
- [Discord de la Comunidad](https://opencode.ai/discord)

---

## 📚 ¿Qué Sigue?

- [Guía de TUI Mastery](/guias/tui/) - Domina la interfaz de terminal
- [Guía de Agentes](/guias/agentes/) - Trabaja con agentes IA
- [Guía de Skills](/guias/skills/) - Crea flujos de trabajo reutilizables
- [Volver a la Guía Principal](/)