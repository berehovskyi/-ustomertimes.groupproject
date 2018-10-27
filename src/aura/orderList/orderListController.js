/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    handleDeleteFromOrder: function (component, event, helper) {
        console.log('Handling removing item From Order...');
        var orderToDeleteIndex = event.getParam("index");
        console.log('Index of order to delete: ', orderToDeleteIndex);
        var childOrders = component.get('v.childOrders');
        console.log('childOrders before deletion: ', childOrders);
        childOrders.splice(orderToDeleteIndex, 1);
        console.log('childOrders after deletion: ', childOrders);
        component.set('v.childOrders', childOrders);
        // console.log('order item has been gotten from event: ', orderItemToDelete);
    },

    recalculateTotalPrice: function (component, event, helper) {
        var totalPrice = 0;
        var childOrders = component.get('v.childOrders');

        childOrders.forEach(function (order) {
            totalPrice += order.Price__c * order.Quantity__c;
            console.log('total price loop: ', totalPrice);
        });
        component.set('v.totalPrice', totalPrice);
    }
});