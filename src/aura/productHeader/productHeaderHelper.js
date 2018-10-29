/**
 * Created by oberegovskyi on 26-Oct-18.
 */
({
    updateCategory: function (component, event) {
        let componentEvent = component.getEvent('categoryUpdated');
        let value = event.getSource().get('v.value');
        component.set('v.currentCategory', value);
        componentEvent.setParams({'category': value});
        componentEvent.fire();
    }
});