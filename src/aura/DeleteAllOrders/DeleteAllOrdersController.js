/**
 * Created by Yehor Dobrovolskyi on 24.10.2018.
 */
({
    handleClick : function (component, event, helper) {
        var action = component.get("c.deleteAllOrders");

        console.debug('Click on delete');

        action.setCallback(this, function (data) {
            var state = data.getState();

            var toastEvent = $A.get("e.force:showToast");
            if (state === "SUCCESS") {

                toastEvent.setParams({
                    "title": "Success!",
                    "message": " Your orders have been deleted successfully."
                });

            } else {
                toastEvent.setParams({
                    "title": "NO WAY!",
                    "message": " Your orders have not been deleted!!!"
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    },
})