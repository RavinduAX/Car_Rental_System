let baseURL = "http://localhost:8080/Back_End_war/"

loadAllDrivers();

//add driver
$('#dsbtnSave').click(function () {
    var formData = $('#dsformDriver').serialize();

    $.ajax({
        url: baseURL+"driverDetail",
        method: 'post',
        data: formData,
        dataType: 'json',
        success: function (res) {
            alert(res.message);
            setTextFieldValues("","","","","","","");
            loadAllDrivers();
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
        });
});

function loadAllDrivers(){
    $('#dstblDriver').empty();
    $.ajax({
        url: baseURL+'driverDetail',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            for (let d of resp.data) {
                var row = '<tr><td>'+d.licenseNo+'</td><td>'+d.name+'</td><td>'+d.address+'</td><td>'+d.dob+'</td><td>'+d.gender+'</td><td>'+d.contactNo+'</td><td>'+d.status+'</td></tr>'
                $('#dstblDriver').append(row);
            }
            bindRowClickEvents();
            setTextFieldValues("","","","","","","");
        }
    });
}

function bindRowClickEvents(){
    $('#dstblDriver>tr').click(function () {
        let licenseNo = $(this).children(':eq(0)').text();
        let name = $(this).children(':eq(1)').text();
        let address = $(this).children(':eq(2)').text();
        let dob = $(this).children(':eq(3)').text();
        let gender = $(this).children(':eq(4)').text();
        let contactno = $(this).children(':eq(5)').text();
        let status = $(this).children(':eq(6)').text();

        setTextFieldValues(licenseNo,name,address,dob,gender,contactno,status);
    });
}

function setTextFieldValues(licenseNo,name,address,dob,gender,contactno,status){
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

