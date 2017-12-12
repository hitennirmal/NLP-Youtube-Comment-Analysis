function draw_pie(data, j){
    var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "outlineColor": "",
    "theme": "light",
    // "innerRadius": "40%",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
    "dataProvider": [{
        "sentiment": "Neutral",
        "count": data[j].neutral,
        // "color": "#186A3B"
    }, {
        "sentiment": "Negative",
        "count": data[j].negative,
        // "color": "#15a5d1"
    }, {
        "sentiment": "Positive",
        "count": data[j].positive,
        // "color": "#db0a0a"
    }],
    "titleField": "sentiment",
    "valueField": "count",
    // "colorField": "color",
    // "labelColorField": "color",
    "labelRadius": 5,
    
    "radius": "42%",
    "innerRadius": "60%",
    // "labelsEnabled": false,
    "labelText": "[[title]]",
    "export": {
        "enabled": false
    },

    autoMargins: false,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    pullOutRadius: 0,

});

return chart;
}


/* basic code available on: https://www.amcharts.com/kbase/reusing-the-same-config-object-for-multiple-charts/ 
 * changes done by Gaurav */

/**
 * Define universal config
 */
// var chartConfig = {
//     "type": "pie",
//     "outlineColor": "",
//     "theme": "light",
//     // "innerRadius": "40%",
//     "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
//     "dataProvider": [],
//     "titleField": "sentiment",
//     "valueField": "count",
//     // "colorField": "color",
//     // "labelColorField": "color",
//     "labelRadius": 5,
    
//     "radius": "42%",
//     "innerRadius": "60%",
//     // "labelsEnabled": false,
//     "labelText": "[[title]]",
//     "export": {
//         "enabled": false
//     },

//     autoMargins: false,
//     marginTop: 0,
//     marginBottom: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     pullOutRadius: 0,

// };

// /**
//  * Define function for cloning objects
//  * Taken from: http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
//  */
// function clone(obj) {
//     var copy;
  
//     // Handle the 3 simple types, and null or undefined
//     if (null == obj || "object" != typeof obj) return obj;
  
//     // Handle Date
//     if (obj instanceof Date) {
//       copy = new Date();
//       copy.setTime(obj.getTime());
//       return copy;
//     }
  
//     // Handle Array
//     if (obj instanceof Array) {
//       copy = [];
//       for (var i = 0, len = obj.length; i < len; i++) {
//         copy[i] = clone(obj[i]);
//       }
//       return copy;
//     }
  
//     // Handle Object
//     if (obj instanceof Object) {
//       copy = {};
//       for (var attr in obj) {
//         if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//       }
//       return copy;
//     }
  
//     throw new Error("Unable to copy obj! Its type isn't supported.");
//   }

// /**
//  * Create first chart
//  */

// // create a copy of the universal config
// var chartConfig1 = clone(chartConfig);

// // modify a copy of the config
// chartConfig1.dataProvider = [{
//     "sentiment": "Neutral",
//     "count": 50,
//     // "color": "#186A3B"
// }, {
//     "sentiment": "Negative",
//     "count": 100,
//     // "color": "#15a5d1"
// }, {
//     "sentiment": "Positive",
//     "count": 101,
//     // "color": "#db0a0a"
// }];

// // create the chart
// AmCharts.makeChart("chart1", chartConfig1);

// /**
//  * Create second chart
//  */

// // create a copy of the universal config
// var chartConfig2 = clone(chartConfig);

// // modify a copy of the config
// chartConfig2.dataProvider = [{
//     "sentiment": "Neutral",
//     "count": 10,
//     // "color": "#186A3B"
// }, {
//     "sentiment": "Negative",
//     "count": 100,
//     // "color": "#15a5d1"
// }, {
//     "sentiment": "Positive",
//     "count": 50,
//     // "color": "#db0a0a"
// }];

// // create the chart
// AmCharts.makeChart("chart2", chartConfig2);



// $('#demo').pagination({
//     dataSource: [{"name":"abc", "score":"10", "imdb":"6*"},{"name":"xyz", "score":"6", "imdb":"8*"},{"name":"lmn", "score":"9", "imdb":"5*"}],
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         dataContainer.html(html);
//     }
// })

// var url = "data.json";

// $(document).ready(function () {
//     $.getJSON(url,
//     function (data) {
//         var tr="";
//         for (var i = 0; i < data.length; i++) {
//             tr = $('<tr/>');
//             tr.append("<td>" + data[i]["name"] + "</td>");
//             tr.append("<td> pos: " + data[i].score["pos"] + "; neut: " + data[i].score["neu"] + "; neg: " + data[i].score["neg"] + "</td>");
//             tr.append("<td>" + data[i].imdb + "</td>");
//             $('table').append(tr);
//         }
//     });
// });