import util.setProperty as setProperty;

var onOfferClose, onAdAvailable, onAdNotAvailable;

var Tapjoy = Class(function () {

	this.init = function(opts) {

		setProperty(this, "onOfferClose", {
			set: function(f) {
				if (typeof f === "function") {
					onOfferClose = f;
				} else {
					onOfferClose = null;
				}
			},
			get: function() {
				return onOfferClose;
			}
		});

		setProperty(this, "onAdAvailable", {
			set: function(f) {
				if (typeof f === "function") {
					onAdAvailable = f;
				} else {
					onAdAvailable = null;
				}
			},
			get: function() {
				return onAdAvailable;
			}
		});

		setProperty(this, "onAdNotAvailable", {
			set: function(f) {
				if (typeof f === "function") {
					onAdNotAvailable = f;
				} else {
					onAdNotAvailable = null;
				}
			},
			get: function() {
				return onAdNotAvailable;
			}
		});

		NATIVE.events.registerHandler("tapjoyOfferClose", function() {
			logger.log("{tapjoy} offer closed");
			if (typeof onOfferClose === "function") {
				onOfferClose();
			}
		});

		NATIVE.events.registerHandler("tapjoyAdAvailable", function() {
			logger.log("{tapjoy} ad available");
			if (typeof onAdAvailable === "function") {
				onAdAvailable();
			}
		});

		NATIVE.events.registerHandler("tapjoyAdNotAvailable", function() {
			logger.log("{tapjoy} ad not available");
			if (typeof onAdNotAvailable === "function") {
				onAdNotAvailable();
			}
		});

	}

	this.setUserID = function(userid) {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "setUserID", JSON.stringify({"userID":userid}));
	};

	this.showOffers = function() {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "showOffers", JSON.stringify({}));
	};

	this.getFullScreenAd = function() {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "getFullScreenAd", JSON.stringify({}));
	};

	this.showFullScreenAd = function() {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "showFullScreenAd", JSON.stringify({}));
	};

});

exports = new Tapjoy();
