window.onload = function() {

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title: {
            text: "Te prekurit me COVID 19 ne baza gjinore, vendi: Kosova "
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 41, label: "Femra", color: "#ff001e" },
                {
                    y: 46,
                    label: "Meshkuj",
                    color: "#990609"
                },
                { y: 517, label: "Te pa konfirmuar", color: "#d43f42", },
            ]
        }]
    });

    chart2.render()
    var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Statisika mbi rastet dhe moshat perkatese"
        },
        axisY: {
            title: "Rastet"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "#990609",
            legendText: "Mosha",
            dataPoints: [
                { y: 6, label: "0-9", color: "#990609" },
                { y: 12, label: "10-19", color: "#990609" },
                { y: 20, label: "20-29", color: "#990609" },
                { y: 19, label: "30-39", color: "#990609" },
                { y: 21, label: "40-49", color: "#990609" },
                { y: 17, label: "50-59", color: "#990609" },
                { y: 24, label: "60-69", color: "#990609" },
                { y: 19, label: "70+", color: "#990609" },
                { y: 480, label: "Te pakonfirmuar", color: "#990609" }
            ]
        }]
    });
    chart3.render();
    var chart4 = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Statisika mbi rastet ne disa vende me te prekura"
        },
        axisY: {
            title: "Rastet"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "#990609",
            legendText: "Rastet",
            dataPoints: [
                { y: 90, label: "Ferizaj", color: "#990609" },
                { y: 70, label: "Malisheve", color: "#990609" },
                { y: 65, label: "Prishtina", color: "#990609" },
                { y: 45, label: "Vitia", color: "#990609" },
                { y: 36, label: "Prizreni", color: "#990609" },
                { y: 33, label: "Mitrovica e Veriut", color: "#990609" },
                { y: 33, label: "Suhareka", color: "#990609" },
                { y: 29, label: "Gjilani", color: "#990609" },
            ]
        }]
    });
    chart4.render();
    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        title: {
            text: "Statisitika rreth rasteve qe nga rastet e para!"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Rastet",
            includeZero: false,
            // suffix: " °C"
        },
        legend: {
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip: {
            shared: true
        },
        data: [{
                name: "Rastet",
                type: "spline",
                color: "#bb4430",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2020, 02, 14), y: 5 },
                    { x: new Date(2020, 02, 15), y: 9 },
                    { x: new Date(2020, 02, 16), y: 15 },
                    { x: new Date(2020, 02, 17), y: 19 },
                    { x: new Date(2020, 02, 18), y: 20 },
                    { x: new Date(2020, 02, 19), y: 21 },
                    { x: new Date(2020, 02, 20), y: 24 },
                    { x: new Date(2020, 02, 21), y: 30 },
                    { x: new Date(2020, 02, 22), y: 33 },
                    { x: new Date(2020, 02, 23), y: 61 },
                    { x: new Date(2020, 02, 24), y: 63 },
                    { x: new Date(2020, 02, 25), y: 71 },
                    { x: new Date(2020, 02, 26), y: 86 },
                    { x: new Date(2020, 02, 27), y: 88 },
                    { x: new Date(2020, 02, 28), y: 91 },
                    { x: new Date(2020, 02, 29), y: 94 },
                    { x: new Date(2020, 02, 30), y: 106 },
                    { x: new Date(2020, 02, 31), y: 112 },
                    { x: new Date(2020, 03, 01), y: 125 },
                    { x: new Date(2020, 03, 02), y: 126 },
                    { x: new Date(2020, 03, 03), y: 132 },
                    { x: new Date(2020, 03, 04), y: 140 },
                    { x: new Date(2020, 03, 05), y: 145 },
                    { x: new Date(2020, 03, 06), y: 165 },
                    { x: new Date(2020, 03, 07), y: 184 },
                    { x: new Date(2020, 03, 08), y: 224 },
                    { x: new Date(2020, 03, 09), y: 227 },
                    { x: new Date(2020, 03, 10), y: 250 },
                    { x: new Date(2020, 03, 11), y: 283 },
                    { x: new Date(2020, 03, 12), y: 362 },
                    { x: new Date(2020, 03, 13), y: 377 },
                    { x: new Date(2020, 03, 14), y: 387 },
                    { x: new Date(2020, 03, 15), y: 423 },
                    { x: new Date(2020, 03, 16), y: 449 },
                    { x: new Date(2020, 03, 17), y: 480 },
                    { x: new Date(2020, 03, 18), y: 510 },
                    { x: new Date(2020, 03, 19), y: 561 },
                    { x: new Date(2020, 03, 20), y: 598 },
                    { x: new Date(2020, 03, 21), y: 604 },
                ]
            },
            {
                name: "Te sheruar",
                type: "spline",
                color: "green",
                // yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2020, 02, 14), y: 0 },
                    { x: new Date(2020, 02, 15), y: 0 },
                    { x: new Date(2020, 02, 16), y: 0 },
                    { x: new Date(2020, 02, 17), y: 0 },
                    { x: new Date(2020, 02, 18), y: 0 },
                    { x: new Date(2020, 02, 19), y: 0 },
                    { x: new Date(2020, 02, 20), y: 0 },
                    { x: new Date(2020, 02, 21), y: 0 },
                    { x: new Date(2020, 02, 22), y: 0 },
                    { x: new Date(2020, 02, 23), y: 0 },
                    { x: new Date(2020, 02, 24), y: 0 },
                    { x: new Date(2020, 02, 25), y: 0 },
                    { x: new Date(2020, 02, 26), y: 0 },
                    { x: new Date(2020, 02, 27), y: 0 },
                    { x: new Date(2020, 02, 28), y: 0 },
                    { x: new Date(2020, 02, 29), y: 0 },
                    { x: new Date(2020, 02, 30), y: 0 },
                    { x: new Date(2020, 02, 31), y: 6 },
                    { x: new Date(2020, 03, 01), y: 10 },
                    { x: new Date(2020, 03, 02), y: 10 },
                    { x: new Date(2020, 03, 03), y: 16 },
                    { x: new Date(2020, 03, 04), y: 23 },
                    { x: new Date(2020, 03, 05), y: 23 },
                    { x: new Date(2020, 03, 06), y: 24 },
                    { x: new Date(2020, 03, 07), y: 30 },
                    { x: new Date(2020, 03, 08), y: 37 },
                    { x: new Date(2020, 03, 09), y: 38 },
                    { x: new Date(2020, 03, 10), y: 52 },
                    { x: new Date(2020, 03, 11), y: 58 },
                    { x: new Date(2020, 03, 12), y: 59 },
                    { x: new Date(2020, 03, 13), y: 63 },
                    { x: new Date(2020, 03, 14), y: 66 },
                    { x: new Date(2020, 03, 15), y: 71 },
                    { x: new Date(2020, 03, 16), y: 79 },
                    { x: new Date(2020, 03, 17), y: 84 },
                    { x: new Date(2020, 03, 18), y: 93 },
                    { x: new Date(2020, 03, 19), y: 102 },
                    { x: new Date(2020, 03, 20), y: 123 },
                    { x: new Date(2020, 03, 21), y: 128 },
                ]
            },
            {
                name: "Fatalitetet",
                type: "spline",
                color: "black",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2020, 02, 14), y: 0 },
                    { x: new Date(2020, 02, 15), y: 0 },
                    { x: new Date(2020, 02, 16), y: 0 },
                    { x: new Date(2020, 02, 17), y: 0 },
                    { x: new Date(2020, 02, 18), y: 0 },
                    { x: new Date(2020, 02, 19), y: 0 },
                    { x: new Date(2020, 02, 20), y: 0 },
                    { x: new Date(2020, 02, 21), y: 0 },
                    { x: new Date(2020, 02, 22), y: 0 },
                    { x: new Date(2020, 02, 23), y: 0 },
                    { x: new Date(2020, 02, 24), y: 0 },
                    { x: new Date(2020, 02, 25), y: 0 },
                    { x: new Date(2020, 02, 26), y: 0 },
                    { x: new Date(2020, 02, 27), y: 0 },
                    { x: new Date(2020, 02, 28), y: 0 },
                    { x: new Date(2020, 02, 29), y: 0 },
                    { x: new Date(2020, 02, 30), y: 0 },
                    { x: new Date(2020, 02, 31), y: 0 },
                    { x: new Date(2020, 03, 01), y: 0 },
                    { x: new Date(2020, 03, 02), y: 0 },
                    { x: new Date(2020, 03, 03), y: 0 },
                    { x: new Date(2020, 03, 04), y: 0 },
                    { x: new Date(2020, 03, 05), y: 0 },
                    { x: new Date(2020, 03, 06), y: 3 },
                    { x: new Date(2020, 03, 07), y: 5 },
                    { x: new Date(2020, 03, 08), y: 6 },
                    { x: new Date(2020, 03, 09), y: 7 },
                    { x: new Date(2020, 03, 10), y: 7 },
                    { x: new Date(2020, 03, 11), y: 7 },
                    { x: new Date(2020, 03, 12), y: 7 },
                    { x: new Date(2020, 03, 13), y: 8 },
                    { x: new Date(2020, 03, 14), y: 8 },
                    { x: new Date(2020, 03, 15), y: 9 },
                    { x: new Date(2020, 03, 16), y: 11 },
                    { x: new Date(2020, 03, 17), y: 12 },
                    { x: new Date(2020, 03, 18), y: 12 },
                    { x: new Date(2020, 03, 19), y: 12 },
                    { x: new Date(2020, 03, 20), y: 15 },
                    { x: new Date(2020, 03, 21), y: 18 },
                ]
            }
        ]
    });
    chart1.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart1.render();
    }

}