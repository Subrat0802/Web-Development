

function searchMovies(){
    let query=document.getElementById("search").value;
    let x=fetch(`http://www.omdbapi.com/?apikey=c2c8e2a4&s=${query}`);
    x.then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res.Search);
        appendMovies(res.Search);
    }).catch(function(rej){
        console.log("error");
    })
}


function appendMovies(data){
    let container=document.getElementById("movies");
    container.innerHTML=null;

    data.forEach(function(el,id){
        let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h3");
        let rating=document.createElement("p");

        img.src=el.Poster;
        name.innerText=el.Title;
        rating.innerText=el.Year;

        div.append(img,name,rating);
        container.append(div);
        
    })

}


let id;
function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func()
    },delay);
}