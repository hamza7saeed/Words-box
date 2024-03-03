document.title = "Word pad";
let head = document.head;
let body = document.body;
body.style.backgroundImage = 'url("https://wallpaperping.com/wp-content/uploads/2019/08/wp2670841.jpg")'
let icon = document.createElement("link");

icon.type = "icon/x-image";
icon.rel = "icon";
icon.href = "https://cdn.iconscout.com/icon/premium/png-256-thumb/word-count-5181686-4319753.png"
let foot = document.querySelector("footer");
foot.style.padding = "2%";


let word = document.querySelector("#Words");

let char = document.querySelector("#Characters");


let textBox = document.querySelector("#box");

textBox.addEventListener("keyup", function myStr(){
    let mystr = textBox.value.trim().split(/\s+/);
    let zx = mystr.filter(function (e) {
        return e != "";
    })
    word.innerText = zx.length;

    let name = mystr.join(""); 
    char.innerText = name.length;
   
    }
    )









head.appendChild(icon)