function forEach(array, callback) {
	let x = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i]) {
			x = callback(array[i]);
		}
	}
	return x;
}
function filter(array, callback) {
	let resul = [];
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			resul.push(array[i]);
		}
	}
	return resul;
}
function Map(array, callback) {
	let resul = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i]) {
			resul.push(callback(array[i]));
		}
	}
	return resul;
}
function find(array, callback) {
	if (array[0]) {
		let resul = 0;
		for (let i = 0; i < array.length; i++) {
			if (callback(array[i])) {
				resul = array[i];
				return resul;
			}
		}
	}
}
function findIndexs(array, callback) {
	let x = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i]) {
			if (callback(array[i])) {
				return i;
			} else {
				x = -1;
			}
		}
	}
	return x;
}
function Contains(array, num, start = 0) {
	let x;
	for (let i = start; i < array.length; i++) {
		if (array[i] === num) {
			return true;
		} else {
			x = false;
		}
	}
	return x;
}
function pluck(array, nom) {
	let x = [];
	for (let i = 0; i < array.length; i++) {
		x.push(array[i][nom]);
	}
	return x;
}
function Without(array, ...nums) {
	for (let i = 0; i < array.length; i++) {
		for (let a = 0; a < nums.length; a++) {
			if (array[i] === nums[a]) {
				array.splice(i, 1);
			}
		}
	}
	return array;
}
