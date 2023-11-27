export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event) {
    this.tooltipbox.style.top = `${event.pageY + 20}px`;
    this.tooltipbox.style.left = `${event.pageX + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipbox.style.left = `${event.pageX - 190}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipbox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  //-- Cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const textoAriaLabel = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textoAriaLabel;
    document.body.appendChild(tooltipBox);
    this.tooltipbox = tooltipBox;
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

/* Método antigo
export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    //this faz referência ao elemento que chama (neste caso, div)
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 20 + "px";
    tooltipBox.style.left = event.pageX + 20 + "px";

    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove(),
        this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const textoAriaLabel = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textoAriaLabel;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
*/

/* Modo que eu fiz
const tooltips = document.querySelectorAll('[data-tooltip]');
let currentTooltip = null;

function onMouseOver(event) {
  if(currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
  const offsetLeft  = event.screenX - 10;
  const offsetTop   = window.pageYOffset + event.screenY - 110;
  //this faz referência ao elemento que chama (neste caso, div)
  const tooltipBox = criarTooltipBox(this, offsetLeft, offsetTop);
  currentTooltip = tooltipBox;
}

function criarTooltipBox(element, offsetLeft, offsetTop) {
  const tooltipBox = document.createElement('div');
  const textoAriaLabel = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = textoAriaLabel;
  document.body.appendChild(tooltipBox);
  tooltipBox.style.left = offsetLeft + 'px';
  tooltipBox.style.top  = offsetTop + 'px';
  return tooltipBox;
}

tooltips.forEach((item) => {
  item.addEventListener('mousemove', onMouseOver)
})
*/
