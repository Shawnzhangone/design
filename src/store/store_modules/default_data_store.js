/**
 * Created by shawn on 2018/3/14 0014.
 */
export default {
  state:{ //不同组件模板图片文字数据
    vPageTitle:'',
    vSearch:['输入关键字搜索','搜索目的地、酒店、景点等。'],
    vSlider:[
      ['/design/images/default/slider.png', '/design/images/default/slider.png', '/design/images/default/slider.png'],//0
      ['/design/images/travel/slider1.png', '/design/images/travel/addrbg.png'],//1
      ['/design/images/electric/banner1.png', '/design/images/electric/banner1.png'],//2
      ['/design/images/edu/banner1.png', '/design/images/edu/banner1.png'],//3
      ['/design/images/housekeeping/banner1.png', '/design/images/housekeeping/banner1.png'],//4
      ['/design/images/KTV/banner1.png'],//5 KTV
      ['/design/images/motherAndBaby/banner1.png'],//6 母婴
      ['/design/images/Bodybuilding/banner1.png'],//7 健身
      ['/design/images/photograph/banner1.png'],//8
      ['/design/images/farmProduct/banner1.png'],//9
      ['/design/images/meirong/banner1.png','/design/images/meirong/banner2.png'],//9
      ['/design/images/meirong/banner3.png','/design/images/meirong/banner4.png'],//10
    ],
    vText:[{text: '文本示例'}],
    vQuickNav:[
      [{imgUrl: '/design/images/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //0

      [{imgUrl: '/design/images/travel/qnav1.png', text: '一日游'},
        {imgUrl: '/design/images/travel/qnav2.png', text: '两日游'},
        {imgUrl: '/design/images/travel/qnav3.png', text: '最新活动'},
        {imgUrl: '/design/images/travel/qnav4.png', text: '活动预告'},
        {imgUrl: '/design/images/travel/qnav4.png', text: '活动预告'}], //1

      [{imgUrl: '/design/images/electric/n1.png', text: '豆浆机',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n2.png', text: '果汁机',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n3.png', text: '破壁机',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n4.png', text: '电水壶',linkTo:'multiclass'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //2

      [{imgUrl: '/design/images/electric/n5.png', text: '电饭煲',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n6.png', text: '电压锅',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n7.png', text: '电磁炉',linkTo:'multiclass'},
        {imgUrl: '/design/images/electric/n8.png', text: '料理机',linkTo:'multiclass'},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //3

      [{imgUrl: '/design/images/edu/n1.png', text: '课程',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/n2.png', text: '阅读',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/n3.png', text: '关于',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/n4.png', text: '联系',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //4

      [{imgUrl: '/design/images/edu/b1.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/b2.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/b3.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/edu/b4.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //5

      [{imgUrl: '/design/images/housekeeping/a1.png', text: '衣物清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/a2.png', text: '沙发清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/a3.png', text: '箱包清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/a4.png', text: '皮草清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //6
      [{imgUrl: '/design/images/housekeeping/b1.png', text: '月嫂服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/b2.png', text: '保姆服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/b3.png', text: '家政服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/housekeeping/b4.png', text: '钟点工',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/images/default/shop1.png', text: '分类标题'}], //7
      [
        {imgUrl: '/design/images/Bodybuilding/quick1.png', text: '教练'},
        {imgUrl: '/design/images/Bodybuilding/quick2.png', text: '课程'},
        {imgUrl: '/design/images/Bodybuilding/quick3.png', text: '1V1'},
        {imgUrl: '/design/images/Bodybuilding/quick4.png', text: '训练'},
        {imgUrl: '/design/images/Bodybuilding/quick4.png', text: '训练'},
      ],
      [
        {imgUrl: '/design/images/farmProduct/1.png', text: '全部水果'},
        {imgUrl: '/design/images/farmProduct/2.png', text: '进口水果'},
        {imgUrl: '/design/images/farmProduct/3.png', text: '特价水果'},
        {imgUrl: '/design/images/farmProduct/4.png', text: '本地水果'},
        {imgUrl: '/design/images/farmProduct/4.png', text: '本地水果'},//9
      ],
      [
        {imgUrl: '/design/images/meirong/jifen.png', text: '积分商品'},
        {imgUrl: '/design/images/meirong/taocan.png', text: '超值套餐'},
        {imgUrl: '/design/images/meirong/yuyue.png', text: '在线预约'},
        {imgUrl: '/design/images/meirong/yuyue.png', text: '在线预约'},
        {imgUrl: '/design/images/meirong/yuyue.png', text: '在线预约'},
      ],[
        {imgUrl: '/design/images/meirong/type1.png', text: 'SPA'},
        {imgUrl: '/design/images/meirong/type2.png', text: '口腔'},
        {imgUrl: '/design/images/meirong/type3.png', text: '小气泡'},
        {imgUrl: '/design/images/meirong/type4.png', text: '护肤产品'},
        {imgUrl: '/design/images/meirong/type4.png', text: '护肤产品'},
      ],[
        {imgUrl: '/design/images/meirong/type5.png', text: '男生情节'},
        {imgUrl: '/design/images/meirong/type6.png', text: '眼部'},
        {imgUrl: '/design/images/meirong/type7.png', text: '祛痘'},
        {imgUrl: '/design/images/meirong/type8.png', text: '纹眉'},
        {imgUrl: '/design/images/meirong/type8.png', text: '纹眉'},
      ],[
        {imgUrl: '/design/images/meirong/type9.png', text: '美白'},
        {imgUrl: '/design/images/meirong/type10.png', text: '美睫'},
        {imgUrl: '/design/images/meirong/type11.png', text: '脱毛'},
        {imgUrl: '/design/images/meirong/type12.png', text: '补水'},//13
        {imgUrl: '/design/images/meirong/type12.png', text: '补水'},//13
      ],

    ],
    vImageTextList:[
      [{imgUrl: '/design/images/default/picdefault.svg', text: '文字样式示例',content:"文字文字文字文字文字文字文字文字文字文字字文字文"},
        {imgUrl: '/design/images/default/picdefault.svg', text: '文字样式示例'},
        {imgUrl: '/design/images/default/picdefault.svg', text: '文字样式示例'}],

      [{imgUrl: '/design/images/travel/imgt1.png', text: '清远牛鱼嘴玻璃栈桥一日游'},
        {imgUrl: '/design/images/travel/imgt2.png', text: '揭西黄满寨一日游'},
        {imgUrl: '/design/images/travel/imgt1.png', text: '清远牛鱼嘴玻璃栈桥一日游'}],

      [{imgUrl: '/design/images/edu/c1.png', text: '英语培训班'},
        {imgUrl: '/design/images/edu/c2.png', text: '数学培训班'},
        {imgUrl: '/design/images/default/picdefault.svg', text: '文字样式示例'}],

      [{imgUrl: '/design/images/edu/c3.png', text: '语文培训班'},
        {imgUrl: '/design/images/edu/c4.png', text: '美术培训班'},
        {imgUrl: '/design/images/default/picdefault.svg', text: '文字样式示例'}],

      [
        {imgUrl: '/design/images/Bodybuilding/1.png', text: '鸡胸肉花样吃'},
        {imgUrl: '/design/images/Bodybuilding/2.png', text: '减脂晚餐精选'},
        {imgUrl: '/design/images/Bodybuilding/3.png', text: '饮品怎么喝'},
      ],//4
      [
        {imgUrl: '/design/images/Bodybuilding/4.png', text: '鸡胸肉便当'},
        {imgUrl: '/design/images/Bodybuilding/5.png', text: '卤肉便当'},
        {imgUrl: '/design/images/Bodybuilding/6.png', text: '荞麦便当'},
      ],//5
      [
        {imgUrl: '/design/images/photograph/sanya.png', text: '三亚'},
        {imgUrl: '/design/images/photograph/balidao.png', text: '巴厘岛'},
        {imgUrl: '/design/images/photograph/pujidao.png', text: '普吉岛'},

      ],//6

    ],
    vProductList:[
      [
        {
          img_url: '/design/images/default/picdefault.svg',
          title: '产品名称',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },
        {
          img_url: '/design/images/default/picdefault.svg',
          title: '产品名称',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        }],
      [
        {
          img_url: '/design/images/electric/pro1.png',
          title: '美的(Midea)豆浆机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/electric/pro1.png',
        title: '美的(Midea)豆浆机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },{
        img_url: '/design/images/electric/pro1.png',
        title: '美的(Midea)豆浆机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },
        {
          img_url: '/design/images/electric/pro1.png',
          title: '美的(Midea)豆浆机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        }
      ],
      [
        {
          img_url: '/design/images/electric/pro2.png',
          title: '九阳果汁机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/electric/pro2.png',
        title: '九阳果汁机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },{
        img_url: '/design/images/electric/pro2.png',
        title: '九阳果汁机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },
        {
          img_url: '/design/images/electric/pro2.png',
          title: '九阳果汁机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        }
      ],
      [
        {
          img_url: '/design/images/motherAndBaby/jpg1.jpg',
          title: '待产包',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/motherAndBaby/jpg2.jpg',
        title: '湿巾纸',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'
      }
      ], //3
      [
        {
          img_url: '/design/images/motherAndBaby/jpg3.jpg',
          title: '玻璃奶瓶',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/motherAndBaby/jpg4.jpg',
        title: '硅胶奶瓶',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'
      }
      ], //4
      [
        {
          img_url: '/design/images/farmProduct/rexiao.jpg',
          title: '水果',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/farmProduct/rexiao.jpg',
        title: '水果',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'
      }
      ],//5
      [
        {
          img_url: '/design/images/meirong/tuijian1.png',
          title: '除螨虫',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/meirong/tuijian2.png',
        title: '男生面部护理',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'
      }
      ],//6
      [
        {
          img_url: '/design/images/photograph/balidao.png',
          title: '巴厘岛',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/images/photograph/pujidao.png',
        title: '普吉岛',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'

      }
      ]//7
    ],

    vImage:[
      [{image: '/design/images/default/picdefault.svg'},{image: '/design/images/default/picdefault.svg'},{image: '/design/images/default/picdefault.svg'}],
      [{image: '/design/images/travel/traFree.png'},{image: '/design/images/travel/traFree.png'},{image: '/design/images/travel/traFree.png'}],
      [{image: '/design/images/travel/hot1.png'},{image: '/design/images/travel/hot2.png'},{image: '/design/images/travel/hot2.png'}],
      [{image: '/design/images/travel/hot3.png'},{image: '/design/images/travel/hot4.png'},{image: '/design/images/travel/hot2.png'}],
      [{image: '/design/images/electric/img1.png'},{image: '/design/images/electric/img1.png'},{image: '/design/images/electric/img1.png'}],
      [{image: '/design/images/electric/img2.png'},{image: '/design/images/electric/img2.png'},{image: '/design/images/electric/img2.png'}],//5
      [{image: '/design/images/housekeeping/img1.png'},{image: '/design/images/default/picdefault.svg'},{image: '/design/images/default/picdefault.svg'},],//6 家政
      [{image: '/design/images/housekeeping/img2.png'},{image: '/design/images/housekeeping/img2.png'},{image: '/design/images/housekeeping/img2.png'}],//7
      [{image: '/design/images/housekeeping/img3.png'},{image: '/design/images/housekeeping/img3.png'},{image: '/design/images/housekeeping/img3.png'}],//8
      [{image: '/design/images/KTV/address.png'},{image: '/design/images/KTV/address.png'},{image: '/design/images/KTV/address.png'}],//9 KTV
      [{image: '/design/images/KTV/ambient1.png'},{image:'/design/images/KTV/ambient2.png'},{image:'/design/images/KTV/ambient2.png'}],//10 KTV
      [{image: '/design/images/KTV/ambient3.png'},{image:'/design/images/KTV/ambient4.png'},{image:'/design/images/KTV/ambient4.png'}],//11 KTV
      [{image: '/design/images/KTV/ambient5.png'},{image:'/design/images/KTV/ambient6.png'},{image:'/design/images/KTV/ambient6.png'}],//12 KTV
      [{image: '/design/images/motherAndBaby/jx2.png'},{image: '/design/images/motherAndBaby/jx3.png'},{image: '/design/images/motherAndBaby/jx3.png'},],//13 母婴
      [{image: '/design/images/motherAndBaby/jx.png'},{image: '/design/images/motherAndBaby/jx.png'},{image: '/design/images/motherAndBaby/jx.png'},],//14
      [{image: '/design/images/motherAndBaby/tuijian1.png'},{image: '/design/images/motherAndBaby/tuijian1.png'},{image: '/design/images/motherAndBaby/tuijian1.png'}],//15
      [{image: '/design/images/Bodybuilding/jpjl.png'},{image: '/design/images/Bodybuilding/jpjl.png'},{image: '/design/images/Bodybuilding/jpjl.png'}],//16
      [{image: '/design/images/Bodybuilding/coach1.png'},{image: '/design/images/Bodybuilding/coach2.png'},{image: '/design/images/Bodybuilding/coach3.png'},],//17
      [{image: '/design/images/Bodybuilding/project1.png'}, {image: '/design/images/Bodybuilding/project1.png'},{image: '/design/images/Bodybuilding/project1.png'},],
      [{image: '/design/images/Bodybuilding/project2.png'},{image: '/design/images/Bodybuilding/project2.png'},{image: '/design/images/Bodybuilding/project2.png'},],
      [{image: '/design/images/Bodybuilding/project3.png'},{image: '/design/images/Bodybuilding/project3.png'},{image: '/design/images/Bodybuilding/project3.png'}],
      [{image: '/design/images/photograph/style1.png'},{image: '/design/images/photograph/style2.png'},{image: '/design/images/photograph/style2.png'}],//21
      [{image: '/design/images/photograph/style3.png'},{image: '/design/images/photograph/style4.png'},{image: '/design/images/photograph/style4.png'}],//22
      [{image: '/design/images/photograph/demo3.png'},{image: '/design/images/photograph/demo1.png'},{image: '/design/images/photograph/demo1.png'}],//23
      [{image: '/design/images/photograph/demo1.png'},{image: '/design/images/photograph/style4.png'},{image: '/design/images/photograph/style4.png'}],//24
      [{image: '/design/images/photograph/demo2.png'},{image: '/design/images/photograph/style4.png'},{image: '/design/images/photograph/style4.png'}],//25
      [{image: '/design/images/farmProduct/15.png'},{image: '/design/images/photograph/style4.png'},{image: '/design/images/photograph/style4.png'}],//26
      [{image: '/design/images/farmProduct/16.png'},{image: '/design/images/photograph/style4.png'},{image: '/design/images/photograph/style4.png'}],//27
      [{image: '/design/images/meirong/text1.png'},{image: '/design/images/meirong/text1.png'},{image: '/design/images/meirong/text1.png'},],//28
      [{image: '/design/images/meirong/text11.png'},{image: '/design/images/meirong/text11.png'},{image: '/design/images/meirong/text11.png'},],//
      [{image: '/design/images/meirong/text12.png'},{image: '/design/images/meirong/text12.png'},{image: '/design/images/meirong/text12.png'},],//
      [{image: '/design/images/meirong/text2.png'},{image: '/design/images/meirong/text2.png'},{image: '/design/images/meirong/text2.png'},],//
      [{image: '/design/images/meirong/text21.png'},{image: '/design/images/meirong/text21.png'},{image: '/design/images/meirong/text21.png'},],//
      [{image: '/design/images/meirong/text22.png'},{image: '/design/images/meirong/text22.png'},{image: '/design/images/meirong/text22.png'},],//33
      [{image: '/design/images/meirong/text3.png'},{image: '/design/images/meirong/text3.png'},{image: '/design/images/meirong/text3.png'},],//34
      [{image: '/design/images/meirong/taocan1.png'},{image: '/design/images/meirong/taocan1.png'},{image: '/design/images/meirong/taocan1.png'},],//
      [{image: '/design/images/meirong/taocan2.png'},{image: '/design/images/meirong/taocan2.png'},{image: '/design/images/meirong/taocan2.png'},],//
      [{image: '/design/images/meirong/taocan3.png'},{image: '/design/images/meirong/taocan3.png'},{image: '/design/images/meirong/taocan3.png'},],//
      [{image: '/design/images/meirong/taocan4.png'},{image: '/design/images/meirong/taocan4.png'},{image: '/design/images/meirong/taocan4.png'},],//38
    ],
    vNewsList:[
      [{imgUrl: '/design/images/default/picdefault.svg',title:'文章标题', text: '文字内容文字内容文字内容文字内容文字内容文字内容内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/default/picdefault.svg',title:'文章标题', text: '文字内容文字内容文字内容文字内容文字内容文字内容内容文字内容',"date":"2018-06-06"}],
      [{imgUrl: '/design/images/travel/new1.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/travel/new2.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/travel/new3.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"}],

      [{imgUrl: '/design/images/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"}],

      [
        {
          imgUrl: '/design/images/Bodybuilding/7.jpg',
          title: '鸡胸肉的花样吃法，吃出完美身材',
          text: '【原料】2、3盎司鸡胸肉切片 12根芦笋2茶勺烧烤酱 (低盐、低脂)',"date":"2018-06-06"
        },{
        imgUrl: '/design/images/Bodybuilding/8.jpg',
        title: '健身喝牛奶好还是豆浆好？牛奶豆浆大PK',
        text: '众所周知，减脂餐对健身减肥是非常重要的一个环节！小编今天整理...',"date":"2018-06-06"
      },{
        imgUrl: '/design/images/Bodybuilding/9.jpg',
        title: '葡萄干最好的“健身运动零食“',
        text: '牛奶、豆浆，两种饮料都是不少健身爱好者的早餐之选。大家...',"date":"2018-06-06"
      },
      ], //3
      [{imgUrl: '/design/images/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},], //4
      [{imgUrl: '/design/images/photograph/balidao.png',title: '巴厘岛',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/photograph/pujidao.png',title: '普吉岛',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/images/photograph/sanya.png',title: '三亚',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},], //5

      [{imgUrl: '/design/images/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
        {imgUrl: '/design/images/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
        {imgUrl: '/design/images/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
      ], //6
    ],
    vClassify:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/images/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            }]
          },
          {title:'分类二',
            product:[]
          },
          {title:'分类三',
            product:[]
          }
        ]
      },//default
      {proData:[
        {title:'热门',
          product:[{
            img_url: '/design/images/travel/travelFind1.png',
          },{
            img_url: '/design/images/travel/travelFind2.png',
          },{
            img_url: '/design/images/travel/travelFind3.png',
          }]
        },
        {title:'热门'},
        {title:'热门'},
        {title:'热门'}
      ]},
      {
        proData:[
          {title:'衣物清洗',
            product:[{
              img_url: '/design/images/default/picdefault.svg',
              title: '全棉衬衫柔软清洗',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: '冬季单件羽绒服干洗',
              new_price: '30',
              old_price: '',
              sales: '122',
            }]
          },
          {title:'沙发清洗',
            product:[
              {
                img_url: '/design/images/default/picdefault.svg',
                title: '布艺沙发',
                new_price: '10/㎡',
                old_price: '',
                sales: '122',
              }
            ]
          },
          {title:'箱包清洗',
            product:[]
          },{title:'皮草清洗',
            product:[]
          },{title:'家政服务',
            product:[]
          },{title:'保姆服务',
            product:[]
          },
        ]
      },//家政
      {
        proData:[
          {title:'进口水果',
            product:[{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            }]
          },
          {title:'本地水果',
            product:[{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/images/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            }]
          },
          {title:'特价水果',
            product:[]
          },{title:'全部水果',
            product:[]
          },{title:'家政服务',
            product:[]
          },{title:'保姆服务',
            product:[]
          },
        ]
      },//家政
    ],
    vVideoClassify:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/images/default/video.png',
              title: '视频名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/video.png',
              title: '视频名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/video.png',
              title: '视频名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            }]
          },
          {title:'分类二',
            product:[]
          },
          {title:'分类三',
            product:[]
          }
        ]
      },//default
    ],
    vMulticlass:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/images/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            }
            ]
          },
          {title:'分类二',
            product:[]
          },
          {title:'分类三',
            product:[]
          },{title:'分类四',
            product:[]
          }
        ]},//default
      {
        proData: [
          {
            title: '一日游',
            product: [{
              img_url: '/design/images/travel/kzxz.png',
              title: "成都一日游",
              id:"10"
            },
              {
                img_url: '/design/images/travel/ems.png',
                title: "峨眉山一日游",
                id:"10"
              },
              {
                img_url: '/design/images/travel/lsdf.png',
                title: "乐山一日游",
                id:"10"
              },
              {
                img_url: '/design/images/travel/jzg.png',
                title: "九寨沟一日游",
                id:"10"
              },

            ]
          },
          {
            title: '两日游',
            product: []
          }
        ]
      },
      {
        proData: [
          {
            title: '豆浆机',
            product: [{
              img_url: '/design/images/electric/n1.png',
              title: "美的(Mediea)豆浆机",
              id:"11",
              linkTo:'productdetailPage'
            },
              {
                img_url: '/design/images/electric/n1.png',
                title: "Joyoung/九阳豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },
              {
                img_url: '/design/images/electric/n1.png',
                title: "Joyoung/九阳豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },
              {
                img_url: '/design/images/electric/n1.png',
                title: "美的(Mediea)豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },

            ]
          },
          {
            title: '果汁机',
            product: []
          },
          {
            title: '破壁机',
            product: []
          },
          {
            title: '电水壶',
            product: []
          }
        ]
      },
      {
        proData: [
          {
            title: '小学班',
            product: [{
              img_url: '/design/images/edu/c1.png',
              title: "英语培训",
              id:"11",
              linkTo:'productList'
            },
              {
                img_url: '/design/images/edu/c2.png',
                title: "数学培训",
                id:"11",
                linkTo:'productList'
              },
            ]
          },
          {
            title: '初中班',
            product: []
          },{
            title: '艺术班',
            product: []
          },{
            title: '阅读',
            product: []
          }
        ]
      },
      {
        proData: [
          {
            title: '饮料小吃',
            product: [{
              img_url: '/design/images/KTV/xiaochi.jpg',
              title: "汽水",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
          {
            title: '酒水套餐',
            product: [{
              img_url: '/design/images/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '节假日套餐',
            product: [{
              img_url: '/design/images/KTV/ktv.jpg',
              title: "小包",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '工作日',
            product: [{
              img_url: '/design/images/KTV/ktv.jpg',
              title: "中包",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
        ]
      },//ktv
      {
        proData: [
          {
            title: '孕妈用品',
            product: [{
              img_url: '/design/images/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
          {
            title: '宝宝洗护',
            product: [{
              img_url: '/design/images/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '哺育喂养',
            product: [{
              img_url: '/design/images/motherAndBaby/jpg3.jpg',
              title: "奶瓶",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg4.jpg',
              title: "奶瓶",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/images/motherAndBaby/jpg4.jpg',
              title: "奶瓶",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
        ]
      },//muyin
      {
        proData: [
          {
            title: '私人定制',
            product: [
              {
                img_url: '/design/images/photograph/sanya.png',
                title: "三亚",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/photograph/pujidao.png',
                title: "普吉岛",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/photograph/balidao.png',
                title: "巴厘岛",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '个性风格',
            product: [{
              img_url: '/design/images/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '梦幻风格',
            product: [{
              img_url: '/design/images/photograph/style2.png',
              title: "梦幻",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '古典风格',
            product: [{
              img_url: '/design/images/photograph/style3.png',
              title: "古典",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '室内风格',
            product: [{
              img_url: '/design/images/photograph/style4.png',
              title: "室内",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
        ]
      },//sheying //6
      {
        proData: [
          {
            title: '方式一',
            product: [
              {
                img_url: '/design/images/Bodybuilding/7.jpg',
                title: "鸡胸肉",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/Bodybuilding/8.jpg',
                title: "牛奶",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/Bodybuilding/9.jpg',
                title: "豆浆",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '方式二',
            product: [{
              img_url: '/design/images/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '方式三',
            product: [{
              img_url: '/design/images/photograph/style2.png',
              title: "梦幻",
              id:"11",
              linkTo:'productList'
            },
            ]
          }
        ]
      },
      {
        proData: [
          {
            title: '方式一',
            product: [
              {
                img_url: '/design/images/meirong/wenzhang1.jpg',
                title: "面膜",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/meirong/baoshi.png',
                title: "补水保湿",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/images/meirong/tuijian4.png',
                title: "美瞳",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '方式二',
            product: [{
              img_url: '/design/images/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '方式三',
            product: [{
              img_url: '/design/images/photograph/style2.png',
              title: "梦幻",
              id:"11",
              linkTo:'productList'
            },
            ]
          }
        ]
      },//8
    ],
    vVideoMulticlass:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/images/default/video.png',
              title: "二级分类",
              name:'视频名称',
            },{
              img_url: '/design/images/default/video.png',
              title: "二级分类",
              name:'视频名称',
            },{
              img_url: '/design/images/default/video.png',
              title: "二级分类",
              name:'视频名称',
            },{
              img_url: '/design/images/default/video.png',
              title: "二级分类",
              name:'视频名称',
            }
            ]
          },
          {title:'分类二',
            product:[]
          },
          {title:'分类三',
            product:[]
          },{title:'分类四',
            product:[]
          }
        ]},//default
    ],
    vUserCenter:[
      //电商
      {img:"/design/images/default/userCenter.jpg",
        items:[
          {
            icon:'icon-pay',
            title:'待付款'
          },{
            icon:'icon-send',
            title:'待发货'
          },{
            icon:'icon-deliver',
            title:'待收货'
          },{
            icon:'icon-comment',
            title:'待评价'
          },{
            icon:'icon-refund',
            title:'退换货'
          },
        ],
      },
      // 预约版本
      {
      img:"/design/images/travel/userCenter1.png",
        items:[{
          icon:'icon-pay',
          title:'待付款'
        },{
          icon:'icon-send',
          title:'已报名'
        },{
          icon:'icon-comment',
          title:'待评价'
        },{
          icon:'icon-refund',
          title:'已退出'
        }],
      },
      //到店
      {
      img:"/design/images/travel/userCenter.png",
        items:[{
          icon:'icon-pay',
          title:'待付款'
        },{
          icon:'icon-send',
          title:'待确认'
        },{
          icon:'icon-comment',
          title:'已确认'
        },{
          icon:'icon-comment',
          title:'已完成'
        },{
          icon:'icon-refund',
          title:'已取消'
        }
        ],
      },

    ],
    vVideo:[
      [{imgUrl:'/design/images/default/video.png',text:'标题标题标题'},{imgUrl:'/design/images/default/video.png',text:'标题标题标题'},{imgUrl:'/design/images/default/video.png',text:'标题标题标题'}]
    ],
    vVideoList:[
      [{
      img_url: '/design/images/default/video.png',
      title: '视频名称',
      new_price: '120',
      old_price: '169',
      sales: '122',
      stock: '999',
      cart_icon: '0'
    },
      {
        img_url: '/design/images/default/video.png',
        title: '视频名称',
        new_price: '120',
        old_price: '169',
        sales: '122',
        stock: '999',
        cart_icon: '0'
      },]
    ],
    //templet
    cart:[
      [{
        img:'/design/images/default/picdefault.svg',
        title:'商品名称示例',
        price:'120',
        id:'0'
      },{
        img:'/design/images/default/picdefault.svg',
        title:'商品名称示例',
        price:'120',
        id:'0'
      }
      ],

      [{
        img:'/design/images/electric/pro1.png',
        title:'美的(Midea)豆浆机',
        price:'200',
        id:'0'
      },{
        img:'/design/images/electric/pro2.png',
        title:'九阳果汁机',
        price:'200',
        id:'0'
      }
      ],

      [{
        img:'/design/images/motherAndBaby/jpg3.jpg',
        title:'玻璃奶瓶',
        price:'120',
        id:'0'
      },{
        img:'/design/images/motherAndBaby/jpg2.jpg',
        title:'湿巾纸',
        price:'200',
        id:'0'
      }
      ],

      [{
        img:'/design/images/farmProduct/rexiao.jpg',
        title:'阳光金果',
        price:'120',
        id:'0'
      },{
        img:'/design/images/farmProduct/rexiao.jpg',
        title:'阳光金果',
        price:'200',
        id:'0'
      }
      ],//3

      [{
        img:'/design/images/meirong/tuijian1.png',
        title:'除螨虫',
        price:'120',
        id:'0'
      },{
        img:'/design/images/meirong/tuijian2.png',
        title: '男生面部护理',
        price:'200',
        id:'0'
      }
      ],
    ],
    vForm:[{imgUrl:'/design/images/default/formBank.png',text:'兴业银行申请表单'}],

    vUserCenterNow:{img:"/design/images/default/userCenter.jpg",
      items:[
        {
          icon:'icon-pay',
          title:'待付款'
        },{
          icon:'icon-send',
          title:'待发货'
        },{
          icon:'icon-deliver',
          title:'待收货'
        },{
          icon:'icon-comment',
          title:'待评价'
        },{
          icon:'icon-refund',
          title:'退换货'
        },
      ],
    },

  },
  // caseData:[
  //   {caseID:1,
  //     module: {
  //       text:[{
  //
  //       }],
  //     }
  //   },
  // ],
  // let ind = this.pData.ind ? this.pData.ind : 0 ,
//          module = this.pData.caseId ?
//            this.$store.state.caseData.case.find(caseID => caseID.id === this.pData.caseId).module :
//            this.$store.state.defaultData;
//          return module.vClassify[ind]
}



