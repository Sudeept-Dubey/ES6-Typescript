 let previousNo=Symbol('PNo');
 let currentNo=Symbol('CNo');
 class Fibonacci {
     constructor(){
         this[ previousNo ]=0
         this[currentNo]=1
     }
      next(n){
          let final;
          for(let i=0;i<n;i++){
              console.log(this[previousNo])
              console.log(this[currentNo])
              final=this[previousNo]+ this[currentNo]
              this[previousNo]=this[currentNo]
              this[currentNo]=final
          }
          return final
      }
           
        };
        let f=new Fibonacci();
        console.log("The next number is:" +f.next(5));
    
  
