/**
 * Created by Yehor Dobrovolskyi on 24.10.2018.
 */

public class DeleteAllOrdersController {

    @AuraEnabled
    public static void deleteAllOrders() {
        List<Order__c> orders = [
                SELECT Id
                FROM Order__c
        ];

        delete orders;
    }
}