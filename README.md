# Frontend VisitLab

## Configuração
Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/naraazi/visitLabFrontend.git
   ```
    
2. **Instale as dependências:**
   ```bash
   cd visitLabFrontend
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
Uma guia abrirá automaticamente no seu navegador.
O projeto estará disponível em http://localhost:3000.

## Configurando o Ngrok
Siga as instruções fornecidas no [tutorial de instalação do Ngrok](https://ngrok.com/docs/getting-started/).
O endereço do Ngrok terá que ser inserido no script `src/api.js` onde está escrito `baseURL`.

Não esqueça de reiniciar o servidor de desenvolvimento:
   ```bash
   npm start
   ```