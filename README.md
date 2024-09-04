<h1 align="center">  <b> API DevPerformance </b> </h1>
<h3 align="right">🙅‍♂️ Desperte sua Produtividade! 🙅</h3>
<br>

## <b>🏋️Sobre </b>

<> <b>A API DevPerformance</b> projeto surgiu do seguinte problema:

<P><i>
Os Alunos do DevClub estão com um Problema. Ao começar o DevClub,
eles querem criar um cronograma de estudos e também querem ser mais
produtivos com os seus hábitos de estudos e gerais.
</i></P>

<p>
🤸‍♂️ - O objetivo é mostrar possibilidades de organização do seu dia a dia, mostrar que é possível performar nos estudos de maneira adequada, juntando mente, corpo e alimentação.
</p>

<P>
🤸 - Os 3 elementos citados são uma combinação impecável sobre a sua performance e organização de tarefas, o  <b> API DevPerfomance </b> chega para te ajudar a se organizar.
</P>

- A API <b> API DevPerfomance </b>
<p>
A proposta da api é criar rotas que sejam produtivas para os nossos alunos, objetivando efetuar a troca de informações entre a base dados e as e a aplicação. Fazendo com que as informações possam ficar guardadas para futuros relatórios ou mesmo algum tipo de grafico de performance.
</p>

<p>
As rotas existentes no <b> API DevPerfomance </b> para serem consumidas são as seguintes:
</p>

## Usuários

- Criação de Usuários

## Login

- Acesso ao <b> API DevPerfomance </b>

## Tarefas

- Criação de tarefas
- Alteração do status da tarefa
- Remoção das tarefas

## <b>Tecnologias Utilizadas</b>

- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## <b>Dependências e Versões Necessárias</b>

- Docker - Versão: 24.0.7
- Cors - Versão: 2.8.5"
- express - Versão: 4.19.2
- mongoose - Versão: 8.3.1
- yup - Versão: 1.4.0

## <b>Como rodar o projeto ✅<b>

Passo 1

<p>Verique se no docker o container está ativo </p>

```
$ docker ps
```

<image src="../project-hackton-react-api/src/images/docker-ps.png" ></image>

Passo 2

<p>Digite o comando abaixo e verifique se o resultado é o mesmo da imagem</p>

```
$ yarn dev
ou
$ npm run dev
```

<image src="../project-hackton-react-api/src/images/yarn-dev-execute-app.png" ></image>

## <b>📌 (API DevPerformance) - Informações importantes sobre a aplicação (exemplo) 📌</b>

<p>
A <b> API DevPerfomance </b> tem o objetivo de separar algumas funcionalidades para que possa ser consumido de forma correta:
</p>

## <b> Login </b>

- ## Login
  - Rota para buscar o cadastro de email dentro da aplicação
    - Envia (email e password)
    - Consulta na Base de dados (email e password)
    - Retorno (email e password) ou (mensagem de erro)

## <b>Usuarios</b>

- ## Cadastro Usuário
  - Rota Cadastro de usuario
    - Envia (email, password e Data Criação)

## <b> Tarefas </b>

- ## Cadastro de Tarefas

  - Rota para cadastrar uma ou mais tarefas
    - Envia (titulo, status, categoria)
    - Retorno (titulo, status, categoria)

- ## Alteração de Tarefas

  - Rota para alteração do status da tarefa
    - Envia (status)

- ## Exclusão de Tarefas
  - Rota remover a tarefa
    - Envia (id)

## <b>⏭️ Próximos passos</b>

<p>
Estamos trabalhando para colocar ainda mais funcionalidades no <b> API DevPerfomance </b> deixando a API ainda mais funcional e simples de ser consumida por qualquer interface voltado ao objetivo da aplicação, a idéia futuramente é criar uma area de administradores, para que possam efetuar a manuteção e exclusão de usuarios.
</p>
<p>
Também estamos com o objetivo de melhorar e amarrar as tarefas aos usuarios para garantir toda a lógica de amarrção de dados junto aos usuarios.
</p>
