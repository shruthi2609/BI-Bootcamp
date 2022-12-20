let obj={
    fname:"peter",
    regno:28938239
}
function printDetails(){
    console.log(this.fname)
    console.log(this.regno)
}
let print=printDetails.bind(obj)
print()