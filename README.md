
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

Backend da aplica????o Alugue meu carro - Uma aplica????o que o usu??rio poder?? tanto ser um locador quanto locat??rio.

## **Endpoints**

Esta Api tem 8 endpoints, 4 para os usu??rios e 4 para os carros, nestes endpoints ser?? poss??vel cadastrar usu??rio, carros e etc..

A url base da Api ?? : https://alugue-meu-carro.herokuapp.com

<h1 align="center">
  Rotas Usu??rios
</h1>

## Rotas que n??o precisam de autoriza????o.

<h2 align="center">
  Cadastrar Usu??rio
</h2>

`POST /register - FORMATO DA REQUISI????O`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345",
  "name": "Vilson",
  "telefone": "51888941359"
}
```

Caso d?? tudo certo, a resposta ser?? assim:

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

<h2 align ='center'> Poss??veis erros </h2>
Caso o usu??rio tente criar uma conta com um email j?? existente, a resposta da requisi????o ser?? assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 400`

```json
{
    "Email already exists"
}
```

<hr>

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISI????O`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345"
}
```

Caso d?? tudo certo, a resposta ser?? assim:

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

## Rotas que precisam de autoriza????o.


<h2 align = "center"> Atualizar Usu??rio </h2>

`PATCH /users/id - FORMATO DA REQUISI????O`

```json
{
  "email": "vilson@gmail.com",
  "name": "Vilson",
  "telefone": "51888941359",
  "imagem": ""
}
```

<h2 align = "center"> Deletar Usu??rio </h2>

`DELETE /users/id - FORMATO DA REQUISI????O`

```json
N??o ?? necess??rio um corpo na requisi????o.
```

<h1 align="center">
  Rotas Carros
</h1>

<h2 align = "center"> Listar Carros </h2>

`GET /cars - FORMATO DA REQUISI????O`

```json
  Ir?? receber como resposta um array de objetos com os carros cadastrados.
```

## Rotas que precisam de autoriza????o.

<hr>

<h2 align = "center"> Cadastrar Carro </h2>

`POST /cars - FORMATO DA REQUISI????O`

```json
{
  "per??odo": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "?? um carro muito seguro, espa??oso, bem economico.",
  "userId": 2
}
```

`POST /cars - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "per??odo": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "?? um carro muito seguro, espa??oso, bem economico.",
  "userId": 2,
  "alugado": false,
  "id": 6
}
```

O userId se refere ao id do usu??rio, ?? necessario passar o id do usu??rio para poder vincular o carro a ele.

Se o userId n??o for passado de forma correta ir?? retornar este erro.

```json
{
  "Private resource creation: request body must have a reference to the owner id"
}
```

<h2 align = "center"> Atualizar Carro </h2>

`PATCH /cars/id - FORMATO DA REQUISI????O`

O id passado na requisi????o ?? o id do carro.

O Usu??rio poder?? atualizar qualquer um desses valores.

```json
{
  "per??odo": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renault",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "?? um carro muito seguro, espa??oso, bem economico."
}
```

<h2 align = "center"> Excluir Carro </h2>

`DELETE /cars/id - FORMATO DA REQUISI????O`

O id passado na requisi????o ?? o id do carro.

```json
N??o ?? necess??rio um corpo na requisi????o
```

