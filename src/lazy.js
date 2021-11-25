// function removeAnimations(nodo){
//   for (let i = 0; i < 3; i++) {
//     nodo.removeChild(nodo.firstChild)
//   }
// }

const observer = new IntersectionObserver((entries) => {
  const nodo = entries[0]
  if(nodo.isIntersecting){
    const img = nodo.target
    //load image
    img.src = img.dataset.src
    img.onload = () => {
      console.log('Tenemos q borrar')
      // removeAnimations(img.parentElement)
      img.previousElementSibling.remove()
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