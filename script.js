document.getElementById("btnAdd").onclick = function(){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var data = JSON.parse(this.responseText);
            var comments = document.getElementById("comments");
            comments.innerHTML = '';
                
            for(var i = 0;i < data.length;i++){
                var para = document.createElement("p");
                var para2 = document.createElement("p");

                para.textContent = data[i].name;
                para.style.textAlign = "center"

                para2.textContent = data[i].comment;
                para2.style.textAlign = "center"
                para2.style.backgroundColor = 'blue';

                comments.appendChild(para);
                comments.appendChild(para2);
            }
        }
    }

    myRequest.open("GET","add.php?name="+name+"&comment="+comment,true);
    myRequest.send();
};