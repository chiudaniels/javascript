var x = function(e) {
    var list = document.getElementById("thelist");
    var app = document.createElement("li");
    app.innerHTML = "new item"; 
    list.appendChild(app);
    
};

var y = function(e){
    
}
b.addEventListener("click",x);
thelist.addEventListener("mouseover",y);
