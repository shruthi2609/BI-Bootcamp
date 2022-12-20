/*let a=10
function sample(){
let a=20
console.log(a)
}
console.log(a)
sample()*/
function basicDetails(){
    let fname="john"
    let reg=12132334
    function contactDetails(){
        let address="Delhi"
        let contactNo=92839283
        console.log(fname,reg,address)
    }
    console.log("outer")
   return contactDetails
}

let innerFun=basicDetails()
innerFun()


