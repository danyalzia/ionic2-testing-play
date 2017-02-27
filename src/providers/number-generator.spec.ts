import { NumberGenerator } from './number-generator';

let numberGenerator = null;

describe('Number Generator Service', () => {

    beforeEach(() => {
    	numberGenerator = new NumberGenerator();
    });
	
    it('should return an odd array', () => {
            
			let array: number[] = [1,2,3,4,5,6,7,8,9,10];
			
            let result = numberGenerator.getOdd(array);

            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
			expect(result).toContain(3);
			
        }
    );

    it('should return an even array', () => {
            let array: number[] = [1,2,3,4,5,6,7,8,9,10];
			
            let result = numberGenerator.getEven(array);

            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
			expect(result).toContain(4);
        }
    );

    it('should return a random number', () => {
            
            let result = numberGenerator.getRandomInt(5,10);
			expect(result).toBeGreaterThan(0);
        }
    );

});