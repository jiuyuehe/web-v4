var examples = [
    {
        id: 1,
        name: "实现全权限管理",
        type: 1,
        typeName: '特使是',
        typeInfo: "教育行业",
        customer: '龙湾',
        summary: '一粒云',
        users: '1000人以上',
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 2,
        name: "实现全权限管理",
        type: 1,
        typeName: '特使是',
        typeInfo: "教育行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 3,
        name: "实现全权限管理2",
        type: 2,
        typeName: '特使是',
        typeInfo: "制造行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 4,
        name: "实现全权限管理2",
        type: 2,
        typeInfo: "制造行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 5,
        name: "实现全权限管理3",
        type: 3,
        typeInfo: "制造行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 5,
        name: "实现全权限管理3",
        type: 3,
        typeInfo: "制造行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },

];



var filterEx = undefined;

function getExams(num) {

    if (num) {

        // todo  filter the type value num

        //    filterEx = filter (examples);

        filterEx = [];
        $("#coo_cont").empty();


        for (var i = 0; i < examples.length; i++) {

            if(examples[i].type == num){

                filterEx.push(examples[i]);
            }

        }



    } else {
        filterEx = examples;
    }


    insertExam(filterEx);
}


function insertExam(exa) {


    for (var i = 0; i < exa.length; i++) {

        var html =
            '<div  href=' + exa[i].url + '  class="col-md-4">' +
            '<div class="panel panel-default coo-panel">' +
            '<div class="panel-heading">' +
            ' <a href="">' +
            '<h3>' + exa[i].typeName + '</h3>' +
            '</a>' +
            '</div>' +
            '<div class="panel-body">' +
            '<a href=""><span>' +exa[i].typeInfo + '</span><span>|</span>' +
            '<span>' + exa[i].customer + '</span></a>' +
            '<a href=""><h4>' + exa[i].name + '</h4></a>' +
            '<a href=""><p>' + exa[i].summary + '</p></a>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<span>' + exa[i].users + '</span>' +
            '<span class="pull-right">' + exa[i].use1 + '</span>' +
            '<span class="pull-right mar">' + exa[i].use2 + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';




        $("#coo_cont").append(html)

    }

}


$(document).ready(function(){
    console.log("start ---------");

    getExams(0);
});
