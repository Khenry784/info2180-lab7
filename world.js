window.onload = function() {

  var lookup = document.querySelector('#lookup');
  var httpRequest;

 
  lookup.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();
    var country = document.querySelector('#country').value;
    
    // GET Request
    var url = "world.php";
    httpRequest.onreadystatechange = countrySearch;
    httpRequest.open('POST', url);
    //setting the Content-Type
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('country=' + encodeURIComponent(country) );
  });

  function countrySearch() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};