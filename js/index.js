const data = [0,1,2,3,4,5,6,7,8,9];

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
    return Math.floor(Math.random() * (max - min) ) + min;
  }