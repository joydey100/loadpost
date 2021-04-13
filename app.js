let button = document.getElementById("button");
let box = document.getElementById("box");
let mainList = document.createElement("ul")
mainList.style.textAlign = "left";
mainList.style.marginTop = "25px";

button.addEventListener("click", function(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    request.send()

    request.onreadystatechange = function handleRequest(){
        if(request.readyState === 4 && request.status ===200){
            let post = JSON.parse(request.responseText);
            post.forEach(function(singleData){
                let list = document.createElement("li")
                list.style.margin = "6px";
                list.textContent = singleData.title;
                mainList.appendChild(list)
            })
            box.insertAdjacentElement("beforeend", mainList)
        }
    }
})