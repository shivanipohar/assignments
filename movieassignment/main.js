let para=document.getElementById("movies");
//fetch the resource
fetch("http://localhost:3000/movies")
//then convert into json
.then(response=>{
    return response.json()

}).then(result=>{
    para.innerHTML+=`PVR:<br>`
    for(let movie of result){
        if(movie.moviename=="Frozen"){
        para.innerHTML+=`Movie name:${movie.moviename}`
        para.innerHTML+=`Timing :${movie.timing}<br>`
        }
    }
    para.innerHTML+=`<br>`
})



fetch("http://localhost:4000/movies")
.then(response=>{
    return response.json()

}).then(result=>{
    para.innerHTML+=`IMAX:<br>`
    for(let movie of result){
        if(movie.moviename=="Frozen"){
        para.innerHTML+=`Movie name:${movie.moviename}`
        para.innerHTML+=`Timing :${movie.timing}<br> `
    }
}
    para.innerHTML+=`<br>`
})



fetch("http://localhost:5000/movies")
.then(response=>{
    return response.json()

}).then(result=>{
    para.innerHTML+=`MULTIPLEX:<br>`
    for(let movie of result){
        if(movie.moviename=="Frozen"){
        para.innerHTML+=`Movie name:${movie.moviename}`
        para.innerHTML+=`Timing :${movie.timing}<br> `
        }
    }
    para.innerHTML+=`<br>`
})