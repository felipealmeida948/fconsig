//Alterar classe da navbar
$(function(){
    	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
            $('nav').removeClass('nav-scroll');
            
		} else {
            $('nav').addClass('nav-scroll');
		}
	});
});

Var session = Flashphoner.createSession({urlServer:"wss://192.168.88.59:8443", flashProto:"rtmfp"});
session.createStream({name:"rtsp://192.168.200.16/live.sdp", display:myVideo}).play();