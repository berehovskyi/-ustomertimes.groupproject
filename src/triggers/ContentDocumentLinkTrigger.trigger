/**
 * Created by Yehor Dobrovolskyi on 26.10.2018.
 */

trigger ContentDocumentLinkTrigger on ContentDocumentLink (before insert/*, before update, before delete, after insert, after update, after delete, after undelete*/) {

    ContentDocumentLinkTriggerHandler handler = new ContentDocumentLinkTriggerHandler();

    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            handler.onBeforeInsert(Trigger.new);
        }
//        if (Trigger.isUpdate) {
//            handler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
//        }
//        if (Trigger.isDelete) {
//            handler.onBeforeDelete(Trigger.old);
//        }
    }

//    if (Trigger.isAfter) {
//        if (Trigger.isInsert) {
//            handler.onAfterInsert(Trigger.new);
//        }
//        if (Trigger.isUpdate) {
//            handler.onAfterUpdate(Trigger.new, Trigger.oldMap);
//        }
//        if (Trigger.isDelete) {
//            handler.onAfterDelete(Trigger.old);
//        }
//        if (Trigger.isUndelete) {
//            handler.onAfterUndelete(Trigger.new);
//        }
//    }
}