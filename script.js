const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qrbody');


let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();

});

sizes.addEventListener('change', (e)=>{

    size = e.target.value;
    isEmptyInput();
})

function isEmptyInput(){

    if(qrText.value.length>0){

        generateQRCode();

    }

    else{

        alert("enter the text or url to generate your qr code");
    }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
      new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}


    