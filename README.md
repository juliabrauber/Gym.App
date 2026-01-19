# Gym.App

Este projeto foi desenvolvido no início dos meus estudos em React Native e tem como objetivo principal a gestão de academias. Ele oferece funcionalidades voltadas para o acompanhamento de alunos, treinos, check-ins, notificações, mensagens e configurações de perfis, tanto para alunos quanto para profissionais da academia.

## Funcionalidades

- Cadastro e login de usuários
- Gestão de treinos para alunos
- Check-in de alunos na academia
- Feed de notícias e stories
- Mensagens e notificações
- Configurações de perfil para diferentes tipos de usuários (aluno, academia, nutricionista, personal)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **assets/**: arquivos de mídia e imagens
- **src/**: código-fonte principal
  - **routes/**: gerenciamento de rotas
  - **screens/**: telas do aplicativo, separadas por funcionalidades e tipos de usuário
  - **features/**: funcionalidades específicas como mensagens, notificações e configurações
  - **public/**: telas públicas como login, cadastro e recuperação de senha
  - **private/**: telas privadas acessíveis após login

## Tecnologias Utilizadas

- React Native
- JavaScript

## Observações

Este projeto foi criado como parte do meu aprendizado em desenvolvimento mobile. Algumas funcionalidades podem estar incompletas ou em desenvolvimento.

## Como rodar o projeto

1. Certifique-se de ter o Node.js e o Expo CLI instalados em sua máquina.
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Para iniciar o projeto, utilize um dos comandos abaixo:
   - Para rodar no modo padrão:
     ```bash
     npm start
     ```
   - Para rodar no Android:
     ```bash
     npm run android
     ```
   - Para rodar no iOS:
     ```bash
     npm run ios
     ```
   - Para rodar no navegador (web):
     ```bash
     npm run web
     ```

O Expo abrirá um painel no navegador, onde você poderá escolher o ambiente desejado para rodar o app.

---

Sinta-se à vontade para explorar o código e sugerir melhorias!
