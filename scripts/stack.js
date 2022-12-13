let Stack=function(){
    this.top=null;
    this.size=0;
}
let Node=function(value){
    this.data=value
    this.previous=null;
}

/** push operation */
Stack.prototype.push=function(data){
    let newNode=new Node(data)
    
    newNode.previous=this.top
    this.top=newNode
    this.size+=1
    return this.top
}
Stack.prototype.pop=function(){
       
    this.top=this.top.previous
   this.size-=1
   return this.top
}
Stack.prototype.print=function(){
    let result="";
    let current = this.top;
    while(current){
    result += current.data + " "
    console.log(current.data)
    current = current.previous
    }
    
 return result;
}

 let stackObj=new Stack
console.log(stackObj.push(10))
console.log(stackObj.push(20))
console.log(stackObj.push(30))
console.log(stackObj.print())
 