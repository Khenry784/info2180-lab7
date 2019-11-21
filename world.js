window.onload = function(){
  var lookup = document.querySelector('#lookup');
  lookup.addEventListener('click',function(){

    var searchtxt= document.querySelector('#country').value;
    var allCountries= document.querySelector('#allCountries').checked;
    getInfo(searchtxt,allCountries);
  
  }, false);

  function getInfo(q,all){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
      if(this.readyState== 4 && this.status==200)
        document.getElementById('result').innerHTML=this.responseText;
    }
    var querystring= "world.php?country="+ q + "&all"+ all;
    xhttp.open("Get",querystring,true);
    xhttp.send();
  } 
}