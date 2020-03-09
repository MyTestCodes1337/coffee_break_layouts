let print = (text) => {
	console.log(text);
}

let searchForm = () => {
	let target = document.querySelector('.search__form');
	target.style.display = "table";
}


window.addEventListener('scroll', () => {
	let wH = window.pageYOffset
	let target = document.querySelector('.header__nav')

	if(wH >= 548 && wH <= 558){
		target.className = "header__nav fixed"
	}else if(wH >= 558){
		target.className = "header__nav fixed opacity1"
	}else if(wH <= 538){
		target.className = "header__nav"
	}
})

let links = document.querySelectorAll('.header__nav ul a');

links.forEach(link => {
		link.addEventListener('click',(event) => {
			event.preventDefault();
			// clear all runnnig interval
			for(i=0; i<100; i++)
			{
			    window.clearInterval(i);
			}
			dest = document.querySelector(link.hash).offsetTop;
			destOld = dest
			sisa = dest%10
			dest = dest-sisa
			now = window.pageYOffset;
			let val =10;
			if(now < dest){
				app = setInterval(() => {
					if(now >= dest-10){
						clearInterval(app)
					}
					window.scroll(0,now+=val)
				},10)
			}else if(now > dest){
				app = setInterval(() => {
					if(now <= dest+10){
						clearInterval(app)
					}
					window.scroll(0,now-=val)
				},10)
			}
			window.history.pushState({},document.title,link.hash)
		})
})


document.querySelector('.dismiss').addEventListener('click',()=>{
	let target =document.querySelector('.dismiss').dataset.target
	document.querySelector(target).style.display = 'none'
})


