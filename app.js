const nomDeSoireeInput = document.getElementById("name");
const dateDeSoireeInput = document.getElementById("date");
const themeDeSoireeInput = document.getElementById("theme");
const soireeList = document.getElementById("soiree-list")

const buttonCancel = document.getElementById("cancel");
const buttonAdd = document.getElementById("add");

const alertCtrl = document.querySelector("ion-alert-controller");




function clearInput() {
    nomDeSoireeInput.value = "";
    dateDeSoireeInput.value = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    themeDeSoireeInput.value ="Pas de theme";
}

function addSoiree() {
    
      let nomdeSoiree =  nomDeSoireeInput.value;
      let dateDeSoiree = dateDeSoireeInput.value;
      let themeDeSoiree = themeDeSoireeInput.value;
      let dateTimeDateDeSoiree = new Date(dateDeSoiree)
      let dateLisibleFrancais =  dateTimeDateDeSoiree.getDate() + "/" + dateTimeDateDeSoiree.getMonth() + "/" + dateTimeDateDeSoiree.getFullYear()

        if(nomdeSoiree.trim().length <= 0 || dateDeSoiree == null || themeDeSoiree == "Pas de theme"){
            console.log("ca marche pas")
            alertCtrl.create({
                message: 'Entrez des informations correctes',
                header: 'Invalids Inputs',
                buttons: ['Okay']
            }).then(alertElement => {
                alertElement.present()
            })
        } else {
            const newItem = document.createElement('ion-item');
            newItem.innerHTML = "Nom de la soirée : " + nomdeSoiree;
            newItem.innerHTML += "<br/>" + themeDeSoiree + "<br/>";
            newItem.innerHTML += dateLisibleFrancais

            soireeList.appendChild(newItem);

            clearInput()
        }
}