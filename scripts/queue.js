let Queue=function(){
    this.head=null
    this.size=0
}
let Node=function(value){
    this.data=value
    this.next=null;
}
Queue.prototype.enqueue=function(data){
    let newNode=new Node(data)
    if(this.size==0){
       // newNode.next=this.head
        this.head=newNode
        this.size+=1
    }
    else{
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
     
        this.size+=1
        
    }
    return newNode
}
Queue.prototype.print=function(){
    let result="";
    let current = this.head;
    while(current){
    result += current.data + " "
    console.log(current)
    current = current.next
    }
    
 return result;
}
let queueObj=new Queue
console.log(queueObj.enqueue(10))
console.log(queueObj.enqueue(20))
console.log(queueObj.enqueue(30))
console.log(queueObj.print())
