var addList = function(e) {
    var list = document.getElementById("thelist");
    var app = document.createElement("li");
    var elements = list.getElementsByTagName("li");
    app.innerHTML = "item " + elements.length; 
    addlisteners(app);
    list.appendChild(app);
};

b.addEventListener("click",addList);

function getElements(listId){
    var list = document.getElementById(listId);
    var elements = list.getElementsByTagName("li");
    return elements
}
var changeHeaderTo = function(value){
    var header = document.getElementById("h");
    header.innerHTML = value;
};

var addlisteners = function (element) {
	element.addEventListener('mouseover', function (e) {
		changeHeaderTo(element.innerHTML)
	});
	element.addEventListener('mouseout', function (e) {
		changeHeaderTo("Hello World!")
	});

	element.addEventListener('click', function (e) {
        element.remove();
	});
};

elements=getElements("thelist");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    addlisteners(element);
};

var addFib = function(e) {
    var list = document.getElementById("fiblist");
    var app = document.createElement("li");
    var elements = list.getElementsByTagName("li");
    var len = elements.length;
    var x;
    if (len == 0){
        x = 0;
    }else if (len == 1){
        x = 1;
    }else{
        x = parseInt(elements[len - 2].innerHTML) + parseInt(elements[len-1].innerHTML);
    }
    app.innerHTML =  x;
    
    list.appendChild(app);
};


f.addEventListener("click",addFib);


var addTri = function(e) {
    var list = document.getElementById("trilist");
    var app = document.createElement("li");
    var elements = list.getElementsByTagName("li");
    var len = elements.length;
    var x;
    if (len == 0){
        x = 1;
    }else{
        x = parseInt(elements[len - 1].innerHTML) + len + 1
    }
    app.innerHTML =  x;
    
    list.appendChild(app);
};

t.addEventListener("click",addTri);



var addSquare = function(e) {
    var list = document.getElementById("squarelist");
    var app = document.createElement("li");
    var elements = list.getElementsByTagName("li");
    var len = elements.length;
    var x;
    x = Math.pow(len + 1,2)
    
    app.innerHTML =  x;
    
    list.appendChild(app);
};

s.addEventListener("click",addSquare);

var addLazy = function(e) {
    var list = document.getElementById("lazylist");
    var app = document.createElement("li");
    var elements = list.getElementsByTagName("li");
    var len = elements.length;
    var x;
    x = (Math.pow(len,2) + len + 2) / 2
    
    app.innerHTML =  x;
    
    list.appendChild(app);
};

l.addEventListener("click",addLazy);

