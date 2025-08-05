try{
    let a = Number(prompt ("Enter your age"));

    if(a>18){
        console.log("great");
    }
    else{
        throw "This is invalid"
    }
} 
catch(error){
    console.log(error);
    
}
finally{
    console.log("hello");
    
}