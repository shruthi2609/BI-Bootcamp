function fetchUser(){
    const promiseObj=new Promise((resolve,reject)=>{
        let response={
            username:"john",
            userid:19282,
            role:"trainer"
        };
        response?resolve(response):reject(new Error("response not defined"))
        })
        return promiseObj
}
/*fetchUser().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
async function caller(){
    try{
        const res=await fetchUser()
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
   
    
}
caller()

