/**
 * Created by oberegovskyi on 29-Oct-18.
 */
({
    setPageSize: function (component, event, helper) {
        let value = event.getSource().get('v.value');
        component.set('v.pageSize', parseInt(value));
        component.set('v.currentPage', 1);
    }
});