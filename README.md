# Rodando a aplicação

1 - yarn install ou npm install

## Desenvolvimento
 
2 - yarn start

## Produção

2 - yarn build ou npm run build

# Como funciona?

Pesquise por pokemons que contenham em seus nomes a string escrita na barra de pesquisa.
Caso pesquise uma string vazia, o resultado será todos os pokemons.

Para filtrar quais tipos devem aparecer, marque uma das caixinhas, ex: Water. Isso fará com que a aplicação só exiba pokemons do tipo Água.
Caso marque outras caixinhas, a aplicação TAMBÉM exibirá o outro tipo, ex: Grass e Water. Pokemons do tipo Planta ou Água serão exibidos.

Caso queira pokemons restritos ao tipo Planta e Água, marque a caixinha "Intersection". E ela fará com que o resultado exiba apenas pokemons com todos os tipos selecionados.

A aplicação exibe apenas 12 pokemons por vez. Clique em More para exibir mais pokemons

### Projeto feito utilizando React, Tailwind e a API: https://pokeapi.co

## Projeto publicado em: https://react-pokedex-rust.vercel.app/
