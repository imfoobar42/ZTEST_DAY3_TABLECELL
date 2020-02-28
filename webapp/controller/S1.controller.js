sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("ZTEST_DAY3_TABLECELL.ZTEST_DAY3_TABLECELL.controller.S1", {
		onInit: function () {
			var oTable = this.getView().byId("idProductsTable");
			var oModel = new JSONModel("model/Employees.json");
			oTable.setModel(oModel);
			oTable.bindItems("/Employees", new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Empid}"

					}),
					new sap.m.Text({
						text: "{EmpName}"

					}),
					new sap.m.Text({
						text: "{Age}"

					}),
					new sap.m.Text({
						text: "{Mobile}"

					})

				]

			}));

		},

		onItemPress: function (oEvent) {
			var oTable = this.getView().byId("idProductsTable");
			var itemSelected = oTable.getSelectedItems();
			for(var i = 0; i< itemSelected.length; i++){
				var item = itemSelected[i];
				var oContext = item.getBindingContext();
				var value = oContext.getProperty("EmpName");
				var value2 = oContext.getProperty("Empid");
				MessageToast.show(value+"\n"+ value2);
			}
		}

	});

});