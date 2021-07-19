let body = document.body;

function disableBtn(btn) {
    btn.disabled = true;
}

function enableBtn(btn) {
    btn.disabled = false;
}

let button_primary = document.body.querySelector('.btn_primary');
body.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if(target == button_primary) {
        disableBtn(button_primary);
    }else {
        enableBtn(button_primary);
    }
} ) 
let button_secondary = document.body.querySelector('.btn_secondary');
body.addEventListener('click', (e) => {
    let target = e.target;
    if(target == button_secondary) {
        disableBtn(button_secondary);
    }else {
        enableBtn(button_secondary);
    }
} ) 
let button_alternate = document.body.querySelector('.btn_alternate');
body.addEventListener('click', (e) => {
    let target = e.target;
    if(target == button_alternate) {
        disableBtn(button_alternate);
    }else {
        enableBtn(button_alternate);
    }
} ) 
