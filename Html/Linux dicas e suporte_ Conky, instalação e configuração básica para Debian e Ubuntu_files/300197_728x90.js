var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({repeat:0, repeatDelay:2.4});

window.onload = function() {   
  
  tl.set(banner, {visibility: "visible"})

  /*frame one*/ 
  .add("frame1")
  .from(".bg1, .product1, .sale1", 1, { x:-728,ease:Back.easeOut.config(.9)}, "frame1")
  .from(".dell_logo, .vendor_logo, .frm-1-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame1+=0.4")
  .from(".vialator1-1", .5, {alpha:0,clip:"rect(0px,0px,0px,0px)", ease:Linear.easeIn, delay:.4},"frame1+=0.3")
  .from(".vialator1-2", .5, {alpha:0,clip:"rect(0px,100px,0px,100px)", ease:Linear.easeIn, delay:.6}, "frame1+=0.3")   
  .to(" .bg1, .product1, .frm-1-text, .sale1, .vialator1-1, .vialator1-2", .2, {alpha:0, ease:Linear.easeOut}, "frame1+=3.2")

  /*frame two*/
  .add("frame2","frame1+=2.9")
  .from(".bg2, .product2", 1, { x:-760,ease:Back.easeOut.config(.9)}, "frame2")
  .from(".frm-2-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame2+=0.3")
  .to(".frm-2-text, .bg2, .product2", .2, {alpha:0, ease:Linear.easeOut}, "frame2+=3.2")

  /*frame three*/
  .add("frame3","frame2+=2.9")
  .from(".bg3, .product3", 1, { x:-760,ease:Back.easeOut.config(.9)}, "frame3")
  .from(".frm-3-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame3+=0.3")
  .to(".frm-3-text, .bg3, .product3", .2, {alpha:0, ease:Linear.easeOut}, "frame3+=3.2")

  /*frame four*/
  .add("frame4","frame3+=2.9")
  .from(".bg4, .product4", 1, { x:-760,ease:Back.easeOut.config(.9)}, "frame4")
  .from(".frm-4-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame4+=0.3")
  .to(".frm-4-text, .bg4, .product4", .2, {alpha:0, ease:Linear.easeOut}, "frame4+=3.2")

  /*frame five*/
  .add("frame5","frame4+=2.9")
  .from(".bg5, .product5, .sale2", 1, { x:-760,ease:Back.easeOut.config(.9)}, "frame5")
  .from(".vialator2-1", .5, {alpha:0,clip:"rect(0px,0px,0px,0px)", ease:Linear.easeIn, delay:.4},"frame5+=0.3")
  .from(".vialator2-2", .5, {alpha:0,clip:"rect(0px,100px,0px,100px)", ease:Linear.easeIn, delay:.6}, "frame5+=0.3")   
  .from(".frm-5-text-1, .frm-5-text-2, .cta, .price-mainbox", .4, {alpha:0,ease:Linear.easeInOut}, "frame5+=0.3")
  
  ;

//tl.seek().pause(14);
    
  // tl.seek("loop")

  var currentDuration = tl.duration();
  console.log(currentDuration);

};