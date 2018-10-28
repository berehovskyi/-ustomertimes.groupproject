/**
 * Created by Yehor Dobrovolskyi on 26.10.2018.
 */

trigger ContentDocumentLinkTrigger on ContentDocumentLink (before insert, before update) {

    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            ContentDocumentLinkChangeVisibility.changeVisibilityAllUsers(Trigger.new);
        }
        if (Trigger.isUpdate) {
            ContentDocumentLinkChangeVisibility.changeVisibilityAllUsers(Trigger.new);
        }
    }
}