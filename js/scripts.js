window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);
	let timer3 = new TimerFormat('.timer3', 500);
	let timer4 = new TimerWithWords('.timer4', 5);

	timer1.start();
	timer2.start();
	timer4.start();
	console.log(timer1)
	console.log(timer4)
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
        this.h = parseInt(this.time / 3600);
        this.hs = this.time % 3600;
        this.m = parseInt(this.hs /  60);
        this.s = this.hs % 60;
        this.box.innerHTML = `${this.h}:${this.m}:${this.s}`;
    }
}

class TimerWithWords  extends TimerFormat {

	constructor(selector, time){
		super(selector,time)
		this.endFunction()
	}

	render(){
		super.render()

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

		let hWord = declOfNum(this.h, ['час', 'часа', 'часов']);
		let mWord = declOfNum(this.m, ['минута', 'минуты', 'минут']);
		let sWord = declOfNum(this.s, ['секунда', 'секунды', 'секунд'])
		this.box.innerHTML = `${this.h} ${hWord} :${this.m} ${mWord} :${this.s} ${sWord}`;
	}

	stop(){
		super.stop();
		this.endFunction()
	}

	endFunction(){
		
		this.box.innerHTML = 'Время тю-тю'
	}
 
}
