/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    handleDeleteFromOrder: function (component, event, helper) {
        helper.deleteFromOrder(component, event);
    },

    recalculateTotalPrice: function (component, event, helper) {
        helper.recalculateTotalPrice(component);
    },

    clearCart: function (component, event, helper) {
        helper.clearCart(component);
    },

    saveOrder: function (component, event, helper) {
        helper.saveOrder(component);
    }
});