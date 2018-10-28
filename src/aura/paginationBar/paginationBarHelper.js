/**
 * Created by oberegovskyi on 28-Oct-18.
 */
({
    buildData : function(component, helper) {
        var data = [];
        var pageNumber = component.get("v.currentPageNumber");
        var pageSize = component.get("v.pageSize");
        var allData = component.get("v.allData");
        var x = (pageNumber-1)*pageSize;

        //creating data-table data
        for(; x<=(pageNumber)*pageSize; x++){
            if(allData[x]){
                data.push(allData[x]);
            }
        }
        component.set("v.data", data);

        helper.generatePageList(component, pageNumber);
    },

    /*
     * this function generate page list
     * */
    generatePageList : function(component, pageNumber){
        pageNumber = parseInt(pageNumber);
        var pageList = [];
        var totalPage = component.get("v.totalPages");
        if(pageNumber<5){
            pageList.push(2,3,4,5,6);
        } else if(pageNumber>(totalPage-5)){
            pageList.push(totalPage-5, totalPage-4, totalPage-3, totalPage-2, totalPage-1);
        } else{
            pageList.push(pageNumber-2, pageNumber-1, pageNumber, pageNumber+1, pageNumber+2);
        }
        component.set("v.pageList", pageList);
    }

});