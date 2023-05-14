let dob = document.querySelector("#dob");
let lucky = document.querySelector("#lucky");
let checkBtn = document.querySelector("#check");
let output = document.querySelector(".output");
let error = document.querySelector(".error");
let LuckyImg = document.querySelector("#lucky-img");
function showError(text){
    error.style.display = "block";
    error.innerText = text;
    output.style.display = "none";
    LuckyImg.style.display = "none";
}
function hideError(){
    error.style.display = "none";
}
checkBtn.addEventListener("click",()=>{
    
    if(dob.value !== "" && lucky.value >0)
    {
        hideError();
        let birthdate = convertDate(dob.value);
        let luckyNumber = lucky.value;
        let sum = calculateSum(birthdate);
        calulateLucky(sum,luckyNumber);
    }
    else{
        showError("Enter the input fields");
    }
    
})

function convertDate(dateBirth){
    dateBirth = dateBirth.replaceAll("-","");
    return dateBirth;
}
function calculateSum(dateBirth){
    let sum = 0;
    for(let i = 0;i<dateBirth.length;i++){
        sum = sum + Number(dateBirth[i]);
    }
    return sum;
}
function calulateLucky(sum, luckyNumber){
    if(sum % luckyNumber === 0)
    {
        showOutput();
        LuckyImg.src = "lucky.avif"
        LuckyImg.style.display = "block";
    }
    else{
        hideOutput();
        LuckyImg.src = "unlucky.jpg"
        LuckyImg.style.display = "block";
    }
}

function showOutput(){
    output.style.display = "block";
    output.innerText = "Your Birthday is lucky";
    
}
function hideOutput(){
    output.style.display = "block";
    output.innerText = "Unfortunately its unlucky";
}
