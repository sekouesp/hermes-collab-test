# Stage 1: Build
FROM python:3.11-slim AS builder

WORKDIR /build
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ ./src/
COPY cli.py .

# Stage 2: Runtime
FROM python:3.11-slim

WORKDIR /app
COPY --from=builder /build/src/ ./src/
COPY --from=builder /build/cli.py .
COPY --from=builder /usr/local/lib/python3.11/site-packages/ ./site-packages/

ENV PYTHONPATH=/app/site-packages
EXPOSE 8000

ENTRYPOINT ["python", "cli.py"]
CMD ["queue", "list"]
