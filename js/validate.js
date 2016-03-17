$("#ss-form").validate({
    rules: {
        fullname: {
            required: true
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        fullname: {
            required: "Full name is required"
        },
        email: {
            required: "Email is required",
            email: "Your email address must be in the format of name@domain.com"
        }
    }
});