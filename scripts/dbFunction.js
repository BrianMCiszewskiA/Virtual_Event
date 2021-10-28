console.log("import");
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
//import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



function addAssistant(){
    try{
        const docRef = addDoc(collection(db, "asistentes"), {
            nombre:     document.getElementById("name").value,
            apellido:   document.getElementById("surname").value,
            mail:       document.getElementById("mail").value,
            pais:       document.getElementById("countries").value,
            tel:        document.getElementById("phone").value,
            pTrabajo:   document.getElementById("job").value
        });
        console.log("Documento escrito con ID: ", docRef.id);
    }
    catch(e){
        console.error("Error al agregar documento: ", e);
    }
}
console.log(addAssistant);