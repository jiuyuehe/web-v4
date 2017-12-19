// examples
var filterEx = undefined;
// product
var filterPro = undefined;
// us
var filterUs = undefined;
//product2
var filterPro2 = undefined;
// price
var price = undefined;


// examples
var examples = [
    {
        id: 1,
        name: "实现全权限管理快速查询海量资料",
        type: 1,
        typeName: '教育行业',
        typeInfo: "教育行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 2,
        name: "实现全权限管理快速查询海量资料",
        type: 2,
        typeName: '政府/事业单位',
        typeInfo: "教育行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 3,
        name: "实现全权限管理快速查询海量资料",
        type: 3,
        typeName: '制造行业',
        typeInfo: "制造行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 4,
        name: "实现全权限管理",
        type: 4,
        typeName: "建筑业",
        typeInfo: "制造行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 5,
        name: "实现全权限管理",
        type: 5,
        typeName: "运输/物流/仓储",
        typeInfo: "制造行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 6,
        name: "实现全权限管理",
        type: 6,
        typeName: "印刷行业",
        typeInfo: "制造行业",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: '1000人以上',
        use1: '知识点积累',
        use2: '高效查询'
    },

]
// us
var us = [
    {
        type: 1,
        name: "一粒云博客",
        img: "../assets/images/Blogger.png",
        summary: "从博客中了解更多一粒云的见解。"
    },
    {
        type: 2,
        name: "一粒云新闻",
        img: "../assets/images/u-xw.png",
        summary: "为您展示我们最新的动态，让您更了解一粒云。"
    },
    {
        type: 3,
        name: "一粒云公众号",
        img: "../assets/images/u-wx.png",
        summary: "汇聚最新的行业信息，聚焦最前沿的技术。"
    },
    {
        type: 4,
        name: "联系我们",
        img: "../assets/images/u-kf.png",
        summary: "获取有关技术疑难问题的帮助。"
    },
    {
        type: 5,
        name: "合作渠道",
        img: "../assets/images/u-qd.png",
        summary: "用工匠的精神打磨产品，做您坚实的技术后盾，期待您的加入。"
    },
    {
        type: 6,
        name: "售后服务",
        img: "../assets/images/u-sh.png",
        summary: "获取售后服务。"
    },

]
// product
var product = [
    {
        type: 1,
        src: "#",
        img: "../assets/images/p-aq.png",
        name: "安全",
        summary: "为了保护您企业数据的安全，我们底层采用自研分布式文件系统分块、加密、压缩存储。 对账号密码等信息进行AES、SHA256双重加密传输。应用访问协议支持HTTPS。"
    },
    {
        type: 2,
        src: "#",
        img: "../assets/images/p-qx.png",
        name: "权限",
        summary: "下载权限，限制员工离职无法带走公司资料。 基于组织架构的存储，外部人员无法加入。 精细权限划分，便于管理。"

    },
    {
        type: 3,
        src: "xz.html",
        img: "../assets/images/p-xz.png",
        name: "协作",
        summary: "一键发送大文件给客户"
    },
    {
        type: 4,
        src: "#",
        img: "../assets/images/p-zsk.png",
        name: "知识库",
        summary: "企业知识、经验的传承。 岗位技能需求、经验的汇聚，便于员工交接。 常见与客户沟通的技巧，经典案例的解决方案。"
    },
    {
        type: 5,
        src: "#",
        img: "../assets/images/p-cc.png",
        name: "存储",
        summary: "员工存储量一目了然，空间预警。 基于组织架构的存储，部门文件归类明确。"

    },
    {
        type: 6,
        src: "#",
        img: "../assets/images/p-dz.png",
        name: "定制",
        summary: "从技术角度出发支持您的需求。 针对您工作中特有的问题，提供专业的解决方案。"

    }

]
// product2
var product2 = [
    {
        type: 1,
        img: "../assets/images/p-aq.png",
        name: "安全",
        typeName1: "防误删",
        typeName2: "防泄露",
        typeName3: "防盗",
        typeName4: "事后追踪",
        summary: "上传文档增加水印，杜绝盗用。硬件丢失，他人仍无法访问其中内容。文档传输、分享分别加密，保护信息安全不泄露，网络病毒传播不影响数据安全。数据绝对安全不会丢失。",
        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    },
    {
        type: 1,
        img: "../assets/images/p-qx.png",
        name: "权限",

        typeName1: "多级管理员",
        typeName2: "系统仪表盘",
        typeName3: "账号管理",
        typeName4: "文件授权",
        summary: "下载权限，限制员工离职无法带走公司资料。 基于组织架构的存储，外部人员无法加入。 精细权限划分，便于管理。",

        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    },
    {
        type: 1,
        img: "../assets/images/p-xz.png",
        name: "协作",

        typeName1: "发送大文件给客户",
        typeName2: "寻找文档latese",
        typeName3: "海量文件搜索",
        typeName4: "移动办公",
        summary: "一键发送大文件给客户",
        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    },
    {
        type: 1,
        img: "../assets/images/p-zsk.png",
        name: "知识库",

        typeName1: "发送大文件给客户",
        typeName2: "寻找文档latese",
        typeName3: "海量文件搜索",
        typeName4: "移动办公",
        summary: "企业知识、经验的传承。岗位技能需求、经验的汇聚、便于员工交接。常见与客户沟通的技巧、经典案例的解决方案",
        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    },
    {
        type: 1,
        img: "../assets/images/p-cc.png",
        name: "存储",

        typeName1: "空间预警机制",
        typeName2: "系统存储状态",
        typeName3: "空间自由分配",
        typeName4: "分布式文件系统",
        summary: "企业知识、经验的传承。岗位技能需求、经验的汇聚、便于员工交接。常见与客户沟通的技巧、经典案例的解决方案",
        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    },
    {
        type: 1,
        img: "../assets/images/p-dz.png",
        name: "定制",

        typeName1: "空间预警机制",
        typeName2: "系统存储状态",
        typeName3: "空间自由分配",
        typeName4: "分布式文件系统",
        summary: "企业知识、经验的传承。岗位技能需求、经验的汇聚、便于员工交接。常见与客户沟通的技巧、经典案例的解决方案",
        summary1: "通过外链、二维码等方式分享文档，客户能通过权限设置器能否下载、查看等。",
        summary2: "在线编辑、同步文件编辑，同类型版本覆盖自动生成文件版本。版本历史可查看、下载、恢复到指定版本。",
        summary3: "支持全文检索，包含中英很合、全名、姓名、身份证、订单号、手机号、精度更高，搜索关键词亮高显示。",
        summary4: "全平台支持上传、下载、查看文件。"

    }
]
// price
var price = [
    {
        type: 1,
        img: "../assets/images/pr-sy.png",
        name: "增加功能水印"
    },
    {
        type: 2,
        img: "../assets/images/pr-fx.png",
        name: "优化我的分享模块"
    },
    {
        type: 3,
        img: "../assets/images/pr-mk.png",
        name: "增加独立的系统模块"
    },
    {
        type: 4,
        img: "../assets/images/pr-fd.png",
        name: "防盗链功能升级"
    },
    {
        type: 5,
        img: "../assets/images/pr-bmd.png",
        name: "增加白名单功能"
    },
    {
        type: 6,
        img: "../assets/images/pr-sqx.png",
        name: "开放共享空间多级授权功能"
    },
    {
        type: 7,
        img: "../assets/images/pr-bd.png",
        name: "客户端新增开启启动配置，修改注册表"
    }
]


