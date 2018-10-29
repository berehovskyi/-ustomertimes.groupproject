/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    onFirst: function (component, event, helper) {
        component.set('v.currentPage', 1);
    },

    onLast: function (component, event, helper) {
        let totalPages = component.get('v.totalPages');
        component.set('v.currentPage', totalPages);
    },

    onPrevious: function (component, event, helper) {
        let currentPage = component.get('v.currentPage');
        component.set('v.currentPage', currentPage - 1);
    },

    onNext: function (component, event, helper) {
        let currentPage = component.get('v.currentPage');
        component.set('v.currentPage', currentPage + 1);
    },

    onPage: function (component, event, helper) {
        let pageButton = event.getSource();
        let value = pageButton.get('v.value');
        component.set('v.currentPage', parseInt(value));
    },
});