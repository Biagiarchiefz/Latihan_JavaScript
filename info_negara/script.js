const inputNegara = document.getElementById("input-negara");

const btnSearch = document.getElementById("search-btn");


const url = (keyword) => {
  return `https://restcountries.com/v3.1/name/${keyword}?fullText=true`
} 

btnSearch.addEventListener("click", () => {
  const valueInput = inputNegara.value;
  const finalUrl = url(valueInput);

  console.log(finalUrl)

})