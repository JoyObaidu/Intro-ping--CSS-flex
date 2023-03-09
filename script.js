const email = document.getElementById("email");
const btn = document.querySelector(".btn")
const small = document.querySelector("small");

btn.addEventListener("click", handleForm);

function handleForm(e) {
    e.preventDefault();
    validation(email);
}

const validation = (item) => {
    if (item.value === "") {
        item.style.border = '1px solid hsl(354, 100%, 66%)';
        small.style.display = 'block';
       small.textContent = 'please provide a valid email';
       small.style.color = 'hsl(354, 100%, 66%)';
    }
    else if (!validateEmail(item.value)) {
        item.style.border = '1px solid hsl(354, 100%, 66%)';
        small.style.display = 'block';
       small.textContent = 'please provide a valid email';
       small.style.color = 'hsl(354, 100%, 66%)';
    }
    else if (validateEmail(item.value)) {
        small.style.display = 'none';
        item.style.border = 'hsl(223, 100%, 88%)';
    }
}
function validateEmail(email) {
    var RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return RegEmail.test(String(email).toLowerCase());
}