
//1.................

// fetch(`https://fakestoreapi.com/products/category/electronics`)
// .then(function(res){
//     return res.json();
// }).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })







//2..........................

async function getData(){
    try{
        let res= await fetch(`https://fakestoreapi.com/products/category/electronics`);
        let data= await res.json();
        console.log(data);
    }
    catch{
        console.log("error");
    }
    
}
getData();