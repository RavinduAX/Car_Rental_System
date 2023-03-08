let cfbaseURL = "http://localhost:8080/Back_End_war/"

loadAllfCars();

//save
$('#vfbtnSave').click(function () {
    let vfcName = $('#vftxtCarName').val();
    let vfcType = $('#vftxtCarType').val();
    let vfcImg = $('#vftxtThumbnail').val();

    let fleet = {
        name: vfcName,
        type: vfcType,
        thumbnail: vfcImg
    }

    $.ajax({
        url: cfbaseURL + 'fleet',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(fleet),
        dataType: 'json',
        success: function (resp) {
            uploadThumbnailImg(vfcName);
            console.log(resp.message);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Vehicle has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            loadAllfCars();
            cfSetTextFieldValues("", "", "");
        },error: function (error){
            var jsObject = JSON.parse(error.responseText);
            console.log(jsObject.message);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Vehicle has not been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
});

function uploadThumbnailImg(names) {
    var fileObjectImg = $('#vftxtThumbnail')[0].files[0];
    var fileNameImg = names + "-Thumb-" + $('#vftxtThumbnail')[0].files[0].name;

    var data = new FormData();
    data.append("thumbnail", fileObjectImg, fileNameImg);

    $.ajax({
        url: csbaseURL + "fleet/up/" + names,
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

//getall
function loadAllfCars() {
    $('#vftblVehicle').empty();
    $.ajax({
        url: cfbaseURL + 'fleet',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            setVFleet(resp.data);
            for (let car of resp.data) {
                var row = '<tr><td>' + car.name + '</td><td>' + car.type + '</td><td>' + car.thumbnail + '</td></tr>'
                $('#vftblVehicle').append(row);
                //fill cardetail brand combobox
                var opt = '<option>' + car.name + '</option>'
                $(opt).attr('value', car.name);
                $('#crstxtBrand').append(opt);
                cfBindRowClickEvents();
            }
        }
    });
}

function cfBindRowClickEvents() {
    $('#vftblVehicle>tr').click(function () {
        let cfName = $(this).children(':eq(0)').text();
        let cfType = $(this).children(':eq(1)').text();
        let cfThumb = $(this).children(':eq(2)').text();

        cfSetTextFieldValues(cfName, cfType, cfThumb);
    });
}

function cfSetTextFieldValues(cfName, cfType, cfThumb) {
    $('#vftxtCarName').val(cfName);
    $('#vftxtCarType').val(cfType);
    $('#vftxtThumbnail').val(cfThumb);
}

//delete
$('#vfbtnDelete').click(function () {
    let vfCarName = $('#vftxtCarName').val();

    $.ajax({
        url: cfbaseURL + 'fleet?name=' + vfCarName + "",
        method: 'delete',
        success: function () {
            loadAllfCars();
            cfSetTextFieldValues("", "", "");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Vehicle has been deleted',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });

});


// // set vehicle fleet
function setVFleet(vdata) {
    $('#vfDiv1').empty();
    $('#vfDiv2').empty();
    $('#vfDiv3').empty();

    for (let c of vdata) {
        let brand = c.name;
        let thumbImgPath = c.thumbnail;
        let thumbImg = thumbImgPath.split("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages//Thumbnails//")[1];
        let thumbImgSrc = "assets/savedImages//Thumbnails//" + thumbImg;
        let type = c.type;

        if (type === 'general') {
            $('#vfDiv1txt').text("General Cars");
            $.ajax({
                url: cfbaseURL + 'car?brand=' + brand + "",
                method: 'get',
                dataType: 'json',
                success: function (resp) {
                    let vCard = `<div class="card" style="width: 18rem;">
                    <img src="${thumbImgSrc}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i>${brand}</i></h5>
                        <p class="card-text">Rate(Rs) : ${resp.data.dailyRate}/day<br>Free km : 100/day<br><br>Rate(Rs) : ${resp.data.monthlyRate}/month<br>Free km : 2400/month<br></p>
                        <button type="button" class="btn btn-danger"><a href="#" data-bs-target="#custMustLogin" data-bs-toggle="modal" style="text-decoration: none; color: white">Rent For Hire</a></button>
                    </div>
                </div>`;
                    $('#vfDiv1').append(vCard);
                }
            });
        } else if (type === 'premium') {
            $('#vfDiv2txt').text("Premium Cars");

            $.ajax({
                url: cfbaseURL + 'car?brand=' + brand + "",
                method: 'get',
                dataType: 'json',
                success: function (resp) {
                    let vCard = `<div class="card" style="width: 18rem;">
                    <img src="${thumbImgSrc}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i>${brand}</i></h5>
                        <p class="card-text">Rate(Rs) : ${resp.data.dailyRate}/day<br>Free km : 100/day<br><br>Rate(Rs) : ${resp.data.monthlyRate}/month<br>Free km : 2400/month<br></p>
                        <button type="button" class="btn btn-danger"><a href="#" data-bs-target="#custMustLogin" data-bs-toggle="modal" style="text-decoration: none; color: white">Rent For Hire</a></button>
                    </div>
                </div>`;

                    $('#vfDiv2').append(vCard);
                }
            });
        } else if (type === 'luxury') {
            $('#vfDiv3txt').text("Luxury Cars");

            $.ajax({
                url: cfbaseURL + 'car?brand=' + brand + "",
                method: 'get',
                dataType: 'json',
                success: function (resp) {
                    let vCard = `<div class="card" style="width: 18rem;">
                    <img src="${thumbImgSrc}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i>${brand}</i></h5>
                        <p class="card-text">Rate(Rs) : ${resp.data.dailyRate}/day<br>Free km : 100/day<br><br>Rate(Rs) : ${resp.data.monthlyRate}/month<br>Free km : 2400/month<br></p>
                        <button type="button" class="btn btn-danger"><a href="#" data-bs-target="#custMustLogin" data-bs-toggle="modal" style="text-decoration: none; color: white">Rent For Hire</a></button>    
                    </div>
                </div>`;

                    $('#vfDiv3').append(vCard);
                }
            });
        }
    }
}

$('#vfbtnCusLogin').click(function () {
    let usrNme = $('#vftxtCustLoginUsrNm').val();
    let usrPswd = $('#vftxtCusLoginPswd').val();

    $.ajax({
        url: cfbaseURL + 'customer?usrNme='+usrNme+"",
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            let pswd = resp.data.password;
            if(usrPswd === pswd){
                //logged in alert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.href = "customerPanel.html";
            }else{
                $('#vfbtnCusLogin>a').attr('href','#');
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Try again. Enter valid data',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    });

    localStorage.setItem("userName", usrNme);
});

$('#vfbtnEmpLogin').click(function () {
    let empUsrNme = $('#vftxtEmpLoginLicenseNo').val();
    let empPswd = $('#vftxtEmpLoginPswd').val();

    if(empUsrNme === 'admin' & empPswd === 'admin'){
        alert('loged');
        window.location.href = "adminPanel.html";
    }else{
        $.ajax({
            url: cfbaseURL + 'driver?license='+empUsrNme+"",
            method: 'get',
            dataType: 'json',
            success: function (resp) {
                let empCont = resp.data.contactNo;

                if(empCont == empPswd){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    window.location.href = "driverPanel.html";
                }else{
                    // $('#vfbtnEmpLogin>a').attr('href','#');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Try again, Enter valid data',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
        });
    }

});
