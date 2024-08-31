const url = "	https://jsonplaceholder.org/posts"
const containerDiv = document.querySelector(".container")

sendMessageAboutLastVisitedPage()
getAndDisplayPosts()

async function getAndDisplayPosts(){
    try{
        const rawFetch = await fetch(url)
        const fetchInJson = await rawFetch.json()
        const posts = fetchInJson.splice(0, 10)
        const inner = posts.map((post)=>{
            return `<div>
            <h1>${post.title}</h1>
            <p>${post.content}</p>
            </div>`
        })
        containerDiv.innerHTML = inner 
    }
    catch (err){
        containerDiv.innerHTML = `an error ocurred. Type of error : ${err}` 
    }
}

async function sendMessageAboutLastVisitedPage(){
    try {
        const response = await chrome.runtime.sendMessage({
            page: "posts"
        });
    } catch (err) {
        console.log("Error sending message:", err);
    }
}