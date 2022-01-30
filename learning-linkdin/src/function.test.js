import {timesTwo} from "./functionfortesting";

test('Multiplies by two',()=>{
    expect(timesTwo(4)).tobe(8);
})