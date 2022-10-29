document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmmount = getInputFieldValueById('deposit-field');
if(!newDepositAmmount){
    alert('Enter your deposit ammount')
}
else{
    const previousDepositTotal = getTextFieldValueByID('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmmount;

    setTextElementValueById('deposit-total', newDepositTotal);


    const previousTotalBlance = getTextFieldValueByID('Blance-total');
    const newBlancetotal = previousTotalBlance + newDepositAmmount;
    setTextElementValueById('Blance-total', newBlancetotal)
}
})

