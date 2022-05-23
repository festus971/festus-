const numberButtons=document.querySelectorAll('[data-number]')
const operationButton=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelectorAll('[data-equals]')
const deleteButton=document.querySelectorAll('[data-delete]')
const allclearButton=document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement=document.querySelectorAll('[data-prevoius-operand]')
const currentOperandTextElement=document.querySelectorAll('[data-current-operand]')

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()

    }
}
clear(){
    this.currentOperand=""
    this.previousOperand=""
    this.operation=undefined
}
delete(){
} 
appendNumber(number){
}
chooseOperation(operation){

}
compute(){

}
updateDisplay(){

}
