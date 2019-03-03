window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
	document.getElementById("logo1").style.fontSize = "35px";
	document.getElementById("logo2").style.width = "0px";
	document.getElementById("logo2").style.border = "0px";
	//document.getElementById("topmenu").style.top = "70px";
  } else {
   // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "50px";
	document.getElementById("logo1").style.fontSize = "50px";
	document.getElementById("logo2").style.width= "75px";
	document.getElementById("logo2").style.border = "3px solid #cc6600";
	//document.getElementById("topmenu").style.top = "106px";
  }
}
