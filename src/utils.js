function nodeAnimation(){
  const container = document.createElement('div')
    container.classList.add('lds-facebook')
  for(let i = 0; i < 3; i++){
    container.append(document.createElement('div'))
  }
  return container
}
export const createImageNode = (source) => {
  const wrapper = document.createElement('div'),
    animations = nodeAnimation(),
    image = document.createElement('img')
  animations.className = 'lds-facebook'
  image.classList.add('addImg')
  image.dataset.src = source
  wrapper.append(animations, image)
  return [wrapper, image]
}