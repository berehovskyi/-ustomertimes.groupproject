/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    onNext : function(component, event, helper) {
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
        helper.buildData(component, helper);
    },

    onPrev : function(component, event, helper) {
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
        helper.buildData(component, helper);
    },

    processMe : function(component, event, helper) {
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },

    onFirst : function(component, event, helper) {
        component.set("v.currentPageNumber", 1);
        helper.buildData(component, helper);
    },

    onLast : function(component, event, helper) {
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.buildData(component, helper);
    },
})