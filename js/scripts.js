// bad code
window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);
	let timer3 = new TimerFormat('.timer3', 75600);
	// let timer4 = new TimerWithWords('.timer4', 55000);

	timer1.start();
	timer2.start();
	// timer4.start();
	console.log(timer1)
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	console.log(timer3)
	timer3.start();

});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
		this.render();
	}

	render(){
		this.box.innerHTML = this.time;
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick(){
		this.time--;
		this.render();
	
		if(this.time <= 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}

class TimerFormat extends Timer{
	render(){

		var declOfNum = function(number, textForm)
		{  
			var  cases = [2, 0, 1, 1, 1, 2];  
			return textForm[ 
					(number % 100 > 4 && number % 100 < 20) 
					? 
					2 
					: 
					cases[(number % 10 < 5) ? number % 10 : 5] 
			];  
		} 


		let h = parseInt(this.time / 3600);
		let hWord = declOfNum(h, ['час', 'часа', 'часов']);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let mWord = declOfNum(m, ['минута', 'минуты', 'минут']);
		let s = hs % 60;
		let sWord = declOfNum(s, ['секунда', 'секунды', 'секунд'])
		this.box.innerHTML = `${h} ${hWord} :${m} ${mWord} :${s} ${sWord}`;
	}
 
}

// class TimerWithWords extends TimerFormat{
// 	render(){
// 		super.render()
// 		let h = parseInt(this.time / 3600);
// 		let hs = this.time % 3600;
// 		let m = parseInt(hs /  60);
// 		let s = hs % 60;
// 		this.box.innerHTML = `${h}:${m}:${s}`;
// 	}
// }

/* class TimerFormat extends Timer{
	constructor(selector, time){
		super(selector, time); // super.constructor
		this.a = 1;
	}

	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.box.innerHTML = `${h}:${m}:${s}`;
	}

	start(){
		console.log('timer started');
		super.start();
	}
} */

// super

/*
	class Cat{ 
		findEat(){
			// go hunt
		}
	}

	class CatHome{
		findEat(){
			while(hungry){
				sayMyow();

				if(humanNotExists){
					break;
				}
			}

			if(veryHungry){
				super.findEat();
			}
			else{
				this.findHuman();
				this.findEat();
			}
		}
	}

*/