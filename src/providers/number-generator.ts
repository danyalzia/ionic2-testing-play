import { Injectable } from '@angular/core';

@Injectable()
export class NumberGenerator {
  
  constructor() {
    console.log('Hello NumberGenerator Provider');
  }
  
  getOdd(array) {
	let newArray = new Array();
	  
	for (var i = 0; i < array.length; i++) {
		if(i % 2 === 0) {
			newArray.push(array[i]);
		}
	}
	
	return newArray;
  }
  
  getEven(array) {
	let newArray = new Array();
	  
	for (var i = 0; i < array.length; i++) {
		if(i % 1 === 0) {
			newArray.push(array[i]);
		}
	}
	
	return newArray;
  }

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
