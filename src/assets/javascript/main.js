// var at1 = new TimelineMax();

// at1.from(".sectionAboutText",0.5,{left:100,opacity:0},".about");
$(document).ready(function(){
//Init ScrollMagic 
var controller = new ScrollMagic.Controller();

//build a scene 
// var kidAnimalScene = new ScrollMagic.Scene({
//     troggerElement: '',
//     triggerHook: 1
// })
// .setPin({})
// .addTo(Controller); 

var illustrateScene = new ScrollMagic.Scene({
    triggerElement:'.aboutMain',
})
.setClassToggle('.illustrate','fade-in')
// .addIndicators()
.addTo(controller);

var aboutTextScene = new ScrollMagic.Scene({
    triggerElement:'.aboutLine1'
})
.setClassToggle('.sectionAboutText','fade-in')
//.addIndicators()
.addTo(controller);


var portfolioScene = new ScrollMagic.Scene({
    triggerElement:'.portfolioMain'
})
.setClassToggle('.slides','fade-in')
//.addIndicators()
.addTo(controller);

var contactInfoScene = new ScrollMagic.Scene({
    triggerElement:'.contact'
})
.setClassToggle('.contact','fade-in')
//.addIndicators()
.addTo(controller);
});