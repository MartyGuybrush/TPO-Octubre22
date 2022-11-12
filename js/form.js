const validate = new JustValidate("#contacto", {
  errorFieldCssClass: "is-invalid",
  errorFieldStyle: {
    border: "1px solid red",
  },
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "red",
    textDecoration: "underlined",
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: "top",
  },
});
validate
  .addField("#nombre", [
    {
      rule: "required",
      errorMessage: "Nombre es requerido",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#apellido", [
    {
      rule: "required",
      errorMessage: "Apellido es requerido",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email es requerido",
    },
    {
      rule: "email",
      errorMessage: "Email inválido!",
    },
  ])
  .onSuccess((event) => {
    const body = {};
    const elements = event.target.elements;

    for (let i = 0; i < elements.length; i++) {
      const input = elements[i];
      if (input.id === "submitBtn") {
        continue;
      }
      body[input.id] = input.value;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => alert("Su consulta fue recibida con éxito!."));
  });

document.getElementById("menu-btn").onclick = function () {
  const navBar = document.getElementById("navbar");
  const isShown = navBar.classList.contains("showMenu");

  if (!isShown) {
    navBar.classList.add("showMenu");
  } else {
    navBar.classList.remove("showMenu");
  }
};

document.getElementById("menu-btn").onclick = function () {
  const navBar = document.getElementById("navbar");
  const isShown = navBar.classList.contains("showMenu");

  if (!isShown) {
    navBar.classList.add("showMenu");
  } else {
    navBar.classList.remove("showMenu");
  }
};

document.getElementById("navbar").onclick = function () {
  document.getElementById("navbar").classList.remove("showMenu");
};
