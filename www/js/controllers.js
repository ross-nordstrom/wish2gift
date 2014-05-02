angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.items = [
		{
			logo: 'macys.png',
			title: "Material Girl Leyor Riding Boots",
			orig: '$79.00',
			price: '$41.47',
			subtitle: '3-6 day shipping',
			image: 'boots.jpg',
			details: "Material Girl's Leroy riding boots are versatile and lean. They feature straps and buckle details on the ankle and shaft.",
			wishes: 4,
			gifts: 3,
			ongoing: [
				{
					remaining: "$39.99",
					wisher: {
						name: "Beyonce",
						pic: "beyonce.jpg"
					},
					contributors: [
						{
							name: "Jay-Z",
							pic: "jayz.jpg"
						},
						{
							name: "Rihanna",
							pic: "rihanna.jpg"
						}
					]
				}
			],
			collapsed: true
		},
		{
			logo: 'amazon.png',
			title: 'Google Chromecast HDMI Streaming Media Player',
			price: '$35.00',
			subtitle: 'Free 2-day shipping',
			image: 'chromecast.jpg',
			details: "Supports Netflix, YouTube, HBO GO, Hulu Plus, Pandora, MLB.TV, and Google Play Movies and Music mobile apps as well as select content through Chrome browser, works with recommended modem",
			wishes: 8,
			gifts: 5,
			collapsed: true
		},
		{
			logo: 'target.png',
			title: "KitchenAid Ultra Power 4.5 Qt Stand Mixer",
			orig: '$299.99',
			price: '$239.99',
			subtitle: '3-5 day shipping',
			image: 'mixer.jpg',
			details: "KitchenAid first sold their home mixers in 1919. Since then, KitchenAid Stand Mixers have become easier for the home chef to buy, store and use, but the reputation for sturdy construction and reliable performance has not changed. The Ultra Power Mixer has a 4.5-qt. bowl; it boasts 300 watts of power for mixing double batches.",
			wishes: 12,
			gifts: 2,
			collapsed: true
		},
		{
			logo: 'rei.jpg',
			title: "Rossignol Soul 7 Skis - Men's -2013/2014",
			price: '$699.95',
			subtitle: '3-5 day shipping',
			image: 'skis.jpg',
			details: "Feel the rush of the newly designed Rossignol Soul 7 skis. Light like a pair of backcountry touring skis and responsive like big-mountain chargers, they dominate any terrain on the mountain.",
			wishes: 3,
			gifts: 1,
			collapsed: true
		},
		{
			logo: 'amazon.png',
			title: "Eddie Bauer First Ascent Mens Heyburn 2.0 Jacket",
			price: "$299.00",
			subtitle: "",
			image: "heyburn.jpg",
			details: "Made for a skiing/riding style that mixes lift access with sidecountry laps, our Heyburn 2.0 Jacket functions expertly on chair rides and tree runs with a tough 2–layer 10K/10K waterproof/breathable shell. Core vents dump heat when hiking and an internal snow skirt seals out deep powder, keeping our First Ascent guides warm and dry in their home territories.",
			wishes: 1,
			gifts: 0,
			collapsed: true
		},
		{
			logo: 'amazon.png',
			title: "Callaway Strata Men's Complete Golf Set with Bag, 13-Piece",
			price: "$196.97",
			subtitle: "Free 2-day shipping",
			image: "callaway.jpg",
			details: "Driver 460cc forged driver has a large sweet spot and provides more forgiveness to help you rip it off the tee.",
			wishes: 1,
			gifts: 1,
			collapsed: true
		}
	];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
