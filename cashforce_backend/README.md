<br />
<div align="center">
  <h3 align="center">Cashforce API</h3>
  <p align="center">
    Cashforce é uma API REST, com o objetivo de possibilitar que usuários da Cashforce consigam visualizar as notas fiscais emitidas em seu nome.
  </p>
  <br />
  <p><img src="https://camo.githubusercontent.com/a1eae878fdd3d1c1b687992ca74e5cac85f4b68e60a6efaa7bc8dc9883b71229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/0ed8c0157d26ec3dc9806b78077d3f44358b7df649fa9a8a7cedaff07af291d6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d54797065736372697074266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/7f73136d92799b19be179d1ed87b461120c35ed917c7d5ab59a7606209da7bd3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/3aa1b49c625e81043375bbbda8a36cda22d9ddaf70a85f74fb5058c637e23c59/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d6172696144422d62726f776e3f7374796c653d666f722d7468652d6261646765266c6f676f3d4d617269614442266c6f676f436f6c6f723d7768697465" /></p>
</div>
<br />
<br />

## Conteúdos:

- Projeto
  - [Sobre](#sobre)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [API Reference](#api-reference)
- [Autor](#autor)

<br />
<br />

# Projeto:

## Sobre

- Arquitetar e desenvolver uma API para gerenciamento de notas fiscais (com Sequelize ORM);
- Criar *endpoints* (seguindo os princípios REST) que serão utilizados para conexão com o banco de dados;
- Criar *Models* - abstração que representa uma linha na tabela no banco de dados e passa informações ao Sequelize sobre essa entidade;

  > **Observação**: O [*script*](../init/db.sql) para gerar o banco de dados, juntamente com suas tabelas, foi previamente disponibilizado para realização do teste;


## Estrutura do Projeto

**Docker:**
- O Docker tem o papel de unir todas as partes e subir o projeto completo com um comando único, via `docker-compose`;
- Na raíz do projeto, rode o comando:
```bash
 docker-compose -f docker-compose.yaml up --build
```

- Ao rodar esse comando:
  - o *script* para gerar o banco de dados e suas tabelas é executado, ficando disponível na `porta 3306`;
  - a API / *endpoints* ficam disponíveis na `porta 3001`;
  - a aplicação *web* fica disponível na `porta 5173`.


## *API Reference*

- ### **Visualização de todos os usuários cadastrados:**

```http
  GET /user
```

<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
[
  {
    "id": 1,
    "name": "ALLAN SOUZA",
    "email": "allan@cashforce.com.br",
    "phoneNumber": null,
    "mobile": null,
    "departament": null,
    "verificationCode": "",
    "emailChecked": 1,
    "createdAt": "2020-10-01T21:31:37.000Z",
    "updatedAt": "2020-10-01T22:41:23.000Z",
    "cashforceAdm": 1
  },
  {
    ...
  }
]
```
</details>

<br />

- ### **Visualização do usuário pelo id:**

```http
GET /user/:id
```

**Observações:**
- Além dos dados do usuário informado (através do *id*), este *endpoint* retorna os pedidos (*orders*) relacionados à este usuário, juntamente com as informações do comprador (*buyer*) e do fornecedor (*provider*) relacionados à cada pedido.

<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
{
  "id": 1,
  "name": "ALLAN SOUZA",
  "email": "allan@cashforce.com.br",
  "phoneNumber": null,
  "mobile": null,
  "departament": null,
  "verificationCode": "",
  "emailChecked": 1,
  "createdAt": "2020-10-01T21:31:37.000Z",
  "updatedAt": "2020-10-01T22:41:23.000Z",
  "cashforceAdm": 1,
  "orders": [
    {
      "id": 1,
      "orderNfId": "1605181324132",
      "orderNumber": "18153",
      "orderPath": null,
      "orderFileName": null,
      "orderOriginalName": null,
      "emissionDate": "2020-10-30T11:00:00-03:00",
      "pdfFile": null,
      "emitedTo": "22843980000127",
      "nNf": "18153",
      "CTE": "",
      "value": "198450",
      "createdAt": "2020-10-30T17:54:18.000Z",
      "updatedAt": "2020-10-30T17:54:18.000Z",
      "cnpjId": 1,
      "userId": 1,
      "buyerId": 1,
      "providerId": 1,
      "orderStatusBuyer": "0",
      "orderStatusProvider": "0",
      "deliveryReceipt": null,
      "cargoPackingList": null,
      "deliveryCtrc": null,
      "buyers": {
        "id": 1,
        "name": "SACADO 001",
        "tradingName": "SACADO 001 LTDA",
        "cashforceTax": "0",
        "responsibleName": null,
        "responsibleEmail": null,
        "responsiblePosition": null,
        "responsiblePhone": null,
        "responsibleMobile": null,
        "website": null,
        "postalCode": null,
        "address": null,
        "number": null,
        "complement": null,
        "neighborhood": null,
        "city": null,
        "state": null,
        "phoneNumber": null,
        "situation": null,
        "situationDate": null,
        "createdAt": "2020-10-29T21:20:33.000Z",
        "updatedAt": "2020-10-29T21:20:34.000Z",
        "cnpjId": 1,
        "confirm": 1,
        "email": null
      },
      "providers": {
        "id": 1,
        "name": "CEDENTE 002",
        "tradingName": "CEDENTE 002 LTDA",
        "cashforceTax": null,
        "responsibleName": null,
        "responsibleEmail": null,
        "responsiblePosition": null,
        "responsiblePhone": null,
        "responsibleMobile": null,
        "website": null,
        "postalCode": null,
        "address": null,
        "number": null,
        "complement": null,
        "neighborhood": null,
        "city": null,
        "state": null,
        "bank": null,
        "bankAgency": null,
        "account": null,
        "documents": null,
        "phoneNumber": null,
        "situation": null,
        "situationDate": null,
        "createdAt": "2020-10-29T21:22:21.000Z",
        "updatedAt": "2020-10-29T21:22:22.000Z",
        "cnpjId": 2,
        "email": null
      }
    },
    {
      ...
    },
  ],
};
```
</details>
<br />

- ### **Visualização dos compradores cadastrados:**

```http
GET /buyer
```
<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
[
  {
    "id": 1,
    "name": "SACADO 001",
    "tradingName": "SACADO 001 LTDA",
    "cashforceTax": "0",
    "responsibleName": null,
    "responsibleEmail": null,
    "responsiblePosition": null,
    "responsiblePhone": null,
    "responsibleMobile": null,
    "website": null,
    "postalCode": null,
    "address": null,
    "number": null,
    "complement": null,
    "neighborhood": null,
    "city": null,
    "state": null,
    "phoneNumber": null,
    "situation": null,
    "situationDate": null,
    "createdAt": "2020-10-29T21:20:33.000Z",
    "updatedAt": "2020-10-29T21:20:34.000Z",
    "cnpjId": 1,
    "confirm": 1,
    "email": null
  },
  {
    ...
  }
];
```
</details>
<br />

- ### **Visualização dos Cnpjs cadastrados:**

```http
GET /cnpj
```
<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
[
  {
    "id": 1,
    "cnpj": "00000000000001",
    "companyType": "2",
    "createdAt": "2020-10-29T21:20:33.000Z",
    "updatedAt": "2020-10-29T21:20:33.000Z"
  },
  {
    ...
  }
];
```
</details>
<br />

- ### **Visualização dos pedidos cadastrados:**

```http
GET /order
```
<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
[
  {
    "id": 1,
    "orderNfId": "1605181324132",
    "orderNumber": "18153",
    "orderPath": null,
    "orderFileName": null,
    "orderOriginalName": null,
    "emissionDate": "2020-10-30T11:00:00-03:00",
    "pdfFile": null,
    "emitedTo": "22843980000127",
    "nNf": "18153",
    "CTE": "",
    "value": "198450",
    "createdAt": "2020-10-30T17:54:18.000Z",
    "updatedAt": "2020-10-30T17:54:18.000Z",
    "cnpjId": 1,
    "userId": 1,
    "buyerId": 1,
    "providerId": 1,
    "orderStatusBuyer": "0",
    "orderStatusProvider": "0",
    "deliveryReceipt": null,
    "cargoPackingList": null,
    "deliveryCtrc": null
  },
  {
    ...
  }
];
```
</details>
<br />

- ### **Visualização dos fornecedores cadastrados:**

```http
GET /provider
```

<details><summary>RETORNO DA REQUISIÇÃO</summary>

```json
[
  {
    "id": 1,
    "name": "CEDENTE 002",
    "tradingName": "CEDENTE 002 LTDA",
    "cashforceTax": null,
    "responsibleName": null,
    "responsibleEmail": null,
    "responsiblePosition": null,
    "responsiblePhone": null,
    "responsibleMobile": null,
    "website": null,
    "postalCode": null,
    "address": null,
    "number": null,
    "complement": null,
    "neighborhood": null,
    "city": null,
    "state": null,
    "bank": null,
    "bankAgency": null,
    "account": null,
    "documents": null,
    "phoneNumber": null,
    "situation": null,
    "situationDate": null,
    "createdAt": "2020-10-29T21:22:21.000Z",
    "updatedAt": "2020-10-29T21:22:22.000Z",
    "cnpjId": 2,
    "email": null
  },
  {
    ...
  }
];
```
</details>
<br />

# Autor:
- [Linkedin](https://www.linkedin.com/in/fernandaacarvalho/)
- [Github](https://github.com/Fernanda9421)