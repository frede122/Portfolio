
var item = document.getElementById("carousel").getElementsByClassName('item');
var current = 0;
var lock = false;
const totalSlid = item.length;

function addAllCarouselItem(value){ 
    for(i = 0; i < item.length; i++){
        item[i].classList.add(value);
    }
}
function removeAllCarouselItem(value){
    for(i = 0; i < item.length; i++){
        item[i].classList.remove(value);
    }
}

function active(element){
    element.style.zIndex = 990;
    addAllCarouselItem("blur");
    element.classList.remove("blur");
    element.classList.add("active");
}
function desactive(element, time){
    
    removeAllCarouselItem("blur");
    element.classList.remove("active");
    window.setTimeout(() => {element.style.zIndex = 0 }, time);
}

function playCarousel(time, pause, start, aleator = false){
    if(start)
        window.setInterval(() =>{
            if(!lock){
                cur = current;
                if(aleator)
                    cur = Math.floor(Math.random() * item.length);
                active(item[cur]);
                window.setTimeout(() => {
                    desactive(item[cur], pause);
                }, pause); 
                current >= totalSlid -1 ? this.current = 0  : this.current++;
            }
        }, time);
}
function carMouseOver(id){
    lock = true;
    removeAllCarouselItem("active");
}
function carMouseOut(){ lock = false; }

playCarousel(3000, 1500, false, false);

