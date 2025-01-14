// JAVASCRIPT EXECUTION CONTEXT :

/*
 1]Global Execution Context.
 2]Function Execution Context.
 3]Eval Execution Context.
-----------------------------------------------------------------------

 ---> JS Code Run in Two Phase :

 1] Phase 1---> Memory Creation Phase.  Allocating the Memory for functions, variabes, etc......

 2] Phase 2---> execution Phase.

-------------------------------------------------------------------------

 CODE :

 let val1 = 10
 let val2 = 5

 function addnum(num1,num2){
    let total = num1 + num2
    return total
 }

 let result1 = addnum(val1,val2);
 let result2 = addnum(5,6);

-------------------------------------------------------------------

 STEPS :--->

 1) Global Execution Context :
   --> Code Allocated in the "this", in Global EC.

  2) Memory Phase :
  --> Store all Variables.
  val1 -> undefined
  val2 -> undefined
  addnum -> function definaation.
  result1 -> undefined
  result2 -> undefined


3) Execution Phase :
  val1 = 10
  val2 = 5
  addnum ---> at this time create a "new variable environment" and "Exceution   Thread"                                |
                                         |
                                         |
                        ---------------------------------------
                         |                                   |
                         |                                   |
                         |                                   |
                   Memory Phase                        Execution Phase

                   val1 -> undefined                    num1 = 10
                   val2 -> undefined                    num2 = 5
                   total -> undefined                   total = 15
                                                     toatal return values to the global context

*/