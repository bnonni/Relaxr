$(document).ready(function(){
    $('.readmore').on('click', slideDown);
    $('.readless').on('click', readLess);
    $('.learnmore').on('click', sideBarDown);
})


function slideDown() {
    $('#show-this-on-click').slideDown(); 
    $('.readmore').hide();
    $('.readless').show();
}

function readLess() {
    $('#show-this-on-click').slideUp(1);
    $('.readmore').show();
    $('.readless').hide();
}


function sideBarDown() {
    $('#learnmoretext').slideDown(); 
    $('.learnmore').hide();
}
