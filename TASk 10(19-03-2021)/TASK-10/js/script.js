let name1, contactNo, email, counter=0, increment, editMode=false, editID;
function submit(){
    name1 = document.getElementById("name").value;
    contactNo = document.getElementById("num").value;
    email = document.getElementById("eml").value;
    // to gove unique IDs to each card
    increment = "id" + counter;
    // console.log(increment);
    if(!editMode){
    document.getElementById("rpane").innerHTML += 
    `<div class="card" id="${increment}">
    <div>
    <button onclick="del('${increment}')">X</button>
    <button onclick="edit('${name1}','${contactNo}','${email}','${increment}')">✎</button>
    </div>                                
    <center><img src="/images/user.png" width="50" height="50">
    <p>NAME: ${name1}</p>
    <p>NUMBER: ${contactNo}</p>
    <p>EMAIL: ${email}</p>
    </div>`
    // console.log(increment);
    document.getElementById("name").value="";
    document.getElementById("num").value = "";
    document.getElementById("eml").value = "";
    counter++;
    }else{
        document.getElementById(editID).innerHTML = 
        `<div>
        <button onclick="del('${editID}')">X</button>
        <button onclick="edit('${name1}','${contactNo}','${email}','${editID}')">✎</button>
        </div>                                
        <center><img src="/images/user.png" width="50" height="50">
        <p>NAME: ${name1}</p>
        <p>NUMBER: ${contactNo}</p>
        <p>EMAIL: ${email}</p>`
        document.getElementById("name").value="";
        document.getElementById("num").value = "";
        document.getElementById("eml").value = "";
        editMode=false;
    }
}
function edit(name1, contactNo, email, increment){
    document.getElementById("name").value= name1;
    document.getElementById("num").value=contactNo;
    document.getElementById("eml").value= email;
    editID = increment;
    editMode = true;
}
function del(val){
    document.getElementById(val).remove();
    // if(val == '${editID}'){
    //     document.getElementById(val).remove();
    //     // editMode = true;
    // }else{
    //     document.getElementById(val).remove();
    //     // editMode = false;
    // }
}

function delall(){
    document.getElementById("rpane").innerHTML="";
}
