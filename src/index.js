// Point mount and API
const app = document.querySelector('#mount-js'),
    API = 'https://randomfox.ca/floof/'
function createImageNode(source){
    const imgNodo = document.createElement('img'),
        container = document.createElement('div')
    imgNodo.classList.add('addImg')
    imgNodo.src = source
    container.appendChild(imgNodo)
    return container
}
const getImg = async () => {
    const response = await fetch(API),
        dataJson = await response.json()
    const image = createImageNode(dataJson.image)
    app.appendChild(image)

}