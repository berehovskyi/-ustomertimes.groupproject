/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    loadAllData: function (component) {
        let action = component.get('c.getAllItems');
        component.find('spinner').show('callout');
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                let responseMap = response.getReturnValue();
                component.set('v.items', responseMap);
                let countItemsByCategory = [
                    responseMap.filter(value => value.Category__c === 'Universal').length,
                    responseMap.filter(value => value.Category__c === 'Game').length,
                    responseMap.filter(value => value.Category__c === 'Business').length,
                    responseMap.filter(value => value.Category__c === 'Budget').length,
                    Object.keys(responseMap).length
            ];
                component.set('v.countItemsByCategory', countItemsByCategory);
                console.log(countItemsByCategory);
                console.log(response.getReturnValue());
            } else {
                console.log('Failed with state: ', state);
            }
            component.find('spinner').hide('callout');
        });
        $A.enqueueAction(action);
    },

    updateCategoryEventAttr: function (component, event) {
        let category = event.getParam('category');
        component.set('v.category', category);
        console.log('Current category ', category);
    },

    loadDataByCategory: function (component) {
        let category = component.get('v.category');
        console.log('current category inside loadByData ', category);
        let action;
        if (category === 'All Laptops') {
            action = component.get('c.getAllItems');
            console.log('get All Items');
        } else {
            action = component.get('c.getItemsByCategory');
            action.setParams({
                category: component.get('v.category')
            });
        }
        component.find('spinner').show('callout');
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.items', response.getReturnValue());
                console.log(response.getReturnValue());
            } else {
                console.log('Failed with state: ', state);
            }
        });
        component.find('spinner').hide('callout');
        $A.enqueueAction(action);
    },

    addToCart: function (component, event) {
        console.log('Handling add to cart event...');
        let orderItem = event.getParam('orderItem');
        console.log('orderItem: ', orderItem);
        let orders = component.get('v.orders');
        console.log('orders ', orders);
        let isProcessed = false;
        orders.forEach(function (order) {
            if (order.Product__c === orderItem.Product__c) {
                order.Quantity__c = Number.parseInt(order.Quantity__c) + Number.parseInt(orderItem.Quantity__c);
                isProcessed = true;
            }
        });
        if (!isProcessed === true) {
            orders.push(orderItem);
        }
        console.log('Performing for each check...');
        component.set('v.orders', orders);
        console.log('orders after insert ', component.get('v.orders'));
    },

    resetInputField: function (event) {
        let inputField = event.getSource().find('inputNumber');
        console.log('input field value before reset', inputField.get('v.value'));
        inputField.set('v.value', '');
        console.log('input field value after reset', inputField.get('v.value'));
    }
});