var name = "steve";
        
function fun() {
    var b = 20;
    console.log(name);
    function y(){ 
        console.log(b);            
    }
    console.log("after y");
    b = 100;
    return y;
}


    
var newFun = fun();
newFun(); //#1

/* #1
ye indirectly y() ko call lgi hai 
1. fun() ko call lgi
2. usne y return kiya matlab y fxn ka address aa gya newFun me
3. newFun() ko call lgi jisme eventually y fxn ka address hi pda hai 
4. to y() hi execute hoga


---------------------------------------
Output :
steve
after y
100
*/