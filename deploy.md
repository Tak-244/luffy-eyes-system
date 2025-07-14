# Guia de Deploy Gratuito - Luffy Eyes

## 1. Render.com (Recomendado)

### Preparação:
1. Crie uma conta no [Render.com](https://render.com)
2. Conecte seu GitHub
3. Faça push deste projeto para um repositório GitHub

### Deploy:
1. **Criar PostgreSQL Database:**
   - New > PostgreSQL
   - Name: `luffy-eyes-db`
   - Plan: Free
   - Copie a `Internal Database URL`

2. **Criar Web Service:**
   - New > Web Service
   - Connect seu repositório GitHub
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

3. **Configurar Environment Variables:**
   ```
   NODE_ENV=production
   DATABASE_URL=[sua_database_url_do_render]
   VOIDSEARCH_API_KEY=WM3t-Av5u-thfP-GiBV-sM3B
   SESSION_SECRET=luffy-eyes-secret-key-production
   ```

## 2. Railway.app

### Deploy:
1. Acesse [Railway.app](https://railway.app)
2. "Deploy from GitHub repo"
3. Selecione seu repositório
4. Adicione PostgreSQL plugin
5. Configure as mesmas variáveis de ambiente

## 3. Vercel + Supabase

### Banco de Dados (Supabase):
1. Crie projeto no [Supabase](https://supabase.com)
2. Copie a Database URL
3. Execute o schema SQL no editor do Supabase

### Frontend (Vercel):
1. Deploy no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Build Command: `npm run build`

## 4. Configuração do package.json

Adicione o script de produção:
```json
{
  "scripts": {
    "start": "node server/index.js",
    "build": "npm run build:server && npm run build:client",
    "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=server/index.js --external:pg-native",
    "build:client": "vite build"
  }
}
```

## 5. Variáveis de Ambiente Necessárias

```
NODE_ENV=production
DATABASE_URL=sua_url_do_banco
VOIDSEARCH_API_KEY=WM3t-Av5u-thfP-GiBV-sM3B
SESSION_SECRET=sua_chave_secreta_aleatoria
```

## 6. Credenciais Admin

Após o deploy, faça login com:
- **Username:** LUFFYGOV
- **Password:** TAKMICHE01

## 7. Teste do Deploy

1. Verifique se o site carrega
2. Teste login administrativo
3. Teste busca de dados
4. Teste busca de fotos

## Recomendação

**Use o Render.com** - é gratuito, confiável e fácil de configurar. O único "problema" é que hiberna após 15 minutos sem uso, mas reativa automaticamente quando alguém acessa.