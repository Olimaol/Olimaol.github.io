function print_something() {
    alert("Hallo Welt!");
}

function check() {
    const cb = document.querySelector('#id1');
    if (cb.checked == true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
}

function lock_cb() {
    const cb = document.querySelector('#id1');
    if (cb.disabled == true) {
        cb.disabled = false;
    } else {
        cb.disabled = true;
    }
}

function check_and_lock() {
    const cb = document.querySelector('#id1');
    cb.disabled=true;
    cb.checked=true;
}

function saveToFirebase() {
    var emailObject = {
        email: "email"
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
}