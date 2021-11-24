export const createImageNode = (source) => {
  const wrapper = document.createElement('div'),
    image = document.createElement('img')
  wrapper.className = 'lds-hourglass'
  image.classList.add('addImg')
  image.dataset.src = source
  wrapper.append(image)
  return [wrapper, image]
}