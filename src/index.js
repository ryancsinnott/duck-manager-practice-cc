// write your code here!
const URL="http://localhost:3000/ducks"
fetch(URL)
.then(response=>response.json())
.then(ducks=>ducks.forEach(duck=>renderDuck(duck)))
const duckDisplayLikes=document.querySelector("#duck-display-likes")
duckDisplayLikes.addEventListener("click",e=>updateDuckLikes(e))
const newDuckForm=document.querySelector("#new-duck-form")
newDuckForm.addEventListener("submit",addNewDuck)

function renderDuck(duck){
    const displayDuck=document.querySelector("#duck-nav")
    const image=document.createElement("img")
    image.src=duck.img_url
    image.addEventListener("click",()=>{
        const duckDisplay=document.querySelector("#duck-display")
        duckDisplay.querySelector("#duck-display-name").textContent=duck.name
        duckDisplay.querySelector("img").src=duck.img_url
        duckDisplay.querySelector("#duck-display-likes").textContent=`${duck.likes} likes`

    })
    displayDuck.append(image)
}

function updateDuckLikes(e){
    let numOfLikes=parseInt(duckDisplayLikes.textContent)
    numOfLikes+=1
    duckDisplayLikes.textContent=`${numOfLikes} likes`
}

function addNewDuck(event){
    event.preventDefault()
    const name=event.target["duck-name-input"].value
    const img_url=event.target["duck-image-input"].value
    const likes=0
    const newDuck={name,img_url,likes}
    renderDuck(newDuck)
}