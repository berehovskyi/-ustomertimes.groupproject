/**
 * Created by oberegovskyi on 24-Oct-18.
 */
({
    onInit: function (component, event, helper) {
        helper.loadAllData(component);
    },

    handleUpdateCategory: function (component, event, helper) {
        helper.updateCategory(component, event);
        helper.loadDataByCategory(component);
    },

    handleAddToCart: function (component, event, helper) {
        helper.addToCart(component, event);
        helper.resetInputField(event);
    },

    showCurrentPage: function (component, event, helper) {
        helper.showCurrentPage(component);
    }
});