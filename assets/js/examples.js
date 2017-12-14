var examples = [
    {
        id: 1,
        name: "实现全权限管理",
        type: 1,
        typeName: '',
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
        typeInfo: "教育行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 3,
        name: "实现全权限管理",
        type: 1,
        typeInfo: "教育行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 4,
        name: "实现全权限管理",
        type: 1,
        typeInfo: "教育行业",
        customer: '龙湾',
        summary: '一粒云',
        users: 1000,
        use1: '知识沉淀',
        use2: '高效查询'
    },
    {
        id: 5,
        name: "实现全权限管理",
        type: 1,
        typeInfo: "教育行业",
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

    } else {
        filterEx = examples;
    }


    insertExam(filterEx);
}


function insertExam(filterEx) {

    for (var i = 0; i < exa.length; i++) {

        var html =
            '<a  href=' + exa.url + '  class="col-md-4">' +
            '<div class="panel panel-default coo-panel">' +
            '<div class="panel-heading">' +
            ' <a href="">' +
            '<h3>' + exa.typeName + '</h3>' +
            '</a>' +
            '</div>' +
            '<div class="panel-body">' +
            '<a href=""><span>' + typeInfo + '</span><span>|</span>' +
            '<span>' + customer + '</span></a>' +
            '<a href=""><h4>' + name + '</h4></a>' +
            '<a href=""><p>' + summary + '</p></a>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<span>' + users + '</span>' +
            '<span class="pull-right">' + use1 + '</span>' +
            '<span class="pull-right mar">' + use2 + '</span>' +
            '</div>' +
            '</div>' +
            '</a>';




        $("#coo_cont").append(html)

    }

}
