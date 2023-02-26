let baseURL = "http://localhost:8080/Back_End_war/"

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
        },
        error: function (error){
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
        });
});
