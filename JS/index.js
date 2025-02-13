function showTime(){
	var curtain = document.getElementById("curtain");
	curtain.className = "open";
	document.querySelector('.curtainBox').remove();
	
  
	setTimeout(function(){
		document.querySelector('.main').style.opacity = 1;
		curtain.remove();
	}, 3000);
};



document.querySelector('.main').style.opacity = 1;