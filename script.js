const elForm = document.querySelector(".form");
const elBtn = document.querySelector("#btn");
const userPhone = document.querySelector("#number");
const userName = document.querySelector("#name");
const userRelation = document.querySelector("#relation");
const colSecond = document.querySelectorAll(".col-6")[1];

const list = [];

function renderTodos(array) {
  colSecond.innerHTML = `
  <h2 class="subtitle my-4">Contacts</h2>
   <div class="card py-3 px-4">
       <h5 class="text my-1">Ibrohim</h5>
       <p class="subtext my-1">Qarindosh</p>
       <a href="tel:+998977777777" class="link-primary btn-link text-decoration-none tel">+998 97 777 77 77</a>
   </div>`;
  for (let i = 0; i < array.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.className += "card py-3 px-4 my-3";
    newDiv.innerHTML += `<h5 class="text my-1">${array[i].split(" ")[0]}</h5>
        <p class="subtext my-1">${array[i].split(" ")[1]}</p>
        <a href='tel:+${
          array[i].split(" ")[2]
        }' class="link-primary btn-link text-decoration-none tel">+${array[i]
      .split(" ")[2]
      .split("", 3)
      .join("")} ${array[i]
      .split(" ")[2]
      .split("", 5)
      .splice(3)
      .join("")} ${array[i]
      .split(" ")[2]
      .split("", 8)
      .splice(5)
      .join("")} ${array[i]
      .split(" ")[2]
      .split("", 10)
      .splice(8)
      .join("")} ${array[i].split(" ")[2].split("", 12).splice(10).join("")}</a>
	`;
    console.log(array[i].split(" ")[2]);
    colSecond.appendChild(newDiv);
  }
}

// renderTodos([todo]);

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let input = e.target.todo;

  // add todo to array

  list.push(`${userName.value} ${userRelation.value} ${userPhone.value}`);

  renderTodos(list);
  elForm.reset();
});
