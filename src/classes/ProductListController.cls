/**
 * Created by oberegovskyi on 24-Oct-18.
 */

public with sharing class ProductListController {

    @AuraEnabled
    public static List<Product__c> getAllItems() {
            checkFieldsAccessibility();
            return [
                    SELECT Brand__c, Name, Price__c, Quantity__c, Category__c,
                            Screen_Size__c,  Resolution__c, Description__c,
                    (SELECT ContentDocument.LatestPublishedVersionId FROM ContentDocumentLinks LIMIT 1)
                    FROM Product__c
            ];
    }

    @AuraEnabled
    public static List<Product__c> getItemsByCategory(String category) {
            checkFieldsAccessibility();
            return [
                    SELECT Brand__c, Name, Price__c, Quantity__c, Category__c,
                            Screen_Size__c,  Resolution__c, Description__c,
                    (SELECT ContentDocument.LatestPublishedVersionId FROM ContentDocumentLinks LIMIT 1)
                    FROM Product__c
                    WHERE Category__c = :category
            ];
    }

    @TestVisible
    private static void checkFieldsAccessibility() {
        String[] fields = new String[]{
                'Id',
                'Brand__c',
                'Name',
                'Price__c',
                'Quantity__c',
                'Category__c',
                'Screen_Size__c',
                'Resolution__c',
                'Description__c'
        };
        Map<String, SObjectField> fieldDescribeTokens = SObjectType.Product__c.fields.getMap();
        System.debug(fieldDescribeTokens.keySet());
        for (String field : fields) {
            if (!fieldDescribeTokens.get(field.toLowerCase()).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }
    }

}