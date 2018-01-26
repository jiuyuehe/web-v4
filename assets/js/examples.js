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
        src: "../assets/images/pr/2.png"
    },
    {
        type: 2,
        span: "内存容量",
        p: "2GB DDR3 RAM",
        src: "../assets/images/pr/3.png"
    },
    {
        type: 3,
        span: "高性能",
        p: "读取450MB/S <br>写入400MB/S",
        src: "../assets/images/pr/4.png"
    },
    {
        type: 4,
        span: "扩展性",
        p: "可扩充16个硬盘",
        src: "../assets/images/pr/5.png"
    },
]
//about
var exh = [
    {
        type: 1,
        href: "ding.html",
        src: "../assets/images/a/a-dd.png",
        name: "钉钉集成",
        summary: "实现钉钉用户免登云盘，并能一键导入组织架构，避免重复工作",
        p: "点击了解详情>"
    },
    {
        type: 2,
        href: "xz.html",
        src: "../assets/images/a/a-xz.png",
        name: "协作办公",
        summary: "office在线编辑，权限、版本管理精细，可一键发送大文件给客户",
        p: "点击了解详情>"
    },
    {
        type: 3,
        href: "knowLedge.html",
        src: "../assets/images/a/a-zsk.png",
        name: "知识库",
        summary: "常见与客户沟通的技巧，经典案例的解决方案",
        p: "点击了解详情>"
    },
]


