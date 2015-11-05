(function() {

	var app = angular.module('app', ['ui.router']);

	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home',
		{
			url: '/',
			templateUrl:'views/home/home.html',
			controller:'HomeCtrl'
		}).
		state('portfolio',
		{
			url: '/portfolio',
			templateUrl:'views/portfolio/portfolio.html',
			controller:'PortfolioCtrl'
		}).
		state('contact',
		{
			url: '/contact',
			templateUrl:'views/contact/contact.html',
			controller:'ContactCtrl'
		});

	}])

	.run(function($rootScope){

		$rootScope.$on('$viewContentLoaded', function(){
			jQuery('.view').removeClass('bounceOutLeft').addClass('bounceInRight');
		});

	});

	jQuery(document).ready(function(){
		jQuery('nav a').click(function(e){
			e.preventDefault();

			// only act if going to another page
			if(!jQuery(this).hasClass('active')){
				
				var target = jQuery(this).attr('href');

				// switch active nave
				jQuery('nav .active').removeClass('active');				
				jQuery(this).addClass('active');

				jQuery('.view').removeClass('bounceInRight').addClass('bounceOutLeft');

				// give the view time to animate out before switching it
				setTimeout(function(){
					location.href = target;	
				}, 500);
			}

			
		});
	});

	Site = {
		nextSection: function(e){
			var button = jQuery(e);
			var nextSection = button.closest('section').next('section');
		    
		    jQuery('html, body').animate({
		        scrollTop: nextSection.offset().top
		    }, 1000);
		}
	};

})();