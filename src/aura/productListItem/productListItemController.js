/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    addToCart: function (component, event, helper) {
        var componentEvent = component.getEvent('addToCart');
        var item = component.get("v.item");
        var inputNumber = component.find('inputNumber').get('v.value');
        console.log('is number integer? ', 'true');
        console.log('inputNumber is: ', inputNumber);
        componentEvent.setParams({
            "orderItem": {
                Product__c: item.Id,
                Name: item.Name,
                Price__c: item.Price__c,
                Quantity__c: inputNumber
            }
        });
        componentEvent.fire();
        console.log('addToCartEvent has fired');
    }
});