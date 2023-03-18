

//1.................

// let url=`https://img.net/js`;

// function download(url){
//     setTimeout(function(){
//         console.log(`Download: ${url}`);
//         process(url);
//     },3000);
// }

// function process(picture){
//     console.log(`process: ${picture}`);
// }

// download(url);







//2.............................

// function download(url, callback){
//     setTimeout(function(){
//         console.log(`Download: ${url}`);
//         callback(url);
//     },2000);
// }

// function process(picture){
//     console.log(`process: ${picture}`);
// }

// download(url, process);







//3............................
// let url1 = `https://img.net/js`;
// let url2 = `https://img.net/js2`;
// let url3 = `https://img.net/js3`;

// function downlaod(url, callback) {
//     setTimeout(function () {
//         console.log(`Downlaod: ${url}`);
//         callback(url);
//     }, 3000);
// }

// downlaod(url1, function process(picture) {
//     console.log(`Process: ${picture}`);

//     downlaod(url2, function process(picture) {
//         console.log(`Process: ${picture}`);

//         downlaod(url3, function process(picture) {
//             console.log(`Process: ${picture}`);
//         })
//     })
// })







//4....................................

// let url = `https://img.net/js`;

// function process(picture){
//     console.log(`Process: ${picture}`);
// }


// function download(url){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log(`Downloading: ${url}`);

//             resolve(url);
//         },3000);
//     });
// }

// let myPromise=download(url);

// myPromise.then(function(res){
//     process(url);
// }).catch(function(rej){
//     console.log("rejected"); 
// })




