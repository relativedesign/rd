document.body.onscroll = function() {getPosition(document.documentElement.scrollTop)}

const bodyheight = document.body.offsetHeight;
const scrollheight = document.body.scrollHeight;
const windowheight = document.body.windowHeight;

const halfwindow = windowheight/2;
const numbers = ['one','two','three','four','five','six','seven'];
const container = [];

for (var i = 0; i < numbers.length; i++) {
	let div = new Object;
	let height = document.getElementById(numbers[i]).offsetHeight;
	div.height = height;
	div.totalScroll = (i === 0 ? height : container[i-1].totalScroll + height);
	container.push(div)
}
tracker = (id) => {
    for (var i = 0; i < numbers.length; i++) {
       document.querySelectorAll('#navigationmenu > div > div > a')[i].style.color = 'inherit'
    }
    document.querySelectorAll('#navigationmenu > div > div > a')[id].style.color = '#7665d5'
}
getPosition = (p) => {
    if(p < container[0].totalScroll){
        tracker(0)
    }
    for (var i = 1; i < numbers.length; i++) {
        if(p < container[i].totalScroll && p > container[i-1].totalScroll ){
            tracker(i)
        }
        else{
        	document.querySelectorAll('#navigationmenu > div > div > a')[i].style.color = 'inherit'
        }
    }
//alert(container[0].totalScroll + " and " + p)
}

//console.log(scroll)


  

