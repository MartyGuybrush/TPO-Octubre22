fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const primerosDiez = json.slice(0, 5);
    const displayComentarios = primerosDiez.map(
      (x) => `
        <div class="comentario">
            <h4>${x.name}</h4>
            <div class="comentario-body">${x.body}</div>
        </div>
    `
    );

    const contenedorComentarios = document.getElementById("comentarios");

    displayComentarios.forEach((element) => {
      contenedorComentarios.insertAdjacentHTML("beforeend", element);
    });
  });
