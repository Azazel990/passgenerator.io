
const digits = [0,1,2,3,4,5,6,7,8,9];
const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = generateUpperCaseAlphabets(alphabets);
const special = ["_","@","#","$","%","^","&","*","+",":","<",">","?"];
const modes = [digits,alphabets,uppercase,special];

$(document).ready(function(){
    
    $("#uppercase_box, #lowercase_box").hide();

    $('#letters').change(()=>{
        $("#uppercase_box, #lowercase_box").toggle();
        if($("#letters").is(":checked") == false){
            $("#uppercase, #lowercase").prop("checked",false);
        }else{
            $("#uppercase, #lowercase").prop("checked",true);
        }
    })

    $("#uppercase,#lowercase").on("change",function(){
        if( $("#lowercase").is(":checked") === false && $("#uppercase").is(":checked") === false){
            $("#uppercase_box, #lowercase_box").hide();
            $("#letters").prop("checked",false);   
        }
    })

    $("#generateButton").on("click",function(){
        let password_length = parseInt($("#password_length").val());
        const includings = [$("#digits").is(":checked"), $("#lowercase").is(":checked"), $("#uppercase").is(":checked"),$("#special").is(":checked")]
        const data = prepareData(includings);
        printPassword(generatePassword(password_length,data));
    })

    $("#copyButton").on("click",function(){
        const copyText = document.getElementById("strong_password");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    })
})
function prepareData(includings = []){
    let data = [];
    for(let i = 0;i < includings.length;i++){
        if(includings[i] === true) data.push(modes[i]);
    }
    return data;
}
function generatePassword(password_length = 8,data = []){
    let password = "";

    if(data.length === 0) data = modes;

    for(let i = 0; i < password_length;i++){
        let arr = data[generateRandomNumber(0,data.length - 1)];
        password = password + arr[generateRandomNumber(0,arr.length - 1)]; 
    }
     return password;
}

function printPassword(password){
    $("#strong_password").val(password);
}

function generateRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;  
}

function generateUpperCaseAlphabets(alphabets = []){
    let uppercase = [];
    for(let i = 0;i < alphabets.length; i++){
        uppercase.push(alphabets[i].toUpperCase());
    }
    return uppercase;
}