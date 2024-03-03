const data = [0,1,2,3,4,5,6,7,8,9];

const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

$(document).ready(function(){
    $("#uppercase_box, #lowercase_box").hide();

    $('#letters').change(()=>{
        $("#uppercase_box, #lowercase_box").toggle();
        $("#uppercase, #lowercase").prop("checked",true);
    })

    $("#generateButton").on("click",function(){
        const val_length = parseInt($("#val_length").val());
        var password = "";

        for(let i = 0; i < val_length;i++){
           password = password + data[generateRandomNumber(0,9)]; 
        }

        printPassword(password);
    })
})

function printPassword(password){
    $("#strong_password").val(password);
}

function generateRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;  
}