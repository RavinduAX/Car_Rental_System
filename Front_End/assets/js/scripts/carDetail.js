$('#crsbtnSave').click(function () {
    let regNo = $('#crstxtRegNo').val();
    let brand = $('#crstxtBrand').val();
    let color = $('#crstxtColor').val();
    let dailyRate = $('#crstxtDailyRate').val();
    let freeKmForDay = $('#crstxtFreeKmDay').val();
    let freeKmForMonth = $('#crstxtFreeKmMonth').val();
    let fuelType = $('#crstxtFuelType').val();
    let milage = '0';
    let monthlyRate = $('#crstxtMonthlyRate').val();
    let noOfPassengers = $('#crstxtPassengers').val();
    let priceForExtraKm = $('#crstxtPriceForExtra').val();
    let status = $('#dstxtStatus').val();
    let transmissionType = $('#crstxtTransmissionType').val();
    let type = $('#crstxtType').val();

    let vehicle = {
        regNo:regNo,
        brand:brand,
        color:color,
        dailyRate:dailyRate,
        freeKmForDay:freeKmForDay,
        freeKmForMonth:freeKmForMonth,
        fuelType:fuelType,
        milage:milage,
        monthlyRate:monthlyRate,
        noOfPassengers:noOfPassengers,
        priceForExtraKm:priceForExtraKm,
        status:status,
        transmissionType:transmissionType,
        type:type
    }

    $.ajax({
        url: baseURL + 'car',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(vehicle),
        success: function (res) {
            uploadCarImgs(regNo);
            // loadAllCustomers();
            // csSetTextFieldValues("","","","","","","");
            alert(res.message);
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });

});

function uploadCarImgs(id){
    var fileObjectFront = $('#crstxtFrontImg')[0].files[0];
    var fileNameFront = id + "-front-" + $('#crstxtFrontImg')[0].files[0].name;

    var fileObjectSide = $('#crstxtSideImg')[0].files[0];
    var fileNameSide = id + "-side-" + $('#crstxtSideImg')[0].files[0].name;

    var fileObjectBack = $('#crstxtBackImg')[0].files[0];
    var fileNameBack = id + "-back-" + $('#crstxtBackImg')[0].files[0].name;

    var fileObjectInterior = $('#crstxtInteriorImg')[0].files[0];
    var fileNameInterior = id + "-interior-" + $('#crstxtInteriorImg')[0].files[0].name;

    var data = new FormData();
    data.append("frontImg", fileObjectFront, fileNameFront);
    data.append("sideImg", fileObjectSide, fileNameSide);
    data.append("backImg", fileObjectBack, fileNameBack);
    data.append("interiorImg", fileObjectInterior, fileNameInterior);

    $.ajax({
        url: baseURL + "car/up/" + id,
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