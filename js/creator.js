let clusterFinanciero = new Logo("Cluster Financiero", "Bitmap.png", "link pendiente");
let asobanca = new Logo("Asobanca", "asobanca.png", "link pendiente");
let ipbf = new Logo("IPBF", "Captura de Pantalla 2020-12-09 a la(s) 01.25.30 p. m..jpg", "link pendiente");
let highTelecom = new Logo("HighTelecom", "logo_hightelecom_horizontal.png", "link pendiente");
let ebanx = new Logo("Ebanx", "ebanx2_1.png", "link pendiente");
let zendesk = new Logo("Zendesk", ".png", "link pendiente");
let logos = [clusterFinanciero, asobanca, ipbf, highTelecom, ebanx, zendesk];

let president = new Organizer("José Perez", "img-rodriguez.png", "Presidente");
let cssm = new Organizer("José Perez", "img-rodriguez.png", "Customer Service Senior Manager");
let scsc = new Organizer("José Perez", "img-rodriguez.png", "Senior Customer Success Consultant");
let gcs = new Organizer("José Perez", "img-rodriguez.png", "Gerente de Consultoría de Soluciones");
let organizers = [president, cssm, scsc, gcs];

function createLogos(){
    where = document.getElementById("logosSpan");
    logos.forEach(logo => {
        where.appendChild(imageFrom(logo));
    });
}

function imageFrom(logo){
    result = createImage(`assets/${logo.image}`, logo.name);
    result.setAttribute("onclick", "window.open("+ logo.link +", _blank)");
    return result;
}

function createOrganizers(){
    where = document.getElementById("organizers");
    organizers.forEach(organizer =>{
        where.appendChild(organizerDiv(organizer));
    })
}
function organizerDiv(org){
    box = document.createElement("div");
    h4 = document.createElement("h4");
    h3 = document.createElement("h3");
    t3 = document.createTextNode(org.name);
    t4 = document.createTextNode(org.job);
    box.appendChild(createImage(`assets/${org.photo}`, org.name));
    h3.appendChild(t3);
    h4.appendChild(t4);
    box.appendChild(h3);
    box.appendChild(h4);
    return box;
}

function createImage(src, alt){
    image = document.createElement("img");
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);
    return image;
}