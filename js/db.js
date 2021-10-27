/**const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");*/
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

function addAssistant(){
    try {
    const docRef = await addDoc(collection(db, "asistentes"), {
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("surname").value,
        mail: document.getElementById("mail").value,
        pais: document.getElementById("countries").value,
        tel: document.getElementById("phone").value,
        pTrabajo: document.getElementById("job").value
    });
    console.log("Document written with ID: ", docRef.id);
    //pop up "assistant confirmed"
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}
addAssistant();