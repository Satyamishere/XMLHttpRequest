fetch("https://catfact.ninja/fact").then(function(res){
    return res.json();
}).then(function(data){
    console.log(data.fact);
});
