function add_recommendation() {
  var input_recom = document.getElementById("m").value; // Obtenez la valeur de l'élément d'entrée

  if (input_recom.trim() !== '') { // Vérifiez si l'entrée n'est pas vide
    var new_recom = document.createElement("fieldset"); // Créez un nouvel élément fieldset
    new_recom.textContent = input_recom; // Définissez le texte à l'intérieur du fieldset

    var recomSection = document.getElementById("recommendations");
    var recomDiv = recomSection.querySelector("#recom");

    if (recomDiv) {
      recomDiv.appendChild(new_recom); // Ajoutez le nouveau fieldset à la div "recom"
      document.getElementById("m").value = ''; // Réinitialisez l'élément d'entrée
    
   //    var confirmationMessage = document.createElement("p");
	  // confirmationMessage.textContent= "Thanks for leaving a recommendation";
	  // recomDiv.appendChild(confirmationMessage);
	  var confirmationMessage = document.createElement("fieldset");
	  confirmationMessage.textContent= "Thanks for leaving a recommendation \n";

	  var okButton = document.createElement("button");
	  okButton.textContent="Ok";
	  okButton.onclick = function(){
	  	recomDiv.removeChild(confirmationMessage);
	  };
	  okButton.style.margin = "10px";
	  okButton.style.width = "100px"
	  confirmationMessage.appendChild(okButton);
	  confirmationMessage.style.backgroundColor = "pink";
	  confirmationMessage.style.display = "flex";
	  confirmationMessage.style.flexDirection = "column";
	  confirmationMessage.style.textAlign = "center";
	  confirmationMessage.style.height = "125px";
	  confirmationMessage.style.width = "400px";
	  recomDiv.appendChild(confirmationMessage);
	}
  }
  


}
