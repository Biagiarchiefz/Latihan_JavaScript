const search = document.getElementById("search-btn");

function getUrl(keyword) {
  return `http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`;
}

function getData(inputUser) {
  const url = getUrl(inputUser);
  return fetch(url, {
    method: "GET",
  })
    .then(function (respone) {
      return respone.json();
    })

    .then(function (data) {
      const movies = data.Search; // Mengambil array film  // Search di ambil dari apinya Search[]

      const movieList = document.getElementById("movie-list");
      movieList.innerHTML = ""; // Hapus isi sebelumnya

      movies.forEach((movie) => {
      //  const li = document.createElement("li");
      //   li.textContent = `${movie.Title} (${movie.Year}) ${movie.Type}`;
      //   movieList.appendChild(li); 

       movieList.innerHTML += `
        <div class="card" style="width: 18rem; margin:10px;">
          <img src="${movie.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Year}</p>
            <a href="#" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">See Detail</a>
          </div>
        </div>`
      });

    })

    // .catch((error) => console.error("Error fetching data:", error));
    .catch(function(error) {
      const movieList = document.getElementById("movie-list");
      const h1 = document.createElement("h1")
      h1.textContent = `movies tidak ditemukan biagi`
      movieList.appendChild(h1)

    })
}

function searchMovie (){
   
  const input = document.getElementById("search-input").value;
  document.getElementById("search-input").value ="";

  getData(input)
    // .then(() => console.log("Data berhasil diambil"));  // jika data berhasil di ambil baru jalankan console.log

}

search.addEventListener("click", function () {
 searchMovie();
});

search.addEventListener("keyup", function(){

searchMovie();

})