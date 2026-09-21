# CLI Guide

## Usage

```bash
python cli.py <command> [options]
```

## Commands

### `queue add`

Add a task to the queue.

```
python cli.py queue add --title "Fix bug" --priority 3
```

### `queue list`

List all tasks.

```
python cli.py queue list
```

### `queue next`

Show the highest-priority pending task.

```
python cli.py queue next
```

### `queue done`

Mark a task as done.

```
python cli.py queue done --id 42
```

### `export`

Export tasks to JSON or CSV.

```
python cli.py export --format json
python cli.py export --format csv
```

## Help

```
python cli.py --help
python cli.py queue --help
```
