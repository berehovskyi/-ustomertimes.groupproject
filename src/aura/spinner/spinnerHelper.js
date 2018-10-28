/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    show : function(component, event) {
        let params = event.getParam("arguments"),
            name = params && params.process || '';
        let processes = component.get("v.processes");
        if (!processes[name]) {
            processes[name] = 0;
        }
        processes[name]++;
        component.set("v.processes", processes);
        component.set("v.shown", true);
    },

    hide : function(component, event) {
        let params = event.getParam("arguments"),
            name = params && params.process || '';
        let processes = component.get("v.processes");
        if (processes[name]) {
            processes[name]--;
        }
        if (!processes[name]) {
            delete processes[name];
        }
        component.set("v.processes", processes);
        component.set("v.shown", Object.keys(processes).length > 0);
    }
});