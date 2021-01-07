document.getElementById('compteur').textContent = document.getElementsByClassName('mail').length;


var trashClick = document.getElementsByClassName('bin');

for(var i=0; i<trashClick.length; i++){
trashClick[i].addEventListener("click", 
    function(){
            this.parentNode.remove();
            document.getElementById('compteur').textContent = document.getElementsByClassName('mail').length;
        }
    )
}

var clickadd = document.get