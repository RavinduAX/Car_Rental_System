onLoad();

function onLoad(){
    var dta = localStorage.getItem('userName');
    $('#custPtxtProfile').text(dta);
}