

const clk = document.querySelector('#clock');

setInterval(function(){
    const date = new Date();
    clk.innerHTML = date.toLocaleTimeString();
},1000)