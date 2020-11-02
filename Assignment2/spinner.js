// Five steps
//1 Outer Function  ( anonymous IIFE enclosed in () )
//2 Var in OF       (counter )
//3 Inner Function  ( up, down )
//4 Ref Outer var in Inner Function ( counter inc, dec)
//5 Extend Life     return Functions

var spinner = (function(){
    var counter = 0; 

    function up(){
        
        return ++counter
    }

    function down(){
        return --counter
    }

    return { up : up, down : down }



})();
