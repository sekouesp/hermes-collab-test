# API Reference

## `hermes_test` Package

### `Task`

```python
@dataclass
class Task:
    id: int
    title: str
    status: str          # "pending" | "in_progress" | "done"
    priority: int        # 1 (lowest) - 5 (highest)
    assignee: str | None
```

### `TaskQueue`

```python
class TaskQueue:
    def add(task: Task) -> None
    def remove(id: int) -> Task | None
    def peek() -> Task | None
    def pop() -> Task | None
    def list_all() -> list[Task]
    def get_pending() -> list[Task]
```

### `storage`

```python
def load_tasks(path: str) -> list[dict]
def save_tasks(path: str, tasks: list[dict]) -> None
```

### `utils`

```python
def timestamp() -> str           # ISO 8601
def slugify(text: str) -> str   # URL-safe slug
def validate_priority(p: int) -> bool
```
