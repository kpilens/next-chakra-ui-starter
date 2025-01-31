/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/// <reference types="@types/segment-analytics" />

// declare global type definitions
declare global {
    interface Window {
        analytics: SegmentAnalytics.AnalyticsJS;
    }
}

export const load = () => {
    window.analytics.load('NWKqq2W8V3cTrwF3ScnaLK3H7CDKSRSS');
};

export const page = () => {
    window.analytics.page();
};
export const track = (name: string, properties: any) => {
    window.analytics.track(name, properties);
};

export const identify = (name: string, ...rest: any) => {
    /**SPEC
 * 	analytics.identify("97980cfea0067", {
		name: "Peter Gibbons",
		email: "peter@initech.com",
		plan: "premium",
		logins: 5
	  });
	  // declare global {
//   interface Window { analytics: SegmentAnalytics.AnalyticsJS; }
// }
	  
 */
    window.analytics.identify(name, { ...rest });
};
