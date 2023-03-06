let crntbaseURL = "http://localhost:8080/Back_End_war/"

onLoad();

function onLoad(){
    var dta = localStorage.getItem('userName');
    $('#custPtxtProfile').text(dta);

    loadVFleetCars();

}

function loadVFleetCars(){
    $.ajax({
        url: crntbaseURL + 'fleet',
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            for (let cf of resp.data) {
                var opt = '<option>' + cf.name + '</option>'
                $(opt).attr('value', cf.name);
                $('#prtxtSelectCar').append(opt);
            }
        }
    });
}

$("#prtxtSelectCar").change(function () {
    let brand = $("#prtxtSelectCar").val();
    //load selected car detail
    $.ajax({
        url: crntbaseURL + 'car?brand='+brand+" ",
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            let car = resp.data;
            $('#prtxtRegNo').val(car.regNo);

            if(car.type === 'General'){
                $('#prtxtLossDamage').empty();
                var loss = `<h5><span class="text-danger">***</span>Loss Damage Waiver : Rs.10000.00</h5>`
                $('#prtxtLossDamage').append(loss);
            }else if(car.type === 'Premium'){
                $('#prtxtLossDamage').empty();
                var loss = `<h5><span class="text-danger">***</span>Loss Damage Waiver : Rs.15000.00</h5>`
                $('#prtxtLossDamage').append(loss);
            }else if(car.type === 'Luxury'){
                $('#prtxtLossDamage').empty();
                var loss = `<h5><span class="text-danger">***</span>Loss Damage Waiver : Rs.20000.00</h5>`
                $('#prtxtLossDamage').append(loss);
            }

            $('#prtxtCarName').text(car.brand);

            $('#prlstDetail1').empty();
            $('#prlstDetail2').empty();

            var detail1 = `<li>Brand : ${car.brand.split(" ")[0]}</li>
                            <li>No of passengers : ${car.noOfPassengers}</li>
                            <li>Transmission Type : ${car.transmissionType}</li>
                            <li>Fuel Type : ${car.fuelType}</li>
                            <li>Colour : ${car.color}</li>`;

            $('#prlstDetail1').append(detail1);

            var detail2 = `<li>Daily Rate : Rs.${car.dailyRate}</li>
                            <li>Free km : ${car.freeKmForDay}km/day</li>
                            <li>Monthly Rate : Rs.${car.monthlyRate}</li>
                            <li>Free km : ${car.freeKmForMonth}km/month</li>
                            <li>Extra km : ${car.priceForExtraKm}/km</li>`;

            $('#prlstDetail2').append(detail2);

        }
    })
});