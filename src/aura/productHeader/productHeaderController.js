/**
 * Created by oberegovskyi on 25-Oct-18.
 */
({
    fireEvent: function (component, event, helper) {
        var componentEvent = component.getEvent("categoryUpdated");
        var value = event.getSource().get("v.value");
        componentEvent.setParams({"category": value});
        componentEvent.fire();
    }

});