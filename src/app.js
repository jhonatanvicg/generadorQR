let img = false;
let btn = document.querySelector('.btn');
let btnClose = document.querySelector('.btn-close')
let containerQR = document.querySelector('.qrContainer');
let elText = document.querySelector('.textToQR');
let qrBaby = document.querySelector('.qrBaby');





btnClose.addEventListener('click',()=>{
    containerQR.classList.remove('open');
    containerQR.classList.add('close');
    setTimeout(()=>{
        if(img){
            removeQR();
        }
        containerQR.classList.add('hiddenPosition');
    },500)
    

})

btn.addEventListener('click',()=>{
    if(!elText.value){
        alert("Favor de llenar todos los campos")
    }else{
        containerQR.classList.remove('hiddenPosition');
        containerQR.classList.add('open');
        generateQr();
    }
})


function generateQr(){
    if(img){
        removeQR();
    }

    
    let qrC = new QRCode(document.querySelector(".qrBaby"),{
        width:100,
        height:100
    });

    
    qrC.makeCode(elText.value)
    setTimeout(()=>{
        img = qrBaby.querySelector('img')
    },1000)
}

function removeQR(){
        document.querySelector('.qrBaby').removeChild(img)
        img = false;
}