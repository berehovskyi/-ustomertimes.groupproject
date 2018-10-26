/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    addToCart: function (component, event, helper) {
        var componentEvent = component.getEvent('addToCart');
        var item = component.get("v.item");
        var inputNumber = component.find('inputNumber').get('v.value');
        console.log('inputNumber is: ', inputNumber);
        componentEvent.setParams({
            "orderItem": {
                'sobjectType':'Order_Line_Item__c',
                'Product__c': item.Id,
                'Name': item.Name,
                'Brand__c': item.Brand__c,
                'Category__c': item.Category__c,
                'Image__c': item.ContentDocumentLinks[0].ContentDocument.LatestPublishedVersionId,
                'Price__c': item.Price__c,
                'Quantity__c': inputNumber
            }
        });
        componentEvent.fire();
        console.log('addToCartEvent has fired');
    }
});