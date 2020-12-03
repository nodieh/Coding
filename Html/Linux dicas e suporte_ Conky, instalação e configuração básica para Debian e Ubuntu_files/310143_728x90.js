var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({repeat:0, repeatDelay:2.5});

window.onload = function() {   
    
	tl.set(banner, {visibility: "visible"})

	/*frame one*/	
	.add("frame1")
	.from(".dancer,.dell-logo,.vendor-logo", .5, {alpha:0, ease:Linear.easeIn}, "frame1")
	.to(".dancer,.dell-logo,.vendor-logo", .5, {alpha:0, ease:Power4.easeOut}, "frame1+=2.8")

	/*frame two*/
	.add("frame2","frame1+=3")
	.from(".frame-2-text", .5, {alpha:0, ease:Linear.easeIn}, "frame2")
	.from(".violator-f2", .5, {alpha:0, y:-10, ease:Linear.easeIn}, "frame2+=.3")
	.to(".violator-f2,.frame-2-text", .5, {alpha:0, ease:Power4.easeOut}, "frame2+=2.8")

	/*frame three*/
	.add("frame3","frame2+=3")
	.from(".dell-logo-f3,.vendor-logo-f3,.product_f3, .f3-price, .cta, .shipping", .3, {alpha:0, ease:Linear.easeIn}, "frame3")
	.from(".violator-f3", .5, {alpha:0, y:-10, ease:Linear.easeIn}, "frame3")
	.to(".product_f3,.f3-price,.dell-logo,.vendor-logo,.violator-f3", .3, {alpha:0, ease:Power4.easeOut}, "frame3+=2.8")

	/*frame four*/
	.add("frame4","frame3+=3")
	.from(".frame-4-text, .product_f4, .f4-price,.vendor-logo-f4", .3, {alpha:0, ease:Linear.easeIn}, "frame4")
	.to(".frame-4-text,.product_f4, .f4-price,.vendor-logo-f4", .3, {alpha:0, ease:Power4.easeOut}, "frame4+=2.8")

	/*frame five*/
	.add("frame5","frame4+=3")
	.from(".dell-logo-f5,.vendor-logo-f5,.product_f5, .frame-5-text, .funding-text, .f5-price", .5, {alpha:0, ease:Power4.easeIn}, "frame5")
	.from(".violator_last", .3, {alpha:0,  y:-10, ease:Power4.easeIn}, "frame5")

  	/*roll over
	  .from("#roll-cta", .5, {alpha:0, x:-300, ease:Power4.easeout}, "frame5")
	  .from("#rolltext", .5, {alpha:0, ease:Power4.easeout}, "frame5")
	  .from("#legal-text", .5, {alpha:0, ease:Power4.easeout}, "frame5")
	  
		legal.addEventListener("mouseover",legalHover);
		function legalHover(){
			tl.pause();
			TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
	  }
	  
		legal.addEventListener("mouseout",legalOut);
		function legalOut(){
			tl.play();
			TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
		}*/

	;
//tl.seek().pause(14);
    
  // tl.seek("loop")
  var currentDuration = tl.duration();
  console.log(currentDuration);  

  };