var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/login');

/////////////////////////////////////////////////////////////////////finish test//////////////////////////////////////////////////////////////////
    $stateProvider
    .state('app',{
        url: '/dashboard',
        views: {
            'header': {
                templateUrl: '/partials/header.html'
            },
            'content': {
                templateUrl: '/partials/content.html' 
            },
            'side-bar': {
                templateUrl: '/partials/side-bar.html'
            },
            // 'footer': {
            //     templateUrl: '/partials/footer.html'
            // }
        }
    })
/////////////////////////////////LOGIN//////////////////////////////////////////////
    .state('login',{
        url: '/login',
        views: {
            'header': {
                templateUrl: '/partials/form.html',
                controller: 'formController'
            }
        }
    })
    /////////////////////////Registration//////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    .state('registration',{
        url: '/registration',
        views: {
            'header': {
                templateUrl: '/partials/registration.html',
                controller: 'formController'
            }
        }
    })
        .state('registration.profile', {
            url: '/profile',
            templateUrl: '/partials/form-profile.html'
            })
                
                // url will be /form/interests
        .state('registration.interests', {
            url: '/interests',
            templateUrl: '/partials/form-interests.html'
            })
                
                // url will be /form/payment
        .state('registration.payment', {
            url: '/payment',
            templateUrl: '/partials/form-payment.html'
            })
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////MAIN DASHBOARD////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    .state('app.main_dash', {
        url: '/main_dash',
        views: {
            'content@': {
                templateUrl: 'partials/children/main_dash.html',
                controller: 'main_dashController'
            }
        }
    })
            .state('app.main_dash.CMP', {
                url: '/CMP',
                views: {
                    'navbar@app.main_dash': {
                        templateUrl: 'partials/children/main_dash/CMP.html',
                        controller: 'main_dashController'
                    }
                }
            })
            .state('app.main_dash.FLP', {
                url: '/FLP',
                views: {
                    'navbar@app.main_dash': {
                        templateUrl: 'partials/children/main_dash/FLP.html',
                        controller: 'main_dashController'
                    }
                }
            })
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////app.history////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    .state('app.history', {
        url: '/history',
        views: {
            'content@': {
                templateUrl: 'partials/children/history.html',
                // controller: 'historyController'
            }
        }
 
    })
////////////////////////////////////////////app.history.CMP///////////////////////////////////////////////////////

        .state('app.history.CMP',{
            url: 'CMP',
            views: {
                'navbar@app.history': {
                    templateUrl: 'partials/children/history/CMP.html',
                    controller: 'CMPController'
                }
            }
        })
                .state('app.history.CMP.results', {
                    url: '/:results',
                    views: {
                        'main@app.history.CMP': {
                            templateUrl: 'partials/children/history/cmp/albumin.html',
                            controller: 'historyController'
                        }
                    }
                })
/////////////////////////////////////////////app.hiastory.FLP///////////////////////////////////////////
        .state('app.history.FLP',{
            url: '/FLP',
            views: {
                'navbar@app.history': {
                    templateUrl: 'partials/children/history/FLP.html',
                    controller: 'FLPController'
                }
            }
        })
                .state('app.history.FLP.results', {
                    url: '/:results',
                    views: {
                        'main@app.history.FLP': {
                            templateUrl: 'partials/children/history/flp/hdl.html',
                            controller: 'historyController'
                        }
                    }
                })
               
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////app.add_results////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    .state('app.add_results', {
        url: '/add_results',
        views: {
            'content@': {
                templateUrl: 'partials/children/add_results.html',
                // controller: 'addResultController'
            }
        }
    }) 
