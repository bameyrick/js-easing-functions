export function easeInQuad(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * (elapsed /= duration) * elapsed + initialValue;
}

export function easeOutQuad(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue;
}

export function easeInOutQuad(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * elapsed * elapsed + initialValue;
	}
	return -amountOfChange / 2 * (--elapsed * (elapsed - 2) - 1) + initialValue;
}

export function easeInCubic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * (elapsed /= duration) * elapsed * elapsed + initialValue;
}

export function easeOutCubic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed + 1) + initialValue;
}

export function easeInOutCubic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * elapsed * elapsed * elapsed + initialValue;
	}
	return amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed + 2) + initialValue;
}

export function easeInQuart(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed + initialValue;
}

export function easeOutQuart(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed - 1) + initialValue;
}

export function easeInOutQuart(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * elapsed * elapsed * elapsed * elapsed + initialValue;
	}
	return -amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed * elapsed - 2) + initialValue;
}

export function easeInQuint(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed * elapsed + initialValue;
}

export function easeOutQuint(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed * elapsed + 1) + initialValue;
}

export function easeInOutQuint(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * elapsed * elapsed * elapsed * elapsed * elapsed + initialValue;
	}
	return amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed * elapsed * elapsed + 2) + initialValue;
}

export function easeInSine(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange * Math.cos(elapsed / duration * (Math.PI / 2)) + amountOfChange + initialValue;
}

export function easeOutSine(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * Math.sin(elapsed / duration * (Math.PI / 2)) + initialValue;
}

export function easeInOutSine(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange / 2 * (Math.cos(Math.PI * elapsed / duration) - 1) + initialValue;
}

export function easeInExpo(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return elapsed === 0 ? initialValue : amountOfChange * Math.pow(2, 10 * (elapsed / duration - 1)) + initialValue;
}

export function easeOutExpo(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return elapsed === duration
		? initialValue + amountOfChange
		: amountOfChange * (-Math.pow(2, -10 * elapsed / duration) + 1) + initialValue;
}

export function easeInOutExpo(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if (elapsed === 0) {
		return initialValue;
	}
	if (elapsed === duration) {
		return initialValue + amountOfChange;
	}
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * Math.pow(2, 10 * (elapsed - 1)) + initialValue;
	}
	return amountOfChange / 2 * (-Math.pow(2, -10 * --elapsed) + 2) + initialValue;
}

export function easeInCirc(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange * (Math.sqrt(1 - (elapsed /= duration) * elapsed) - 1) + initialValue;
}

export function easeOutCirc(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * Math.sqrt(1 - (elapsed = elapsed / duration - 1) * elapsed) + initialValue;
}

export function easeInOutCirc(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration / 2) < 1) {
		return -amountOfChange / 2 * (Math.sqrt(1 - elapsed * elapsed) - 1) + initialValue;
	}
	return amountOfChange / 2 * (Math.sqrt(1 - (elapsed -= 2) * elapsed) + 1) + initialValue;
}

export function easeInElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	let s = 1.70158;
	let p = 0;
	let a = amountOfChange;
	if (elapsed === 0) {
		return initialValue;
	}
	if ((elapsed /= duration) === 1) {
		return initialValue + amountOfChange;
	}
	if (!p) {
		p = duration * 0.3;
	}
	if (a < Math.abs(amountOfChange)) {
		a = amountOfChange;
		s = p / 4;
	} else {
		s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
	}
	return -(a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p)) + initialValue;
}

export function easeOutElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	let s = 1.70158;
	let p = 0;
	let a = amountOfChange;
	if (elapsed === 0) {
		return initialValue;
	}
	if ((elapsed /= duration) === 1) {
		return initialValue + amountOfChange;
	}
	if (!p) {
		p = duration * 0.3;
	}
	if (a < Math.abs(amountOfChange)) {
		a = amountOfChange;
		s = p / 4;
	} else {
		s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
	}
	return a * Math.pow(2, -10 * elapsed) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) + amountOfChange + initialValue;
}

export function easeInOutElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	let s = 1.70158;
	let p = 0;
	let a = amountOfChange;
	if (elapsed === 0) {
		return initialValue;
	}
	if ((elapsed /= duration / 2) === 2) {
		return initialValue + amountOfChange;
	}
	if (!p) {
		p = duration * (0.3 * 1.5);
	}
	if (a < Math.abs(amountOfChange)) {
		a = amountOfChange;
		s = p / 4;
	} else {
		s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
	}
	if (elapsed < 1) {
		return -0.5 * (a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p)) + initialValue;
	}
	return (
		a * Math.pow(2, -10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) * 0.5 + amountOfChange + initialValue
	);
}

export function easeInBack(elapsed: number, initialValue: number, amountOfChange: number, duration: number, s: number = 1.70158): number {
	return amountOfChange * (elapsed /= duration) * elapsed * ((s + 1) * elapsed - s) + initialValue;
}

export function easeOutBack(elapsed: number, initialValue: number, amountOfChange: number, duration: number, s: number = 1.70158): number {
	return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * ((s + 1) * elapsed + s) + 1) + initialValue;
}

export function easeInOutBack(
	elapsed: number,
	initialValue: number,
	amountOfChange: number,
	duration: number,
	s: number = 1.70158
): number {
	if ((elapsed /= duration / 2) < 1) {
		return amountOfChange / 2 * (elapsed * elapsed * (((s *= 1.525) + 1) * elapsed - s)) + initialValue;
	}
	return amountOfChange / 2 * ((elapsed -= 2) * elapsed * (((s *= 1.525) + 1) * elapsed + s) + 2) + initialValue;
}

export function easeInBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange - easeOutBounce(duration - elapsed, 0, amountOfChange, duration) + initialValue;
}

export function easeOutBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration) < 1 / 2.75) {
		return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
	} else if (elapsed < 2 / 2.75) {
		return amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) + initialValue;
	} else if (elapsed < 2.5 / 2.75) {
		return amountOfChange * (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) + initialValue;
	} else {
		return amountOfChange * (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) + initialValue;
	}
}

export function easeInOutBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if (elapsed < duration / 2) {
		return easeInBounce(elapsed * 2, 0, amountOfChange, duration) * 0.5 + initialValue;
	}
	return easeOutBounce(elapsed * 2 - duration, 0, amountOfChange, duration) * 0.5 + amountOfChange * 0.5 + initialValue;
}
