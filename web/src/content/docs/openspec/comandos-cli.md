---
title: Comandos del CLI
description: Comandos de la terminal de OpenSpec para listar, validar y archivar cambios
---

Estos comandos se ejecutan en la terminal, desde la raíz del proyecto. Son independientes de OpenCode, aunque se usan juntos.

| Comando | Para qué sirve |
|---------|----------------|
| `openspec list` | Lista los cambios activos |
| `openspec list --specs` | Lista las especificaciones principales |
| `openspec view` | Abre un panel interactivo con specs y cambios |
| `openspec show <elemento>` | Muestra un cambio o una spec |
| `openspec status` | Muestra qué artefactos de un cambio están completos |
| `openspec validate [elemento]` | Valida cambios y specs |
| `openspec archive <cambio>` | Archiva un cambio y actualiza las specs principales |
| `openspec update` | Regenera los archivos de instrucciones tras actualizar el CLI |
| `openspec config profile` | Activa workflows adicionales |
| `openspec init --tools opencode` | Configura el proyecto para OpenCode |

Revisa siempre las opciones con `openspec <comando> --help`, porque el CLI evoluciona con frecuencia.

## Ejemplo de revisión antes de un PR

```bash
openspec list
openspec validate add-passwordless-login
openspec status --change add-passwordless-login
```

Si `validate` falla, corrige los artefactos con `/opsx-update` en OpenCode antes de implementar o archivar.
