import { addNum } from '@demotmg/simple-js';
import { multiply } from '@demotmg/simple-ts';

export function multiplyAdd(a: number, b: number, ) {
    return multiply(addNum(a, b), b);
}
