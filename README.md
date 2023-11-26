# Agendamento de Laboratórios

## Descrição
O projeto "Agendamento de Laboratórios" é uma aplicação ReactJS que permite agendar reservas em laboratórios, facilitando o processo de agendamento e gerenciamento de disponibilidade.

## Tecnologias Utilizadas
- ReactJS

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Node.js
- npm

## Instalação
Clone o repositório e execute o seguinte comando no diretório do projeto para instalar as dependências:
```bash
npm install
```

## Configuração de Variáveis de Ambiente
Antes de iniciar a aplicação, é necessário configurar algumas variáveis de ambiente. Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
GENERATE_SOURCEMAP=false
REACT_APP_BASE_API_URL=http://<IP_ADDRESS>:<PORT>/api
REACT_APP_KEY=sua_chave_de_aplicacao
```

Certifique-se de substituir `<IP_ADDRESS>`, `<PORT>`, e `sua_chave_de_aplicacao` pelos valores apropriados. A chave da aplicação pode ser obtida consultando o README do backend disponível em [https://github.com/saviogodinho2002/visit-lab-api/](https://github.com/saviogodinho2002/visit-lab-api/).

## Como Iniciar a Aplicação
Após instalar as dependências e configurar as variáveis de ambiente, você pode iniciar a aplicação com o seguinte comando:
```bash
npm start
```
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000) por padrão.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## TEMPLATE
O template para o Frontend usado pode ser encontrado em: [https://www.creative-tim.com/product/argon-dashboard-react#](https://www.creative-tim.com/product/argon-dashboard-react#)