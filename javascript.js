// JavaScript Document
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function timing() {
    alert('Hello');
}

  function ReadCookie()
            {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
               
         
               cookiearray = allcookies.split(';');
            
               for(var i=0; i<cookiearray.length; i++){
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.write ("Key is : 50" + name + " and Value is : 50" + 0);
               }
            }
         //-->
