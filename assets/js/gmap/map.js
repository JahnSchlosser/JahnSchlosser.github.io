		 $(document).ready(function() {
			$("#map").gMap({
				controls: true,
				scrollwheel: false,
				maptype: 'ROADMAP',
				markers: [
					{
						address: 'Zum Bernstein 5, Siegen',
						html: '<p>Unser Headquarter</p><p>nicht anrufen!</p>',
						popup: true
					}
						],
				icon: {
				image: "assets/img/marker.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},

				zoom: 12
			});

         });