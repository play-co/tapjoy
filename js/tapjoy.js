import util.setProperty as setProperty;

var onOfferClose;

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

		NATIVE.events.registerHandler("tapjoyOfferClose", function() {
			logger.log("{tapjoy} offer closed");
			if (typeof onOfferClose === "function") {
				onOfferClose();
			}
		});
	}

	this.setUserID = function(userid) {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "setUserID", JSON.stringify({"userID":userid}));
	};

	this.showOffers = function() {
		NATIVE.plugins.sendEvent("TapjoyPlugin", "showOffers", JSON.stringify({}));
	};

});

exports = new Tapjoy();
