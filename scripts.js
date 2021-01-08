$('#compteur').text($('.mail').length); 


$('.bin').click(
    function(){
        this.parentNode.remove();
        $('#compteur').text($('.mail').length);
        }
    )



var clickadd = $('#btn');

clickadd.click(
    function(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max)); }
        var selectrandom = getRandomInt(11)
        tabimg = new Array();
        tabimg = ["./img/Fichier 1.png","./img/Fichier 2.png","./img/Fichier 3.png","./img/Fichier 4.png","./img/Fichier 5.png","./img/Fichier 6.png","./img/Fichier 7.png","./img/Fichier 8.png","./img/Fichier 9.png", "./img/Fichier 10.png","./img/Fichier 11.png","./img/Fichier 12.png",] 
        tabname = new Array();
        tabname = ["Jacob Granet","Ambre Corriveau","Yvon Messier","Julie Beauregard","Ilonna Bonnot","Aymeric Féret","Nina Choffard","Esther Allaire","Maria Lavigne","Jean-Loup Poincaré","Virginie De Guignes","Alain Marchand"]
            var nomaleatoire = tabname[selectrandom]
            var imgaleatoire = tabimg[selectrandom]
            console.log(imgaleatoire)
            



        $(".newtxt").after(`<li class='mail tmplt'><img class='avatar' src='${imgaleatoire}' alt='photo de profil Noel'><div class='message'><h6>${nomaleatoire}</h6><p>${$("#newmsg").val()}</p></div><img class='bin' src='./img/recycle-bin-1-461646.png' alt='bin picto'></li>`)
        $("#newmsg").val('Nouveau Message')
        
        $('#compteur').text($('.mail').length);
        $('.bin').click(
            function(){
                this.parentNode.remove();
                $('#compteur').text($('.mail').length);
                }
            )
            $("#newmsg").value=''
        
    })

    $('#btn1').click(function(){
        $('h6').each(
            function(){
                if($('#search').val()!= $(this).text()){
                    $(this).parent().parent().fadeOut()
                }
            }
        )
    }     
)
    


