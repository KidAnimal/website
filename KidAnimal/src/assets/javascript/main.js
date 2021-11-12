// function scrollMagic(){
// //Init ScrollMagic 
// var controller = new ScrollMagic.Controller();

// var nonsenseScene = new ScrollMagic.Scene({
//     triggerElement:'.blankDiv'
// })
// .setClassToggle('.blankDiv','toggleOff')
// .addTo(controller);

// if((document.getElementsByClassName('title').length)>0){
//     var backgroundScene = new ScrollMagic.Scene({
//         triggerElement:'.title',
//     })
//     .setClassToggle('.heroImage','fade-out')
//     .duration(1000) 
//     .addTo(controller);
// }

// if((document.getElementsByClassName('title').length)>0){
//     var backgroundScene = new ScrollMagic.Scene({
//         triggerElement:'.title',
//     })
//     .setClassToggle('.title','title_Short_Slide_Up')
//     .duration(1000) 
//     .addTo(controller);
// }

// // if((document.getElementsByClassName('title').length)>0){
// //     var backgroundScene = new ScrollMagic.Scene({
// //         triggerElement:'.title',
// //     })
// //     .setClassToggle('.quoteText','title_Slide_Up')
// //     .duration(1000) 
// //     .addTo(controller);
// // }

// // if((document.getElementsByClassName('aboutMain').length)>0){

// //     var illustrateScene = new ScrollMagic.Scene({
// //         triggerElement:'.aboutMain',
// //     })
// //     .setClassToggle('.illustrate','fade-in')
// //     .addTo(controller);
// // }

// if((document.getElementsByClassName('aboutImage').length)>0){
//     var aboutTextScene = new ScrollMagic.Scene({
//         triggerElement:'.aboutImage'
//     })
//     .setClassToggle('.sectionAboutText','fade-in')
//     .addTo(controller);
// }

// // if((document.getElementsByClassName('portfolioMain').length)>0){
// //     var portfolioScene = new ScrollMagic.Scene({
// //         triggerElement:'.portfolioMain'
// //     })
// //     .setClassToggle('.slides','fade-in')
// //     .addTo(controller);
// // }


// if((document.getElementsByClassName('contact').length)>0){
//     var contactInfoScene = new ScrollMagic.Scene({
//         triggerElement:'.contact'
//     })
//     .setClassToggle('.contact','fade-in')
//     .addTo(controller);
//     };
// }

// function fireWhenReady() {
//     if (typeof scrollMagic() != 'undefined') {
//         scrollMagic();
//     }
//     else {
//         setTimeout(fireWhenReady, 100);
//     }
// }
// $(document).ready(fireWhenReady);