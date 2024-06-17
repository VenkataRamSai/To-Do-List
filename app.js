let content = document.querySelector(".content");
let container = document.querySelector(".lis_cont");
let addButton = document.querySelector(".btn"); 

addButton.addEventListener("click", execute);

function execute() {
    if (content.value === '') {
        alert("Write Something!");
    } else {
        let item = document.createElement("li");
        item.innerHTML = content.value; 
        container.appendChild(item);
        
        let extra=document.createElement("span")
        extra.innerHTML="\u00d7";
        item.appendChild(extra);
}
content.value = ''; 
save();
}

container.addEventListener("click",function(k){
    if(k.target.tagName==="LI")
    {
        k.target.classList.toggle("checked");
        save();
    }
    else if(k.target.tagName==="SPAN")
    {
        k.target.parentElement.remove();
    }
    save();
})

function save()
{
    localStorage.setItem("data",container.innerHTML);
}
function show()
{
    container.innerHTML=localStorage.getItem("data");
}
show();