const MAX_SPEED = 15;
const ACCELARATION = 1;
const ANGLE_STEP = 10;

export default class Car {
	constructor() {
		this.car = document.getElementById("car");
		this.x = 150;
		this.y = 50;
		this.speed = 0;
		this.angle = -90;
		window.requestAnimationFrame(this.update.bind(this))
		document.addEventListener("keydown", e => {
			switch (e.code) {
				case "ArrowDown":
					this.accelarate(-ACCELARATION);
					break;
				case "ArrowUp": 
					this.accelarate(ACCELARATION);
					break;
				case "ArrowLeft": 
					this.rotate(ANGLE_STEP);
					break;
				case "ArrowRight": 
					this.rotate(-ANGLE_STEP);
					break;
				case "Space":
					this.speed = 0;
					break;
			}
		})
	}
	rotate(a) {
		this.angle += a;
	}
	accelarate(v) {
		this.speed = Math.min(Math.max(this.speed + v, -MAX_SPEED), MAX_SPEED);
		// console.log("SPEED: " + this.speed);
	}
	calculatePosition() {
		const cos = Math.cos(this.angle / 180 * Math.PI);
		const sin = -Math.sin(this.angle / 180 * Math.PI);
		// console.log({cos, sin});
		const dx = cos * this.speed;
		const dy = sin * this.speed;
		this.x = Math.max(Math.min(this.x + dx, window.innerWidth - this.car.clientWidth), 0);
		this.y = Math.max(Math.min(this.y + dy, window.innerHeight - this.car.clientHeight ), 0);
		// console.log(this.x, this.y);
	}
	update() {
		// console.log("UPDATE");
		this.calculatePosition();
		this.car.style.transform = `rotate(${-this.angle}deg)`
		this.car.style.left = `${this.x}px`;
		this.car.style.top = `${this.y}px`;
		requestAnimationFrame(this.update.bind(this))
	}
}