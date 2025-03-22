function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function name(){
        console.log("This is named");
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is anonymous");
    }
}