let cfbaseURL = "http://localhost:8080/Back_End_war/"

loadAllfCars();
// setVFleet();

//save
$('#vfbtnSave').click(function () {
    let vfcName = $('#vftxtCarName').val();
    let vfcType = $('#vftxtCarType').val();
    let vfcImg = $('#vftxtThumbnail').val();

    let fleet = {
        name:vfcName,
        type:vfcType,
        thumbnail:vfcImg
    }

    $.ajax({
        url: cfbaseURL+'fleet',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(fleet),
        dataType: 'json',
        success: function (resp) {
            uploadThumbnailImg(vfcName);
            alert(resp.message);
            loadAllfCars();
            cfSetTextFieldValues("","","");
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
function loadAllfCars(){
    $('#vftblVehicle').empty();
    $.ajax({
        url: cfbaseURL+'fleet',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            setVFleet(resp.data);
            for (let car of resp.data) {
                var row = '<tr><td>'+car.name+'</td><td>'+car.type+'</td><td>'+car.thumbnail+'</td></tr>'
                $('#vftblVehicle').append(row);
                //fill cardetail brand combobox
                var opt = '<option>'+car.name+'</option>'
                $(opt).attr('value', car.name);
                $('#crstxtBrand').append(opt);
                cfBindRowClickEvents();
            }
        }
    });
}

function cfBindRowClickEvents(){
    $('#vftblVehicle>tr').click(function () {
        let cfName = $(this).children(':eq(0)').text();
        let cfType = $(this).children(':eq(1)').text();
        let cfThumb = $(this).children(':eq(2)').text();

        cfSetTextFieldValues(cfName, cfType, cfThumb);
    });
}

function cfSetTextFieldValues(cfName, cfType, cfThumb){
    $('#vftxtCarName').val(cfName);
    $('#vftxtCarType').val(cfType);
    $('#vftxtThumbnail').val(cfThumb);
}

//delete
$('#vfbtnDelete').click(function () {
    let vfCarName = $('#vftxtCarName').val();

    $.ajax({
        url: cfbaseURL+'fleet?name='+vfCarName+"",
        method: 'delete',
        success: function () {
            loadAllfCars();
            cfSetTextFieldValues("","","");
        }
    });

});


// // set vehicle fleet
function setVFleet(vdata) {
    for (let c of vdata) {
        let brand = c.name;
        let thumbImgPath = c.thumbnail;
        let thumbImg = thumbImgPath.split("D:\\IJSE GDSE\\Projects\\Car Rental System\\Front_End\\assets\\savedImages//Thumbnails//")[1];
        let thumbImgSrc = "assets/savedImages//Thumbnails//" + thumbImg;
        console.log(thumbImgSrc);
        $.ajax({
            url: cfbaseURL+'car?brand='+brand+"",
            method: 'get',
            dataType: 'json',
            success: function (resp) {
                let vCard = `<div class="card" style="width: 18rem;">
                    <img src="${thumbImgSrc}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i>${brand}</i></h5>
                        <p class="card-text">Rate(Rs) : ${resp.data.dailyRate}/day<br>Free km : 100/day<br><br>Rate(Rs) : ${resp.data.monthlyRate}/month<br>Free km : 2400/month<br></p>
                        <button type="button" class="btn btn-danger"><a href="rentPage.html" style="text-decoration: none; color: white">Rent For Hire</a></button>
                    </div>
                </div>`;

                $('#vfSection').append(vCard);

            }
        });
    }
}
