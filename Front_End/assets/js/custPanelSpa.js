$('#custPlaceRentSec').css('display','block');
$('#custPDashboardSec').css('display','none');
$('#custPInfoSec').css('display','none');
$('#btnCustPRent').css('color','crimson');

$('#btnCustPRent').click(function () {
    $('#custPlaceRentSec').css('display','block');
    $('#custPDashboardSec').css('display','none');
    $('#custPInfoSec').css('display','none');
    $('#pnlName').text("Place Rent");
    $('#btnCustPRent').css('color','crimson');
    $('#btnCustPdash').css('color','white');
    $('#btnCustPInfo').css('color','white');
});
$('#btnCustPdash').click(function () {
    $('#custPDashboardSec').css('display','block');
    $('#custPInfoSec').css('display','none');
    $('#custPlaceRentSec').css('display','none');
    $('#pnlName').text("Dashboard");
    $('#btnCustPdash').css('color','crimson');
    $('#btnCustPInfo').css('color','white');
    $('#btnCustPRent').css('color','white');
});
$('#btnCustPInfo').click(function () {
    $('#custPDashboardSec').css('display','none');
    $('#custPInfoSec').css('display','block');
    $('#custPlaceRentSec').css('display','none');
    $('#pnlName').text("Update Info");
    $('#btnCustPInfo').css('color','crimson');
    $('#btnCustPdash').css('color','white');
    $('#btnCustPRent').css('color','white');
});
