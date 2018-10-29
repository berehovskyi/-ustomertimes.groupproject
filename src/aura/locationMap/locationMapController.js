/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    init: function (component, event, helper) {
        component.set('v.mapMarkers', [
            {
                location: {
                    Street: '50 Simi Prakhovykh Street',
                    City: 'Kyiv',
                    Country: 'Ukraine'
                },
                title: 'Customer Times',
                description: 'Salesforce Platinum Partner CustomerTimes provide a full range of Salesforce Services. From consulting to development and support.'
            }
        ]);
        component.set('v.zoomLevel', 13);
    }
});