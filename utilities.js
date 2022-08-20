function getInputFieldValueById(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const newInputValueString = inputField.value;
    const newInputValue = parseFloat(newInputValueString);
    inputField.value = '';
    return newInputValue;
}

function getTextFieldValueByID(textFieldId){
    const textElement = document.getElementById(textFieldId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;

}

function setTextElementValueById(elementID, newValue){
    const elementValue = document.getElementById(elementID);
    elementValue.innerText = newValue;
}