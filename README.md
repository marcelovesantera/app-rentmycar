
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
<h1 align="center">
  Alugue meu carro - API
</h1>

Backend da aplicação Alugue meu carro - Uma aplicação que o usuário poderá tanto ser um locador quanto locatário.

## **Endpoints**

Esta Api tem 8 endpoints, 4 para os usuários e 4 para os carros, nestes endpoints será possível cadastrar usuário, carros e etc..

A url base da Api é : https://alugue-meu-carro.herokuapp.com

<h1 align="center">
  Rotas Usuários
</h1>

## Rotas que não precisam de autorização.

<h2 align="center">
  Cadastrar Usuário
</h2>

`POST /register - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345",
  "name": "Vilson",
  "telefone": "51888941359"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345",
  "name": "Vilson",
  "telefone": "51888941359",
  "imagem": "",
  "carrosCadastrados": [],
  "carrosAlugados": []
}
```

<h2 align ='center'> Possíveis erros </h2>
Caso o usuário tente criar uma conta com um email já existente, a resposta da requisição será assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 400`

```json
{
    "Email already exists"
}
```

<hr>

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxvQGdtYWlsLmNvbSIsImlhdCI6MTY2MTk4MzE4MiwiZXhwIjoxNjYxOTg2NzgyLCJzdWIiOiIxIn0.A7baMOUZMDpzQbvHDq7ix3bUbNfOBCqIiXFa0LcOZzA",
  "user": {
    "email": "vilson@gmail.com",
    "name": "Vilson",
    "telefone": "51888941359",
    "imagem": "",
    "carrosCadastrados": [],
    "carrosAlugados": [],
    "id": 1
  }
}
```

## Rotas que precisam de autorização.


<h2 align = "center"> Atualizar Usuário </h2>

`PATCH /users/id - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "name": "Vilson",
  "telefone": "51888941359",
  "imagem": ""
}
```

<h2 align = "center"> Deletar Usuário </h2>

`DELETE /users/id - FORMATO DA REQUISIÇÃO`

```json
Não é necessário um corpo na requisição.
```

<h1 align="center">
  Rotas Carros
</h1>

<h2 align = "center"> Listar Carros </h2>

`GET /cars - FORMATO DA REQUISIÇÃO`

```json
  Irá receber como resposta um array de objetos com os carros cadastrados.
```

## Rotas que precisam de autorização.

<hr>

<h2 align = "center"> Cadastrar Carro </h2>

`POST /cars - FORMATO DA REQUISIÇÃO`

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico.",
  "userId": 2
}
```

`POST /cars - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico.",
  "userId": 2,
  "alugado": false,
  "id": 6
}
```

O userId se refere ao id do usuário, é necessario passar o id do usuário para poder vincular o carro a ele.

Se o userId não for passado de forma correta irá retornar este erro.

```json
{
  "Private resource creation: request body must have a reference to the owner id"
}
```

<h2 align = "center"> Atualizar Carro </h2>

`PATCH /cars/id - FORMATO DA REQUISIÇÃO`

O id passado na requisição é o id do carro.

O Usuário poderá atualizar qualquer um desses valores.

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico."
}
```

<h2 align = "center"> Excluir Carro </h2>

`DELETE /cars/id - FORMATO DA REQUISIÇÃO`

O id passado na requisição é o id do carro.

```json
Não é necessário um corpo na requisição
```

