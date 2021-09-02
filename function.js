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