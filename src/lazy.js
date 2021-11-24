
const observer = new IntersectionObserver((entries) => {
  const nodo = entries[0]
  if(nodo.isIntersecting){
    const container = nodo.target, //container (div)
      img = container.firstChild
    //load image
    img.src = img.dataset.src
    // container.classList.remove('wrapper')
    //desregister image (unlisten)
    observer.unobserve(nodo.target)
  }
})

export const registerImg = (image) => {
  //Observer watches this image
  observer.observe(image)
}