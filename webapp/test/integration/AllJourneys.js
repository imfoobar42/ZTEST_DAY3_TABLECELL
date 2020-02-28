sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "ZTEST_DAY3_TABLECELL.ZTEST_DAY3_TABLECELL.view.",
		autoWait: true
	});
});