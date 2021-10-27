var forms = document.querySelectorAll('#newAssistant')

console.dir(forms);

forms[0].addEventListener('submit', function (event) {
    resetFields();
    event.preventDefault()
    event.stopPropagation()

    checkFields();
    if(allFieldsAreValid()){
        addAssistant();
    }
})

function checkFields(){

}

function allFieldsAreValid(){
    //testing purposes
    return true;
}
function resetFields(){
    
}