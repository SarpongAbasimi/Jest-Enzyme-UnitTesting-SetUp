import React from 'react'
import {shallow} from 'enzyme';
import App from './app';
import Enzyme from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/*
npm install enzyme react-addons-test-utils --save-dev
commmand to run to install enzyme react-addons-test-utils
*/




//import addition from './index';
//To run jest in terminal just tupe in npm test
//test('myaddition',()=>{
//    expect(addition(4,6)).toBe(10);
//});

/*describe('My Addition',()=>{
    it('Should add something',()=>{
        expect(addition(3,5)).toBe(8);
    })
});
*/


describe('Render app component',()=>{
    it('rendder the <App/> component',()=>{
        const wrapper= shallow(<App/>);
        const text =wrapper.find('p').text();
        expect(text).toEqual('This is my first Test');

    });
});



