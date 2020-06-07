
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Año', 'Gastado','Comparativo'],
          ['2020', 1000,202],
        ]);

        var options = {
          chart: {
            title: 'Comparación Gastos',
            subtitle: 'Gastos',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
  