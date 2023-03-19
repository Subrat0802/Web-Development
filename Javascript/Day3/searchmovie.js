



async function searchMovies(){
    try{
        let query=document.getElementById("query").value;
        let res= await fetch(`http://www.omdbapi.com/?apikey=c2c8e2a4&s=${query}`)
        let data= await res.json();
        let actual_data=data.Search;

        let container = document.getElementById("container");
        let img=document.createElement("img");
        img.src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47eur1g92b8hbrzntq8ewj3cnvg4x7ez8zn7t2zndb&rid=giphy.gif&ct=g";
        container.append(img);
        
        setTimeout(function(){
            appendMovies(actual_data);
        },2000)
        
        

        console.log(actual_data);
    }
    catch{
        console.log("error");
    }
}

searchMovies()

function appendMovies(data) {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function (el) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let rating = document.createElement("p");

        img.src = el.Poster;
        name.innerText = el.Title;
        rating.innerText = el.Year;

        div.append(img, name, rating);
        container.append(div);
    })
}
