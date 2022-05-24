const refs = {
  sizeControlEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
}

const addInputSizeEventListener = refs.sizeControlEl.addEventListener('input', event => {
  refs.textEl.style.fontSize = `${event.target.value}px`
})