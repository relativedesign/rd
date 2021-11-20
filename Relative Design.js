/*!
   ----------------------------
       Relative Design 1 
   ----------------------------
     Version - 1.0.0 | © 2016 Relative Design | Licensed under MIT 
      ~ getRelativeDesign.com  
	  ~ tutorial.getRelativeDesign.com 
      ~ https://github.com/Avimm5/Relative-Design/blob/master/LICENSE	  
 */
 
// this creates row 
var r = ".row >";
var z = ['.lg','.lg-in','.md','.md-in','.sm','.sm-in'];
z.forEach(function(x){
var xx = document.querySelector(r + x); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.parentNode.clientHeight;
  var rows = ['lg','lg-in','md','md-in','sm','sm-in'],
    getDiv = document.getElementsByTagName('DIV'),
    num,
    height = {};

 var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   height[rows[0]] = lgh;
                   height[rows[1]] = lgh_in;
                   height[rows[2]] = lgh - mdh;
                   height[rows[3]] = mdh_in/1.618;
                   height[rows[4]] = smh;
                   height[rows[5]] = smh_in;
            
for (num = 0 ; num < getDiv.length ; num++) {
    getDiv[num].style.height = height[getDiv[num].className.split(' ')[0]] +"px" ;
}
}
});

//this creates rows in golden ratio 
var r = "div >";
var z = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'];
 z.forEach(function(n){
 var xx = document.querySelector(r + n); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.clientHeight;
var rowClass = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'],
    all = " > *" , rowHeight = {};

   var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   rowHeight['row-lg'] = lgh;
                   rowHeight['row-lg-in'] = lgh_in;
                   rowHeight['row-md'] = lgh - mdh;
                   rowHeight['row-md-in'] = mdh_in/1.618;
                   rowHeight['row-sm'] = smh;
                   rowHeight['row-sm-in'] = smh_in;

rowClass.forEach(function(x) {
  var sel = document.querySelector(x + all);
  for (var i = 0; i < sel.length; i++) {
    sel[i].style.height = rowHeight[sel[i].parentNode.className.split(" ")[0]] +"px";   
  }
})
 }
 });

// this creates rows inside any row 
   var rin = "div >" , zin = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'];

zin.forEach(function(n){
 var xx = document.querySelector(rin + n); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.parentNode.clientHeight;
var rowClass = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'],
    all = " > *" , rowHeight = {} , clsnm = ['row-lg','row-lg-in','row-md','row-md-in','row-sm','row-sm-in'];
   var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   rowHeight[clsnm[0]] = lgh;
                   rowHeight[clsnm[1]] = lgh_in;
                   rowHeight[clsnm[2]] = lgh - mdh;
                   rowHeight[clsnm[3]] = mdh_in/1.618;
                   rowHeight[clsnm[4]] = smh;
                   rowHeight[clsnm[5]] = smh_in;
rowClass.forEach(function(x) {
  var sel = document.querySelectorAll(x + all);
  for (var i = 0; i < sel.length; i++) {
    sel[i].style.height = rowHeight[sel[i].parentNode.className.split(" ")[0]] +"px";   
  }
}) 
 }
 });

//for sticky div

$ = document.querySelectorAll.bind(document);
  // how far is the green div from the top of the page?
  var initStickyTop = $(".stickdiv")[0].getBoundingClientRect().top + pageYOffset;
  // clone the green div
  var clone = $(".stickdiv")[0].cloneNode(true);
  // hide it first
  clone.style.display = "none";
  // add it to dom
  document.body.appendChild(clone);
    addEventListener("scroll",stick=function() {
      // if user scroll past the sticky div
      if (initStickyTop < pageYOffset) {
        // hide the green div but the div still take up the same space as before so scroll position is not changed
        $(".stickdiv")[0].style.opacity = "0";
        // make the clone sticky
        clone.classList.add('stick');
        // show the clone
        clone.style.opacity="1";
        clone.style.display = "block";
      } else {
        // make the clone not sticky anymore
        clone.classList.remove("stick");
        // hide it
        clone.style.display = "none";
        // show the green div
        $(".stickdiv")[0].style.opacity="1";
      };
    });
    // when resize, recalculate the position of the green div
    addEventListener("resize", function() {
      initStickyTop = $(".stickdiv")[0].getBoundingClientRect().top + pageYOffset;
      stick();
    });
	
//scrollspy

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
