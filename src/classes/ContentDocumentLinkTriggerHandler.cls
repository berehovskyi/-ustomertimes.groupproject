/**
 * Created by oberegovskyi on 28-Oct-18.
 */

public with sharing class ContentDocumentLinkTriggerHandler{

    public void onBeforeInsert(List<ContentDocumentLink> newRecords) {
        ContentDocumentLinkService.setDocumentVisibilityForAllUsers(newRecords);
    }

    public void onBeforeUpdate(List<ContentDocumentLink> newRecords, Map<Id, ContentDocumentLink> oldRecordsMap) {
        ContentDocumentLinkService.setDocumentVisibilityForAllUsers(newRecords);
    }
//
//    public void onBeforeDelete(List<ContentDocumentLink> oldRecords) {
//    }
//
//    public void onAfterInsert(List<ContentDocumentLink> newRecords) {
//    }
//
//    public void onAfterUpdate(List<ContentDocumentLink> newRecords, Map<Id, Account> oldRecordsMap) {
//    }
//
//    public void onAfterDelete(List<ContentDocumentLink> oldRecords) {
//    }
//
//    public void onAfterUndelete(List<ContentDocumentLink> newRecords) {
//    }

}