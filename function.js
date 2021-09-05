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

function send_checks() {
    // lock all checkboxes which are checked
    const checked_cb_list = document.querySelectorAll('input[type="checkbox"]:checked');
    checked_cb_list.forEach(lock_element);

    // send for each cb the checked status to firebase
    const cb_list = document.querySelectorAll('input[type="checkbox"]');
    cb_list.forEach(send_check_status);
}

function receive_checkstatus(element, index, array) {
    // get checkboxid
    id=element.id;

    // read checkstatus from firebase and update checkboxstatus
    var checkStatusRef = firebase.database().ref('checkboxes/' + id + '/checked');
    checkStatusRef.on('value', (snapshot) => {
        const data = snapshot.val();
        element.checked = data;
        // if checkbox == checked --> lock it
        if (data==true) {
            element.disabled=true;
        } else {
            element.disabled=false;
        }
    });
}

function lock_checked(element, index, array) {
    if (element.checked == true) {
        element.disabled = true;
    }
}

function lock_all_checked() {
    const cb_list = document.querySelectorAll('input[type="checkbox"]');
    cb_list.forEach(lock_checked);
}

function initialize_checkboxes() {
    // go over each checkbox id, load checked status from firebase, set the checked status
    const cb_list = document.querySelectorAll('input[type="checkbox"]');
    cb_list.forEach(receive_checkstatus);
}

function unlock_cb(element, index, array) {
    element.disabled = false;
}

function unlock_all() {
    if (confirm("Gesperrte Checkboxen wirklich wieder entsperren?\n Die Häkchen werden dadurch nicht verändert.\n Man kann allerdings die gesperrten Häkchen wieder bearbeiten.\n Um Änderungen zu speichern, erneut auf Speichern drücken!")) {
        const cb_list = document.querySelectorAll('input[type="checkbox"]:disabled');
        cb_list.forEach(unlock_cb);
    }
}

function check_pswd() {
    var password;

    var pswdRef = firebase.database().ref('password');
    pswdRef.on('value', (snapshot) => {
        const pass1 = snapshot.val();

        password=prompt('Passwort:',' ');
        if (password==pass1) {
            alert('Richtig! OK drücken zum fortfahren!');
        }
        if (password!=pass1) {
            window.location="index.html";
        } 
    });

    
}

