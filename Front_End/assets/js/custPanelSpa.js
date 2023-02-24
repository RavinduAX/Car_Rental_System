$('#custPDashboardSec').css('display','block');
$('#custPInfoSec').css('display','none');
$('#btnCustPdash').css('color','crimson');

$('#btnCustPdash').click(function () {
    $('#custPDashboardSec').css('display','block');
    $('#custPInfoSec').css('display','none');
    $('#pnlName').text("Dashboard");
    $('#btnCustPdash').css('color','crimson');
    $('#btnCustPInfo').css('color','white');
});
$('#btnCustPInfo').click(function () {
    $('#custPDashboardSec').css('display','none');
    $('#custPInfoSec').css('display','block');
    $('#pnlName').text("Update Info");
    $('#btnCustPInfo').css('color','crimson');
    $('#btnCustPdash').css('color','white');
});
