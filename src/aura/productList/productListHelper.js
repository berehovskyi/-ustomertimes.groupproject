/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    loadAllData: function (component) {
        let self = this;
        let action = component.get('c.getAllItems');
        component.find('spinner').show('callout');
        action.setCallback(this, response => {
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
                self.resetPageParams(component, responseMap);
            } else {
                console.log('Failed with state: ', state);
            }
            component.find('spinner').hide('callout');
        });
        $A.enqueueAction(action);
    },

    updateCategory: function (component, event) {
        let category = event.getParam('category');
        component.set('v.category', category);
    },

    loadDataByCategory: function (component) {
        let self = this;
        let category = component.get('v.category');
        let action;
        if (category === 'All Laptops') {
            action = component.get('c.getAllItems');
        } else {
            action = component.get('c.getItemsByCategory');
            action.setParams({
                category: component.get('v.category')
            });
        }
        component.find('spinner').show('callout');
        action.setCallback(this, response => {
            let state = response.getState();
            if (state === 'SUCCESS') {
                let responseMap = response.getReturnValue();
                component.set('v.items', responseMap);
                self.resetPageParams(component, responseMap);
            } else {
            }
        });
        component.find('spinner').hide('callout');
        $A.enqueueAction(action);
    },

    addToCart: function (component, event) {
        let orderItem = event.getParam('orderItem');
        let orders = component.get('v.orders');
        let isProcessed = false;
        orders.forEach(order => {
            if (order.Product__c === orderItem.Product__c) {
                order.Quantity__c = Number.parseInt(order.Quantity__c) + Number.parseInt(orderItem.Quantity__c);
                isProcessed = true;
            }
        });
        if (!isProcessed === true) {
            orders.push(orderItem);
        }
        component.set('v.orders', orders);
    },

    resetInputField: function (event) {
        let inputField = event.getSource().find('inputNumber');
        inputField.set('v.value', '1');
    },

    showCurrentPage: function (component) {
        let self = this;
        let currentPage = component.get('v.currentPage');
        let pageSize = component.get('v.pageSize');
        let itemsSize = component.get('v.items').length;
        let totalPages = Math.ceil(itemsSize / pageSize);
        component.set('v.totalPages', totalPages);
        let startIndex = pageSize * (currentPage - 1);
        let endIndex = pageSize * currentPage;
        component.set('v.startIndex', startIndex);
        component.set('v.endIndex', endIndex);
        self.updatePagesList(component, totalPages);
    },

    resetPageParams: function (component, responseMap) {
        let self = this;
        let pageSize = component.get('v.pageSize');
        let itemsSize = Object.keys(responseMap).length;
        let totalPages = Math.ceil(itemsSize / pageSize);
        component.set('v.currentPage', 1);
        component.set('v.totalPages', totalPages);
        component.set('v.startIndex', 0);
        component.set('v.endIndex', pageSize);
        self.updatePagesList(component, totalPages);
    },

    updatePagesList: function (component, totalPages) {
        let pageList = [];
        for (let i = 1; i <= totalPages; i++) {
            pageList.push(i);
        }
        component.set('v.pageList', pageList);
    },

});

