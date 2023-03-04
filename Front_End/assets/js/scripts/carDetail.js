let crsbaseURL = "http://localhost:8080/Back_End_war/"

loadAllCars();

$('#crsbtnSave').click(function () {
    let regNo = $('#crstxtRegNo').val();
    let brand = $('#crstxtBrand').val();
    let color = $('#crstxtColor').val();
    let dailyRate = $('#crstxtDailyRate').val();
    let freeKmForDay = $('#crstxtFreeKmDay').val();
    let freeKmForMonth = $('#crstxtFreeKmMonth').val();
    let fuelType = $('#crstxtFuelType').val();
    let milage = "0";
    let monthlyRate = $('#crstxtMonthlyRate').val();
    let noOfPassengers = $('#crstxtPassengers').val();
    let priceForExtraKm = $('#crstxtPriceForExtra').val();
    let status = $('#crstxtStatus').val();
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
        url: crsbaseURL + 'car',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(vehicle),
        success: function (res) {
            uploadCarImgs(regNo);
            loadAllCars();
            crsSetTextFieldValues("","","","","","","","","","","","","");
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
        url: crsbaseURL + "car/up/" + id,
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

function loadAllCars(){
    $('#crstblCar').empty();
    
    $.ajax({
        url: crsbaseURL + 'car',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            // console.log(resp);
            for (let car of resp.data) {
                var row = '<tr><td>'+car.regNo+'</td><td>'+car.brand+'</td><td>'+car.noOfPassengers+'</td><td>'+car.type+'</td><td>'+car.transmissionType+'</td><td>'+car.fuelType+'</td><td>'+car.color+'</td><td>'+car.dailyRate+'</td><td>'+car.freeKmForDay+'</td><td>'+car.monthlyRate+'</td><td>'+car.freeKmForMonth+'</td><td>'+car.priceForExtraKm+'</td><td>'+car.status+'</td></tr>'
                $('#crstblCar').append(row);
            }
            crsBindRowClickEvents()
            // setTextFieldValues("","","","");
        }
    });
}

function crsBindRowClickEvents(){
    $('#crstblCar>tr').click(function () {
        let crsRegNo = $(this).children(':eq(0)').text();
        let crsBrand = $(this).children(':eq(1)').text();
        let crsPassengerNo = $(this).children(':eq(2)').text();
        let crsType = $(this).children(':eq(3)').text();
        let crsTransmission = $(this).children(':eq(4)').text();
        let crsFuel = $(this).children(':eq(5)').text();
        let crsColor = $(this).children(':eq(6)').text();
        let crsDailyRate = $(this).children(':eq(7)').text();
        let crsKmDay = $(this).children(':eq(8)').text();
        let crsMonthlyRate = $(this).children(':eq(9)').text();
        let crsKmMonth = $(this).children(':eq(10)').text();
        let crsExtraKmPrice = $(this).children(':eq(11)').text();
        let crsStatus = $(this).children(':eq(12)').text();

        crsSetTextFieldValues(crsRegNo, crsBrand, crsPassengerNo, crsType, crsTransmission, crsFuel, crsColor, crsDailyRate, crsKmDay, crsMonthlyRate, crsKmMonth, crsExtraKmPrice, crsStatus);
    });
}

function crsSetTextFieldValues(crsRegNo, crsBrand, crsPassengerNo, crsType, crsTransmission, crsFuel, crsColor, crsDailyRate, crsKmDay, crsMonthlyRate, crsKmMonth, crsExtraKmPrice, crsStatus){
    $('#crstxtRegNo').val(crsRegNo);
    $('#crstxtBrand').val(crsBrand);
    $('#crstxtPassengers').val(crsPassengerNo);
    $('#crstxtType').val(crsType);
    $('#crstxtTransmissionType').val(crsTransmission);
    $('#crstxtFuelType').val(crsFuel);
    $('#crstxtColor').val(crsColor);
    $('#crstxtDailyRate').val(crsDailyRate);
    $('#crstxtFreeKmDay').val(crsKmDay);
    $('#crstxtMonthlyRate').val(crsMonthlyRate);
    $('#crstxtFreeKmMonth').val(crsKmMonth);
    $('#crstxtPriceForExtra').val(crsExtraKmPrice);
    $('#crstxtStatus').val(crsStatus);
}

$('#crsbtnUpdate').click(function () {
    let regNo = $('#crstxtRegNo').val();
    let brand = $('#crstxtBrand').val();
    let color = $('#crstxtColor').val();
    let dailyRate = $('#crstxtDailyRate').val();
    let freeKmForDay = $('#crstxtFreeKmDay').val();
    let freeKmForMonth = $('#crstxtFreeKmMonth').val();
    let fuelType = $('#crstxtFuelType').val();
    let milage = "0";
    let monthlyRate = $('#crstxtMonthlyRate').val();
    let noOfPassengers = $('#crstxtPassengers').val();
    let priceForExtraKm = $('#crstxtPriceForExtra').val();
    let status = $('#crstxtStatus').val();
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
        url: crsbaseURL + 'car',
        method: 'put',
        contentType: 'application/json',
        data: JSON.stringify(vehicle),
        success: function (res) {
            loadAllCars();
            crsSetTextFieldValues("","","","","","","","","","","","","");
            alert(res.message);
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});

$('#crsbtnDelete').click(function () {
    let regNo = $('#crstxtRegNo').val();

    $.ajax({
        url: crsbaseURL + 'car?id='+regNo+"",
        method: 'delete',
        success: function () {
            loadAllCars();
            crsSetTextFieldValues("","","","","","","","","","","","","");
        }
    });
});

$('#crsbtnNew').click(function () {
    crsSetTextFieldValues("","","","","","","","","","","","","");
});



