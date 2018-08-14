var years =[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];

var total =[2742196, 2788269, 3169814, 3092265, 3169814, 3169814, 3317034, 3344421, 3402052, 3458926, 3515017];

var laki_laki =[1398700, 1422235, 1622499, 1581110, 1622499, 1623920, 1692796, 1706746, 1736049, 1764935, 1793389];
var perempuan =[1343496, 1366034, 1547315, 1511155, 1547315, 1545894, 1624238, 1637675, 1666003, 1693991, 1721628];


var ctx = document.getElementById("jml_penduduk");
var jml_penduduk = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets:[
      {
        data: total,
        label: "Jumlah Penduduk",
        borderColor: "#3e95cd",
        fill: false
      },
    {
      data: laki_laki,
      label: "Laki-Laki",
      borderColor: "#3e95cd",
      fill: false
    },
    {
      data: perempuan,
      label: "Perempuan",
      borderColor: "#ee7ba6",
      fill: false
    }]
  }
});