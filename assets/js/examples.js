// examples
var filterEx = undefined;
//price

//nas
var nas = [
    {
        type: 1,
        span: "CPU",
        p: "Intel四核2.3GHz"
    },
    {
        type: 2,
        span: "内存容量",
        p: "2GB DDR3 RAM"
    },
    {
        type: 3,
        span: "高性能",
        p: "读取226MB/S <br>写入184MB/S"
    },
    {
        type: 4,
        span: "扩展性",
        p: "双通道4K H.264/H.265S视频转码"
    }
]
//s-nas
var prog = [
    {
        type: 1,
        span: "CPU",
        p: "Intel四核2.3GHz"
    },
    {
        type: 2,
        span: "内存容量",
        p: "2GB DDR3 RAM"
    },
    {
        type: 3,
        span: "高性能",
        p: "读取226MB/S <br>写入184MB/S"
    },
    {
        type: 4,
        span: "扩展性",
        p: "双通道4K H.264/H.265S视频转码"
    }
]
//nav
var prod2 = [
    {
        type: 1,
        name: "小机器1",
        href: "nas.html",
        src: "../assets/images/pr/小机器1.png",
        //price: "￥2000"
    },
    {
        type: 2,
        name: "小机器2",
        href: "s-nas.html",
        src: "../assets/images/pr/小机器2.png",
        // price: "￥2000"
    },
    {
        type: 3,
        name: "小机器3",
        href: "product.html",
        src: "../assets/images/pr/小机器3.png",
        //price: "￥2000"
    },
    {
        type: 4,
        name: "云主机",
        href: "product.html",
        src: "../assets/images/pr/云主机.png",
        // price: "￥2000"
    }
]
var mach = [
    {
        type: 1,
        span: "CPU",
        p: "Intel四核2.3GHz",
        src: "../assets/images/2.png"
    },
    {
        type: 2,
        span: "内存容量",
        p: "2GB DDR3 RAM",
        src: "../assets/images/3.png"
    },
    {
        type: 3,
        span: "高性能",
        p: "读取450MB/S <br>写入400MB/S",
        src: "../assets/images/4.png"
    },
    {
        type: 4,
        span: "扩展性",
        p: "可扩充16个硬盘",
        src: "../assets/images/5.png"
    },
]
//about
var exh = [
    {
        type: 1,
        href: "ding.html",
        src: "../assets/images/a/a-dd.png",
        name: "钉钉集成",
        summary: "实现钉钉用户免登云盘，并能一键导入组织架构，避免重复工作。",
        p: "点击了解详情>"
    },
    {
        type: 2,
        href: "xz.html",
        src: "../assets/images/a/a-xz.png",
        name: "协作办公",
        summary: "实现钉钉用户免登云盘，并能一键导入组织架构，避免重复工作。",
        p: "点击了解详情>"
    },
    {
        type: 3,
        href: "knowLedge.html",
        src: "../assets/images/a/a-zsk.png",
        name: "知识库",
        summary: "实现钉钉用户免登云盘，并能一键导入组织架构，避免重复工作。",
        p: "点击了解详情>"
    },
]


