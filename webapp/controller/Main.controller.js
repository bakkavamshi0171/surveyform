sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller, MessageBox) {
    "use strict";

    return Controller.extend("surveyform.controller.Main", {
        onInit: function () {
           var username = "BTP_CUST_SHANMUKHA";
            var password = "Shanmukha@123456789012";
            var base64Credentials = btoa(username + ":" + password);
            console.log(base64Credentials, 'base64Credentials');
            

            $.ajax({
                url: "https://my425009-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_PLANT_ADDRESS_V1_CDS/YY1_PLANT_ADDRESS_V1", 
                method: "GET",
                headers: {
                    "Authorization": "Basic " + base64Credentials,
                    "Content-Type": "application/json"
                },
                success: function(data) {
                    console.log("GET successful:", data);
                    MessageBox.success("Data retrieved: " + JSON.stringify(data));
                },
                error: function(xhr, status, error) {
                    console.error("GET error:", error);
                    MessageBox.error("Failed to fetch data: " + error);
                }
            });
        },
        postrecord : function () {
            var username = 'sb-417dd5c3-5617-461b-a448'; 
            var password = '858cf879-1b4c-4241-9cw='; 
            var base64Credentials = btoa(username + ':' + password);

            var timeSheetID = "123";     // replace with your value
            var projectID = "456";       // replace with your value
            var formattedData = {        // sample payload
                field1: "value1",
                field2: "value2"
            };

            $.ajax({
                url: '/http/time_sheet1',
                type: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + base64Credentials,
                    "timeSheetID": timeSheetID,
                    "projectID": projectID,
                    "ApproveStatus": "2"
                },
                data: JSON.stringify(formattedData),
                success: function(response) {
                    MessageBox.success("Data posted successfully: " + (response.message || "OK"));
                },
                error: function(xhr, status, error) {
                    console.error("Error posting data:", error);
                    MessageBox.error("Error posting data: " + error);
                }
            });
        }
    });
});
