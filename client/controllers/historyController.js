app.controller('historyController', function($scope, $stateParams, $location, add_resultsFactory, userFactory){
        $scope.result = $stateParams.results;
        var this_result = $scope.result

        console.log($scope.result)      
        userFactory.getUser(function(data){
            $scope.current_user = data;
            console.log($scope.current_user.ref_range_trig_min)
            console.log($scope.current_user.ref_range_trig_max)
        })
        userFactory.getResultCMP(function(data){
            $scope.userCMP = data;
            dataCMP = data;
        })
        userFactory.getResultFLP(this_result, function(data, data2){
            $scope.userFLP = data;
            $scope.singleFLP = data2;
            console.log(data2);
        })
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Blood History for ' + $scope.current_user.user_name
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: '' + $scope.result + 'mmol/L'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true,
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: "<h6>"+ $scope.result+"</h6>",
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2012, 1, 21), 40],
                [Date.UTC(2012, 4, 4), 42],
                [Date.UTC(2012, 7, 9), 47],
                [Date.UTC(2012, 11, 27), 50],
                [Date.UTC(2013, 3, 21), 52],
                [Date.UTC(2013, 7, 4), 57],
                [Date.UTC(2013, 11, 9), 59],
                [Date.UTC(2014, 1, 27), 67],
                [Date.UTC(2014, 4, 21), 57],
                [Date.UTC(2014, 7, 4), 76],
                [Date.UTC(2014, 11, 9), 104],
                [Date.UTC(2015, 2, 27), 107],
                [Date.UTC(2015, 6, 21), 123]                              
            ],
                zones: [{
                       value: $scope.current_user.ref_range_trig_min,
                       color: '#FF0000'
                    }, {
                       value: $scope.current_user.ref_range_trig_max,
                       color: '#00FF00'
                    }, {
                        color: '#FF0000'
                    }
              
                       ]}
     
          
   ]
})
})
})