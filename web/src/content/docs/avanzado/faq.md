---
title: FAQ y Solución de Problemas
description: Respuestas a preguntas comunes y soluciones a problemas técnicos
---

# FAQ y Solución de Problemas

## ❓ Preguntas Generales

### ¿Es OpenCode realmente gratuito y de código abierto?
**Sí.** OpenCode es 100% código abierto bajo la licencia MIT. Puedes ver el código, auto-alojarlo o modificarlo. Los únicos costes asociados son los del uso de los modelos de IA (a través de Zen o proveedores directos).

### ¿Cómo se compara OpenCode con Claude Code o Cursor?
OpenCode ofrece varias ventajas clave:
- **Flexibilidad de modelos**: Soporta más de 75 proveedores.
- **Precio**: Pago por uso, sin suscripciones mensuales obligatorias.
- **Privacidad**: Opción de usar modelos locales (Ollama) y auto-alojamiento.

---

## 🛠️ Instalación y Configuración

### El comando `opencode` no se encuentra tras la instalación
Intenta añadirlo a tu PATH:
```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### La clave de API de Zen no funciona
1. **Regenera la clave** en el panel de control de opencode.ai.
2. **Verifica el saldo**: Asegúrate de tener créditos activos.
3. **Formato**: La clave debe empezar por `zen_`.

---

## 🚀 Uso y Funcionalidades

### Las referencias a archivos (@archivo) no funcionan
- Verifica que estás en el directorio correcto con `!pwd`.
- Usa rutas absolutas si es necesario.
- La búsqueda difusa funciona mejor con nombres de archivo únicos.

### OpenCode está haciendo cambios incorrectos
1. Usa `/undo` para deshacer el último cambio.
2. Revisa `!git status` para ver qué archivos han cambiado.
3. Sé más específico en tus instrucciones (menciona líneas o funciones específicas).

---

## 🤖 Agentes y Skills

### Mi agente personalizado no aparece en la lista
- Verifica que el archivo esté en `.opencode/agents/` o `~/.config/opencode/agents/`.
- Asegúrate de que el archivo termine en `.md` o `.json`.
- Ejecuta `/agents reload`.

### La ejecución de una Skill falla
- Valida la sintaxis con `/skills validate [nombre]`.
- Revisa los logs en `!cat ~/.local/share/opencode/skills.log`.

---

## 🔒 Seguridad y Privacidad

### ¿Se envía mi código a los proveedores de IA?
Sí, cuando usas modelos basados en la nube. Para máxima privacidad:
1. Usa **modelos locales** (Ollama, llama.cpp).
2. Usa proveedores con garantías empresariales de privacidad.
3. Configura un archivo `.opencodeignore` para excluir archivos sensibles (como `.env`).

---

## 🤝 Comunidad y Soporte

### ¿Dónde puedo obtener ayuda?
1. **Discord**: [Comunidad oficial](https://opencode.ai/discord).
2. **GitHub**: Reporta problemas en el repositorio.
3. **Documentación**: Consulta [docs.opencode.ai](https://docs.opencode.ai).

---

## 📚 Recursos Adicionales

- [Referencia de Comandos](/avanzado/comandos/)
- [Guía de Inicio Rápido](/guias/inicio-rapido/)
- [Guía de Agentes](/guias/agentes/)
