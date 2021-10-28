var forms = document.querySelectorAll('#newAssistant')

console.dir(forms);



function allFieldsAreValid(){
    result = true;
    for(i=0; i<forms[0].length-1; i++){
        result = result && forms[0][i].classList.value == "valid";
    }
    return result;
}
function resetFields(){
    for(i=0; i<forms[0].length-1; i++){
        forms[0][i].setAttribute("class", "");
    };
}

forms[0].addEventListener('submit', function (event) {
    resetFields();
    event.preventDefault()
    event.stopPropagation()

    checkFields();
    if(allFieldsAreValid()){
        addAssistant();
        popUpLoginSuccesful();
    }
})

//checkeo 
function checkFields(){
    for(i=0; i<forms[0].length-1; i++){
        checkField(forms[0][i]);
    };
}
function checkField(field){
    switch(field.type){
        case 'text':checkText(field);
                    break;
        case 'email':checkEmail(field);
                    break;
        case 'tel': checkTel(field);
                    break;
        case 'select-one': checkSelect(field);
                            break;
        default: console.log(formInput.type + " no es un tipo cubierto por el checkeo");
    }
}

function checkText(field){
    if(!isEmpty(field.value)){
        field.setAttribute("class", "valid");
    } else {
        field.setAttribute("class", "invalid");
    }
}
function checkTel(field){
    let tel = field.value;
    if(!isEmpty(tel) && (tel.length<=10&&tel.length>=8)){
        field.setAttribute("class", "valid");
    } else {
        field.setAttribute("class", "invalid");
    }
}
function checkEmail(field){
    //ampliare el checkeo
    //podria dividir el string, y checkear q antes del @ no este vacio, y que despues, use algun tipo de mail valido
    let mail = field.value;
    if(isValidMail(mail) && !isAlreadyRegistered(mail)){
        field.setAttribute("class", "valid");
    } else {
        field.setAttribute("class", "invalid");
    }
}
function checkSelect(field){
    if(field.value!="Selecciona un país"){
        field.setAttribute("class", "valid");
    } else {
        field.setAttribute("class", "invalid");
    }
}

function isEmpty(value){
    return value=='';
}
function isValidMail(mail){
    //podria dividir el string, y checkear q antes del @ no este vacio, y que despues, use algun tipo de mail valido
    return mail.includes("@")&&mail.includes(".");
}
function isAlreadyRegistered(mail){
    
}
function popUpLoginSuccesful(){
    document.getElementById("loginSuccesful").style.display="block";
}