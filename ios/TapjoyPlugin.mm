#import "TapjoyPlugin.h"
#import <Tapjoy/Tapjoy.h>

@implementation TapjoyPlugin

// The plugin must call super dealloc.
- (void) dealloc {
	[super dealloc];
}

// The plugin must call super init.
- (id) init {
	self = [super init];
	if (!self) {
		return nil;
	}

	return self;
}

- (void) initializeWithManifest:(NSDictionary *)manifest appDelegate:(TeaLeafAppDelegate *)appDelegate {
	@try {
		NSDictionary *ios = [manifest valueForKey:@"ios"];
		NSString *tapjoyAppID = [ios valueForKey:@"tapjoyAppID"];
		NSString *tapjoySecretKey = [ios valueForKey:@"tapjoySecretKey"];

		NSLog(@"{tapjoy} Initializing with manifest tapjoyAppID: '%@'", tapjoyAppID);

		[Tapjoy requestTapjoyConnect:tapjoyAppID secretKey:tapjoySecretKey];
		[Tapjoy enableLogging:YES];

		[[NSNotificationCenter defaultCenter] addObserver:self
			selector:@selector(offerwallClosed:)
			name:TJC_VIEW_CLOSED_NOTIFICATION object:nil];

	}
	@catch (NSException *exception) {
		NSLog(@"{tapjoy} Failure during startup: %@", exception);
	}
}

- (void) setUserID:(NSDictionary *)jsonObject {
	NSString *userID = (NSString *)[jsonObject objectForKey:@"userID"];
	[TapjoyConnect setUserID:userID];
	NSLog(@"{tapjoy} Setting user id: %@", userID);
}

- (void) showOffers:(NSDictionary *)jsonObject {
	[TapjoyConnect showOffers];
}

-(void)offerwallClosed:(NSNotification*)notifyObj {
	NSLog(@"{tapjoy} Offerwall closed");
	[[PluginManager get] dispatchJSEvent:[NSDictionary dictionaryWithObjectsAndKeys:
		@"tapjoyOfferClose",@"name",
		nil]];

}

@end
