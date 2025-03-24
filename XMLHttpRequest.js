let req = new XMLHttpRequest(); // Correct object initialization
const url = "https://catfact.ninja/fact";

req.open("GET", url); // 'true' ensures async request

req.onreadystatechange = function () {
    if (req.readyState === 4) {  // Request is complete
        if (req.status === 200) {
            console.log(JSON.parse(req.responseText).length); 
        } else {
            console.log(`Error: ${req.status}`);
        }
    }
};

req.send(); // Sending the request
