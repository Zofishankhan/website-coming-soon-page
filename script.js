
let countDownDate = new Date("march 17,2024 00:00:00").getTime();
setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let days = Math.floor((distance/(1000 * 60 * 60 * 24)));
    let hours = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((distance%(1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((distance%(1000 * 60))/(1000));

    document.querySelector("#days").innerText = days + " :";
    document.querySelector("#hours").innerText = hours + " :";
    document.querySelector("#minutes").innerText = minutes + " :";
    document.querySelector("#seconds").innerText = seconds + " :";


    if(distance<0){
        document.querySelector("#days").innerText = "00 :";
        document.querySelector("#hours").innerText = "00 :";
        document.querySelector("#minutes").innerText = "00 :";
        document.querySelector("#seconds").innerText = "00";    
    }
    

},1000)