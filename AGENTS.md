# OpenCode Agent Guidelines

This repo is a documentation site for learning OpenCode (AI coding assistant).

## Project Structure

```
web/              # Astro Starlight site (Spanish) - serves as the main site
docs/             # English markdown guides (reference content)
.gitignore        # Defines what .opencode/ files are user-specific (gitignored)
```

## Key Commands

```bash
# Work in the web/ directory
cd web

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: Astro 5.x with Starlight
- **Language**: Spanish in web/, English in docs/
- **Package manager**: npm (web/package.json)

## Development Notes

- The Starlight site generates its sidebar from `web/src/content/docs/`
- Static site output goes to `web/dist/`
- No lint/typecheck scripts in this project (simple docs)

## Important .gitignore Rules

The `.opencode/` folder contains user-specific config, skills, and agents - all gitignored. Do not commit anything in `.opencode/`.