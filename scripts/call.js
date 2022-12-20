function BasicDetails(fname,regno){
this.fname=fname
this.regno=regno
}
function ContactDetails(fname,regno,address,phone){
//BasicDetails.call(this,fname,regno)
let arr=[fname,regno]
BasicDetails.apply(this,arr)
this.address=address
this.phone=phone
}
ContactDetails.prototype.printDetails=function(){
    console.log(this)
    console.log(this.fname,this.address)
}
let obj1=new ContactDetails("john",1827712,"delhi",28237823)
obj1.printDetails()

//let obj2=new BasicDetails("peter",1827713)
