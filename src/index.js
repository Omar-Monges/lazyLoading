import { registerImg } from "./lazy.js"
import { createImageNode } from "./utils.js"
// Point mount and API
const app = document.querySelector('#mount-js'),
    API = 'https://randomfox.ca/floof/'
const getImg = async () => {
    const response = await fetch(API),
        dataJson = await response.json()
    const [wrapper, image] = createImageNode(dataJson.image)
    app.appendChild(wrapper)
    registerImg(image)
}
const btn = document.querySelector('#loadButtom')
btn.addEventListener('click', getImg)
