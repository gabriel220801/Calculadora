function Operaciones(){
    let num1, num2, sum;
    num1 = parseInt (document.getElementById('numero1').value);
    num2 = parseInt (document.getElementById('numero2').value);
    sum = num1 + num2;
    res = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;



    alert(" El resultado de la suma es: "+ sum 
        +"\n El resultado de la resta es: " + res 
        +"\n El resultado de la multiplicacion es: " + mul 
        +"\n El resultado de la divicion es: " + div
        );
}