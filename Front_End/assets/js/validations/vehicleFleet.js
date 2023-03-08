const cusUsrNmeRegEx = /^^[0-9]{12}$/;
const cusPswdRegEx = /^[A-z0-9@#$%&!*]{8,12}$/;

const empNmeRegEx = /^[A-z0-9 .]{3,}$/;
const empPswdRegEx = /^[A-z0-9@#$%&!*]{8,12}$/;

const cusRegNmeRegEx = /^[A-z .]{3,}$/;
const cusRegPswdRegEx = /^[A-z0-9@#$%&!*]{8,12}$/;
const cusRegAdrsRegEx = /^[A-z ,.0-9]{3,}$/;
const cusRegMailRegEx = /^[A-z .@]{5,}$/;
const cusRegCntctRegEx = /^(0)[1-9][0-9][0-9]{7}$/;
const cusRegNicRegEx = /^[0-9]{12}$/
const cusRegLicenseRegEx = /^[0-9]{10}$/


let custLogValidations = [];
custLogValidations.push({reg: cusUsrNmeRegEx, field: $('#vftxtCustLoginUsrNm'),error:'NIC not valid : 12 digits'});
custLogValidations.push({reg: cusPswdRegEx, field: $('#vftxtCusLoginPswd'),error:'Password not valid : A-z0-9@#$%&!* [8-12 digits]'});

let empLogValidations = [];
empLogValidations.push({reg: empNmeRegEx, field: $('#vftxtEmpLoginLicenseNo'),error:'License not valid : 10 digits'});
empLogValidations.push({reg: empPswdRegEx, field: $('#vftxtEmpLoginPswd'),error:'Password not valid : A-z0-9@#$%&!* [8-12 digits]'});

let cusRegValidations = [];
cusRegValidations.push({reg: cusRegNmeRegEx, field: $('#csregtxtName'),error:'Name not valid : John Doe'});
cusRegValidations.push({reg: cusRegPswdRegEx, field: $('#csregtxtPassword'),error:'Password not valid : A-z0-9@#$%&!* [8-12 digits]'});
cusRegValidations.push({reg: cusRegAdrsRegEx, field: $('#csregtxtAddress'),error:'Address not valid : [A-z] [0-9]'});
cusRegValidations.push({reg: cusRegMailRegEx, field: $('#csregtxtEmail'),error:'Email not valid : johnd@mail.com'});
cusRegValidations.push({reg: cusRegCntctRegEx, field: $('#csregtxtContactNo'),error:'Contact not valid : 0341234567'});
cusRegValidations.push({reg: cusRegNicRegEx, field: $('#csregtxtNicNo'),error:'NIC not valid : 12 digits'});
cusRegValidations.push({reg: cusRegLicenseRegEx, field: $('#csregtxtLicenseNo'),error:'License not valid : 10 digits'});

$("#vftxtCustLoginUsrNm,#vftxtCusLoginPswd,#vftxtEmpLoginLicenseNo,#vftxtEmpLoginPswd,#csregtxtName,#csregtxtPassword,#csregtxtAddress,#csregtxtEmail,#csregtxtContactNo,#csregtxtNicNo,#csregtxtLicenseNo").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#vftxtCustLoginUsrNm,#vftxtCusLoginPswd").on('keyup', function (event) {
    checkCusLogValidity();
});

$("#vftxtCustLoginUsrNm,#vftxtCusLoginPswd").on('blur', function (event) {
    checkCusLogValidity();
});

$("#vftxtEmpLoginLicenseNo,#vftxtEmpLoginPswd").on('keyup', function (event) {
    checkEmpLogValidity();
});

$("#vftxtEmpLoginLicenseNo,#vftxtEmpLoginPswd").on('blur', function (event) {
    checkEmpLogValidity();
});

$("#csregtxtName,#csregtxtPassword,#csregtxtAddress,#csregtxtEmail,#csregtxtContactNo,#csregtxtNicNo,#csregtxtLicenseNo").on('keyup', function (event) {
    checkCusRegValidity();
});

$("#csregtxtName,#csregtxtPassword,#csregtxtAddress,#csregtxtEmail,#csregtxtContactNo,#csregtxtNicNo,#csregtxtLicenseNo").on('blur', function (event) {
    checkCusRegValidity();
});



$("#vftxtCustLoginUsrNm").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusUsrNmeRegEx, $("#vftxtCustLoginUsrNm"))) {
        $("#vftxtCusLoginPswd").focus();
    } else {
        focusText($("#vftxtCustLoginUsrNm"));
    }
});
$("#vftxtCusLoginPswd").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusPswdRegEx, $("#vftxtCusLoginPswd"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
        }
    }
});


$("#vftxtEmpLoginLicenseNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(empNmeRegEx, $("#vftxtEmpLoginLicenseNo"))) {
        $("#vftxtEmpLoginPswd").focus();
    } else {
        focusText($("#vftxtEmpLoginLicenseNo"));
    }
});
$("#vftxtEmpLoginPswd").on('keydown', function (event) {
    if (event.key == "Enter" && check(empPswdRegEx, $("#vftxtEmpLoginPswd"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
        }
    }
});



$("#csregtxtName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegNmeRegEx, $("#csregtxtName"))) {
        $("#csregtxtPassword").focus();
    } else {
        focusText($("#csregtxtName"));
    }
});
$("#csregtxtPassword").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegPswdRegEx, $("#csregtxtPassword"))) {
        focusText($("#csregtxtAddress"));
    }
});
$("#csregtxtAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegAdrsRegEx, $("#csregtxtAddress"))) {
        focusText($("#csregtxtEmail"));
    }
});
$("#csregtxtEmail").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegMailRegEx, $("#csregtxtEmail"))) {
        focusText($("#csregtxtContactNo"));
    }
});
$("#csregtxtContactNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegCntctRegEx, $("#csregtxtContactNo"))) {
        focusText($("#csregtxtNicNo"));
    }
});
$("#csregtxtNicNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegNicRegEx, $("#csregtxtNicNo"))) {
        focusText($("#csregtxtLicenseNo"));
    }
});
$("#csregtxtLicenseNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusRegLicenseRegEx, $("#csregtxtLicenseNo"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
        }
    }
});


function checkCusLogValidity() {
    let errorCount=0;
    for (let validation of custLogValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    // setButtonState(errorCount);
}

function checkEmpLogValidity() {
    let errorCount=0;
    for (let validation of empLogValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    // setButtonState(errorCount);
}

function checkCusRegValidity() {
    let errorCount=0;
    for (let validation of cusRegValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    // setButtonState(errorCount);
}


function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
        txtField.parent().children('span').css('color', 'red');
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

// function setButtonState(value){
//     if (value>0){
//         $("#vfbtnCusLogin").attr('disabled',true);
//         $("#vfbtnEmpLogin").attr('disabled',true);
//     }else{
//         $("#vfbtnCusLogin").attr('disabled',false);
//         $("#vfbtnEmpLogin").attr('disabled',false);
//     }
// }





