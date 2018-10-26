/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    addToCart: function (component, event, helper) {
        var componentEvent = component.getEvent("addToCart");
        componentEvent.fire();
        console.log('addToCartEvent has fired');
    }
})