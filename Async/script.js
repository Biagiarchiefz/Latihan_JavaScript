function getProductsUrl(keyword) {
  return `https://api-region-indonesia.vercel.app/api/provinces`; // public api
}

function getProducts(keyword) {

// // FETCH API
const url = getProductsUrl();
return fetch(url, {
    method: "GET"
  }).then(function(respone){
    return respone.json()
  })

  // AJAX
  // const promise = new Promise(function(resolve, reject){
  //   // code asycn
  //   const ajax = new XMLHttpRequest();

  //   ajax.onload = function () {
  //       if (ajax.status === 200) {
  //           const data = JSON.parse(ajax.responseText);
  //           resolve(data);
  //       } else {
  //           reject(Error("Gagal mengambil data products"))
  //       }
  //   };
  
  //   const url = getProductsUrl(keyword);
  //   ajax.open("GET", url, true);
  //   ajax.send();


  // });

  // return promise;

}

function displayProducts(data) {
  clearProducts(); // Hapus produk lama sebelum menampilkan yang baru
  const productUl = document.getElementById("products");
  
  data.forEach(province => {
      const productLi = document.createElement("li");
      productLi.textContent = province.name;
      productUl.appendChild(productLi);
  });
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.innerHTML = ""; // Hapus semua isi sebelumnya
}

async function btnClick() {

// BEFORE
//  const promise = getProducts(document.getElementById("keyword").value);

//  promise 
//       .then(function (value) {
//          console.log(value)
//       })
//       .then(function (products) {
//         console.log(products)
//       })
     


// AFTER 
try {
  const value = await  getProducts(document.getElementById("keyword").value);

const products = value;
console.log(products)

displayProducts(products)
} catch {
  alert(`ini eror brow ${Error}`)
} finally {
  console.log(`selesai memproses Async`)
}

}
