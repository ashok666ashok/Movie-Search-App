
 const searchButton= async()=>{
    let searchInput=document.getElementById("searchMovie").value
const url=`https://www.omdbapi.com/?apikey=`
const apiKey=`fa1c9c03`
    await fetch(`${url}${apiKey}&t=${searchInput}`)
    .then(response=>response.json())
    .then(data=>{
        displayData(data);
        
    })    
 }


 const displayData=(data)=>{
    console.log(data.Ratings[0].Value)
    let image=data.Poster
    let title=data.Title
    let release=data.Released
    let director=data.Director
    let Actor=data.Actors
    let Plot=data.Plot
    let Genre=data.Genre
    let Rating=data.Ratings[0].Value
    
    let HTMLdata=`<div class="card" style="width: auto;">
    <img src="${image}" class="card-img-top" alt="..." style="width: 180px;">
    <div class="card-body">
      <h5 class="card-title fw-bolder">${title}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Release Date : ${release}</li>
    <li class="list-group-item">Rating : ${Rating}</li>
      <li class="list-group-item">Actors : ${Actor}</li>
      <li class="list-group-item">Director : ${director}</li> 
      <li class="list-group-item">Genre : ${Genre}</li>
      <li class="list-group-item">Plot : ${Plot}</li>
    </ul>
    <div class="card-body">
    <button type="button" class="btn btn-danger" onclick="closeCard()">close</button>

    </div>
  </div>`

  result.innerHTML=HTMLdata


 }

 const closeCard=()=>{
    result.innerHTML="";
    searchMovie.value=""

 }