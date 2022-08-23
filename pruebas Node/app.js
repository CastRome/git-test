function isAlive(name,hp){

  var alive = false; /*
  if(name == "ikk"  && hp >= 30){
    alive = true;
  }else if (name == "gut"  && hp >= 10){
    alive = true;
  }*/
   
   (name == "ikk"  && hp >= 30) || (name == "gut"  && hp >= 10) ? alive = true : alive = false;

  return alive;
  }
  console.log(isAlive("ikk", 30)) //=> true
 /* console.log(isAlive("gut", 50) )//=> true
  console.log(isAlive("ikk", 20)) //=> false
  console.log(isAlive("gut", 5)) //=> false
  console.log(isAlive("trek", 50)) //=> false*/