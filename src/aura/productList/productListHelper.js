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
                // console.log(countItemsByCategory);
                self.resetPageParams(component, responseMap);
                // console.log(response.getReturnValue());
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
        // console.log('Current category ', category);
    },

    loadDataByCategory: function (component) {
        let self = this;
        let category = component.get('v.category');
        // console.log('current category inside loadByData ', category);
        let action;
        if (category === 'All Laptops') {
            action = component.get('c.getAllItems');
            // console.log('get All Items');
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
                // console.log(response.getReturnValue());
                self.resetPageParams(component, responseMap);
            } else {
                // console.log('Failed with state: ', state);
            }
        });
        component.find('spinner').hide('callout');
        $A.enqueueAction(action);
    },

    addToCart: function (component, event) {
        // console.log('Handling add to cart event...');
        let orderItem = event.getParam('orderItem');
        // console.log('orderItem: ', orderItem);
        let orders = component.get('v.orders');
        // console.log('orders ', orders);
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
        // console.log('Performing for each check...');
        component.set('v.orders', orders);
        // console.log('orders after insert ', component.get('v.orders'));
    },

    resetInputField: function (event) {
        let inputField = event.getSource().find('inputNumber');
        // console.log('input field value before reset', inputField.get('v.value'));
        inputField.set('v.value', '1');
        // console.log('input field value after reset', inputField.get('v.value'));
    },

    showCurrentPage: function (component) {
        let self = this;
        let currentPage = component.get('v.currentPage');
        // console.log('currentPage ', currentPage);
        let pageSize = component.get('v.pageSize');
        // console.log('pageSize ', pageSize);
        let itemsSize = component.get('v.items').length;
        // console.log('itemsSize ', itemsSize);
        let totalPages = Math.ceil(itemsSize / pageSize);
        // console.log('totalPages ', totalPages);
        component.set('v.totalPages', totalPages);
        let startIndex = pageSize * (currentPage - 1);
        // console.log('startIndex ', startIndex);
        let endIndex = pageSize * currentPage;
        // console.log('endIndex ', endIndex);
        component.set('v.startIndex', startIndex);
        component.set('v.endIndex', endIndex);
        self.updatePagesList(component, totalPages);
    },

    resetPageParams: function (component, responseMap) {
        let self = this;
        let pageSize = component.get('v.pageSize');
        // console.log('pageSize ', pageSize);
        let itemsSize = Object.keys(responseMap).length;
        // console.log('itemsSize ', itemsSize);
        let totalPages = Math.ceil(itemsSize / pageSize);
        // console.log('totalPages ', totalPages);
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
        // console.log(pageList);
        component.set('v.pageList', pageList);
    },

});

