# Luffy Eyes - Sistema de Consulta de Dados

Sistema completo de consulta de dados brasileiros com interface administrativa.

## 🚀 Deploy Rápido e Gratuito

### Opção 1: Render.com (Recomendado)
1. Acesse [render.com](https://render.com)
2. Conecte seu GitHub
3. Crie PostgreSQL Database (Free)
4. Crie Web Service com estas configurações:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     ```
     NODE_ENV=production
     DATABASE_URL=[sua_database_url_do_render]
     VOIDSEARCH_API_KEY=WM3t-Av5u-thfP-GiBV-sM3B
     SESSION_SECRET=luffy-eyes-secret-key-production
     ```

### Opção 2: Railway.app
1. Acesse [railway.app](https://railway.app)
2. "Deploy from GitHub repo"
3. Adicione PostgreSQL plugin
4. Configure as mesmas variáveis de ambiente

## 🔑 Credenciais Admin
- **Username:** LUFFYGOV
- **Password:** TAKMICHE01

## 📋 Funcionalidades
- ✅ 21 tipos de busca de dados
- ✅ Busca de fotos (RJ/SP)
- ✅ Painel administrativo
- ✅ Gerenciamento de usuários
- ✅ Histórico de buscas
- ✅ Sistema de autenticação

## 🔧 Desenvolvimento Local
```bash
npm install
npm run dev
```

## 📦 Build para Produção
```bash
npm run build
npm start
```

## 🌐 Após Deploy
O site ficará disponível 24/7 no domínio fornecido pela plataforma escolhida.

Para mais detalhes, consulte `deploy.md`.