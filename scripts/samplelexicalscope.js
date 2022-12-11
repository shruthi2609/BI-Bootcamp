let a=10
function basicDetails(){
    let fname="john"
    let reg=12132334
    function contactDetails(){
        let address="Delhi"
        let contactNo=92839283
        let fname="peter"
        console.log("inner")
    }
   return contactDetails
}
const funcExp=basicDetails()
funcExp()
//console.log(funcExp)