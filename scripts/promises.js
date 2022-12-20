/*const fetchUser=new Promise((resolve,reject)=>{

let response={
    username:"john",
    userid:19282
};
response?resolve(response):reject(new Error("response not defined"))
})

fetchUser.then((res)=>console.log(res)).catch((err)=>console.log(err)) */


//returning from a then block
const fetchUser=new Promise((resolve,reject)=>{
    
    
    let response={
        username:"john",
        userid:19282,
        role:"trainer"
    };
    response?resolve(response):reject(new Error("response not defined"))
    })
    
fetchUser.then((res)=>{
    if(res.role==="admin"){
        return "access given"
    }
    else{
        return new Error("access denied")
    }
}).then((res)=>console.log("inside then block",res)).catch((err)=>console.log(err))
const fetchUser=new Promise((resolve,reject)=>{
    
    
    let response={
        username:"john",
        userid:19282,
        role:"trainer"
    };
    response?resolve(response):reject(new Error("response not defined"))
    })
    
fetchUser.then((res)=>{
   let promise2=new Promise((resolve,reject)=>{
    if(res.role==="admin"){
        resolve("access granted")
    }
    else{
        reject(new Error("access denied"))
    }
   })
   return promise2
}).then((res)=>console.log("inside then block",res)).catch((err)=>console.log("inside catch",err))
console.log("second execution")


