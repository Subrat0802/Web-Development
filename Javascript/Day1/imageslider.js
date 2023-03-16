
function addImage(){
    let url=document.getElementById("url").value;

    let images=JSON.parse(localStorage.getItem("images")) || [];
    images.push(url)
    localStorage.setItem("images",JSON.stringify(images));
}

let id;

function start(){
    let imgfa=JSON.parse(localStorage.getItem("images"));
    let container=document.getElementById("container");
    container.innerHTML=null;
    
    let i=0;

    let img=document.createElement("img");
    img.src=imgfa[0];
    container.append(img);

    i++;


    setInterval(function(){
        if(i===4){
            i=0;
        }
        img.src=imgfa[i]
        container.append(img)
        i++;
    },2000);
}

function stopslid(){

}