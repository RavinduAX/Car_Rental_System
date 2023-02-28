let baseURL = "http://localhost:8080/Back_End_war/"

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