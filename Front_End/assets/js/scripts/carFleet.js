let cfbaseURL = "http://localhost:8080/Back_End_war/"

loadAllfCars();

//save
$('#vfbtnSave').click(function () {
    let vfcName = $('#vftxtCarName').val();
    let vfcType = $('#vftxtCarType').val();
    let vfcImg = $('#vftxtThumbnail').val();
    console.log(vfcName + vfcImg);

    let fleet = {
        name:vfcName,
        type:vfcType,
        thumbnail:vfcImg
    }
    console.log(fleet);

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
            for (let car of resp.data) {
                var row = '<tr><td>'+car.name+'</td><td>'+car.type+'</td><td>'+car.thumbnail+'</td></tr>'
                $('#vftblVehicle').append(row);
                // csBindRowClickEvents();
            }
        }
    });
}

