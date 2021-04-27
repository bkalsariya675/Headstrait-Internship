var name1, contactNo, email, editID = 0, editMode=false, contact_details = [];
const submit = () => {
    name1 = document.getElementById("name").value;
    contactNo = document.getElementById("num").value;
    email = document.getElementById("eml").value;

    let contact = new Object();
    contact.name = name1;
    contact.contactNo = contactNo;
    contact.email = email;

    if(!editMode){
        contact_details.push(contact);
        console.log(contact_details);
    }else{
        contact_details[editID] = contact;
        document.getElementById('submit').value = "Submit";
        editMode = false;
    }
    document.querySelector('#rpane').innerHTML = "";
    contact_details.map((value, index) => {
        document.getElementById("rpane"). innerHTML +=
            `<div class="card" id="${index}">
            <div>
            <button id="delete" onclick="del(${index})">X</button>
            <button onclick="edit(${index})">✎</button>
            </div>                                
            <center><img src="/images/user.png" width="50" height="50">
            <p>NAME: ${value.name}</p>
            <p>NUMBER: ${value.contactNo}</p>
            <p>EMAIL: ${value.email}</p>
            </div>`
    })
    document.getElementById("name").value="";
    document.getElementById("num").value = "";
    document.getElementById("eml").value = "";
}

const edit = (index) => {
    editMode = true;
    document.getElementById('submit').value = "Update";
    document.getElementById('name').value = contact_details[index].name;
    document.getElementById('num').value = contact_details[index].contactNo;
    document.getElementById('eml').value = contact_details[index].email;
    editID = index;
}

function del(val){
    contact_details.splice(val, 1);
    document.getElementById(val).remove();
}

function delAll(){
    document.getElementById("rpane").innerHTML = "" ;
    contact_details.splice(contact_details.length,0);
    console.log(contact_details);
}










