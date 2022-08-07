const noteField = document.querySelector(".container");
const addNote = document.getElementById("addNote");

addNote.addEventListener("click", function () {
  const modal = document.getElementById("modal");

  //create note element
  const note = document.createElement("div");
  note.setAttribute("id", "note");

  // create note title
  const title = document.createElement("h3");
  title.setAttribute("id", "title");
  title.innerHTML = "title";

  const text = document.createElement("div");
  text.setAttribute("id", "text");
  text.innerHTML = "no additional text";

  note.appendChild(title);
  note.appendChild(text);
  noteField.appendChild(note);

  note.onclick = function () {
    note.classList.add("viewer");
    note.style.width = "800px";
    note.style.height = "500px";
    modal.style.display = "initial";
  };

  modal.onclick = function () {
    note.classList.remove("viewer");
    note.style.width = "200px";
    note.style.height = "200px";
    modal.style.display = "none";
  };
});
