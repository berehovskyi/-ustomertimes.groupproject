/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    removeFromOrder: function (component, event, helper) {
        console.log('inside remove from order controller');
        var componentEvent = component.getEvent("deleteFromOrder");
        var item = component.get("v.item");
        console.log('current item passed through event: ', item);
        componentEvent.setParams({'v.orderItemToDelete': item});
        componentEvent.fire();
    }
});