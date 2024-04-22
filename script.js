var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let test = document.getElementById("container");
  if (test != null) {
    test.remove();
  }
  var size = document.getElementById("input").value;
  var container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
  createGrid(size, container);
});

function createGrid(size, container) {
  if (size != "") {
    if (size > 1 && size < 101) {
      for (let i = 0; i < size; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size; j++) {
          var div = document.createElement("div");
          div.className = "div";
          div.addEventListener("mouseenter", createMouseEnterHandler(div));
          row.appendChild(div);
        }
        container.appendChild(row);
      }
    } else alert("Please use a number between 1 and 100");
  }
}

function createMouseEnterHandler(div) {
  return function () {
    div.classList.add("divHover");
  };
}

function createMouseEnterHandlerRandomColor(div) {
  let rand = Math.random() * 1000000;
  return function () {
    div.style.backgroundColor = `#${Math.floor(rand)}`;
  };
}

/*
function createGrid(size) {
  var container = document.getElementById("container");
  for (let i = 0; i < size; i++) {
    var row = document.createElement("div");
    for (let j = 0; j < size; j++) {
      var d = document.createElement("div");
      d.className = "div";
      row.appendChild(d);
    }
    row.className = "row";
    container.appendChild(row);
  }
}
createGrid(16);

=======
  btn.addEventListener("click", () => {
  var size = document.getElementById("input").value;
  if (size != "") {
    var container = document.getElementById("container");
    for (let i = 0; i < size; i++) {
      var row = document.createElement("div");
      for (let j = 0; j < size; j++) {
        var d = document.createElement("div");
        d.className = "div";
        row.appendChild(d);
      }
      row.className = "row";
      container.appendChild(row);
    }
  }
});
  */
