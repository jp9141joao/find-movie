# **Find Movie**

Este projeto permite que você pesquise informações sobre filmes usando a API OMDB. Ao inserir o nome de um filme, o aplicativo exibe informações como título, ano de lançamento, duração, gênero, atores e bilheteira, além de exibir o pôster do filme.

---

## **Funcionalidades**

- **Pesquisa de Filme:** Insira o nome de um filme e clique para buscar informações.
- **Exibição de Dados:** O aplicativo exibe o título, ano, tempo de duração, gênero, elenco, bilheteira e o pôster do filme.
- **Mensagem de Erro:** Caso o filme não seja encontrado, uma mensagem será exibida informando o erro.

---

## **Como Funciona**

1. O usuário insere o nome do filme no campo de pesquisa.
2. O aplicativo faz uma requisição à API OMDB usando o nome do filme.
3. As informações sobre o filme são exibidas na tela, incluindo o pôster.
4. Se o filme não for encontrado, uma mensagem será mostrada indicando que o filme não foi encontrado.

---

## **Exemplo de Uso**

1. O usuário digita o nome de um filme na barra de pesquisa, como "Inception".
2. As informações do filme "Inception" são recuperadas e exibidas: 
   - Título: Inception
   - Ano: 2010
   - Tempo: 148 minutos
   - Gênero: Ação, Ficção Científica
   - Atores: Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page
   - Bilheteira: $829,895,144
   - Pôster do Filme.

---

## **Tecnologias Utilizadas**

- **HTML** para estrutura da página.
- **CSS** para o design e estilização da interface.
- **JavaScript** para manipulação da lógica do programa e requisições à API.
- **API OMDB** para buscar informações sobre filmes.

---

## **Como Executar**

1. Clone ou baixe o código-fonte para o seu computador.
2. Abra o arquivo `index.html` no seu navegador.
3. Digite o nome de um filme no campo de pesquisa e clique para buscar as informações.
   
---

## **Observações**

- O projeto utiliza a [OMDB API](http://www.omdbapi.com/) para buscar as informações dos filmes. Você pode precisar de uma chave de API, que pode ser obtida em [OMDB API](http://www.omdbapi.com/apikey.aspx).
- O código foi desenvolvido para funcionar em navegadores modernos.

---

## **Exemplo de Código**

```javascript
let Main = async () => {
    let nome = ((document.getElementById('Nome').value).replace(/ /g, '+'));
    let img = document.getElementById("N8");
    let url = `http://www.omdbapi.com/?apikey=de3c957&t=${nome}`;

    let anwser = await fetch(url);
    let anwserJson = await anwser.json();

    if (anwserJson.Response == "False") {
        document.getElementById("Console").innerHTML = `Filme não encontrado!`;
    } else {
        img.style.display = "block";
        document.getElementById("Nome").value = anwserJson.Title;
        document.getElementById("Ano").value = anwserJson.Released;
        document.getElementById("Tempo").value = anwserJson.Runtime;
        document.getElementById("Genero").value = anwserJson.Genre;
        document.getElementById("Ator").value = anwserJson.Actors;
        document.getElementById("Bilheteria").value = anwserJson.BoxOffice;
        document.getElementById("Img").src = anwserJson.Poster;
    }
}
```

---

## **Observações**

- O código faz uso da função `slice()` para manipular strings e da função `fetch()` para buscar dados da API.
