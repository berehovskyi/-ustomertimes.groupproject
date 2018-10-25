/**
 * Created by oberegovskyi on 24-Oct-18.
 */
({
    onInit: function (component, event, helper) {
        var action = component.get('c.getAllItems');
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var responseMap = response.getReturnValue();
                component.set('v.items', responseMap);
                var countItemsByCategory = [
                    responseMap.filter(value => value.Category__c === 'Universal').length,
                    responseMap.filter(value => value.Category__c === 'Game').length,
                    responseMap.filter(value => value.Category__c === 'Business').length,
                    responseMap.filter(value => value.Category__c === 'Budget').length
                ];
                component.set('v.countItemsByCategory', countItemsByCategory);
                console.log(countItemsByCategory);
                console.log(response.getReturnValue());
            } else {
                console.log('Failed with state: ', state);
            }
        });
        $A.enqueueAction(action);
    },

    updateCategory: function (component, event, helper) {
        var category = event.getParam("category");
        component.set("v.category", category);
        var action = component.get('c.getItemsByCategory');
        action.setParams({
            category: component.get("v.category")
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.items', response.getReturnValue());
                console.log(response.getReturnValue());
            } else {
                console.log('Failed with state: ', state);
            }
        });
        $A.enqueueAction(action);

        console.log('category ', category);
    },

});