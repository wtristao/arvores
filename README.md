# Arvores (Firebase)

Este repositório foi atualizado para usar o Firebase Realtime Database como armazenamento em nuvem, de forma que qualquer pessoa possa adicionar árvores e os dados fiquem guardados mesmo se o servidor for reiniciado.

Passos rápidos (resumido)

1. Crie um projeto no Firebase: https://console.firebase.google.com/
2. No menu, escolha Realtime Database e crie um novo banco.
   - Para testes rápidos, em Regras coloque:
     {
       "rules": {
         ".read": true,
         ".write": true
       }
     }
   - Atenção: isto permite leitura/gravação pública. Para produção, configure regras de segurança.
3. No Console do Firebase, adicione um app Web (ícone </>) e copie as configurações do SDK (apiKey, authDomain, databaseURL, ...).
4. Copie `firebase-config.example.js` para `firebase-config.js` na raiz do projeto e cole suas configurações.

Como rodar localmente

1. Instale dependências (Node.js):

   npm install

2. Inicie o servidor (serve os arquivos estáticos do projeto):

   npm start

3. Abra no navegador:

   http://localhost:3000

Observações

- O frontend agora salva e carrega árvores diretamente do Firebase Realtime Database em tempo real.
- Para compartilhar com outras pessoas, você pode usar ngrok para expor seu servidor local temporariamente:
  - Instale ngrok e rode: `ngrok http 3000`
  - Compartilhe a URL pública mostrada pelo ngrok.
- Para produção, considere hospedar apenas o frontend (por exemplo, GitHub Pages, Netlify) e configurar regras do Realtime Database adequadas, ou adicionar autenticação.

Se quiser, eu posso:
- Ajudar a criar as regras iniciais mais seguras (ex.: permitir escrita somente se houver um campo user não vazio),
- Ou automatizar o deploy do frontend (Netlify/GitHub Pages) para que não seja necessário rodar o servidor local.
