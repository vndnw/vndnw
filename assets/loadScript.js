function loadScript(component, id) {
  fetch(component)
    .then((res) => res.text())
    .then((text) => {
      document.getElementById(id).innerHTML = text;
    });
}