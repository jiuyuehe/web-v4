var  examples = [
    {
        id:1,
        name:"实现全权限管理",
        type:1,
        typeName:'',
        typeInfo: "教育行业",
        customer:'龙湾',
        summary:'一粒云',
        users: 1000,
        use1:'知识沉淀',
        use2:'高效查询'
    },
    {
        id:2,
        name:"实现全权限管理",
        type:1,
        typeInfo: "教育行业",
        customer:'龙湾',
        summary:'一粒云',
        users: 1000,
        use1:'知识沉淀',
        use2:'高效查询'
    },
    {
        id:3,
        name:"实现全权限管理",
        type:1,
        typeInfo: "教育行业",
        customer:'龙湾',
        summary:'一粒云',
        users: 1000,
        use1:'知识沉淀',
        use2:'高效查询'
    },
    {
        id:4,
        name:"实现全权限管理",
        type:1,
        typeInfo: "教育行业",
        customer:'龙湾',
        summary:'一粒云',
        users: 1000,
        use1:'知识沉淀',
        use2:'高效查询'
    },
    {
        id:5,
        name:"实现全权限管理",
        type:1,
        typeInfo: "教育行业",
        customer:'龙湾',
        summary:'一粒云',
        users: 1000,
        use1:'知识沉淀',
        use2:'高效查询'
    },

];


var filterEx = undefined;

function getExams(num) {

    if(num){
        // todo  filter the type value num

        //    filterEx = filter (examples);

    }else{
        filterEx = examples;
    }


    insertExam(filterEx);
}


function insertExam(filterEx) {

    for(var i = 0 ;i < exa.length ;i ++){

        var html = '<a  href='+exa.url+'  class="col-md-4">' +
            '<div class="panel panel-default coo-panel">' +
                '<div class="panel-heading">'+
                   ' <a href="">'+
                        '<h3>'+exa.typeName+'</h3>'+
                    '</a>'+
                '</div>'+
                '<div class="panel-body">'+
                   '<a href=""><span>教育行业</span><span>|</span>'+
                    '<span>温州市龙湾教育局</span></a>'+
                    '<a href=""><h4>实现权限管理快速查询海量资料</h4></a>'+
                    '<a href=""><p>一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...</p></a>'+
                '</div>'+
                '<div class="panel-footer">'+
                    '<span>1000人以上</span>'+
                    '<span class="pull-right">高效查询</span>'+
                    '<span class="pull-right mar">知识累计</span>'+
                '</div>'+
            '</div>'+
        '</a>';




        $("#coo_cont").append(html)

    }

}


