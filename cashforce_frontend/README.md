<br />
<div align="center">
  <h3 align="center">Cashforce</h3>
  <p align="center">
    Cashforce é uma aplicação em Vue, com o objetivo de possibilitar que usuários da Cashforce consigam visualizar as notas fiscais geradas em seu nome.
  </p>
  <br />
  <br />
    <p><img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vuejs"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></p>
</div>
<br />
<br />

## Conteúdos:

- Projeto
  - [Sobre](#sobre)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Funcionalidades](#funcionalidades)
- [Autor](#autor)

<br />
<br />

# Projeto:

## Sobre
- Essa aplicação consiste em uma única tela, onde o usuário pode visualizar todas as notas fiscais emitidas em seu nome.
- Por não possuir tela de login, o id do usuário utilizado na requisição à API foi adicionado manualmente, e encontra-se no estado global da aplicação.

## Estrutura do Projeto

**Docker:**
- O Docker tem o papel de unir todas as partes e subir o projeto completo com um comando único, via `docker-compose`;
- Na raíz do projeto, rode o comando:
```bash
 docker-compose -f docker-compose.yaml up --build
```

- Ao rodar esse comando:
  - o *script* para gerar o banco de dados e suas tabelas é executado, ficando disponível na `porta 3002`;
  - a API / *endpoints* ficam disponíveis na `porta 3001`;
  - a aplicação *web* fica disponível na `porta 5173`.

## Funcionalidades

### Tela de exibição de notas fiscais:
- Consiste em uma tabela, contendo informações das notas fiscais geradas no nome do usuário.
- Com essa aplicação, o usuário será capaz de visualizar:
  - o número da nota fiscal;
  - o nome da empresa que comprou o produto ou contratou o serviço - SACADO;
  - o nome da empresa que emitiu a nota fiscal - CEDENTE;
  - a data de emissão da nota fiscal;
  - o valor da nota fiscal;
  - o status do pedido, que pode ser:
    - Pendente de confirmação,
    - Pedido confirmado,
    - Não reconhece o pedido,
    - Mercadoria não recebida
    - Recebida com avaria
    - Devolvida
    - Recebida com devolução parcial
    - Recebida e confirmada
    - Pagamento Autorizado


# Autor:
- [Linkedin](https://www.linkedin.com/in/fernandaacarvalho/)
- [Github](https://github.com/Fernanda9421)