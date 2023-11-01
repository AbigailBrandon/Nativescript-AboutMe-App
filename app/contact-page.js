const { Observable } = require("@nativescript/core/data/observable");

function pageLoaded(args) {
    const page = args.object;
    page.bindingContext = Observable.fromObject({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
}

function submitForm(args) {
    // Handle the form submission logic
    // For now, we'll just display an alert
    alert("Thank you for submitting!");
}

exports.pageLoaded = pageLoaded;
exports.submitForm = submitForm;
