/**
 * Created by oberegovskyi on 27-Oct-18.
 */

public with sharing class OrderController {

    @AuraEnabled
    public static void saveOrderLineItems(List<Order_Line_Item__c> orderLineItems) {

        try {
            Order__c order = new Order__c();
            order.Timestamp__c = Datetime.now();
            order.Status__c = 'New';
            insert order;

            for (Order_Line_Item__c orderLineItem : orderLineItems) {
                orderLineItem.Order__c = order.Id;
            }

            insert orderLineItems;
        } catch (DmlException ex) {
            throw new AuraHandledException(ex.getMessage());
        }

    }
}