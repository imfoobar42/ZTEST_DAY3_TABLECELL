/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_DAY3_TABLECELL/ZTEST_DAY3_TABLECELL/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});