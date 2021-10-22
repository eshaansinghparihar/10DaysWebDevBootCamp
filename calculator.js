var expression=""
var result=""
var parameterCharacter=""
var expression=""
var openBracket=document.getElementById("openBracket")
var closeBracket=document.getElementById("closeBracket")
var percentage=document.getElementById("percentage")
var clearAll=document.getElementById("clearAll")
var seven=document.getElementById("seven")
var eight=document.getElementById("eight")
var nine=document.getElementById("nine")
var divide=document.getElementById("divide")
var four=document.getElementById("four")
var five=document.getElementById("five")
var six=document.getElementById("six")
var multiply=document.getElementById("multiply")
var one=document.getElementById("one")
var two=document.getElementById("two")
var three=document.getElementById("three")
var subtract=document.getElementById("subtract")
var zero=document.getElementById("zero")
var decimal=document.getElementById("decimal")
var equalsTo=document.getElementById("evaluate")
var add=document.getElementById("add")

function changeExpression(parameterCharacter){
expression=expression+parameterCharacter
document.getElementById("calculatorResult").innerHTML=expression
}

function clearDisplay(){
    expression="";
    result="";
    document.getElementById("calculatorResult").innerHTML=expression;
}

function evaluateResult(){
try{
    result=eval(expression)
    if(result===undefined || expression===undefined || result===expression)
    {
        document.getElementById("calculatorResult").innerHTML="Error"
        expression=""
        result=""
    }
    else
    {
        outputResult=expression+" = "+result
        expression=result;
        document.getElementById("calculatorResult").innerHTML=outputResult
        expression=""
        result=""
    }
    
}
catch(e){
    document.getElementById("calculatorResult").innerHTML="Error"
    expression=""
    result=""
}
}
openBracket.addEventListener("click", function(){
parameterCharacter='('
changeExpression(parameterCharacter);
})
closeBracket.addEventListener("click", function(){
    parameterCharacter=')'
    changeExpression(parameterCharacter);
})
percentage.addEventListener("click", function(){
    parameterCharacter='/100'
    changeExpression(parameterCharacter);
    })
clearAll.addEventListener("click", function(){
clearDisplay()
})
seven.addEventListener("click", function(){
    parameterCharacter='7'
    changeExpression(parameterCharacter);
    })
eight.addEventListener("click", function(){
parameterCharacter='8'
changeExpression(parameterCharacter);
})
nine.addEventListener("click", function(){
    parameterCharacter='9'
    changeExpression(parameterCharacter);
    })
divide.addEventListener("click", function(){
    parameterCharacter='/'
    changeExpression(parameterCharacter);
    })
four.addEventListener("click", function(){
parameterCharacter='4'
changeExpression(parameterCharacter);
})
five.addEventListener("click", function(){
    parameterCharacter='5'
    changeExpression(parameterCharacter);
    })
six.addEventListener("click", function(){
parameterCharacter='6'
changeExpression(parameterCharacter);
})
multiply.addEventListener("click", function(){
    parameterCharacter="*"
    changeExpression(parameterCharacter)
})
one.addEventListener("click", function(){
    parameterCharacter='1'
    changeExpression(parameterCharacter)
})
two.addEventListener("click", function(){
    parameterCharacter='2'
    changeExpression(parameterCharacter)
})
three.addEventListener("click", function(){
    parameterCharacter='3'
    changeExpression(parameterCharacter)
})
subtract.addEventListener("click", function(){
    parameterCharacter='-'
    changeExpression(parameterCharacter)
})
zero.addEventListener("click", function(){
    parameterCharacter='0'
    changeExpression(parameterCharacter)
})
decimal.addEventListener("click", function(){
    parameterCharacter='.'
    changeExpression(parameterCharacter)
})
equalsTo.addEventListener("click", function(){
    evaluateResult()
})
add.addEventListener("click", function(){
    parameterCharacter='+'
    changeExpression(parameterCharacter)
})