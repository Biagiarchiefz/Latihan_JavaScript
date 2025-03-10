const inputNegara = document.getElementById("input-negara");

const btnSearch = document.getElementById("search-btn");

const container = document.getElementById("con")



const url = (keyword) => {
  return `https://restcountries.com/v3.1/name/${keyword}?fullText=true`
} 

const inputData = () => {
  const valueInput = inputNegara.value;
  const finalUrl = url(valueInput);
  fetchData(finalUrl);
}

const fetchData = (link) => {
  
  fetch(link) // method http bawaan jika kita tidak mendeklarasikan fetch adalah GET
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const country = data[0].name.common  // data mewakili array/object terluar 
      console.log(country);
      console.log(data[0].continents[0]);
      console.log(data[0].flags.svg);
      // console.log(data[0].currencies.IDR.name)
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].capital[0])
      
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
  
      console.log(Object.values(data[0].languages)[0]);

      wrap.innerHTML = "";

      wrap.innerHTML += `<img src="${data[0].flags.svg}" alt="" class="bendera">
      <h2>${data[0].name.common}</h2>
   
          <div class="data-wrapper">
            <h4>Ibu Kota:</h4>
            <span>${data[0].capital[0]}</span>
          </div>
        
        
          <div class="data-wrapper">
            <h4>Benua:</h4>
            <span>${data[0].continents[0]}</span>
          </div>
        </div>

       
          <div class="data-wrapper">
            <h4>Populasi:</h4>
            <span>${data[0].population}</span>
          </div>


          <div class="data-wrapper">
            <h4>Mata Uang:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
          </div>
        </div>
   
          <div class="data-wrapper">
            <h4>Bahasa:</h4>
            <span>${Object.values(data[0].languages)[0]}</span>
          </div>
        `      
    })
    .catch((er) => {
      if( er ) {
        wrap.innerHTML = "";
        wrap.innerHTML += `<h2 style="color: red;">Negara yang ada cari tidak di temukan </h2>`;
      }
    })
}



btnSearch.addEventListener("click", () => {
  inputData();
})

btnSearch.addEventListener("keyup", () => {
  inputData();
})
