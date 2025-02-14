const input = document.getElementById("input");

const listContainer = document.getElementById("list-container")

const coba = document.getElementsByClassName(".coba");

function addTask(){

  if(input.value === ""){
    alert("masukan tugas anda")
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;  /* .value mengambil nilai inputan */
    listContainer.appendChild(li); /* appendChild(li) adalah sebuah metode yang digunakan untuk menambahkan elemen HTML sebagai anak (child) ke dalam elemen lain. */

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }

  input.value = "";
  saveData();

}


listContainer.addEventListener("click", function(e){ /* ketika di click jalankan function */
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
    saveData();
  } else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove("")
    saveData();
  }


})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function simpan(){
  listContainer.innerHTML = localStorage.getItem("data")
}

simpan();


