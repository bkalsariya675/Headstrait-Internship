// CREATE USER
$('#create_user').click(() => {
    let payload = {
        email : $('input[name=email]').val(),
        name: $('input[name=name]').val(),
        password: $('input[name=password]').val(),
    }
    // console.log(payload);
    createUser(payload)
});

const createUser = async (payload) => {
    const response = await fetch('http://localhost:3000/api/contact/newcontact', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    // const myJson = await response.json();
    if(response.status == 200 ) {
        alert('User Created Successfully')
    } else {
        alert('Error')
    }
}

// FETCH USER

$('#fetch_user').click(async () => {
    const response = await fetch('http://localhost:3000/api/contact/getContacts', {
    method: 'GET',
    headers: {
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
    });
    const myJson = await response.json();
    console.log(myJson)

    if(response.status == 200) {
        const email_array = myJson.data.map((emailObject, index) => {
        return `<p>${emailObject.email}</p>`
    });
    $(".display_data").html(email_array.join(""))
    } else {
        alert("Error While getting data")
    }
})

// DELETE USER

$('#delete_user').click(() => {
    let payload = {
        // email : $('input[name=email]').val()
        email :document.getElementById('email1').value
    }
    console.log(payload);
    deleteUser(payload)
});

const deleteUser = async (payload) => {
    const response = await fetch('http://localhost:3000/api/contact/delete-contact', {
        method: 'DELETE',
        body: JSON.stringify(payload),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    // const myJson = await response.json();
    if(response.status == 200 ) {
        alert('User Deleted Successfully')
    } else {
        alert('Error')
    }
}

// UPDATE CONTACT

$('#update_user').click(() => {
    let payload = {
        // email : $('input[name=email]').val(),
        // name: $('input[name=name]').val()
        // email : $('#email').val(),
        name :document.getElementById('name').value,
        email : document.getElementById('email').value
    }
    // console.log() 
    console.log(payload);
    updateUser(payload)
});

const updateUser = async (payload) => {
    const response = await fetch('http://localhost:3000/api/contact/update-contact', {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    // const myJson = await response.json();
    if(response.status == 200 ) {
        alert('User Updated Successfully')
    } else {
        alert('Error')
    }
}

// DELETE ALL USERS

$('#delete_all').click(async () => {
    const response = await fetch('http://localhost:3000/api/contact/delete-all', {
    method: 'DELETE',
    headers: {
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
    });
    const myJson = await response.json();
    console.log(myJson)

    if(response.status == 200) {
        alert("All Data Deleted Successfully")
    } else {
        alert("Error While getting data")
    }
})