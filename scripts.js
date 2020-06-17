var engine = {
    maker: "ford",
    headGasket: {
        pots: [
            "piston1",
            "piston2"
        ]
    }
}

function runExpression()
{
    var a = 10;

    function add ( ){
        var engine = "string engine";
       console.log(engine);
    }

    add();
}