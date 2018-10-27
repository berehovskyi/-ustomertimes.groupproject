/**
 * Created by oberegovskyi on 24-Oct-18.
 */
({
    onInit: function (component, event, helper) {
        helper.loadAllData(component);
    },

    handleUpdateCategory: function (component, event, helper) {
        helper.updateCategoryEventAttr(component, event);
        helper.loadDataByCategory(component);
    },

    handleAddToCart: function (component, event, helper) {
        var orderItem = event.getParam('orderItem');
        var inputField = event.getSource().find('inputNumber');
        console.log('input field value before reset', inputField.get('v.value'));
        inputField.set('v.value', '');
        console.log('input field value after reset', inputField.get('v.value'));
        console.log('orderItem: ', orderItem);
        console.log('Inside add to cart handler');
        var orders = component.get('v.orders');
        console.log('orders before insert', orders);
        orders.push(orderItem);
        component.set('v.orders', orders);
        console.log('orders after insert ', component.get('v.orders'));
    }

});