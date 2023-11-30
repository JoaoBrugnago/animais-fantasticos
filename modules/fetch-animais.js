import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function criarAnimais() {
    try {
      const responseAnimais = await fetch(url);
      const jsonAnimais = await responseAnimais.json();
  
      jsonAnimais.forEach(animal => preencherAnimais(animal));

      const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", 'ativo')
      animaNumeros.init();
    } catch (erro) {
    console.log(erro)
  }
}

  return criarAnimais()
}
