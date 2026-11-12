FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# --dev-addr=0.0.0.0:8000 para expor o servidor fora do container
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
