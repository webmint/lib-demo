import { addNum } from '@demotmg/simple-js';
import { multiply } from '@demotmg/simple-ts';

export function addMultiply(a: number, b: number, ) {
    return addNum(multiply(a, b), b);
}
