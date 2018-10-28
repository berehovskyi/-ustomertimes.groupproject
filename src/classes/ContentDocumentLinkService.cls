/**
 * Created by oberegovskyi on 28-Oct-18.
 */

public with sharing class ContentDocumentLinkService {

    public static void setDocumentVisibilityForAllUsers(List<ContentDocumentLink> contentDocumentLinks) {
        Set<Id> productIds = new Map<Id, Product__c>([
                SELECT Id
                FROM Product__c
        ]).keySet();
        for (ContentDocumentLink docLink : contentDocumentLinks) {
            if (productIds.contains(docLink.LinkedEntityId)) {
                docLink.Visibility = 'AllUsers';
            }
        }
    }

}