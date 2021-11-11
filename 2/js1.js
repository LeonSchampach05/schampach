function myfunction() {   
    var a = document.querySelector('input[name="fav_language"]:checked').value;
    if(a == 2){
        window.location.replace("Klopfer_2.html")
    }
    else{
        window.location.replace("Klopfer_3.html")
    }
} 