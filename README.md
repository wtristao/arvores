# Arvores

Este repositório agora inclui um backend simples em Node.js que armazena os pontos de árvores em um arquivo JSON (em tempo de execução, em data/trees.json).

Como usar:

1. Instale dependências:

   npm install

2. Inicie o servidor:

   npm start

3. Abra http://localhost:3000 no navegador.

Funcionalidades adicionadas:

- API REST:
  - GET /api/trees — retorna todas as árvores
  - POST /api/trees — adiciona uma árvore (body: { lat, lng, fruta, user })
  - PUT /api/trees/:id — atualiza uma árvore
  - DELETE /api/trees/:id — remove uma árvore

- Frontend (index.html) atualizado para buscar e salvar árvores no servidor.

Observações:

- O arquivo de dados é criado automaticamente em data/trees.json quando o servidor roda pela primeira vez. O diretório data/ está no .gitignore para evitar comitar dados de execução.
- Para uso em produção, substitua o armazenamento por um banco de dados real (SQLite, Postgres, etc.) e proteja as rotas com autenticação.
