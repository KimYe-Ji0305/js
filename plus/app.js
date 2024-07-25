// console.log('ddddddd');
// //사용자에게 입력을 유도, 입력이 이루어질떄까지 코드가 멈춤
// const a = prompt("write number");
// console.log(a, typeof a);

// //string - > number
// console.log(a,typeof parseInt(a));

const H1 =document.getElementById("title");
H1.innerText = 'Gotyou';
console.log(H1);

const hellos = document.getElementsByClassName("hello");
console.log(typeof hellos);
console.log(hellos);
const H11 = document.getElementsByTagName("h1");

console.dir(H1);


// function hand(){
//     H1.innerText = 'mouse is hear';
// }
// function handle (){
//     H1.innerText = 'mouse is gon';
// }
// function resizeWindow(){
//     //
//     document.body.style.backgroundColor = "tomato";
// }
// function Copy(){
//     alert("stop copy");
// }
// function offwifi(){
// alert ("nowifi");
// }
// function onwifi(){
//     alert ("on  wifi");
//     }
// //이벤트방법 1 - .removeEventListener로 이벤트 삭제 가능
// H1.addEventListener("mouseenter",hand);
// H1.addEventListener("mouseleave",handle);
// //이벤트방법2
// H1.onclick = Click;

// window.addEventListener("resize",resizeWindow);
// window.addEventListener("copy",Copy);
// window.addEventListener("offline",offwifi);
// window.addEventListener("online",onwifi);

function Click(){
    // // console.log(H1.style.color);
    // // if (H1.style.color == "black")
    // // H1.style.color = "blue";
    // // else
    // // H1.style.color = "black";
    // // console.log(H1.style.color);
    // const clickedClass = "clicked"
    // if (H1.classList.contains(clickedClass)){
    //     H1.classList.remove(clickedClass);
    // }else{
    //     H1.classList.add(clickedClass);
    // }
    H1.classList.toggle("clicked");
    
}
H1.addEventListener("click",Click);
