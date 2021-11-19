const app = document.querySelector('#mount-js')
function getImg(){
    const img = document.createElement('img')
    img.src = 'https://source.unsplash.com/random'
    img.classList.add('addImg')
    app.appendChild(img)
}
