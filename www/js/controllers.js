angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.items = [
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
			logo: 'macys.png',
			title: "",
			orig: '$79.00',
			price: '$41.47',
			subtitle: '3-6 day shipping',
			image: 'boots.jpg',
			details: "Material Girl's Leroy riding boots are versatile and lean. They feature straps and buckle details on the ankle and shaft.",
			wishes: 4,
			gifts: 3,
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