// examples
var examples = [
    {
        id: 10,
        name: "基于会议文档共享存储与文档同屏",
        type: 1,
        type2: 3,
        typeName: '政府机关',
        typeInfo: "事业单位",
        customer: '深圳海关',
        summary: '一粒云为机关领导层会议提供了电子化文档共享，基于Ipad 的同屏会议，减轻了领导审批巨多会议资料的麻烦。',
        users: 100,
        use1: '会议文档共享',
        use2: '同屏同步展示'
    },
    {
        id: 11,
        name: "重要资料文件共享，大文件外发",
        type: 1,
        type2: 2,
        typeName: '政府机关',
        typeInfo: "事业单位",
        customer: '重庆市璧山区规划局',
        summary: '一粒云为重庆市璧山区规划局, 提供了重要资料文件集中管理共享，大文件通过链接进行外发，通过密码，时间进行链接安全设置',
        users: 50,
        use1: '集中存储',
        use2: '外链分享'
    },
    {
        id:12,
        name: "企业历史文档存储与共享",
        type: 1,
        type2: 2,
        typeName: "制造行业",
        typeInfo: "国有企业",
        customer: '山西省人力资源和社会保障厅',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: 50,
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 13,
        name: "高效文件分发，数据加密存储",
        type: 1,
        type2: 4,
        typeName: '政府机关',
        typeInfo: "事业单位",
        customer: '石柱县公安局',
        summary: '一粒云文件分发高效的解决了200多名民警对紧急事情的积极响应，使用一粒云防止机要文件在微信qq等互联网工具上传播',
        users: 200,
        use1: '文件高效分发',
        use2: '加密储存'
    },
    {
        id: 14,
        name: "全省科研数据分布式存储共享",
        type: 1,
        type: 6,
        typeName: '政府机关',
        typeInfo: "事业单位",
        customer: '广西省科技厅',
        summary: '我们打造了“科技云”，用来做全省范围内的科研机构、人员的资料共享，能对数据进行安全管控，可控范围内分享，符合国家对网络空间共享与安全的要求',
        users: 3000,
        use1: '网盘应用',
        use2: '分布式、加密储存'
    },


    {
        id: 20,
        name: "教育资料共享，教育知识库打造",
        type: 2,
        type2: 6,
        typeName: "教育行业",
        typeInfo: "事业单位",
        customer: '龙湾教育局',
        summary: '一粒云很好点解决了我们跨学校资料传递、协同工作，实现了知识点的共享，领导对老师职称评选也有直接的管理和清晰的体现...',
        users: 3500,
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 21,
        name: "科研资料私有加密存储",
        type: 2,
        type2: 3,
        typeName: "教育行业",
        typeInfo: "高教",
        customer: '复旦大学深圳研究院',
        summary: '我们用一粒云部署在我们从国外购买的智能安全服务器上，一粒云解决了数据共享的问题，同时一粒云底层对文件存储做了二次加密',
        users: 100,
        use1: '加密存储',
        use2: '数据共享'
    },
    {
        id: 22,
        name: "虚拟桌面与云盘分离数据存储",
        type: 2,
        type2: 6,
        typeName: "教育行业",
        typeInfo: "高教",
        customer: '重庆师范大学',
        summary: '利用一粒云盘以及其与vmware 虚拟桌面集成的方案，实现用户虚拟桌面数据，电脑，手机多端共享，解决了虚拟桌面存储成本过高的问题',
        users: 1000,
        use1: 'vmware方案',
        use2: '数据互通'
    },
    {
        id: 23,
        name: "教育资料共享，教育知识库打造",
        type: 2,
        type2: 4,
        typeName: "教育行业",
        typeInfo: "高教",
        customer: '安徽三联学院交通工程学院',
        summary: '一粒云很好点解决了我们校区资料的共享问题，存储问题，并且增加了移动办公这个应用，符合目前我校信息化的技术要求',
        users: 300,
        use1: '云盘应用',
        use2: '移动办公'
    },

    {
        id: 24,
        name: "教师教案共享，不再需要带U盘上课",
        type: 2,
        type2: 4,
        typeName: "教育行业",
        typeInfo: "普教",
        customer: '重庆市外语学校',
        summary: '在购存储服务器的时候，发现了一粒云，深入测试后发现与我们的需求非常贴切，目前主要用来给老师存储教案，解决使用U盘无法共享的问题',
        users: 300,
        use1: '云盘应用',
        use2: '教案共享'
    },
    {
        id: 25,
        name: "教师教案共享，在云盘中寻找资料",
        type: 2,
        type2: 3,
        typeName: "教育行业",
        typeInfo: "普教",
        customer: '重庆市求精中学',
        summary: '机缘巧合我们发现一粒云在教育这方便做了很多尝试与工作，我们使用一粒云主要就是用来做老师的资料管理，上课时候切换帐号就能找到资料',
        users: 100,
        use1: '云盘应用',
        use2: '教案共享'
    },



    {
        id: 30,
        name: "小康云盘成为集团的文件中心",
        type: 3,
        type2: 6,
        typeName: '大型企业',
        typeInfo: "制造行业",
        customer: '东风小康',
        summary: '一粒云为东风小康量身打造了一个符合集团企业管理规范，电子文档标准化储存的小康云盘，大大简化了之前的存储流程',
        users: 5000,
        use1: '高效审批',
        use2: '集中存储'
    },
    {
        id: 31,
        name: "集团共享文件的权限细分管理",
        type: 3,
        type2: 4,
        typeName: '大型企业',
        typeInfo: "能源行业",
        customer: '神华国华（舟山）发电厂',
        summary: '为企业提供强大海量文件存储，管理，共享，协作功能,支持系统管理员权限、部门管理员权限与普通用户个人权限“三权分立”的功能。',
        users: 200,
        use1: '集中存储',
        use2: '精细化权限'
    },
    {
        id: 32,
        name: "规范管理企业海量知识文件",
        type: 3,
        type2: 4,
        typeName: "中型企业",
        typeInfo: "制造行业",
        customer: '浙江巨久轮毂有限公司',
        summary: '使用一粒云盘管理企业文件，利用一粒云分布式文件系统，将原来存储在Samba上的文件全部迁移到云盘中，标准业务产品文档设立访问权限，规范化',
        users: 300,
        use1: '云盘应用',
        use2: '高效查询'
    },

    {
        id: 33,
        name: "企业储存多重备份，规范化使用",
        type: 3,
        type2: 5,
        typeName: "大型企业",
        typeInfo: "制造行业",
        customer: '潍柴（重庆）汽车有限公司',
        summary: '在参加一粒云重庆渠道会议中沟通后发现一粒云是符合我们企业目前对知识数据的管理理念的，我们购买了一粒云的存储一体机，来规范电子化文档的使用',
        users: 500,
        use1: '云盘应用',
        use2: '规范化使用'
    },
    {
        id: 34,
        name: "产品设计方案，业务流程规范",
        type: 3,
        type2: 4,
        typeName: "中型企业",
        typeInfo: "制造行业",
        customer: '宏辉光电',
        summary: '我们主要是用来做业务流程数据存储的，因为我们业务员多，产品多，报价多。一粒云他有一个规划业务资料的流程，按照他的流程使用，资料，人员职责非常清晰',
        users: 300,
        use1: '云盘应用',
        use2: '流程管理'
    },
    {
        id: 35,
        name: "外贸业务数据共享，权限管理",
        type: 3,
        type2: 4,
        typeName: "制造行业",
        typeInfo: "中型工厂",
        customer: '绿能新源',
        summary: '一粒云主要是性价比高，我们主要是生产外销型企业，产品种类，资料是非常多的，随着业务量增加，容易混乱。一粒云这个权限功能，分享功能是我们常用的。',
        users: 300,
        use1: '云盘应用',
        use2: '权限管理'
    },


    {
        id: 40,
        name: "个人手机数据存储",
        type: 4,
        type2: 6,
        typeName: "国有企业",
        typeInfo: "通讯行业",
        customer: '广西联通',
        summary: '广西联通“沃云盘”，基于一粒云基础打造，提供全端访问。为全广西省900w用户提供可靠手机相册、通讯录备份功能。稳定运行4年，整体存储空间达到数200TB。',
        users: 9000000,
        use1: '手机资料存储',
        use2: '定制化'
    },
    {
        id:41,
        name: "网盘管理方式应用",
        type: 4,
        type2: 4,
        typeName: "制造行业",
        typeInfo: "国有企业",
        customer: '中集智能',
        summary: '中集智能在IT智能化管理进行深入探索，旨在为“中集集团”提供更加先进的IT管理方式，使用私有云盘来做重要资料文件管理，是其现行的管理方式之一',
        users: 300,
        use1: '网盘应用',
        use2: '集中管理'
    },

    {
        id: 42,
        name: "与vmware虚拟桌面方案集成",
        type: 4,
        type2: 6,
        typeName: "建筑行业",
        typeInfo: "事业单位",
        customer: '重庆建工集团股份有限公司',
        summary: '随着虚拟桌面技术在集团内部应用，与云盘集成大大降低了数据存储的成本，同时打通了虚拟桌面数据隔离，读取不便的情况，增加移动端访问修改数据的能力',
        users: 3000,
        use1: '虚拟桌面集成',
        use2: '云盘应用'
    },
    {
        id: 43,
        name: "企业资料图书库",
        type: 4,
        type2: 4,
        typeName: "建筑行业",
        typeInfo: "大型企业",
        customer: '遂资高速公路有限公司',
        summary: '我们用一粒云打造个内部的一个资料库，我们叫智能图书馆。自动识别出被阅读，分享，下载次数最多的电子资料，统计资料的热度，重要程度。',
        users: 300,
        use1: '定制化',
        use2: '云盘应用'
    },

    {
        id: 50,
        name: "广告类文件，合同类文件存储",
        type: 5,
        type2: 2,
        typeName: "广告传媒行业",
        typeInfo: "小微企业",
        customer: '神宇传媒',
        summary: '用一粒云后改变了我们多年使用光盘存储的习惯，大大的节省了成本，大大的提高资料搜索的效率，现在用手机也可以找我们所有的资料',
        users: 50,
        use1: '知识点积累',
        use2: '高效查询'
    },
    {
        id: 51,
        name: "广告类文件存储，设计资源共享",
        type: 5,
        type2: 1,
        typeName: "广告传媒行业",
        typeInfo: "小微企业",
        customer: '沃菲数字传媒有限公司',
        summary: '使用了很多年的传统的共享方式，也出过很多问题，一直在寻找一个可以完全替代的传统的共享方式的解决方案，一粒云目前可以完全替代的',
        users: 30,
        use1: '网盘应用',
        use2: '高效查询'
    },

    {
        id:53,
        name: "企业培训文件，机要文件的存储与管理",
        type: 5,
        type2: 3,
        typeName: "美容医疗行业",
        typeInfo: "集团企业",
        customer: '上海联美医疗管理有限公司',
        summary: '我们主要使用一粒云做培训资料的存储，之前只用视频外发的方式，导致花了大价钱拍的视频变成他人的资源，现在使用加密分享的方式',
        users: 100,
        use1: '云盘应用',
        use2: '安全分享'
    },
    {
        id:54,
        name: "云盘一体机在企业内部应用",
        type: 5,
        type2: 3,
        typeName: "医疗行业",
        typeInfo: "中小企业",
        customer: '重庆符于嘉医药有限公司',
        summary: '我们内部使用一粒云一体机，将之前历史积累下来的数据全部导入到企业共享空间，然后根据AD域设置了权限，大大提高了安全性。',
        users: 100,
        use1: '云盘应用',
        use2: '高效查询'
    },
    {
        id:55,
        name: "业务资料存储，快速收发文件",
        type: 5,
        type2: 4,
        typeName: "金融行业",
        typeInfo: "大型企业",
        customer: '西南证券',
        summary: '一粒云用来给业务员存储客户资料，客户做金融业务的时候资料非常多，利用一粒云可以快速的分享标准的资料给客户填写打印，快速收集客户反馈的电子资料。',
        users: 230,
        use1: '资料扫描',
        use2: '快速收发文件'
    },

    {
        id: 56,
        name: "实现业务、财务、产品资料文件的",
        type: 5,
        type2: 3,
        typeName: "运输/物流/仓储行业",
        typeInfo: "中型企业",
        customer: '斑马物流',
        summary: '我们与一粒云合作，提出了基于云盘文件根据权限划分的业务协作流程，财务流程，产品资料分发流程。在我司广泛使用，并推广到同类公司中运用',
        users: 150,
        use1: '流程规划',
        use2: '网盘应用'
    },
    {
        id:52,
        name: "业务文档管理，版本历史",
        type: 5,
        type2: 2,
        typeName: "制造行业",
        typeInfo: "国有企业",
        customer: '辽宁融兴房地产咨询顾问有限公司',
        summary: '我们主要使用一粒云做业务资料的流程化处理，也是根据一粒云业务流程规范来的，目前体验还不错，我们也根据我们的业务设置了更多的权限',
        users: 50,
        use1: '历史版本',
        use2: '云盘应用'
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
        name: "售前与需求",
        img: "../assets/images/us/u-kf.png",
        summary: "为您解忧，请提出您的需求和疑问。<br/> 秦经理 ：18607089604 ",
        i: "了解更多>>"
    },
    {
        type: 5,
        target: "_self",
        href: "#",
        name: "合作渠道",
        img: "../assets/images/us/u-qd.png",
        summary: "用工匠的精神打磨产品，做您坚实的技术后盾，与您同行。<br/> 肖经理 : 18028723770",
        i: "了解更多>>"
    },
    {
        type: 6,
        target: "_blank",
        href: "http://wpa.qq.com/msgrd?v=3&uin=2941390949&site=qq&menu=yes/",
        name: "售后服务",
        img: "../assets/images/us/u-sh.png",
        summary: "售后QQ 群：492758719 ，<br> 售后请联系：0755-3394-2625",
        i: "了解更多>>"
    },

]
// fun
var product = [
    {
        type: 1,
        src: "fun_storage.html",
        img2:"../assets/images/fun/p-cc1.png",
        img: "../assets/images/fun/p-cc.png",
        name: "海量存储",
        summary: "分布式文件存储，基于组织架构的文件夹划分，归类明确，丰富权限配置，员工存储量、空间预警一目了然。 "

    },
    {
        type: 2,
        src: "fun_jurisdiction.html",
        img2: "../assets/images/fun/p-qx1.png",
        img: "../assets/images/fun/p-qx.png",
        name: "精细权限",
        summary: "" +
        "三个逻辑空间划分，五种数据收集方式。" +
        "14个精细权限划分，数据更快更便捷的收集，权限场景更简单设定；"

    },
    {
        type: 3,
        src: "xz.html",
        img2: "../assets/images/fun/p-xz1.png",
        img: "../assets/images/fun/p-xz.png",
        name: "便捷协作",
        summary: "基于web的office文件在线编辑，基于PC的自动编辑上传，文件动态消息推送、安全外链一键发送大文件给客户。"
    },
    {
        type: 4,
        src: "knowLedge.html",
        img2: "../assets/images/fun/p-zsk1.png",
        img: "../assets/images/fun/p-zsk.png",
        name: "知识库",
    summary: "企业知识、经验的传承。 岗位技能需求、经验的汇聚，便于员工交接。多维度标签查找知识，知识入库与审批，贡献值值排行榜。"
    },
    {
        type: 5,
        src: "fun_security.html",
        img2: "../assets/images/fun/p-aq1.png",
        img: "../assets/images/fun/p-aq.png",
        name: "安全加密",
        summary: "为了保护您企业数据的安全，我们底层采用自研分布式文件系统分块、加密、压缩存储。 对账号密码等信息进行AES、SHA256双重加密传输。应用访问协议支持HTTPS。"
    },
    {
        type: 6,
        src: "ding.html",
        img2: "../assets/images/fun/p-dz1.png",
        img: "../assets/images/fun/p-dz.png",
        name: "集成与定制",
        summary: "从技术角度出发支持您的需求，支持UI皮肤，功能，扩展组建的定制。 针对您工作中特有的问题，提供专业的解决方案。"

    }

]
// product2
var product2 = [
    {
        type: 1,
        img: "../assets/images/fun/p-aq.png",
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
        type: 2,
        img: "../assets/images/fun/p-qx.png",
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
        type: 3,
        img: "../assets/images/fun/p-xz.png",
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
        type: 4,
        img: "../assets/images/fun/p-zsk.png",
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
        type: 5,
        img: "../assets/images/fun/p-cc.png",
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
        type: 6,
        img: "../assets/images/fun/p-dz.png",
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
            '<a href="' + product[i].src + '" class="">' +
            '<div class="product_img">'+
            '<img src="' + product[i].img2 + '" alt="" class="product_img_top">' +
            '<img src="' + product[i].img + '" alt="" class="product_img_bottom">' +
            '</div><br>'+
            '<h4>' + product[i].name + '</h4>' +
            '</a>' +
            '<p>' + product[i].summary + '<a href='+product[i].src +'>详情...</a>'

            '</p>' +
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
        filterEx = [];
        $("#coo_cont").empty();
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
            '<h3>' + exa[i].customer + '</h3>' +
            '</div>' +
            '<div class="panel-body">' +
            //
            '<span>' + exa[i].typeInfo + '</span><span>|</span>' +
            '<span>' + exa[i].typeName + '</span>' +
            '<h4>' + exa[i].name + '</h4>' +
            '<p class="ex-sum">' + exa[i].summary + '</p>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<span>' + exa[i].users + '以上用户</span>' +
            '<span class="pull-right">' + exa[i].use1 + '</span>' +
            '<span class="pull-right mar">' + exa[i].use2 + '</span>' +
            '</div>' +
            '</div>' +
            '</div>'




        $("#coo_cont").append(html);

    }
}
//
function getEx(num) {

    if (num) {

        // todo  filter the type2 value num
        //    filterEx = filter (examples);

        filterEx = [];
        $("#coo_cont2").empty();


        for (var i = 0; i < examples.length; i++) {

            if (examples[i].type2 == num) {

                filterEx.push(examples[i]);
            }

        }

    } else {
        console.log(filterEx);
        filterEx = [];
        $("#coo_cont2").empty();
        filterEx = examples;
        console.log(filterEx);
    }

    insertEx(filterEx);
}

function insertEx(exa) {


    for (var i = 0; i < exa.length; i++) {

        var html =
            '<div href=' + exa[i].url + ' class="col-md-4">' +
            '<div class="panel panel-default coo-panel">' +
            '<div class="panel-heading">' +
            '<h3>' + exa[i].customer + '</h3>' +
            '</div>' +
            '<div class="panel-body">' +
            //
            '<span>' + exa[i].typeInfo + '</span><span>|</span>' +
            '<span>' + exa[i].typeName + '</span>' +
            '<h4>' + exa[i].name + '</h4>' +
            '<p class="ex-sum">' + exa[i].summary + '</p>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<span>' + exa[i].users + '以上用户</span>' +
            '<span class="pull-right">' + exa[i].use1 + '</span>' +
            '<span class="pull-right mar">' + exa[i].use2 + '</span>' +
            '</div>' +
            '</div>' +
            '</div>'




        $("#coo_cont2").append(html);

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
    getEx(0)
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

