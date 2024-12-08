let Main = async ()=>{
    let nome = ((document.getElementById(`Nome`).value).replace(/ /g, '+'))
    let img = document.getElementById("N8")
    let url = `http://www.omdbapi.com/?apikey=de3c957&t=${nome}`;

    let anwser =  await fetch(url);
    let anwserJson = await anwser.json();

    if(anwserJson.Response == "False"){
        document.getElementById("Console").innerHTML = `Filme não encontrado!`
    }else{
        img.style.display = "block"
        document.getElementById("Nome").value = anwserJson.Title
        document.getElementById("Ano").value = anwserJson.Released
        document.getElementById("Tempo").value = anwserJson.Runtime
        document.getElementById("Genero").value = anwserJson.Genre
        document.getElementById("Ator").value = anwserJson.Actors
        document.getElementById("Bilheteria").value = anwserJson.BoxOffice
        document.getElementById("Img").src = anwserJson.Poster
    }
}