// product
function getPro(num) {
    for (var i = 0; i < product.length; i++) {

        var html =
            '<div class="col-md-4">' +
            '<a href="' + product[i].src + '">' +
            '<img src="' + product[i].img + '" alt=""><br>' +
            '<h4>' + product[i].name + '</h4>' +
            '</a>' +
            '<p>' + product[i].summary + '</p>' +
            '</div>';

        $("#product").append(html);

    }
}
// product2
function getPro2(num) {
    for (var i = 0; i < product2.length; i++) {

        var html =
            '<div class="security">' +
            '<div class="p-head">' +
            '<img src="' + product2[i].img + '" alt="">' +
            '<h4>' + product2[i].name + '</h4>' +
            '<p>' + product2[i].summary + '</p>' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<div class="p-content">' +
            '<h5>' + product2[i].typeName1 + '</h5>' +
            '<div class="p-content-p">' +
            '<p>' + product2[i].summary1 + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="col-sm-6">' +
            '<div class="p-content">' +
            '<h5>' + product2[i].typeName2 + '</h5>' +
            '<div class="p-content-p">' +
            '<p>' + product2[i].summary2 + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<div class="p-content">' +
            '<h5>' + product2[i].typeName3 + '</h5>' +
            '<div class="p-content-p">' +
            '<p>' + product2[i].summary3 + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<div class="p-content">' +
            '<h5>' + product2[i].typeName4 + '</h5>' +
            '<div class="p-content-p">' +
            '<p>' + product2[i].summary4 + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>+';

        $("#p-cont").append(html);

    }
}
// us
function getUs(num) {
    for (var i = 0; i < us.length; i++) {

        var html =
            '<div class="col-md-4 bg-white">' +
            '<div class="panel-body learnMore">' +
            '<span>' + us[i].name + '</span>' +
            '<h4>' +
            '<a class="media-left">' +
            '<img src="' + us[i].img + '">' +
            '</a>' +
            '<p class="media-body">' + us[i].summary + '</p>' +
            '</h4>' +
            '<div class="pull-right circular">' +
            '<i class="glyphicon glyphicon-chevron-right"></i>' +
            '</div>' +
            '</div>' +
            '</div>';

        $("#bg-white").append(html);

    }
}
function getPri(num) {
    for (var i = 0; i < price.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 col-xs-6 banb-tx">' +
            '<a href="#"><img class="" src="' + price[i].img + '" alt=""><br>' +
            '<h3 class="banb-text">' + price[i].name + '</h3>' +
            '</a>' +
            '</div>';

        $("#edition1").append(html);

    }
}

// examples
function getExams(num) {

    if (num) {

        // todo  filter the type value num

        //    filterEx = filter (examples);

        filterEx = [];
        $("#coo_cont").empty();


        for (var i = 0; i < examples.length; i++) {

            if (examples[i].type == num) {

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
            '<div href=' + exa[i].url + ' class="col-md-4">' +
            '<div class="panel panel-default coo-panel">' +
            '<div class="panel-heading">' +
            ' <a href="">' +
            '<h3>' + exa[i].typeName + '</h3>' +
            '</a>' +
            '</div>' +
            '<div class="panel-body">' +
            '<a href=""><span>' + exa[i].typeInfo + '</span><span>|</span>' +
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




        $("#coo_cont").append(html);

    }
}


$(document).ready(function () {
    console.log("start ---------");

    getExams(0);
    getUs(0);
    getPro(0);
    getPro2(0);
    getPri(0);
});

