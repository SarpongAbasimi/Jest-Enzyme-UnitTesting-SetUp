import addition from './index';
//To run jest in terminal just tupe in npm test

test('myaddition',()=>{
    expect(addition(4,6)).toBe(10);
});

