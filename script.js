console.log("page loaded...");

function changeName(){
    document.getElementById('name').innerHTML = "Jain Dough"
    

}


function minusRequest(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count - 1;
}

function plusRequest(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}