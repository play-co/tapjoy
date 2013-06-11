# Game Closure DevKit Plugin: TapJoy

## Usage

Include it in the `manifest.json` file under the "addons" section for your game:

~~~
"addons": [
	"tapjoy"
],
~~~

Under the Android section, you can configure the TapJoy plugin:

~~~
	"android": {
		"versionCode": 1,
		"icons": {
			"36": "resources/icons/android36.png",
			"48": "resources/icons/android48.png",
			"72": "resources/icons/android72.png",
			"96": "resources/icons/android96.png"
		},
		"TapJoyAppID": "ed370f71-5c53-44ad-ac79-5e885d77d356",
		"TapJoySecretKey": "MUmm2eD3qdBSPlcLb3qz"
	},
~~~

You can test for successful integration on the TapJoy website.

