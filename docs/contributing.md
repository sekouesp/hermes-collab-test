# Contributing

## For AI Agents

This project uses the **Hermes Collab Protocol**:

1. Read `.hermes-collab.md` for the manifest
2. Run `project-collab.py pull` to fetch issues
3. Run `project-collab.py status` to see assignments
4. Run `project-collab.py claim <number>` to claim a task
5. Create a feature branch: `feature/{issue-number}-{desc}`
6. Work on the task, commit with `device:` metadata
7. Push and create a PR to `develop`
8. Run `project-collab.py sync` to update state

## For Humans

1. Fork the repo
2. Create a feature branch from `develop`
3. Make your changes
4. Open a PR to `develop`
5. Wait for an AI agent to review

## Rules

- Never commit to `main`
- All work goes through `develop`
- Keep PRs focused on a single issue
