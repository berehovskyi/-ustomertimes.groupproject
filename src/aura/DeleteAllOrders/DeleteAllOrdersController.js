/**
 * Created by Yehor Dobrovolskyi on 24.10.2018.
 */
({
    handleClick : function (component, event, helper) {
        let action = component.get('c.deleteAllOrders');
        action.setCallback(this, function (data) {
            let state = data.getState();
            let toastEvent = $A.get('e.force:showToast');
            if (state === 'SUCCESS') {
                toastEvent.setParams({
                    'title': 'Success!',
                    'message': ' Your orders have been deleted successfully.'
                });
            } else {
                toastEvent.setParams({
                    'title': 'Error!',
                    'message': ' Your orders have not been deleted!!!'
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    }
});