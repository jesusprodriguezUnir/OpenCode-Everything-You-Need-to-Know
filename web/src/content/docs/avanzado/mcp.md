---
title: Servidores MCP
description: Extiende OpenCode con Model Context Protocol
---

# Servidores MCP (Model Context Protocol)

Los servidores MCP extienden las capacidades de OpenCode proporcionando herramientas externas y fuentes de datos. Piensa en ellos como "plugins para IA".

---

## 🤖 ¿Qué son los Servidores MCP?

**MCP (Model Context Protocol)** es un protocolo estándar que permite a la IA comunicarse con sistemas externos:

1. **Servers**: Procesos externos que proveen herramientas/recursos
2. **Tools**: Funciones que la IA puede ejecutar (leer archivo, consultar DB...)
3. **Resources**: Fuentes de datos accesibles (archivos, databases, APIs)
4. **Protocol**: Comunicación estandarizada entre IA y servidores

### Beneficios

- **Extensibilidad**: Añade capacidades sin modificar OpenCode
- **Seguridad**: Aísla acceso externo en procesos separados
- **Estandarización**: Interfaz consistente entre herramientas
- **Composabilidad**: Combina múltiples servidores

---

## 📦 Servidores MCP Incluidos

### Servidor de Sistema de Archivos

- **Propósito**: Lectura/escritura de archivos locales
- **Herramientas**: `read_file`, `write_file`, `list_directory`
- **Caso de uso**: Operaciones básicas dentro del proyecto

### Servidor Git

- **Propósito**: Operaciones de control de versiones
- **Herramientas**: `git_status`, `git_diff`, `git_commit`, `git_push`
- **Caso de uso**: Workflows automatizados de git

### Servidor HTTP

- **Propósito**: Realizar requests HTTP
- **Herramientas**: `http_get`, `http_post`, `http_put`, `http_delete`
- **Caso de uso**: Integración con APIs, web scraping

### Servidor SQL

- **Propósito**: Operaciones de base de datos
- **Herramientas**: `sql_query`, `sql_execute`, `sql_schema`
- **Caso de uso**: Gestión de DB, análisis de datos

---

## 🔧 Instalar Servidores MCP

### Método 1: Registro de OpenCode

```bash
# Listar servidores disponibles
/mcp list

# Instalar servidor del registro
/mcp install github

# Instalar versión específica
/mcp install postgres --version 1.2.0
```

### Método 2: Desde URL

```bash
# Instalar desde repositorio GitHub
/mcp install https://github.com/user/mcp-server-repo

# Instalar desde npm
/mcp install npm:package-name

# Instalar desde local
/mcp install ./custom-mcp-server/
```

### Método 3: Instalación Manual

```bash
# Clonar repositorio
git clone https://github.com/modelcontextprotocol/servers.git

# Configurar en OpenCode
echo '{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["servers/filesystem/dist/index.js"]
    }
  }
}' > ~/.config/opencode/opencode.json
```

---

## 📋 Servidores MCP Populares

### Servidores de Desarrollo

| Servidor | Propósito | Herramientas |
|----------|-----------|--------------|
| **GitHub** | Acceso a API de GitHub | `list_repos`, `create_pr`, `read_issue` |
| **PostgreSQL** | Base de datos PostgreSQL | `query`, `execute`, `schema` |
| **Redis** | Cache Redis | `get`, `set`, `keys`, `del` |
| **Docker** | Gestión de contenedores | `ps`, `run`, `build`, `logs` |
| **AWS** | Servicios de AWS | `s3_list`, `ec2_describe`, `lambda_invoke` |

### Servidores de Productividad

| Servidor | Propósito | Herramientas |
|----------|-----------|--------------|
| **Google Calendar** | Gestión de calendario | `list_events`, `create_event` |
| **Slack** | Integración con Slack | `send_message`, `read_channel` |
| **Email** | Gestión de correo | `send_email`, `read_inbox` |
| **Jira** | Seguimiento de issues | `list_issues`, `create_issue` |

---

## 🚀 Usar Servidores MCP

### Uso Básico

```bash
# OpenCode usa automáticamente los servidores disponibles
# Cuando preguntas sobre archivos, usa el servidor de filesystem
List all TypeScript files in the project

# Cuando mencionas git, usa el servidor Git
What files have been modified recently?

# Cuando preguntas sobre APIs, usa el servidor HTTP
Fetch data from https://api.example.com/users
```

