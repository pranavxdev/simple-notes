const noteField = document.querySelector(".container");
const addNote = document.getElementById("addNote");

addNote.addEventListener("click", function () {
  const modal = document.getElementById("modal");

  //create note element
  const tile = document.createElement("div");
  tile.classList.add("note");

  // create note title
  const title = document.createElement("div");
  title.setAttribute("id", "title");
  title.setAttribute("contentEditable", "false");
  title.innerHTML = "title";

  // create text title
  const text = document.createElement("div");
  text.setAttribute("id", "text");
  text.innerHTML = "no additional text";

  // create note nav
  const noteNav = document.createElement("div");
  noteNav.setAttribute("id", "noteNav");

  // create delete button
  const remove = document.createElement("div");
  remove.setAttribute("id", "remove");

  //append title and text into parent NOTE and append NOTE into NoteField
  noteNav.appendChild(remove);
  tile.appendChild(noteNav);
  tile.appendChild(title);
  tile.appendChild(text);
  noteField.appendChild(tile);

  // event listener when tile is clicked

  tile.addEventListener("click", function () {
    modal.style.display = "initial";
    noteNav.style.cssText = "display: none";
    tile.classList.add("viewer");
    tile.style.width = "800px";
    tile.style.height = "500px";
    text.classList.add("text-viewer");
    title.setAttribute("contentEditable", "true");
    title.style.cssText = "width: 100%";
    title.style.marginLeft = "0";
    text.setAttribute("contentEditable", "true");
    text.removeAttribute("id");
    remove.style.cssText = "display: none";
  });

  // event when modal is clicked
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    noteNav.style.display = "";
    tile.classList.remove("viewer");
    tile.style.cssText = "width: 200px";
    tile.style.cssText = "height: 200px";
    text.classList.remove("text-viewer");
    title.setAttribute("contentEditable", "false");
    title.style.cssText = "width: 150px";
    text.setAttribute("contentEditable", "false");
    text.setAttribute("id", "text");
    remove.style.cssText = "display: initial";
  });

  // deletes note when remove button is clicked
  remove.addEventListener("click", function (element) {
    element.stopPropagation();
    noteField.removeChild(tile);
  });
});
