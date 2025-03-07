const search = document.getElementById("search-btn");


// console.log(search);

function getUrl(keyword) {
  return `http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`;
}

function getData(input) {
  const url = getUrl(input);
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
        const li = document.createElement("li");
        li.textContent = `${movie.Title} (${movie.Year}) ${movie.Type}`;
        movieList.appendChild(li);
      });
    })

    // .catch((error) => console.error("Error fetching data:", error));
    .catch(function(error) {
      const movieList = document.getElementById("movie-list");
      const h1 = document.createElement("h1")
      h1.textContent = `movies not found biagi ${error}`
      movieList.appendChild(h1)

    })
}

search.addEventListener("click", function () {

  const input = document.getElementById("search-input").value;

  getData(input)
  .then(() => console.log("Data berhasil diambil"));  // jika data berhasil di ambil baru jalankan console.log
});