//////////////////////////////////////////////// app.add_results.CMP //////////////////////////////////////////
        .state('app.add_results.CMP', {
            url: '/CMP',
            views: {
                'info@app.add_results': {
                    templateUrl: 'partials/children/add_results/CMP.html',
                    controller: 'addResultController'
                }
            }
        })

                .state('app.add_results.CMP.results', {
                    url: '/:results',
                    views: {
                        'main@app.add_results.CMP': {
                            templateUrl: 'partials/children/add_results/cmp/albumin.html',
                            controller: function($scope, $stateParams) {
                                $scope.result = $stateParams.results;
                                $scope.FLPList = [
                                  {name: 'HDL', description: "Known as the 'good' cholesterol, it removes excess cholesterol from the walls of the arteries, making them wide enough for the flow of sufficient blood and oxygen to the heart."},
                                  {name: 'LDL', description: " Known as the 'bad' cholesterol, the presence of LDL above the desired level leads to thickening of the walls of the artery. This makes the arteries narrow and causes shortage of the supply of blood and oxygen in sufficient amounts."},
                                  {name: 'Total Cholesterol'},
                                  {name: 'Triglycerides'},
                                ];                                
                            }
                        }
                    }
                })

////////////////////////////////////// app.add_results.FLP /////////////////////////////////////////////
        .state('app.add_results.FLP', {
            url: '/FLP',
            views: {
                'info@app.add_results': {
                    templateUrl: 'partials/children/add_results/FLP.html',
                    controller: 'addResultController'
                }
            }
        })
                .state('app.add_results.FLP.hdl', {
                    url: '/hdl',
                    views: {
                        'main@app.add_results.FLP': {
                            templateUrl: 'partials/children/add_results/flp/hdl.html',
                            controller: function($scope, $stateParams) {
                                $scope.result = $stateParams.results;
                            }
                        }                        
                    }
                })    
                .state('app.add_results.FLP.ldl', {
                    url: '/ldl',
                    views: {
                        'main@app.add_results.FLP': {
                            templateUrl: 'partials/children/add_results/flp/ldl.html',
                            controller: function($scope, $stateParams) {
                                $scope.result = $stateParams.results;
                            }
                        }                        
                    }
                }) 
                .state('app.add_results.FLP.trig', {
                    url: '/trig',
                    views: {
                        'main@app.add_results.FLP': {
                            templateUrl: 'partials/children/add_results/flp/trig.html',
                            controller: function($scope, $stateParams) {
                                $scope.result = $stateParams.results;
                            }
                        }                        
                    }
                })   
                .state('app.add_results.FLP.total_cholesterol', {
                    url: '/total_cholesterol',
                    views: {
                        'main@app.add_results.FLP': {
                            templateUrl: 'partials/children/add_results/flp/total_cholesterol.html',
                            controller: function($scope, $stateParams) {
                                $scope.result = $stateParams.results;
                            }
                        }                        
                    }
                }) 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// app.map ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
    .state('app.map', {
        url: '/map',
        views: {
            'content@': {
                templateUrl: 'partials/children/map.html',
                // controller: 'mapController'      
            }
        }
    })
///////////////////////////////////// app.map.CMP ////////////////////////////////////////////////////////
        .state('app.map.CMP', {
            url: '/CMP',
            views: {
                'navbar@app.map': {
                    templateUrl: 'partials/children/map/CMP.html',
                    controller: 'CMPController'
                }
            }
        })
                .state('app.map.CMP.results', {
                    url: '/:results',
                    views: {
                        'main@app.map.CMP': {
                            templateUrl: 'partials/children/map/cmp/albumin.html',
                            controller: 'mapController'
                        }
                    }
                })
 /////////////////////////////////////////////////// app.map ////////////////////////////////////////////       
        .state('app.map.FLP', {
            url: '/FLP',
            views: {
                'navbar@app.map': {
                    templateUrl: 'partials/children/map/FLP.html',
                    controller: 'FLPController'
                }
            }
        })
                .state('app.map.FLP.results', {
                    url: '/:results',
                    views: {
                        'main@app.map.FLP': {
                            templateUrl: 'partials/children/map/flp/hdl.html',
                            controller: 'mapController'
                        }
                    }
                })     
});

