const Validator = {
    CheckSpecialCharacter: (str) => {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return format.test(str);
    },
    CheckUserValid: (str) => {
        if (str.length === 0) {
            return false;
        }
        return true;
    },
    CheckPassValid: (pass) => {
        if (pass.length < 6 || this.CheckSpecialCharacter(pass)) {
            return false;
        }
        return true;
    },
    CheckRePassValid: (pass, rePass) => {
        if (rePass.length < 6 || this.CheckSpecialCharacter(rePass) || rePass !== pass) {
            return false;
        }
        return true;
    },
    validateEmail: (email) => {
        var format =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return format.test(email);
    },
    // validateEmail: (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         );
    // },
};

export default Validator;
