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
