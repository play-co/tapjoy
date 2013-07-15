# Game Closure DevKit Plugin: Tapjoy

This plugin adds analytics support from the [Tapjoy service](http://tapjoy.com) for Android and iOS platforms.

## Usage

Install the addon with `basil install tapjoy`.

Include it in the `manifest.json` file under the "addons" section for your game:

~~~
"addons": [
	"tapjoy"
],
~~~

Under the Android/iOS sections, you can configure the Tapjoy plugin:

~~~
	"android": {
		"versionCode": 1,
		"icons": {
			"36": "resources/icons/android36.png",
			"48": "resources/icons/android48.png",
			"72": "resources/icons/android72.png",
			"96": "resources/icons/android96.png"
		},
		"tapjoyAppID": "ed370f71-5c53-44ad-ac79-5e885d77d356",
		"tapjoySecretKey": "MUmm2eD3qdBSPlcLb3qz"
	},
~~~

~~~
	"ios": {
		"bundleID": "mmp",
		"appleID": "568975017",
		"version": "1.0.3",
		"icons": {
			"57": "resources/images/promo/icon57.png",
			"72": "resources/images/promo/icon72.png",
			"114": "resources/images/promo/icon114.png",
			"144": "resources/images/promo/icon144.png"
		},
		"tapjoyAppID": "ed370f71-5c53-44ad-ac79-5e885d77d356",
		"tapjoySecretKey": "MUmm2eD3qdBSPlcLb3qz"
	},
~~~

Note that the key names are case-sensitive.

You can test for successful integration on the [Tapjoy website](http://tapjoy.com).
