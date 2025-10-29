import React, { useState } from 'react'

export default function Practice() {
      const[data,setDate]=useState(0)
//  // sort an array
// function sort(arr){
// // [11,65,9,54,0,65]
// const len=arr.length;
//  for(let i=0;i<len-1;i++){
//      for(let j=i+1;j<len;j++){
//       if(arr[i]<arr[j]){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//  }
//  }
//  return arr
// }

// function duplicate(arr){
//     const len=arr.length;
//     const duplicateKey={}
//      for(let i=0;i<len-1;i++){
//      for(let j=i+1;j<len;j++){
//       if(arr[i]==arr[j]){
//         duplicateKey[arr[i]]= arr[i]
//       }
//  }
//  }
//  return duplicateKey
// }
// // console.log(duplicate( [1,2,3,3,2]));
// function duplicateKeyCount(arr){
//  const len=arr.length; 
//      const duplicateKey={}
//      for(let i=0;i<len;i++){
//       if(!duplicateKey[arr[i]]){
//         duplicateKey[arr[i]]=1
//       }else{
//         duplicateKey[arr[i]]==++duplicateKey[arr[i]]
//       }
//  }
//  return duplicateKey
// }

// function reverse(arr){
//     const len=arr.length-1
//    for(let i=0;i<=len;i++){
//      if(i<len-i){
//          [arr[i],arr[len-i]]=[arr[len-i],arr[i]]
//      }
//    }
//    return arr
// }
// // linkList problem
// class node{
//     constructor(value){
//     this.data=value
//     this.next=null
//     }
// }
// class linkList{
//   constructor(){
//     this.head=null
//   }
//   addNode(value){
//     const newNode=new node(value)
//     if(this.head==null){
//       this.head=newNode
//       return
//     }
//      let currentNode=this.head
//      let tem;
//     while(currentNode.next!==null){
//       tem=currentNode.next
//       currentNode=tem
//     }
//     currentNode.next=newNode
//   }
//   travarse(){
//     if(this.head==null){
//       return "Eapty "
//     }
//     let current=this.head
//     let temp;
//    while(current.next !==null){
//     temp=current.next;
//     current=temp.next

//    }
//   }
//   deleteNode(value){    
//     if(this.head==null){
//       return "Eampty"
//     }
//      if(this.head.data==value){
//       this.head=this.head.next
//       return
//      }
//       let temp;
//       let current=this.head
//     do{
//      temp=current.next
//      if(temp.data==value){
//         current.next=temp.next
//         return
//      }
//      current=temp
//     }
//     while(current.next!==null)
//   }
  
//   addNodeAtPosition(leftnode,value){
//     if(!leftnode || !value){
//       alert("left slibling and node value are required")
//       return
//     }
//     const newNode=new node(value)
//      if(this.head==null){
//      this.head=newNode
//     }
//       let current=this.head
//        let temp;
//     do{
//       temp=current.next
//      if(current.data==leftnode){
//       newNode.next=temp
//         current.next=newNode
//         return
//      }
//      current=temp
//     }
//     while(current.next!==null)
//   }
// }
// useEffect(()=>{
//   const list=new linkList()
// list.addNode(20)
// list.addNode(30)
// list.addNode(40)
// list.addNode(50)
// list.deleteNode(50)
// list.addNodeAtPosition(50,70)
// console.log(list);


// },[data])

// 

 class CreateStack{
    constructor(){
      this.stack=[]
    }
     adddata(value){
    this.stack.push(value)
  }
  deleteData(value){
    if(this.stack.length>0){
    }this.stack.pop()
  }
 }

//  const stack=new CreateStack()
//  stack.adddata(10)
//   stack.adddata(20)
//    stack.adddata(30)
//     stack.deleteData(40)
//  console.log(stack);



// console.log(a++);

function targetIndices(arr,target){
  const len=arr.length-1;
  for(let i=0;i<len;i++){
    for(let j=i+1;j<=len;j++){
      let sum=arr[i]+arr[j]
      if(sum==target){
        return [i,j]
      }
    }
  }
return "target value not possible please change target"
}
// console.log(targetIndices([2,7,11,15],17));
// madam
function palindrom(str){
 const len=str.length-1
 let index=0
 while(index<=len-index){  
  if(str[index]!=str[len-index]){
     return "String not Palindrom"
  }
  index++;
 }
return "String is Palindrom"
}
// console.log(palindrom("glevelg"));
function minAndMax(arr) {
  const len=arr.length-1
  let min=0;
  let max=0;
  for(let i=0;i<len;i++){
    if(arr[i]>max){
      max=arr[i]
    }
     if(arr[i]<min){
      min=arr[i]
    }
  }
  return `min ${min} max ${max}`
}
//  console.log(minAndMax([1,5,2,3,5,-9,4]));
 function factorial(num) {
  if(num==0)return 1
  return num*factorial(num-1)
 }
//  console.log(factorial(5));
// in this same letter but can be in differnet order
 function anagram(str1,str2){
  let i=0;
  if(str1.length!==str2.length)return "Strings are not anagram"
  while(i<str1.length){
    if(!str2.includes(str1[i]))return "Strings are not anagram"
    i++
  }
  return "Strings are anagram"
 }
//  console.log(anagram("listenl","silent"));


 
  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center '>
        <button className='text-2xl border-2 p-4 rounded-xl bg-green-500 text-white' onClick={()=>setDate(prev=>prev+1)}>Reset</button>
      <p>{data}</p>
    </div>
  )
}

