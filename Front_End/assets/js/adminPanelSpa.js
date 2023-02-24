$('#admPDashbrdSec').css('display','block');
$('#admPCarDetailSec').css('display','none');
$('#admPDrivrDetailSec').css('display','none');
$('#admPCustDetailSec').css('display','none');
$('#admPCarRentDetailSec').css('display','none');
$('#admPCarReturnSec').css('display','none');
$('#btnAdmPDash').css('color','crimson');

$('#btnAdmPDash').click(function () {
    $('#admPDashbrdSec').css('display','block');
    $('#admPCarDetailSec').css('display','none');
    $('#admPDrivrDetailSec').css('display','none');
    $('#admPCustDetailSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','none');
    $('#admPCarReturnSec').css('display','none');

    $('#pnlName').text('Dashboard');

    $('#btnAdmPDash').css('color','crimson');
    $('#btnAdmPRentDetailCar').css('color','white');
    $('#btnAdmPReturnCar').css('color','white');
    $('#btnAdmPCusDetail').css('color','white');
    $('#btnAdmPCarDetail').css('color','white');
    $('#btnAdmPDrivrDetail').css('color','white');
});

$('#btnAdmPRentDetailCar').click(function () {
    $('#admPDashbrdSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','block');
    $('#admPCarReturnSec').css('display','none');
    $('#admPCustDetailSec').css('display','none');
    $('#admPCarDetailSec').css('display','none');
    $('#admPDrivrDetailSec').css('display','none');

    $('#pnlName').text('Rent Car');

    $('#btnAdmPDash').css('color','white');
    $('#btnAdmPRentDetailCar').css('color','crimson');
    $('#btnAdmPReturnCar').css('color','white');
    $('#btnAdmPCusDetail').css('color','white');
    $('#btnAdmPCarDetail').css('color','white');
    $('#btnAdmPDrivrDetail').css('color','white');
});

$('#btnAdmPReturnCar').click(function () {
    $('#admPDashbrdSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','none');
    $('#admPCarReturnSec').css('display','block');
    $('#admPCustDetailSec').css('display','none');
    $('#admPCarDetailSec').css('display','none');
    $('#admPDrivrDetailSec').css('display','none');

    $('#pnlName').text('Return Car');

    $('#btnAdmPDash').css('color','white');
    $('#btnAdmPRentDetailCar').css('color','white');
    $('#btnAdmPReturnCar').css('color','crimson');
    $('#btnAdmPCusDetail').css('color','white');
    $('#btnAdmPCarDetail').css('color','white');
    $('#btnAdmPDrivrDetail').css('color','white');
});

$('#btnAdmPCusDetail').click(function () {
    $('#admPDashbrdSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','none');
    $('#admPCarReturnSec').css('display','none');
    $('#admPCustDetailSec').css('display','block');
    $('#admPCarDetailSec').css('display','none');
    $('#admPDrivrDetailSec').css('display','none');

    $('#pnlName').text('Cust. Detail');

    $('#btnAdmPDash').css('color','white');
    $('#btnAdmPRentDetailCar').css('color','white');
    $('#btnAdmPReturnCar').css('color','white');
    $('#btnAdmPCusDetail').css('color','crimson');
    $('#btnAdmPCarDetail').css('color','white');
    $('#btnAdmPDrivrDetail').css('color','white');
});

$('#btnAdmPCarDetail').click(function () {
    $('#admPDashbrdSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','none');
    $('#admPCarReturnSec').css('display','none');
    $('#admPCustDetailSec').css('display','none');
    $('#admPCarDetailSec').css('display','block');
    $('#admPDrivrDetailSec').css('display','none');

    $('#pnlName').text('Car Detail');

    $('#btnAdmPDash').css('color','white');
    $('#btnAdmPRentDetailCar').css('color','white');
    $('#btnAdmPReturnCar').css('color','white');
    $('#btnAdmPCusDetail').css('color','white');
    $('#btnAdmPCarDetail').css('color','crimson');
    $('#btnAdmPDrivrDetail').css('color','white');
});

$('#btnAdmPDrivrDetail').click(function () {
    $('#admPDashbrdSec').css('display','none');
    $('#admPCarRentDetailSec').css('display','none');
    $('#admPCarReturnSec').css('display','none');
    $('#admPCustDetailSec').css('display','none');
    $('#admPCarDetailSec').css('display','none');
    $('#admPDrivrDetailSec').css('display','block');

    $('#pnlName').text('Driver Detail');

    $('#btnAdmPDash').css('color','white');
    $('#btnAdmPRentDetailCar').css('color','white');
    $('#btnAdmPReturnCar').css('color','white');
    $('#btnAdmPCusDetail').css('color','white');
    $('#btnAdmPCarDetail').css('color','white');
    $('#btnAdmPDrivrDetail').css('color','crimson');
});