### Invocación Explícita de Servidor

```bash
# Usar herramientas específicas del servidor
Using the filesystem server, read @src/config.json

# Encadenar operaciones de servidor
Using git server, check status, then read changed files

# Combinar múltiples servidores
Using github server, list issues, then notify team
```

### Configuración de Servidor

```json
// ~/.config/opencode/opencode.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres"],
      "env": {
        "PGURI": "postgres://user:pass@localhost/db"
      }
    }
  }
}
```

---

## 🛠️ Crear Servidores MCP Personalizados

### Ejemplo Simple (JavaScript)

```javascript
// custom-server.js
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  { name: 'custom-server', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// Definir una herramienta
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'echo') {
    return {
      content: [{ type: 'text', text: `Echo: ${request.params.arguments?.message || 'Hello!'}` }]
    };
  }
  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Iniciar servidor
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Estructura de un Servidor MCP

```
mcp-server/
├── src/
│   ├── index.ts          # Archivo principal
│   ├── tools/            # Definición de herramientas
│   └── resources/        # Definición de recursos
├── package.json          # Dependencias
├── tsconfig.json         # Config TypeScript
└── README.md            # Documentación
```

---

## 🔗 Patterns Avanzados

### 1. Composición de Servidores

```bash
# Usar múltiples servidores juntos
Using github server, get latest commit
Using filesystem server, read the changed files
Using http server, deploy to staging
```

### 2. Orquestación de Servidores

```bash
# Uso condicional de servidores
If there are database changes, use postgres to run migrations
If there are API changes, use http to test endpoints
```

### 3. Cacheo de Servidores

```json
{
  "mcpServers": {
    "github-cached": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "cache": {
        "enabled": true,
        "ttl": 300,
        "directory": "~/.cache/opencode/mcp"
      }
    }
  }
}
```

### 4. Monitoreo de Servidores

```bash
# Monitorear rendimiento
/mcp stats

# Ver salud del servidor
/mcp health

# Ver logs
/mcp logs github
```

---

## 🛡️ Seguridad de Servidores MCP

### Autenticación y Autorización

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${env:GITHUB_TOKEN}"
      },
      "permissions": {
        "network": true,
        "filesystem": false,
        "process": false
      }
    }
  }
}
```

### Sandboxing de Servidores

```bash
# Ejecutar en Docker
/mcp install github --sandbox docker

# Usar bubblewrap para aislamiento
/mcp install postgres --sandbox bubblewrap
```

### Control de Acceso

```yaml
servers:
  github:
    allowed_tools:
      - list_repos
      - read_issues
      - create_pr
    denied_tools:
      - delete_repo
      - update_settings
    rate_limit: 100/hour
```

---

## 🔧 Solución de Problemas

### Servidor no inicia

```bash
# Ver estado del servidor
/mcp status github

# Ver logs
/mcp logs github --tail 100

# Probar manualmente
!npx @modelcontextprotocol/server-github --help
```

### Herramienta no encontrada

```bash
# Listar herramientas disponibles
/mcp tools github

# Ver permisos de herramienta
/mcp permissions github list_repos

# Actualizar servidor
/mcp update github
```

### Errores de autenticación

```bash
# Ver variables de entorno
/mcp env github

# Re-autenticar
/mcp auth github --reset
```

### Problemas de rendimiento

```bash
# Monitorear rendimiento
/mcp stats github --interval 5

# Ajustar recursos
/mcp config github --memory 512mb --cpu 1

# Habilitar cache
/mcp config github --cache enabled
```

---

## 🎯 Mejores Prácticas

1. **Fiabilidad**: Maneja errores gracefully, implementa reintentos
2. **Seguridad**: Valida inputs, usa rate limiting
3. **Rendimiento**: Implementa cache, usa connection pooling
4. **Compatibilidad**: Sigue la especificación MCP, testa versiones
5. **Documentación**: Instrucciones claras, ejemplos, troubleshooting

---

## 📚 Relacionado

- [Referencia de Comandos](/avanzado/comandos/)
- [Guía de Workflows](/avanzado/workflows/)
- [Guía de Integración](/avanzado/migracion/)