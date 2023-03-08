let dsbaseURL = "http://localhost:8080/Back_End_war/"

loadAllDrivers();

//add driver
$('#dsbtnSave').click(function () {
    var formData = $('#dsformDriver').serialize();

    $.ajax({
        url: dsbaseURL+"driver",
        method: 'post',
        data: formData,
        dataType: 'json',
        success: function (res) {
            console.log(res.message);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Driver has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            dsSetTextFieldValues("","","","","","","");
            loadAllDrivers();
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            console.log(jsObject.message);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Driver has not been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
        });
});

//get All Driver
function loadAllDrivers(){
    $('#dstblDriver').empty();
    $.ajax({
        url: dsbaseURL+'driver',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            for (let d of resp.data) {
                var row = '<tr><td>'+d.licenseNo+'</td><td>'+d.name+'</td><td>'+d.address+'</td><td>'+d.dob+'</td><td>'+d.gender+'</td><td>'+d.contactNo+'</td><td>'+d.status+'</td></tr>'
                $('#dstblDriver').append(row);
            }
            dsBindRowClickEvents();
            dsSetTextFieldValues("","","","","","","");
        }
    });
}

function dsBindRowClickEvents(){
    $('#dstblDriver>tr').click(function () {
        let licenseNo = $(this).children(':eq(0)').text();
        let name = $(this).children(':eq(1)').text();
        let address = $(this).children(':eq(2)').text();
        let dob = $(this).children(':eq(3)').text();
        let gender = $(this).children(':eq(4)').text();
        let contactno = $(this).children(':eq(5)').text();
        let status = $(this).children(':eq(6)').text();

        dsSetTextFieldValues(licenseNo,name,address,dob,gender,contactno,status);
    });
}

function dsSetTextFieldValues(licenseNo,name,address,dob,gender,contactno,status){
    $('#dstxtLicenseNo').val(licenseNo);
    $('#dstxtName').val(name);
    $('#dstxtAddress').val(address);
    $('#dstxtDob').val(dob);
    $('#dstxtGender').val(gender)
    $('#dstxtContactNo').val(contactno);
    $('#dstxtStatus').val(status);
}

// $('#btnAdmPDrivrDetail').click(function () {
//     loadAllDrivers();
// });

//update Driver
$('#dsbtnUpdate').click(function () {
    let driverLicenseNo = $('#dstxtLicenseNo').val();
    let driverName = $('#dstxtName').val();
    let driverAddress = $('#dstxtAddress').val();
    let driverDob = $('#dstxtDob').val();
    let driverGender = $('#dstxtGender').val()
    let driverContact = $('#dstxtContactNo').val();
    let driverStatus = $('#dstxtStatus').val();

    var driver = {
        licenseNo: driverLicenseNo,
        name: driverName,
        address: driverAddress,
        dob: driverDob,
        gender: driverGender,
        contactNo: driverContact,
        status: driverStatus
    };

    $.ajax({
        url: dsbaseURL + 'driver',
        method: 'put',
        contentType: 'application/json',
        data: JSON.stringify(driver),
        dataType: 'json',
        success: function (res) {
            console.log(res.message);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Driver has been updated',
                showConfirmButton: false,
                timer: 1500
            })
            loadAllDrivers();
        },
        error: function (error) {
            let cause = JSON.parse(error.responseText).message;
            console.log(cause);
            Swal.fire({
                position: 'top-end',
                icon: 'erroe',
                title: 'Driver has not been updated',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
});

//delete Driver
$('#dsbtnDelete').click(function () {
    let id = $('#dstxtLicenseNo').val();

    $.ajax({
        url: dsbaseURL+'driver?id='+id+"",
        method: 'delete',
        success: function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Driver has been deleted',
                showConfirmButton: false,
                timer: 1500
            })
            loadAllDrivers();
        }
    });
});

$('#dsbtnNew').click(function () {
    dsSetTextFieldValues("","","","","","","");
});

