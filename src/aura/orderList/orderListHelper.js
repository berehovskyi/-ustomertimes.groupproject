/**
 * Created by oberegovskyi on 27-Oct-18.
 */
({
    deleteFromOrder: function (component, event) {
        // console.log('Handling removing item From Order...');
        let orderToDeleteIndex = event.getParam('index');
        // console.log('Index of order to delete: ', orderToDeleteIndex);
        let orderLineItems = component.get('v.orderLineItems');
        // console.log('orderLineItems before deletion: ', orderLineItems);
        orderLineItems.splice(orderToDeleteIndex, 1);
        // console.log('orderLineItems after deletion: ', orderLineItems);
        component.set('v.orderLineItems', orderLineItems);
    },

    recalculateTotalPrice: function (component) {
        // console.log('Handling recalc total price event...');
        let totalPrice = 0;
        let orderLineItems = component.get('v.orderLineItems');
        orderLineItems.forEach(orderLineItem => {
            totalPrice += orderLineItem.Price__c * orderLineItem.Quantity__c;
        });
        // console.log('total price: ', totalPrice);
        component.set('v.totalPrice', totalPrice);
    },

    clearCart: function (component) {
        // console.log('Clearing the cart...');
        component.set('v.orderLineItems', []);
    },

    showThankfulToast : function(component, event, helper) {
        let toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
            mode: 'sticky',
            type: 'success',
            title: 'Thank You for Your Order',
            message: 'This is a required message',
            messageTemplate:
                'Please follow instructions specified in email which has recently sent to complete the purchase. ' +
                'Best Regards, Customer Times Online Store',
            messageTemplateData: ['Salesforce', {
                url: 'http://www.salesforce.com/',
                label: 'here'
            }]
        });
        toastEvent.fire();
    },

    showErrorToast: function(response) {
        let toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
            mode: 'sticky',
            type: 'error',
            title: 'Server Error',
            message: response.getError()[0].message
        });
        toastEvent.fire();
    },

    saveOrder: function (component) {
        let self  = this;
        // console.log('Saving order into Database');
        let orderLineItems = component.get('v.orderLineItems');
        // console.log('Orders to insert into Database', orderLineItems);
        let orderLineItemsToSave = [];
        orderLineItems.forEach(orderLineItem => {
           orderLineItemsToSave.push({
               'sobjectType': 'Order_Line_Item__c',
               'Product__c': orderLineItem.Product__c,
               'Price__c': orderLineItem.Price__c,
               'Quantity__c': orderLineItem.Quantity__c
           });
        });

        console.log('Prepared Order Line Items to Saving', orderLineItemsToSave);
        let saveOrderMethod = component.get('c.saveOrderLineItems');
        saveOrderMethod.setParam('orderLineItems', orderLineItemsToSave);
        saveOrderMethod.setCallback(this, response => {
            let state = response.getState();
            if (state === 'SUCCESS') {
                // console.log('Order Line Items Has Been Saved Successfully', state);
                self.clearCart(component);
                self.showThankfulToast();
            } else {
                self.showErrorToast(response);
                // console.log('Failed with error: ', response.getError());
            }
        });
        $A.enqueueAction(saveOrderMethod);
    }

});