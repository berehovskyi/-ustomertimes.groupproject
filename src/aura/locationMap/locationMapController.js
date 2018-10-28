/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    init: function (cmp, event, helper) {
        cmp.set('v.mapMarkers', [
            {
                location: {
                    Street: '50 Simi Prakhovykh Street',
                    City: 'Kyiv',
                    Country: 'Ukraine'
                },
                title: 'The White House',
                description: 'Landmark, historic home & office of the United States president, with tours for visitors.'
            }
        ]);
        cmp.set('v.zoomLevel', 13);
    }
});