/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    handleDeleteFromOrder: function (component, event, helper) {
        console.log('Handling removing item From Order');
        var orderToDelete = event.getParam("orderItemToDelete");
        console.log('order to delete: ', orderToDelete);
        // var orderItemToDelete = event.get('v.orderItemToDelete');
        // console.log('order item has been gotten from event: ', orderItemToDelete);
    }
});