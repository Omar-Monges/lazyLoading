
const observer = new IntersectionObserver((entries) => {
  const nodo = entries[0]
  if(nodo.isIntersecting){
    const img = nodo.target
    //load image
    img.src = img.dataset.src
    img.onload = () => {
      img.parentElement.className = ''
    }
    // container.classList.remove('wrapper')
    //desregister image (unlisten)
    observer.unobserve(nodo.target)
  }
})

export const registerImg = (image) => {
  //Observer watches this image
  observer.observe(image)
}