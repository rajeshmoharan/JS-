
 const colorChg=function(){
    const hex = '0123456789ABCDEF';
    let colorCode = '#';
    for(let i=0; i<6; i++){
        colorCode += hex[Math.floor(Math.random()*16)];     
    }
    return colorCode;
}

let setIn;

let backGroundChanger = function(){
    document.body.style.backgroundColor = colorChg();
}


document.querySelector('#start').addEventListener('click',function(){
    setIn = setInterval(backGroundChanger,1000);
    console.log('Started');
});

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(setIn);
    console.log('Stopped');
})


