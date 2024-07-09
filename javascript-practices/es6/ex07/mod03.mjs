/**
 *  unnamed export
 * 
 * 1. exports(require) 와 비슷하다.
 *  export.a = ...
 *  export.b = ...
 * 
 * 2. import 하는 모듈에 destructing 할 수 있다.
 * 
 */

export const add = function(a, b) {
    return a + b;
}

export const subtract = function(a, b) {
    return a - b;
}