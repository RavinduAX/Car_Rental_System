const crRegNoRexEx = /^[A-z ]{1,3}[0-9]{4}$/;
const crColorRegEx = /^[A-z]{3,}$/;
const crPsngrRegEx = /^[0-9]{1,3}$/;
const crDRateRegEx = /^[0-9]{1,}$/;
const crMRateRegEx = /^[0-9]{1,}$/;
const crKmDRegEx = /^[0-9]{1,}$/;
const crKmMRegEx = /^[0-9]{1,}$/;
const crExtraRegEx = /^[0-9]{1,}$/;

const drLicRegEx = /^[0-9]{10}$/
const drNameRegEx = /^[A-z .]{3,}$/;
const drAdrsRegEx = /^[A-z ,.0-9]{3,}$/;
const drContactRegEx = /^(0)[1-9][0-9][0-9]{7}$/;

let crValidations = [];
crValidations.push({reg: crRegNoRexEx, field: $('#crstxtRegNo'),error:'RegNo not valid : AB1234'});
crValidations.push({reg: crColorRegEx, field: $('#crstxtColor'),error:'Color not valid : Red'});
crValidations.push({reg: crPsngrRegEx, field: $('#crstxtPassengers'),error:'Passenger not valid : 1'});
crValidations.push({reg: crDRateRegEx, field: $('#crstxtDailyRate'),error:'Rate not valid : [0-9]'});
crValidations.push({reg: crMRateRegEx, field: $('#crstxtMonthlyRate'),error:'Rate not valid : [0-9]'});
crValidations.push({reg: crKmDRegEx, field: $('#crstxtFreeKmDay'),error:'Km not valid : [0-9]'});
crValidations.push({reg: crKmMRegEx, field: $('#crstxtFreeKmMonth'),error:'Km not valid : [0-9]'});
crValidations.push({reg: crExtraRegEx, field: $('#crstxtPriceForExtra'),error:'Price not valid : [0-9]'});

let drValidations = [];
drValidations.push({reg: drLicRegEx, field: $('#dstxtLicenseNo'),error:'License not valid : 10 digits'});
drValidations.push({reg: drNameRegEx, field: $('#dstxtName'),error:'Name not valid : John Doe'});
drValidations.push({reg: drAdrsRegEx, field: $('#dstxtAddress'),error:'Address not valid : [A-z]'});
drValidations.push({reg: drContactRegEx, field: $('#dstxtContactNo'),error:'Contact not valid : 0341234567'});

$("#crstxtRegNo,#crstxtColor,#crstxtPassengers,#crstxtDailyRate,#crstxtMonthlyRate,#crstxtFreeKmDay,#crstxtFreeKmMonth,#crstxtPriceForExtra,#dstxtLicenseNo,#dstxtName,#dstxtAddress,#dstxtContactNo").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#crstxtRegNo,#crstxtColor,#crstxtPassengers,#crstxtDailyRate,#crstxtMonthlyRate,#crstxtFreeKmDay,#crstxtFreeKmMonth,#crstxtPriceForExtra").on('keyup', function (event) {
    checkCarValidity();
});

$("#crstxtRegNo,#crstxtColor,#crstxtPassengers,#crstxtDailyRate,#crstxtMonthlyRate,#crstxtFreeKmDay,#crstxtFreeKmMonth,#crstxtPriceForExtra").on('blur', function (event) {
    checkCarValidity()
});

$("#dstxtLicenseNo,#dstxtName,#dstxtAddress,#dstxtContactNo").on('keyup', function (event) {
    checkDriverValidity();
});

$("#dstxtLicenseNo,#dstxtName,#dstxtAddress,#dstxtContactNo").on('blur', function (event) {
    checkDriverValidity();
});


$("#crstxtRegNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(crRegNoRexEx, $("#crstxtRegNo"))) {
        $("#crstxtColor").focus();
    } else {
        focusText($("#crstxtRegNo"));
    }
});
$("#crstxtColor").on('keydown', function (event) {
    if (event.key == "Enter" && check(crColorRegEx, $("#crstxtColor"))) {
        focusText($("#crstxtPassengers"));
    }
});
$("#crstxtPassengers").on('keydown', function (event) {
    if (event.key == "Enter" && check(crPsngrRegEx, $("#crstxtPassengers"))) {
        focusText($("#crstxtDailyRate"));
    }
});
$("#crstxtDailyRate").on('keydown', function (event) {
    if (event.key == "Enter" && check(crDRateRegEx, $("#crstxtDailyRate"))) {
        focusText($("#crstxtMonthlyRate"));
    }
});
$("#crstxtMonthlyRate").on('keydown', function (event) {
    if (event.key == "Enter" && check(crMRateRegEx, $("#crstxtMonthlyRate"))) {
        focusText($("#crstxtFreeKmDay"));
    }
});
$("#crstxtFreeKmDay").on('keydown', function (event) {
    if (event.key == "Enter" && check(crKmDRegEx, $("#crstxtFreeKmDay"))) {
        focusText($("#crstxtFreeKmMonth"));
    }
});
$("#crstxtFreeKmMonth").on('keydown', function (event) {
    if (event.key == "Enter" && check(crKmMRegEx, $("#crstxtFreeKmMonth"))) {
        focusText($("#crstxtPriceForExtra"));
    }
});
$("#crstxtPriceForExtra").on('keydown', function (event) {
    if (event.key == "Enter" && check(crExtraRegEx, $("#crstxtPriceForExtra"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
        }
    }
});


$("#dstxtLicenseNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(drLicRegEx, $("#dstxtLicenseNo"))) {
        $("#dstxtName").focus();
    } else {
        focusText($("#dstxtLicenseNo"));
    }
});
$("#dstxtName").on('keydown', function (event) {
    if (event.key == "Enter" && check(drNameRegEx, $("#dstxtName"))) {
        focusText($("#dstxtAddress"));
    }
});
$("#dstxtAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(drAdrsRegEx, $("#dstxtAddress"))) {
        focusText($("#dstxtContactNo"));
    }
});
$("#dstxtContactNo").on('keydown', function (event) {
    if (event.key == "Enter" && check(drContactRegEx, $("#dstxtContactNo"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
        }
    }
});


function checkCarValidity() {
    let errorCount=0;
    for (let validation of crValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    // setButtonState(errorCount);
}

function checkDriverValidity() {
    let errorCount=0;
    for (let validation of drValidations) {
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