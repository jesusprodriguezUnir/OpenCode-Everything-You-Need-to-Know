---
title: Zen y OpenCode Console
description: Cómo acceder a modelos de IA mediante OpenCode Console, con pago por uso
---

Zen se llama ahora **OpenCode Console**. Es un servicio de pago por uso que da acceso a modelos de IA con una sola clave de API.

Gestiona tu cuenta, tu saldo y tus claves en [opencode.ai/console](https://opencode.ai/console). Los precios y los modelos disponibles cambian con frecuencia, así que consulta siempre la consola.

## Conectar la cuenta

1. Crea una cuenta en [opencode.ai/console](https://opencode.ai/console) y genera una clave de API.
2. Abre OpenCode en tu proyecto y ejecuta `/connect`.
3. Elige el proveedor **OpenCode** y pega la clave.

## Usar un modelo de Console

Los modelos de Console se referencian con el prefijo `opencode/`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "model": "opencode/<id-del-modelo>"
}
```

Para ver los identificadores disponibles desde la terminal:

```bash
curl https://opencode.ai/inference/v1/models
```

## Cambiar de modelo

- En la TUI: `ctrl+x m` (`/models`).
- Por proyecto o global: clave `model` de la configuración.
- Por petición: `opencode run --model proveedor/modelo "..."`.

## Otros proveedores

Puedes conectar otros proveedores con `/connect`. La clave `providers` de la configuración permite ajustarlos. Consulta [Configuración](/guias/configuracion/).

## Comprobar la conexión

- Revisa el saldo y el uso en la consola.
- Si la clave no funciona, vuelve a ejecutar `/connect` y comprueba que pegaste la clave completa, sin espacios.
- `opencode auth list` muestra las integraciones y credenciales guardadas.
