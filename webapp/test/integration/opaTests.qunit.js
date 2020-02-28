/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_DAY3_TABLECELL/ZTEST_DAY3_TABLECELL/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});