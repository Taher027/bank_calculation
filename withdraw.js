document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmmount = getInputFieldValueById('withraw-field');
    if (!newWithdrawAmmount){
        alert('Plese Enter your ammount!!')
    }
    else{
    const previousWithdrawAmmount = getTextFieldValueByID('withdraw-total');
    const totalWithdrawAmmount = previousWithdrawAmmount + newWithdrawAmmount;

    setTextElementValueById('withdraw-total', totalWithdrawAmmount);


    const previousTotalBlance = getTextFieldValueByID('Blance-total');
    const newBlancetotal = previousTotalBlance - newWithdrawAmmount;
    setTextElementValueById('Blance-total', newBlancetotal)
}
})