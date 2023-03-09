let dbaseURL = "http://localhost:8080/Back_End_war/"

onLoad();

function onLoad(){
    regUsersCount();
    avaCarCount();
    avaDriverCount();
    occDriverCount();
}

function regUsersCount(){
    $.ajax({
        url: dbaseURL + "customer/count",
        method: 'get',
        success: function (resp){
            $('#dtxtregUsr').text(resp.data);
        }
    });
}

function avaCarCount(){
    $.ajax({
        url: dbaseURL + "car/count",
        method: 'get',
        success: function (resp){
            $('#dtxtACar').text(resp.data);
        }
    });
}

function avaDriverCount(){
    $.ajax({
        url: dbaseURL + "car/adcount",
        method: 'get',
        success: function (resp){
            $('#dtxtADriver').text(resp.data);
            console.log(resp.data)
        }
    });
}

function occDriverCount(){
    $.ajax({
        url: dbaseURL + "car/odcount",
        method: 'get',
        success: function (resp){
            $('#dtxtODriver').text(resp.data);
            console.log(resp.data)
        }
    });
}