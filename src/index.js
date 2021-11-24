import { registerImg } from "./lazy.js"
// Point mount and API
const app = document.querySelector('#mount-js'),
    API = 'https://randomfox.ca/floof/'
function createImageNode(source){
    const imgNodo = document.createElement('img'),
        container = document.createElement('div')
    imgNodo.className = 'addImg wrapper'
    imgNodo.dataset.src = source
    // container.classList.add('wrapper')
    container.appendChild(imgNodo)
    return container
}
const getImg = async () => {
    const response = await fetch(API),
        dataJson = await response.json()
    const image = createImageNode(dataJson.image)
    app.appendChild(image)
    registerImg(image)
}
const btn = document.querySelector('#loadButtom')
btn.addEventListener('click', getImg)
