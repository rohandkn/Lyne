
function line() {
    
    var xhr = new XMLHttpRequest();
    
    var name = document.getElementById("name").value;

    var location = document.getElementById("location").value;

    var eta = document.getElementById("orders").value;

    // var buffer = document.getElementById("buffer").value;

    var code = document.getElementById("code").value;
    
    console.log("code");

    var count = 0;
    
    var buffer = count;

    var ref = firebase.database().ref("lines");
    ref.child(code).set({
        name: name,
        location: location,
        eta: eta,
        buffer: buffer,
        count: count,
        codename: code
    });
    
    window.location.href="https://lyne-thecurryman.c9users.io/Web/test.html";
    
    // xhr.open("POST","https://shielded-reef-48843.herokuapp.com/", true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.send("?title=you are 3rd in line");

}