var forms = document.querySelectorAll('#newAssistant')

console.dir(forms);

function checkFields(){
    console.log("E");
}

function allFieldsAreValid(){
    //testing purposes
    return true;
}
function resetFields(){
    console.log("F");
}

forms[0].addEventListener('submit', function (event) {
    resetFields();
    event.preventDefault()
    event.stopPropagation()

    checkFields();
    if(allFieldsAreValid()){
        addAssistant();
    }
})