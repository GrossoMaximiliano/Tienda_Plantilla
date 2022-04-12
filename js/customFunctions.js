function changeStateButton(selID,selType){
    if (document.getElementById(selID) !== null && document.getElementById(selID) !== "undefined"){
        if (selType="check"){
            if (!document.getElementById(selID).checked) {
                document.getElementById(selID).checked = "checked";
            } else {
                document.getElementById(selID).checked = "";
            }
        } else if (selType="radio"){
            if (!document.getElementById(selID).checked) {
                document.getElementById(selID).checked = "checked";
            }
        }
    }
}