// examples
var examples = [
    {
        id: 1,
        name: "实现全权限管理快速查询海量资料",
        type: 1,
        href: 'longwan.html',
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
        href: '#',
        typeName: '政府/事业单位',
        typeInfo: "政府/事业单位",
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
        href: '#',
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
        href: '#',
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
        href: '#',
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
        href: '#',
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
        target: "_blank",
        href: "http://www.yliyun.com/blog/",
        name: "一粒云博客",
        img: "../assets/images/us/Blogger.png",
        summary: "从博客中了解更多一粒云的见解。",
        i: "了解更多>>"
    },
    {
        type: 2,
        target: "_blank",
        href: "http://www.yliyun.com/blog/tag/help/",
        name: "一粒云新闻",
        img: "../assets/images/us/u-xw.png",
        summary: "为您展示我们最新的动态，让您更了解一粒云。",
        i: "了解更多>>"
    },
    {
        type: 3,
        target: "_self",
        href: "us.html#weixin",
        name: "一粒云公众号",
        img: "../assets/images/us/u-wx.png",
        summary: "汇聚最新的行业信息，聚焦最前沿的技术。",
        i: "了解更多>>"
    },
    {
        type: 4,
        target: "_blank",
        href: "http://wpa.qq.com/msgrd?v=3&uin=380627112&site=qq&menu=yes/",
        name: "联系我们",
        img: "../assets/images/us/u-kf.png",
        summary: "获取有关技术疑难问题的帮助。",
        i: "了解更多>>"
    },
    {
        type: 5,
        target: "_blank",
        href: "http://www.yliyun.com/blog/2015/11/05/qu-dao-shang-wu-he-zuo/",
        name: "合作渠道",
        img: "../assets/images/us/u-qd.png",
        summary: "用工匠的精神打磨产品，做您坚实的技术后盾，期待您的加入。",
        i: "了解更多>>"
    },
    {
        type: 6,
        target: "_blank",
        href: "http://wpa.qq.com/msgrd?v=3&uin=2941390949&site=qq&menu=yes/",
        name: "售后服务",
        img: "../assets/images/us/u-sh.png",
        summary: "获取售后服务。",
        i: "了解更多>>"
    },

]
// fun
var product = [
    {
        type: 1,
        src: "fun_storage.html",
        img: "../assets/images/fun/p-cc.png",
        name: "海量存储",
        summary: "员工存储量一目了然，空间预警。 基于组织架构的存储，部门文件归类明确。"

    },
    {
        type: 2,
        src: "fun_jurisdiction.html",
        img: "../assets/images/fun/p-qx.png",
        name: "精细权限",
        summary: "下载权限，限制员工离职无法带走公司资料。 基于组织架构的存储，外部人员无法加入。 精细权限划分，便于管理。"

    },
    {
        type: 3,
        src: "xz.html",
        img: "../assets/images/fun/p-xz.png",
        name: "便捷协作",
        summary: "一键发送大文件给客户"
    },
    {
        type: 4,
        src: "knowLedge.html",
        img: "../assets/images/fun/p-zsk.png",
        name: "知识库",
        summary: "企业知识、经验的传承。 岗位技能需求、经验的汇聚，便于员工交接。 常见与客户沟通的技巧，经典案例的解决方案。"
    },
    {
        type: 5,
        src: "fun_security.html",
        img: "../assets/images/fun/p-aq.png",
        name: "安全加密",
        summary: "为了保护您企业数据的安全，我们底层采用自研分布式文件系统分块、加密、压缩存储。 对账号密码等信息进行AES、SHA256双重加密传输。应用访问协议支持HTTPS。"
    },
    {
        type: 6,
        src: "ding.html",
        img: "../assets/images/fun/p-dz.png",
        name: "集成与定制",
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
var price1 = [
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
// snas
var sNas = [
    {
        type: 1,
        span: '1',
        name: '电脑键'
    },
    {
        type: 2,
        span: '2',
        name: '硬盘开关'
    },
    {
        type: 3,
        span: '3',
        name: '硬盘指示灯'
    },
    {
        type: 4,
        span: '4',
        name: '硬盘指示灯'
    },
    {
        type: 5,
        span: '5',
        name: 'USB接口'
    },
    {
        type: 6,
        span: '6',
        name: '硬盘'
    },
    {
        type: 7,
        span: '7',
        name: '硬盘开关'
    },
    {
        type: 8,
        span: '8',
        name: 'DVD'
    },
    {
        type: 9,
        span: '9',
        name: '风扇'
    },
    {
        type: 10,
        span: '10',
        name: '硬盘槽'
    },
    {
        type: 11,
        span: '11',
        name: '网络埠'
    },
    {
        type: 12,
        span: '12',
        name: '硬盘槽'
    },
    {
        type: 13,
        span: '13',
        name: 'USB接口'
    },
    {
        type: 14,
        span: '14',
        name: 'Console埠'
    },
    {
        type: 15,
        span: '15',
        name: '硬盘槽'
    }
]
// notes
var notes = [
    {
        type: 1,
        span: '1',
        name: '电脑键'
    },
    {
        type: 2,
        span: '2',
        name: '硬盘开关'
    },
    {
        type: 3,
        span: '3',
        name: '硬盘状态指示灯'
    },
    {
        type: 4,
        span: '4',
        name: '硬盘状态指示灯'
    },
    {
        type: 5,
        span: '5',
        name: 'USB接口'
    },
    {
        type: 6,
        span: '6',
        name: '硬盘'
    },
    {
        type: 7,
        span: '7',
        name: '硬盘开关'
    },
    {
        type: 8,
        span: '8',
        name: 'DVD'
    },
    {
        type: 9,
        span: '9',
        name: '风扇'
    },
    {
        type: 10,
        span: '10',
        name: '硬盘槽'
    },
    {
        type: 11,
        span: '11',
        name: '网络埠'
    },
    {
        type: 12,
        span: '12',
        name: '硬盘槽'
    },
    {
        type: 13,
        span: '13',
        name: 'USB接口'
    },
    {
        type: 14,
        span: '14',
        name: 'Console埠'
    },
    {
        type: 15,
        span: '15',
        name: '硬盘槽'
    },
    {
        type: 16,
        span: '16',
        name: '硬盘槽'
    },
    {
        type: 17,
        span: '17',
        name: 'USB接口'
    },
    {
        type: 18,
        span: '18',
        name: 'Console埠'
    },
    {
        type: 19,
        span: '19',
        name: '硬盘槽'
    }, {
        type: 20,
        span: '20',
        name: '硬盘槽'
    }

]
//fun_storage
var stor = [
    {
        type: 1,
        img: "../assets/images/fun_st/1.png",
        h4: "极速传递",
        p: "高速传输协议、支持秒传、断点续传"
    },
    {
        type: 2,
        img: "../assets/images/fun_st/2.png",
        h4: "同步&虚拟盘符 ",
        p: "支持指定任意文件夹同步，虚拟盘符同步"
    },
    {
        type: 3,
        img: "../assets/images/fun_st/3.png",
        h4: "备份 ",
        p: "指定任意文件夹备份，支持实时与定位"
    },
    {
        type: 4,
        img: "../assets/images/fun_st/4.png",
        h4: "文件挂载",
        p: "支持sanda、window共享文件夹挂载至云盘"
    },
    {
        type: 5,
        img: "../assets/images/fun_st/5.png",
        h4: "开放API",
        p: "开放文件上传、预览、下载、用户、组织架构同步接口"
    },
    {
        type: 6,
        img: "../assets/images/fun_st/6.png",
        h4: "逻辑区间",
        p: "支持个人、群组、共享空间存放"
    }
]
//secu
var secu = [
    {
        type: 1,
        img: "../assets/images/fun_se/1.png",
        name: "底层安全",
        p: "底层采用自研分布式文件系统，对存储数据进行系统级合并、分化、加密、压缩存储，仅一粒云系统可识别，防止病毒扩散"
    },
    {
        type: 2,
        img: "../assets/images/fun_se/2.png",
        name: "传输安全",
        p: "对账号密码等信息进行AES、SHA256双重加密传输、支持SSL传输、外链使用防盗链技术"
    },
    {
        type: 3,
        img: "../assets/images/fun_se/3.png",
        name: "应用安全",
        p: "应用访问协议支持HTTPS，独立客户端、支持复杂权限设置，所有操作有日志记录，记录操作人员IP"
    }

]
//secu
function getsecu(num) {
    for (var i = 0; i < secu.length; i++){

        var html =
            '<div class="col-md-4 text-center pad">' +
            '<div class="bottom_s">' +
            '<div class="bottom_s_img">' +
            '<img src="' + secu[i].img + '" alt="">' +
            '</div>' +
            '<div class="bottom_s_h4">' +
            '<h4>' + secu[i].name + '</h4>' +
            '</div>' +
            '<div class="bottom_s_p">' +
            '<p>' + secu[i].p + '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
        
        $("#secu").append(html);
    }
}

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
            '<a target="' + us[i].target + '" href="' + us[i].href + '"><span>' + us[i].name + '</span></a>' +
            '<h4>' +
            '<a target="' + us[i].target + '" href="' + us[i].href + '" class="media-left">' +
            '<img src="' + us[i].img + '">' +
            '</a>' +
            '<p class="media-body"><a target="' + us[i].target + '" href="' + us[i].href + '">' + us[i].summary + '</a></p>' +
            '</h4>' +
            '<div class="pull-right circular">' +
            '<a target="' + us[i].target + '" href="' + us[i].href + '"><i class="glyphicon glyphicon-chevron-right"></i>' +
            '<i class="us-more btn-link">' + us[i].i + '</i></a>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</div>';

        $("#bg-white").append(html);

    }
}
function getPri(num) {
    for (var i = 0; i < price.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 col-xs-6 banb-tx">' +
            '<img class="" src="' + price[i].img + '" alt=""><br>' +
            '<h3 class="banb-text">' + price[i].name + '</h3>' +
            '</div>';

        $("#edition1").append(html);

    }
}
function getPri1(num) {
    for (var i = 0; i < price1.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 col-xs-6 banb-tx">' +
            '<img class="" src="' + price1[i].img + '" alt=""><br>' +
            '<h3 class="banb-text">' + price1[i].name + '</h3>' +
            '</div>';

        $("#edition2").append(html);

    }
}
// s-nas
function getsNas(num) {
    for (var i = 0; i < sNas.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-4 col-xs-4">' +
            '<ul class="pull-left">' +
            '<li><span>' + sNas[i].span + '</span>' + sNas[i].name + '</li>' +
            '</ul>' +
            '</div>';
        $("#s-notes").append(html);
    }
}
// notes
function getnotes(num) {
    for (var i = 0; i < notes.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-4 col-xs-4">' +
            '<ul class="pull-left">' +
            '<li><span>' + notes[i].span + '</span>' + notes[i].name + '</li>' +
            '</ul>' +
            '</div>'
        $("#notes").append(html);
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
            '<a href="' + exa[i].href + '">' +
            '<h3>' + exa[i].typeName + '</h3>' +
            '</a>' +
            '</div>' +
            '<div class="panel-body">' +
            //
            '<a href="#"><span>' + exa[i].typeInfo + '</span></a><span>|</span>' +
            '<a href="' + exa[i].href + '"><span>' + exa[i].customer + '</span></a>' +
            '<a href="' + exa[i].href + '"><h4>' + exa[i].name + '</h4></a>' +
            '<a href="' + exa[i].href + '"><p>' + exa[i].summary + '</p></a>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<span>' + exa[i].users + '</span>' +
            '<span class="pull-right">' + exa[i].use1 + '</span>' +
            '<span class="pull-right mar">' + exa[i].use2 + '</span>' +
            '</div>' +
            '</div>' +
            '</div>'




        $("#coo_cont").append(html);

    }
}
function getcon1(num) {
    for (var i = 0; i < cont1.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 m-product">' +
            '<div class="m-product-img">' +
            '<img class="center-block" src="' + cont1[i].img + '" alt="">' +
            '</div>' +
            '<div class="m-product-con">' +
            '<h5>' + cont1[i].name + '</h5>' +
            '</div>' +
            '</div>'

        $("#cont1").append(html);

    }
}
function getcon2(num) {
    for (var i = 0; i < cont2.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 m-product">' +
            '<div class="m-product-img">' +
            '<img class="center-block" src="' + cont2[i].img + '" alt="">' +
            '</div>' +
            '<div class="m-product-con">' +
            '<h5>' + cont2[i].name + '</h5>' +
            '</div>' +
            '</div>'

        $("#cont2").append(html);

    }
}
function getcon3(num) {
    for (var i = 0; i < cont3.length; i++) {

        var html =
            '<div class="col-md-4 col-sm-4 m-product">' +
            '<div class="m-product-img">' +
            '<img class="center-block" src="' + cont3[i].img + '" alt="">' +
            '</div>' +
            '<div class="m-product-con">' +
            '<h5>' + cont3[i].name + '</h5>' +
            '</div>' +
            '</div>'

        $("#cont3").append(html);
    }
 }
// function getcon4(num) {
//     for (var i = 0; i < cont4.length; i++) {

//         var html =
//             '<div class="col-md-4 col-sm-4 m-product">' +
//             '<div class="m-product-img">' +
//             '<img class="center-block" src="' + cont4[i].img + '" alt="">' +
//             '</div>' +
//             '<div class="m-product-con">' +
//             '<h5>' + cont4[i].name + '</h5>' +
//             '</div>' +
//             '</div>'

//         $("#cont4").append(html);

//     }
// }
// function getcon5(num) {
//     for (var i = 0; i < cont5.length; i++) {

//         var html =
//             '<div class="col-md-4 col-sm-4 m-product">' +
//             '<div class="m-product-img">' +
//             '<img class="center-block" src="' + cont5[i].img + '" alt="">' +
//             '</div>' +
//             '<div class="m-product-con">' +
//             '<h5>' + cont5[i].name + '</h5>' +
//             '</div>' +
//             '</div>'

//         $("#cont5").append(html);

//     }
// }
// function getcon6(num) {
//     for (var i = 0; i < cont6.length; i++) {

//         var html =
//             '<div class="col-md-4 col-sm-4 m-product">' +
//             '<div class="m-product-img">' +
//             '<img class="center-block" src="' + cont6[i].img + '" alt="">' +
//             '</div>' +
//             '<div class="m-product-con">' +
//             '<h5>' + cont6[i].name + '</h5>' +
//             '</div>' +
//             '</div>'

//         $("#cont6").append(html);

//     }
// }
// function getcon7(num) {
//     for (var i = 0; i < cont7.length; i++) {

//         var html =
//             '<div class="col-md-4 col-sm-4 m-product">' +
//             '<div class="m-product-img">' +
//             '<img class="center-block" src="' + cont7[i].img + '" alt="">' +
//             '</div>' +
//             '<div class="m-product-con">' +
//             '<h5>' + cont7[i].name + '</h5>' +
//             '</div>' +
//             '</div>'

//         $("#cont7").append(html);

//     }
// }
// function getcon8(num) {
//     for (var i = 0; i < cont8.length; i++) {

//         var html =
//             '<div class="col-md-4 col-sm-4 m-product">' +
//             '<div class="m-product-img">' +
//             '<img class="center-block" src="' + cont8[i].img + '" alt="">' +
//             '</div>' +
//             '<div class="m-product-con">' +
//             '<h5>' + cont8[i].name + '</h5>' +
//             '</div>' +
//             '</div>'

//         $("#cont8").append(html);

//     }
// }
//s-nas
function getprog(num) {
    for (var i = 0; i < prog.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-3 m-prog-content">' +
            '<div class="m-prog-cont">' +
            '<span>' + prog[i].span + '</span>' +
            '<p>' + prog[i].p + '</p>' +
            '</div>' +
            '</div>'

        $("#prog").append(html);
    }
}
//nas
function getnas(num) {
    for (var i = 0; i < nas.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-3 m-prog-content">' +
            '<div class="m-prog-cont">' +
            '<span>' + nas[i].span + '</span>' +
            '<p>' + nas[i].p + '</p>' +
            '</div>' +
            '</div>'

        $("#n-nas").append(html);
    }
}

//about
function getexh(num) {
    for (var i = 0; i < exh.length; i++) {
        var html =
            '<div class="col-md-4">' +
            '<div class="e-content">' +
            '<a href="' + exh[i].href + '"><img src="' + exh[i].src + '" alt=""></a>' +
            '<h3><b>' + exh[i].name + '</b></h3>' +
            '<p>' + exh[i].summary + '</p>' +
            '</div>' +
            '<div class="e-content2">' +
            '<h3><b>' + exh[i].name + '</b></h3>' +
            '<p>' + exh[i].summary + '</p>' +
            '<a href="' + exh[i].href + '">' +
            '<p>' + exh[i].p + '></p>' +
            '</a>' +
            '<a href="' + exh[i].href + '"><img src="' + exh[i].src + '" alt=""></a>' +
            '</div>' +
            '</div>'

        $("#exh").append(html);
    }
}
//nav
function getprod2(num) {
    for (var i = 0; i < prod2.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-3 col-xs-3 m-product">' +
            '<div class="n-product-img">' +
            '<a href="' + prod2[i].href + '"> <img class="center-block" src="' + prod2[i].src + '" alt=""></a>' +
            '</div>' +
            '<div class="m-product-con">' +
            '<h5>' + prod2[i].name + '</h5>' +
            //'<span>' + prod2[i].price + '</span>' +
            '</div>' +
            '</div>'

        $("#prod2").append(html);
    }
}
//mach
function getmach(num) {
    for (var i = 0; i < mach.length; i++) {
        var html =
            '<div class="col-md-3 col-sm-3 m-prog-content">' +
            '<div class="m-prog-cont">' +
            '<span>' + mach[i].span + '</span>' +
            '<p>' + mach[i].p + '</p>' +
            '</div>' +
            '<div class="m-img">' +
            '<img src="' + mach[i].src + '" alt="">' +
            '</div>' +
            '</div>'

        $("#mach").append(html);
    }
}
//storage
function getstor(num) {
    for (var i = 0; i < stor.length; i++) {
        var html =
            '<div class="col-md-4 col-sm-6 text-center">' +
            '<div class="fun_stor_img"><img src="' + stor[i].img + '" alt=""></div>' +
            '<div class="fun_stor_h4">' +
            '<h4>' + stor[i].h4 + '</h4>' +
            '</div>' +
            '<div class="fun_stor_p">' +
            '<p>' + stor[i].p + '</p>' +
            '</div>' +
            '</div>'

        $("#stor").append(html);
    }
}

$(document).ready(function () {
    console.log("start ---------");

    getExams(0);
    getUs(0);
    getPro(0);
    getPro2(0);
    getPri(0);
    getsNas(0);
    getnotes(0);
    // getcon1(0);
    // getcon2(0);
    // getcon3(0);
    // getcon4(0);
    // getcon5(0);
    // getcon6(0);
    // getcon7(0);
    // getcon8(0);
    getprog(0);
    getnas(0);
    getexh(0);
    getprod2(0);
    getmach(0);
    getstor(0);
    getsecu(0);
});

