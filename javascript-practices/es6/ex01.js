/**
 * let & const
 * 
 */

// let
try {
    if(true) {
        var i = 10;
        let j = 20; //선언만(정의 x)
    }

    console.log(i);
    console.log(j);

} catch(e) {
    console.error('error:' + e);
}