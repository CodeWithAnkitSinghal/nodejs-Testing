const utils = require('./utils');
const expect = require('expect');


//grouping the uni test together in logical way
describe('Utils', () => {
    describe('#Add', () => {
        it('should add two numbers', () => {
            var res = utils.add(2,3);
            // if(res !== 5){
            //     throw new Error(`Expected 5 but got ${res}`);
            // }
            expect(res).toBe(5).toBeA('number');
        });
        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(2,3, (sum) => {
                expect(sum).toBe(5).toBeA('number');
                done();
            });
        });
    });    

    describe('Square', () => {
        it('should square a number', () => {
            var res = utils.square(3);
            // if(res !== 9){
            //     throw new Error(`Expected 9 but got ${res}`);
            // }
            expect(res).toBe(9).toBeA('number');
        });
        it('should async square a numbers', (done) => {
            utils.asyncSquare(3, (sqr) => {
                expect(sqr).toBe(9).toBeA('number');
                done();
            });
        });
    });
    });
    
    describe('UserData', () => {
        it('should verify first and last name are set', () => {
            var user = {
                location: 'India',
                age: 26
            };
            var res = utils.setName(user, 'Ankit Singhal');
            expect(res).toInclude({
                firstName:'Ankit',
                lastName:'Singhal'
            });
        });
    });

it('should expect some value', () => {
    //expect(12).toNotBe(13).toNotBeA('string');
    //for comparing objects and arrays
    //expect({name: 'Ankit'}).toEqual({name: 'Ankit'});
    //expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(1);
});


