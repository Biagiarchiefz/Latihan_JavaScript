const input = document.getElementById("input");

const listContainer = document.getElementById("list-container")

const coba = document.getElementsByClassName(".coba");

function addTask(){

  if(input.value === ""){
    alert("masukan tugas anda")
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li)
  }

}

