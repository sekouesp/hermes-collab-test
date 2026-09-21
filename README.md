# Hermes Collab Protocol — Stress Test

A multi-faceted project designed to test **every capability** of the Hermes Collab Protocol.

## What This Tests

| Capability | Issue | Description |
|------------|-------|-------------|
| Multi-agent coordination | All | Devices claim different issues, work in parallel |
| Branch policy | All | Feature branches → PRs → `develop` (never `main`) |
| State sharing | All | `.hermes-state.json` tracks all assignments |
| Python coding | #2, #3, #5 | Core library, CLI, test suite |
| TypeScript/JS | #6 | Config files, build scripts |
| CI/CD | #4 | GitHub Actions workflow |
| Documentation | #7 | MkDocs site |
| Docker | #8 | Containerization |
| Cross-device sync | All | Cron auto-sync every 30 min |

## Quick Start

```bash
git clone https://github.com/sekouesp/hermes-collab-test.git
cd hermes-collab-test
project-collab.py init
project-collab.py pull
project-collab.py status
```

See `.hermes-collab.md` for full protocol details.
