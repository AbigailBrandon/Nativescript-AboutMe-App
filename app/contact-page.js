const { Observable } = require("@nativescript/core/data/observable");
const { Dialogs } = require("@nativescript/core/ui/dialogs");

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

exports.onSubmitTap = function(args) {
    // Here, you can add any logic for submitting the form if you need.
    // Once the submission is done (or if you're not submitting anything and just want to show the message), display the thank you message.
    Dialogs.alert({
        title: "Thank You!",
        message: "Thank you for submitting!",
        okButtonText: "Close"
    });
};

exports.onHomeTap = function(args) {
    // Navigate to your home page or any other desired action when the HOME button is tapped.
    // You might need to adjust this according to your project setup.
    const page = args.object.page;
    page.frame.navigate("path/to/your/home/page");  // Replace with the path to your home page.
};
