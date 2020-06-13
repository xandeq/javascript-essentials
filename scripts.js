var car = {
    make: "Volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [{
            maker: "piston1"
        }, {
            maker: "piston2"
        }],
        drive: function () { return "drive"; }
    }
}

var array = [
    "string",
    100,
    ["embed", 200],
    {car: "ford"},
    function () { return "drive"; }
];

console.log(car.make);