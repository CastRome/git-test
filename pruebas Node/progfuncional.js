 
 // 
 function person (name,age){
    return {name,age}
 }

 const maria = person("maria",30)

 function teacher (name,age,lesson){
    return {
        ...person(name,age),
        lesson
    }
 }

 const sergio = teacher("sergio",28,"JS")

 console.log(sergio)

 //inmutabilidad

 let arr = [1,2,3]
 arr = arr.concat(4)


 //puras

 let num =1 ;
 let obj = {}
 function pureFun(a){
    a=2
    console.log(num)
 }

 //dados los mismos argumentos dar los mismos
 //resultados




 function test(){} //normal

 const test = () => {} // otra

 (test = ( )=> {})() //auto ejecutado