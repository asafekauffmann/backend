# Pré requisítos para rodar o projeto

- NodeJS 16+

# Para executar o projeto siga os passos abaixo

- Navegue até a pasta do projeto utilizando o terminal
- Execute o comando `npm install`

  - DEV

    - Execute `npm run dev`

  - PROD
    - Execute `npm run build`
    - Execute `npm run start`

# Para iniciar o projeto com dados já cadastrados na base

- `npx prisma db seed`

# Para visualizar os dados do banco 

- `npx prisma studio`



Camadas - 
1 Rota - Define o nome do endpoint e qual controller sera chamado.
2 Controller - Valida os dados vindos da requisição, chama o serviço e fazer o retorno da requisição.
3 Service - Implementa regras de negocio e chamar o repositório responsavel por persistir os dados.
4 Repository - Fazer a implementação da tecnologia usada para se comunicar com o banco de dados.