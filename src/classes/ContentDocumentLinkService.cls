/**
 * Created by oberegovskyi on 28-Oct-18.
 */

public without sharing class ContentDocumentLinkService {

    public static void setDocumentVisibilityForAllUsers(List<ContentDocumentLink> contentDocumentLinks) {
        for (ContentDocumentLink docLink : contentDocumentLinks) {
            if (isRelatedToProduct(docLink)) {
                docLink.Visibility = 'AllUsers';
            }
        }
    }

    private static Boolean isRelatedToProduct(ContentDocumentLink link){
        return link.LinkedEntityId.getSobjectType() == Product__c.SobjectType;
    }

}