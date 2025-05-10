sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetailsa.controller.App", {
        onInit() {

            let oData
            // if (navigator.language == "en-US") {
            //     var i18nModel = this.getOwnerComponent().getModel("i18n_es");
            //     this.getOwnerComponent().setModel(i18nModel, "i18n");
            // } else {
            //     var i18nModel = this.getOwnerComponent().getModel("i18n");
            //     this.getOwnerComponent().setModel(i18nModel, "i18n");
            // }
            //
            /** checking browser language here */
            var appLang;
            if (navigator.language == "en-US") {
                appLang = "i18n";
            } else if (navigator.language == "en") {
                appLang = "i18n";
            } else {
                appLang = "i18n";
            }
            var i18nModel = this.getOwnerComponent().getModel(appLang);
            this.getOwnerComponent().setModel(i18nModel, "i18n");



        },

        onOpenBankDetails: function () {
            // create a dialog lazily

            if (!this.moreBankDetail) {

                this.moreBankDetail = this.loadFragment(

                    { name: "com.sap.mybankdetailsa.view.fragments.MoreDetails" }

                );
            }

            this.moreBankDetail.then(
                function (oDialog) {
                    oDialog.open();

                })

        },

        onPressCloseDialog: function (oDialog) {
            this.byId("idDialog").close()
            //oDialog.close();

        },

    })
});