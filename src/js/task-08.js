const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        const message = "Please fill in all the fields!";
        return alert(message);
    }

    const formData = {
        email: email.value,
        password: password.value,
    }
    console.log(formData);

    // --------- OR ---------
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) =>
    // {
    //     console.log('NAME: ', name);
    //     console.log('VALUE: ', value);
    // OR
        // console.log(`Email: ${email.value}, Password: ${password.value}`);
    // });

    event.currentTarget.reset();
};


