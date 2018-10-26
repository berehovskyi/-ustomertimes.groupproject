/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    updateCategory: function (component, event) {
        var componentEvent = component.getEvent("categoryUpdated");
        var value = event.getSource().get("v.value");
        component.set('v.currentCategory', value);
        componentEvent.setParams({"category": value});
        componentEvent.fire();
    }
});