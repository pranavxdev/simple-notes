const noteField = document.querySelector(".container");
const addNote = document.getElementById("addNote");

addNote.addEventListener("click", function () {
  const modal = document.getElementById("modal");

  //create note element
  const tile = document.createElement("div");
  tile.setAttribute("id", "note");

  // create note title
  const title = document.createElement("div");
  title.setAttribute("id", "title");
  title.setAttribute("contentEditable", "false");
  title.innerHTML = "title";

  // create text title
  const text = document.createElement("div");
  text.setAttribute("id", "text");
  text.innerHTML = "no additional text";

  //append title and text into parent NOTE and append NOTE into NoteField
  tile.appendChild(title);
  tile.appendChild(text);
  noteField.appendChild(tile);

  // event listener when tile is clicked

  tile.addEventListener("click", function () {
    modal.style.display = "initial";
    tile.classList.add("viewer");
    tile.style.width = "800px";
    tile.style.height = "500px";
    text.classList.add("text-viewer");
    title.setAttribute("contentEditable", "true");
    text.setAttribute("contentEditable", "true");
  });

  // event when modal is clicked

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    tile.classList.remove("viewer");
    tile.style.cssText = "width: 200px";
    tile.style.cssText = "height: 200px";
    text.classList.remove("text-viewer");
    title.setAttribute("contentEditable", "false");
    text.setAttribute("contentEditable", "false");
  });
});
