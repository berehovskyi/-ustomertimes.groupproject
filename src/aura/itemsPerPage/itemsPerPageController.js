/**
 * Created by oberegovskyi on 29-Oct-18.
 */
({
    setPageSize: function (component, event, helper) {
        let value = event.getSource().get('v.value');
        console.log('value to set to pageSize ', value);
        component.set('v.pageSize', parseInt(value));
        console.log('pageSize after: ', component.get('v.pageSize'));
        component.set('v.currentPage', 1);
    }
});