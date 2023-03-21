

function slideMovies(){
    const arr = [`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7456/267456-h`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/587/860587-h`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7382/1357382-h-e8e07b3880aa`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8762/1308762-h-2869fe3fd0f1`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2212/1042212-h-0e83e926cfc1`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed`,
    ];
    let slider=document.getElementById("slider");
    let img=document.createElement("img");
    let i=0;

    img.src=arr[i];
    slider.append(img);
    i++;
    setInterval(function(){
        if(i===arr.length){
            i=0;
        }
        img.src=arr[i];
        slider.append(img);
        i++;
    },1000);
}
slideMovies()

let movie=[
    {
        name:"Doctor strange",
        rating:6,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v"
    },
    {
        name:"Shang-Chi",
        rating:9,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
    },
    {
        name:"Etrnals",
        rating:5,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"
    },
    {
        name:"Thor",
        rating:4,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba"
    },
    {
        name:"End game",
        rating:9,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v"
    },
    {
        name:"Avengers",
        rating:1,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5219/875219-v"
    },
    {
        name:"Black Wido",
        rating:2,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3"
    },
    {
        name:"Ragnerok",
        rating:3,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4719/674719-v"
    },
    {
        name:"Spider-Man",
        rating:7,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2359/1282359-v-03a6e1895daf"
    },
    {
        name:"Black Panther",
        rating:8,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5184/875184-v"
    },
    {
        name:"Iron Man",
        rating:10,
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4731/674731-v"
    }

]
localStorage.setItem("movies",JSON.stringify(movie));
let data=JSON.parse(localStorage.getItem("movies"));



let myPromise= new Promise(function(resolve,reject){
    setTimeout(function(res){
    if(data!=null){
        resolve(data);
    }else{
        return false;
    }
    })
})
myPromise.then(function(res){
    appendMovies(res);
}).catch(function(rej){
    console.log("error");
})



function appendMovies(data){
    let container=document.getElementById("movies");
    container.innerHTML=null;

    data.forEach(function(el,id){
        let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h3");
        let rating=document.createElement("p");

        img.src=el.image;
        name.innerText=el.name;
        rating.innerText=el.rating;

        div.append(img,name,rating);
        container.append(div);
        
    })

}