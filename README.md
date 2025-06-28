
## 💻 Projeto

Desenvolver uma plataforma mobile para listagem e visualização de pokémons e a construção deste projeto foi usado ionic com angular. Todos os dados sobre os pokémons como nome, número, tipo, imagem e entre outras coisas, foram possíveis com o uso da API REST [PokéApi](https://pokeapi.co/).

Esse projeto esta sendo criado a partir de um desafio proposto pela equipe do [BSN Tecnologia](https://www.bsntecnologia.com.br/)

### Funcionalidades

-  **Listagem dos pokémons**: Listar os pokémons com o uso da API REST.
-  **Selecionar pokémon**: Criar uma página na aplicação com mais detalhes sobre o pokémon escolhido.
-  **Pagina de Favoritos** Listar todos os pokemons que você selecionar como favoritos.

### Conceitos abordados

- Conceitos de tipagem no typescript.
- Criação do projeito em standalone ao inves de ngModule
- Uso de ion-card para criação de cartoes em layout de lista
- ionViewWillEnter para atualizar a pagina sempre que acessar automaticamente
- routerLink para acessar a rota da pagina
- utilização dos components customizados "ion-" de forma otimizada
    

## Notas
A lista de pokemons será limitada de 25 a 25 chegando a um total de 150 pokemons da primeira geração.

## :rocket: Tecnologias
-  [Ionic](https://ionicframework.com/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Angular](https://angular.dev/)

## Iniciar o projeto

Para rodar o projeto é necessario ter o git instalado em sua maquina e executar o codigo abaixo:

```
git clone https://github.com/felipertec/webhookspokeapi.git
```

Depois é necessario entrar na pasta:

```
cd webhookspokeapi
cd frontendPokeApi 
```

e iniciar o servidor

```
ionic serve
```
