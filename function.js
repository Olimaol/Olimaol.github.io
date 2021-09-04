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

function write_to_id(id, checkstatus) {
    firebase.database().ref('checkboxes/' + id).set({
        checked: checkstatus
    });
}

function lock_element(element, index, array) {
    element.disabled=true;
}

function send_check_status(element, index, array) {
    id=element.id;
    checkstatus=element.checked;
    firebase.database().ref('checkboxes/' + id).set({
        checked: checkstatus
    });
}

function send_checks(params) {
    // lock all checkboxes which are checked
    const checked_cb_list = document.querySelectorAll('input[type="checkbox"]:checked');
    checked_cb_list.forEach(lock_element);

    // send for each cb the checked status to firebase
    const cb_list = document.querySelectorAll('input[type="checkbox"]');
    cb_list.forEach(send_check_status);


}