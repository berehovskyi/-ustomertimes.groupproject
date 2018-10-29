/**
 * Created by oberegovskyi on 27-Oct-18.
 */
({
    removeFromOrder: function (component) {
        // console.log('Inside remove from order controller');
        let itemIndex = component.get('v.index');
        // console.log('Current item index passed through event: ', itemIndex);
        let componentEvent = component.getEvent('deleteFromOrder');
        // console.log('ComponentEvent inside remove from Order', componentEvent);
        componentEvent.setParams({'index': itemIndex});
        componentEvent.fire();
    },

    fireUpdateItemQuantityEvent: function (component) {
        let componentEvent = component.getEvent('updateItemQuantity');
        // console.log('FireUpdateItemQuantityEvent has been fired!!!');
        componentEvent.fire();
    }
});