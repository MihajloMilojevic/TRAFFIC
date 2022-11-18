export default class TrafficLight {
	constructor() {
		this.red = document.getElementById("red");
		this.yellow = document.getElementById("yellow")
		this.green = document.getElementById("green");
		this.textEl = document.getElementById("text");
		this.text = "STOP";
		this.active = ["red"];
		this.#showActive();
	}
	#showActive() {
		this.red.classList.remove("active");
		this.yellow.classList.remove("active");
		this.green.classList.remove("active");
		this.textEl.innerText = this.text;
		for (const color of this.active) {
			this[color].classList.add("active");
		}
	}
	#redToGreen() {
		setTimeout(() => {
			this.active = ["red", "yellow"];
			this.text = "READY"
			this.#showActive();
			setTimeout(() => {
				this.active = ["green"];
				this.text = "GO";
				this.#showActive();
				this.#greenToRed();
			}, 1 * 1000);
		}, 5 * 1000);
	}
	#greenToRed() {
		setTimeout(() => {
			this.active = [];
			this.text = "SLOW DOWN";
			this.#showActive();
			setTimeout(() => {
				this.active = ["green"];
				this.#showActive();
				setTimeout(() => {
					this.active = [];
					this.#showActive();
					setTimeout(() => {
						this.active = ["green"];
						this.#showActive();
						setTimeout(() => {
							this.active = [];
							this.#showActive();
							setTimeout(() => {
								this.active = ["green"];
								this.#showActive();
								setTimeout(() => {
									this.active = ["yellow"];
									this.text = "GO! GO! GO! GO!"
									this.#showActive();
									setTimeout(() => {
										this.active = ["red"];
										this.text = "STOP";
										this.#showActive();
										this.#redToGreen();
									}, 1.5 * 1000);
								}, 0.25 * 1000);
							}, 0.5 * 1000);
						}, 0.5 * 1000);
					}, 0.75 * 1000);
				}, 0.75 * 1000);
			}, 1 * 1000);
		}, 5 * 1000);
	}
	start() {
		this.active = ["red"];
		this.#redToGreen();
	}
}