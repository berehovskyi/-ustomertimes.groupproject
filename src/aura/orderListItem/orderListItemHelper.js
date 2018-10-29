/**
 * Created by oberegovskyi on 27-Oct-18.
 */
({
    removeFromOrder: function (component) {
        let itemIndex = component.get('v.index');
        let componentEvent = component.getEvent('deleteFromOrder');
        componentEvent.setParams({'index': itemIndex});
        componentEvent.fire();
    },

    fireUpdateItemQuantityEvent: function (component) {
        let componentEvent = component.getEvent('updateItemQuantity');
        componentEvent.fire();
    }
});