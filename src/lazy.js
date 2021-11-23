
const observer = new IntersectionObserver((entries) => {
  const nodo = entries[0]
  if(nodo.isIntersecting){
    observer.unobserve(nodo.target)
    console.log('hey me vez')
  }
})

export const registerImg = (image) => {
  //Observer watches this image
  observer.observe(image)
}