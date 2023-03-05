$(document).ready(function(){
    $("#uppercase_box, #lowercase_box").hide();

    $('#letters').change(()=>{
        $("#uppercase_box, #lowercase_box").toggle();
        $("#uppercase, #lowercase").prop("checked",true);
    })
})