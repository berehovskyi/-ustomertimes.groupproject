/**
 * Created by oberegovskyi on 27-Oct-18.
 */
({
    addToCart: function (component) {
        let componentEvent = component.getEvent('addToCart');
        let item = component.get('v.item');
        let inputNumber = component.find('inputNumber').get('v.value');
        if (inputNumber === '' || inputNumber <= 0) {

        } else {
            componentEvent.setParams({
                'orderItem': {
                    'sobjectType': 'Order_Line_Item__c',
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
        }
    }
});