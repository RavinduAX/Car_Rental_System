// let baseURL = "http://localhost:8080/Back_End_war/"

loadAllCustomers();

//Add Save Customer
$('#csregbtnRegister').click(function () {
    let nicNo = $('#csregtxtNicNo').val();
    let address = $('#csregtxtAddress').val();
    let contactNo = $('#csregtxtContactNo').val();
    let email = $('#csregtxtEmail').val();
    let licenceNo = $('#csregtxtLicenseNo').val();
    let name = $('#csregtxtName').val();
    let password = $('#csregtxtPassword').val();

    let customer = {
        nicNo: nicNo,
        address: address,
        contactNo: contactNo,
        email: email,
        licenceNo: licenceNo,
        name: name,
        password: password
    }

    $.ajax({
            url: baseURL+"customer",
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(customer),
            dataType: 'json',   //***
            success: function (res) {
                uploadCustomerImgs(nicNo);
                loadAllCustomers();
                csSetTextFieldValues("","","","","","","");
                alert(res.message);
            },
            error: function (error){
                var jsObject = JSON.parse(error.responseText);
                alert(jsObject.message);
            }
    });
});

function uploadCustomerImgs(id){
    var fileObjectNic = $('#csregtxtNicImg')[0].files[0];
    var fileNameNic = id + "-nic-" + $('#csregtxtNicImg')[0].files[0].name;
    console.log(fileObjectNic);
    console.log(fileNameNic);

    var fileObjectLicence = $('#csregtxtLicenseImg')[0].files[0];
    var fileNameLicence = id + "-licence-" + $('#csregtxtLicenseImg')[0].files[0].name;
    console.log(fileObjectLicence);
    console.log(fileNameLicence);

    var data = new FormData();
    data.append("nicImg", fileObjectNic, fileNameNic);
    data.append("licenceImg", fileObjectLicence, fileNameLicence);

    $.ajax({
        url: baseURL + "customer/up/" + id,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            // clearSignupTextFields();
        }
    });
}

//Get All Customer
function loadAllCustomers(){
    $('#cstblCustomer').empty();
    $.ajax({
        url: baseURL+"customer",
        method: 'get',
        dataType: 'json',
        success: function (resp){
            for (let cus of resp.data) {
                var row = '<tr><td>'+cus.name+'</td><td>'+cus.address+'</td><td>'+cus.password+'</td><td>'+cus.email+'</td><td>'+cus.contactNo+'</td><td>'+cus.nicNo+'</td><td>'+cus.licenceNo+'</td></tr>'
                $('#cstblCustomer').append(row);
                csBindRowClickEvents();
            }
        }
    });
}

function csBindRowClickEvents(){
    $('#cstblCustomer>tr').click(function () {
        let cdName = $(this).children(':eq(0)').text();
        let cdAddress = $(this).children(':eq(1)').text();
        let cdPassword = $(this).children(':eq(2)').text();
        let cdEmail = $(this).children(':eq(3)').text();
        let cdContactNo = $(this).children(':eq(4)').text();
        let cdNicNo = $(this).children(':eq(5)').text();
        let cdLicenseNo = $(this).children(':eq(6)').text();

        csSetTextFieldValues(cdName, cdAddress, cdPassword, cdEmail, cdContactNo, cdNicNo, cdLicenseNo);
    });
}

function csSetTextFieldValues(cdName, cdAddress, cdPassword, cdEmail, cdContactNo, cdNicNo, cdLicenseNo){
    $('#cstxtName').val(cdName);
    $('#cstxtAddress').val(cdAddress);
    $('#cstxtPassword').val(cdPassword);
    $('#cstxtEmail').val(cdEmail);
    $('#cstxtContactNo').val(cdContactNo);
    $('#cstxtNicNo').val(cdNicNo);
    $('#cstxtLicenseNo').val(cdLicenseNo);
}

$('#csbtnNew').click(function () {
    csSetTextFieldValues("","","","","","","");
});

$('#csbtnUpdate').click(function () {
    let nicNo = $('#cstxtNicNo').val();
    let address = $('#cstxtAddress').val();
    let contactNo = $('#cstxtContactNo').val();
    let email = $('#cstxtEmail').val();
    let licenceNo = $('#cstxtLicenseNo').val();
    let name = $('#cstxtName').val();
    let password = $('#cstxtPassword').val();

    let customer = {
        nicNo: nicNo,
        address: address,
        contactNo: contactNo,
        email: email,
        licenceNo: licenceNo,
        name: name,
        password: password
    }

    $.ajax({
        url: baseURL+"customer",
        method: 'put',
        contentType: 'application/json',
        data: JSON.stringify(customer),
        dataType: 'json',   //***
        success: function (res) {
            loadAllCustomers();
            csSetTextFieldValues("","","","","","","");
            alert(res.message);
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);}
    });
});

$('#csbtnDelete').click(function () {
    let nicNo = $('#cstxtNicNo').val();

    $.ajax({
        url: baseURL + "customer?id="+nicNo+"",
        method: 'delete',
        success: function () {
            loadAllCustomers();
        }
    });
});