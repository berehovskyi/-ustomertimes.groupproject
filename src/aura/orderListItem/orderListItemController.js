/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    removeFromOrder: function (component, event, helper) {
        console.log('inside remove from order controller');
        var itemIndex = component.get('v.index');
        console.log('current item index passed through event: ', itemIndex);
        var componentEvent = component.getEvent("deleteFromOrder");
        console.log('componentEvent inside remove from Order', componentEvent);
        componentEvent.setParams({'index': itemIndex});
        componentEvent.fire();
    },

    fireUpdateItemQuantityEvent: function (component, event, helper) {
        var componentEvent = component.getEvent('updateItemQuantity');
        console.log('fireUpdateItemQuantityEvent has been fired!!!');
        componentEvent.fire();
    }
});