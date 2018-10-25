/**
 * Created by shawn on 2018/3/14 0014.
 */
export default {
  state:{ //不同组件模板图片文字数据
    vPageTitle:'',
    vSearch:['输入关键字搜索','搜索目的地、酒店、景点等。'],
    vSlider:[
      ['/design/default/slider.png', '/design/default/slider.png', '/design/default/slider.png'],//0
      ['/design/travel/slider1.png', '/design/travel/addrbg.png'],//1
      ['/design/electric/banner1.png', '/design/electric/banner1.png'],//2
      ['/design/edu/banner1.png', '/design/edu/banner1.png'],//3
      ['/design/housekeeping/banner1.png', '/design/housekeeping/banner1.png'],//4
      ['/design/KTV/banner1.png'],//5 KTV
      ['/design/motherAndBaby/banner1.png'],//6 母婴
      ['/design/Bodybuilding/banner1.png'],//7 健身
      ['/design/photograph/banner1.png'],//8
      ['/design/farmProduct/banner1.png'],//9
      ['/design/meirong/banner1.png','/design/meirong/banner2.png'],//9
      ['/design/meirong/banner3.png','/design/meirong/banner4.png'],//10
    ],
    vText:[{text: '文本示例'}],
    vQuickNav:[
      [{imgUrl: '/design/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //0

      [{imgUrl: '/design/travel/qnav1.png', text: '一日游'},
        {imgUrl: '/design/travel/qnav2.png', text: '两日游'},
        {imgUrl: '/design/travel/qnav3.png', text: '最新活动'},
        {imgUrl: '/design/travel/qnav4.png', text: '活动预告'},
        {imgUrl: '/design/travel/qnav4.png', text: '活动预告'}], //1

      [{imgUrl: '/design/electric/n1.png', text: '豆浆机',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n2.png', text: '果汁机',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n3.png', text: '破壁机',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n4.png', text: '电水壶',linkTo:'multiclass'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //2

      [{imgUrl: '/design/electric/n5.png', text: '电饭煲',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n6.png', text: '电压锅',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n7.png', text: '电磁炉',linkTo:'multiclass'},
        {imgUrl: '/design/electric/n8.png', text: '料理机',linkTo:'multiclass'},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //3

      [{imgUrl: '/design/edu/n1.png', text: '课程',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/n2.png', text: '阅读',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/n3.png', text: '关于',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/n4.png', text: '联系',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //4

      [{imgUrl: '/design/edu/b1.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/b2.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/b3.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/edu/b4.png', text: '',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //5

      [{imgUrl: '/design/housekeeping/a1.png', text: '衣物清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/a2.png', text: '沙发清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/a3.png', text: '箱包清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/a4.png', text: '皮草清洗',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //6
      [{imgUrl: '/design/housekeeping/b1.png', text: '月嫂服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/b2.png', text: '保姆服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/b3.png', text: '家政服务',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/housekeeping/b4.png', text: '钟点工',linkTo:'multiclass',lid:"2"},
        {imgUrl: '/design/default/shop1.png', text: '分类标题'}], //7
      [
        {imgUrl: '/design/Bodybuilding/quick1.png', text: '教练'},
        {imgUrl: '/design/Bodybuilding/quick2.png', text: '课程'},
        {imgUrl: '/design/Bodybuilding/quick3.png', text: '1V1'},
        {imgUrl: '/design/Bodybuilding/quick4.png', text: '训练'},
        {imgUrl: '/design/Bodybuilding/quick4.png', text: '训练'},
      ],
      [
        {imgUrl: '/design/farmProduct/1.png', text: '全部水果'},
        {imgUrl: '/design/farmProduct/2.png', text: '进口水果'},
        {imgUrl: '/design/farmProduct/3.png', text: '特价水果'},
        {imgUrl: '/design/farmProduct/4.png', text: '本地水果'},
        {imgUrl: '/design/farmProduct/4.png', text: '本地水果'},//9
      ],
      [
        {imgUrl: '/design/meirong/jifen.png', text: '积分商品'},
        {imgUrl: '/design/meirong/taocan.png', text: '超值套餐'},
        {imgUrl: '/design/meirong/yuyue.png', text: '在线预约'},
        {imgUrl: '/design/meirong/yuyue.png', text: '在线预约'},
        {imgUrl: '/design/meirong/yuyue.png', text: '在线预约'},
      ],[
        {imgUrl: '/design/meirong/type1.png', text: 'SPA'},
        {imgUrl: '/design/meirong/type2.png', text: '口腔'},
        {imgUrl: '/design/meirong/type3.png', text: '小气泡'},
        {imgUrl: '/design/meirong/type4.png', text: '护肤产品'},
        {imgUrl: '/design/meirong/type4.png', text: '护肤产品'},
      ],[
        {imgUrl: '/design/meirong/type5.png', text: '男生情节'},
        {imgUrl: '/design/meirong/type6.png', text: '眼部'},
        {imgUrl: '/design/meirong/type7.png', text: '祛痘'},
        {imgUrl: '/design/meirong/type8.png', text: '纹眉'},
        {imgUrl: '/design/meirong/type8.png', text: '纹眉'},
      ],[
        {imgUrl: '/design/meirong/type9.png', text: '美白'},
        {imgUrl: '/design/meirong/type10.png', text: '美睫'},
        {imgUrl: '/design/meirong/type11.png', text: '脱毛'},
        {imgUrl: '/design/meirong/type12.png', text: '补水'},//13
        {imgUrl: '/design/meirong/type12.png', text: '补水'},//13
      ],

    ],
    vImageTextList:[
      [{imgUrl: '/design/default/picdefault.svg', text: '文字样式示例',content:"文字文字文字文字文字文字文字文字文字文字字文字文"},
        {imgUrl: '/design/default/picdefault.svg', text: '文字样式示例'},
        {imgUrl: '/design/default/picdefault.svg', text: '文字样式示例'}],

      [{imgUrl: '/design/travel/imgt1.png', text: '清远牛鱼嘴玻璃栈桥一日游'},
        {imgUrl: '/design/travel/imgt2.png', text: '揭西黄满寨一日游'},
        {imgUrl: '/design/travel/imgt1.png', text: '清远牛鱼嘴玻璃栈桥一日游'}],

      [{imgUrl: '/design/edu/c1.png', text: '英语培训班'},
        {imgUrl: '/design/edu/c2.png', text: '数学培训班'},
        {imgUrl: '/design/default/picdefault.svg', text: '文字样式示例'}],

      [{imgUrl: '/design/edu/c3.png', text: '语文培训班'},
        {imgUrl: '/design/edu/c4.png', text: '美术培训班'},
        {imgUrl: '/design/default/picdefault.svg', text: '文字样式示例'}],

      [
        {imgUrl: '/design/Bodybuilding/1.png', text: '鸡胸肉花样吃'},
        {imgUrl: '/design/Bodybuilding/2.png', text: '减脂晚餐精选'},
        {imgUrl: '/design/Bodybuilding/3.png', text: '饮品怎么喝'},
      ],//4
      [
        {imgUrl: '/design/Bodybuilding/4.png', text: '鸡胸肉便当'},
        {imgUrl: '/design/Bodybuilding/5.png', text: '卤肉便当'},
        {imgUrl: '/design/Bodybuilding/6.png', text: '荞麦便当'},
      ],//5
      [
        {imgUrl: '/design/photograph/sanya.png', text: '三亚'},
        {imgUrl: '/design/photograph/balidao.png', text: '巴厘岛'},
        {imgUrl: '/design/photograph/pujidao.png', text: '普吉岛'},

      ],//6

    ],
    vProductList:[
      [
        {
          img_url: '/design/default/picdefault.svg',
          title: '产品名称',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },
        {
          img_url: '/design/default/picdefault.svg',
          title: '产品名称',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        }],
      [
        {
          img_url: '/design/electric/pro1.png',
          title: '美的(Midea)豆浆机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/electric/pro1.png',
        title: '美的(Midea)豆浆机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },{
        img_url: '/design/electric/pro1.png',
        title: '美的(Midea)豆浆机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },
        {
          img_url: '/design/electric/pro1.png',
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
          img_url: '/design/electric/pro2.png',
          title: '九阳果汁机',
          new_price: '200',
          old_price: '399',
          sales: '666',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/electric/pro2.png',
        title: '九阳果汁机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },{
        img_url: '/design/electric/pro2.png',
        title: '九阳果汁机',
        new_price: '200',
        old_price: '399',
        sales: '666',
        stock: '999',
        cart_icon: '0'
      },
        {
          img_url: '/design/electric/pro2.png',
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
          img_url: '/design/motherAndBaby/jpg1.jpg',
          title: '待产包',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/motherAndBaby/jpg2.jpg',
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
          img_url: '/design/motherAndBaby/jpg3.jpg',
          title: '玻璃奶瓶',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/motherAndBaby/jpg4.jpg',
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
          img_url: '/design/farmProduct/rexiao.jpg',
          title: '水果',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/farmProduct/rexiao.jpg',
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
          img_url: '/design/meirong/tuijian1.png',
          title: '除螨虫',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/meirong/tuijian2.png',
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
          img_url: '/design/photograph/balidao.png',
          title: '巴厘岛',
          new_price: '120',
          old_price: '169',
          sales: '122',
          stock: '999',
          cart_icon: '0'
        },{
        img_url: '/design/photograph/pujidao.png',
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
      [{image: '/design/default/picdefault.svg'},{image: '/design/default/picdefault.svg'},{image: '/design/default/picdefault.svg'}],
      [{image: '/design/travel/traFree.png'},{image: '/design/travel/traFree.png'},{image: '/design/travel/traFree.png'}],
      [{image: '/design/travel/hot1.png'},{image: '/design/travel/hot2.png'},{image: '/design/travel/hot2.png'}],
      [{image: '/design/travel/hot3.png'},{image: '/design/travel/hot4.png'},{image: '/design/travel/hot2.png'}],
      [{image: '/design/electric/img1.png'},{image: '/design/electric/img1.png'},{image: '/design/electric/img1.png'}],
      [{image: '/design/electric/img2.png'},{image: '/design/electric/img2.png'},{image: '/design/electric/img2.png'}],//5
      [{image: '/design/housekeeping/img1.png'},{image: '/design/default/picdefault.svg'},{image: '/design/default/picdefault.svg'},],//6 家政
      [{image: '/design/housekeeping/img2.png'},{image: '/design/housekeeping/img2.png'},{image: '/design/housekeeping/img2.png'}],//7
      [{image: '/design/housekeeping/img3.png'},{image: '/design/housekeeping/img3.png'},{image: '/design/housekeeping/img3.png'}],//8
      [{image: '/design/KTV/address.png'},{image: '/design/KTV/address.png'},{image: '/design/KTV/address.png'}],//9 KTV
      [{image: '/design/KTV/ambient1.png'},{image:'/design/KTV/ambient2.png'},{image:'/design/KTV/ambient2.png'}],//10 KTV
      [{image: '/design/KTV/ambient3.png'},{image:'/design/KTV/ambient4.png'},{image:'/design/KTV/ambient4.png'}],//11 KTV
      [{image: '/design/KTV/ambient5.png'},{image:'/design/KTV/ambient6.png'},{image:'/design/KTV/ambient6.png'}],//12 KTV
      [{image: '/design/motherAndBaby/jx2.png'},{image: '/design/motherAndBaby/jx3.png'},{image: '/design/motherAndBaby/jx3.png'},],//13 母婴
      [{image: '/design/motherAndBaby/jx.png'},{image: '/design/motherAndBaby/jx.png'},{image: '/design/motherAndBaby/jx.png'},],//14
      [{image: '/design/motherAndBaby/tuijian1.png'},{image: '/design/motherAndBaby/tuijian1.png'},{image: '/design/motherAndBaby/tuijian1.png'}],//15
      [{image: '/design/Bodybuilding/jpjl.png'},{image: '/design/Bodybuilding/jpjl.png'},{image: '/design/Bodybuilding/jpjl.png'}],//16
      [{image: '/design/Bodybuilding/coach1.png'},{image: '/design/Bodybuilding/coach2.png'},{image: '/design/Bodybuilding/coach3.png'},],//17
      [{image: '/design/Bodybuilding/project1.png'}, {image: '/design/Bodybuilding/project1.png'},{image: '/design/Bodybuilding/project1.png'},],
      [{image: '/design/Bodybuilding/project2.png'},{image: '/design/Bodybuilding/project2.png'},{image: '/design/Bodybuilding/project2.png'},],
      [{image: '/design/Bodybuilding/project3.png'},{image: '/design/Bodybuilding/project3.png'},{image: '/design/Bodybuilding/project3.png'}],
      [{image: '/design/photograph/style1.png'},{image: '/design/photograph/style2.png'},{image: '/design/photograph/style2.png'}],//21
      [{image: '/design/photograph/style3.png'},{image: '/design/photograph/style4.png'},{image: '/design/photograph/style4.png'}],//22
      [{image: '/design/photograph/demo3.png'},{image: '/design/photograph/demo1.png'},{image: '/design/photograph/demo1.png'}],//23
      [{image: '/design/photograph/demo1.png'},{image: '/design/photograph/style4.png'},{image: '/design/photograph/style4.png'}],//24
      [{image: '/design/photograph/demo2.png'},{image: '/design/photograph/style4.png'},{image: '/design/photograph/style4.png'}],//25
      [{image: '/design/farmProduct/15.png'},{image: '/design/photograph/style4.png'},{image: '/design/photograph/style4.png'}],//26
      [{image: '/design/farmProduct/16.png'},{image: '/design/photograph/style4.png'},{image: '/design/photograph/style4.png'}],//27
      [{image: '/design/meirong/text1.png'},{image: '/design/meirong/text1.png'},{image: '/design/meirong/text1.png'},],//28
      [{image: '/design/meirong/text11.png'},{image: '/design/meirong/text11.png'},{image: '/design/meirong/text11.png'},],//
      [{image: '/design/meirong/text12.png'},{image: '/design/meirong/text12.png'},{image: '/design/meirong/text12.png'},],//
      [{image: '/design/meirong/text2.png'},{image: '/design/meirong/text2.png'},{image: '/design/meirong/text2.png'},],//
      [{image: '/design/meirong/text21.png'},{image: '/design/meirong/text21.png'},{image: '/design/meirong/text21.png'},],//
      [{image: '/design/meirong/text22.png'},{image: '/design/meirong/text22.png'},{image: '/design/meirong/text22.png'},],//33
      [{image: '/design/meirong/text3.png'},{image: '/design/meirong/text3.png'},{image: '/design/meirong/text3.png'},],//34
      [{image: '/design/meirong/taocan1.png'},{image: '/design/meirong/taocan1.png'},{image: '/design/meirong/taocan1.png'},],//
      [{image: '/design/meirong/taocan2.png'},{image: '/design/meirong/taocan2.png'},{image: '/design/meirong/taocan2.png'},],//
      [{image: '/design/meirong/taocan3.png'},{image: '/design/meirong/taocan3.png'},{image: '/design/meirong/taocan3.png'},],//
      [{image: '/design/meirong/taocan4.png'},{image: '/design/meirong/taocan4.png'},{image: '/design/meirong/taocan4.png'},],//38
    ],
    vNewsList:[
      [{imgUrl: '/design/default/picdefault.svg',title:'文章标题', text: '文字内容文字内容文字内容文字内容文字内容文字内容内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/default/picdefault.svg',title:'文章标题', text: '文字内容文字内容文字内容文字内容文字内容文字内容内容文字内容',"date":"2018-06-06"}],
      [{imgUrl: '/design/travel/new1.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/travel/new2.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/travel/new3.png',title:'文章标题', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"}],

      [{imgUrl: '/design/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/edu/new1.png',title:'如何培养孩子的动手能力', text: '文字内容文字内容文字内容文字内容',"date":"2018-06-06"}],

      [
        {
          imgUrl: '/design/Bodybuilding/7.jpg',
          title: '鸡胸肉的花样吃法，吃出完美身材',
          text: '【原料】2、3盎司鸡胸肉切片 12根芦笋2茶勺烧烤酱 (低盐、低脂)',"date":"2018-06-06"
        },{
        imgUrl: '/design/Bodybuilding/8.jpg',
        title: '健身喝牛奶好还是豆浆好？牛奶豆浆大PK',
        text: '众所周知，减脂餐对健身减肥是非常重要的一个环节！小编今天整理...',"date":"2018-06-06"
      },{
        imgUrl: '/design/Bodybuilding/9.jpg',
        title: '葡萄干最好的“健身运动零食“',
        text: '牛奶、豆浆，两种饮料都是不少健身爱好者的早餐之选。大家...',"date":"2018-06-06"
      },
      ], //3
      [{imgUrl: '/design/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/KTV/ambient1.png',title: '中包环境',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},], //4
      [{imgUrl: '/design/photograph/balidao.png',title: '巴厘岛',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/photograph/pujidao.png',title: '普吉岛',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},
        {imgUrl: '/design/photograph/sanya.png',title: '三亚',text: '字内容文字内容文字内容文字内容字内容文字内容文字内容文字内容',"date":"2018-06-06"},], //5

      [{imgUrl: '/design/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
        {imgUrl: '/design/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
        {imgUrl: '/design/meirong/wenzhang1.jpg',title: '什么面膜好用',text: '大家都知道秋冬季节的皮肤比较干燥，化妆也很容易出现，浮粉的情',"date":"2018-06-06"},
      ], //6
    ],
    vClassify:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: '产品名称',
              new_price: '120',
              old_price: '169',
              sales: '122',
              stock: '999',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
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
            img_url: '/design/travel/travelFind1.png',
          },{
            img_url: '/design/travel/travelFind2.png',
          },{
            img_url: '/design/travel/travelFind3.png',
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
              img_url: '/design/default/picdefault.svg',
              title: '全棉衬衫柔软清洗',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/default/picdefault.svg',
              title: '冬季单件羽绒服干洗',
              new_price: '30',
              old_price: '',
              sales: '122',
            }]
          },
          {title:'沙发清洗',
            product:[
              {
                img_url: '/design/default/picdefault.svg',
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
              img_url: '/design/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            }]
          },
          {title:'本地水果',
            product:[{
              img_url: '/design/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/farmProduct/rexiao.jpg',
              title: '阳光金果',
              new_price: '15',
              old_price: '',
              sales: '122',
            },{
              img_url: '/design/farmProduct/rexiao.jpg',
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
    vMulticlass:[
      {
        proData:[
          {title:'分类一',
            product:[{
              img_url: '/design/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
              title: "二级分类",
              name:'商品名称',
              new_price: '120',
              old_price: '169',
              sales: '12',
              stock: '99',
              cart_icon: '0'
            },{
              img_url: '/design/default/picdefault.svg',
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
              img_url: '/design/travel/kzxz.png',
              title: "成都一日游",
              id:"10"
            },
              {
                img_url: '/design/travel/ems.png',
                title: "峨眉山一日游",
                id:"10"
              },
              {
                img_url: '/design/travel/lsdf.png',
                title: "乐山一日游",
                id:"10"
              },
              {
                img_url: '/design/travel/jzg.png',
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
              img_url: '/design/electric/n1.png',
              title: "美的(Mediea)豆浆机",
              id:"11",
              linkTo:'productdetailPage'
            },
              {
                img_url: '/design/electric/n1.png',
                title: "Joyoung/九阳豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },
              {
                img_url: '/design/electric/n1.png',
                title: "Joyoung/九阳豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },
              {
                img_url: '/design/electric/n1.png',
                title: "美的(Mediea)豆浆机",
                id:"11",
                linkTo:'productdetailPage'
              },

            ]
          },
          {
            title: '果汁机',
            product: []
          },{
            title: '破壁机',
            product: []
          },{
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
              img_url: '/design/edu/c1.png',
              title: "英语培训",
              id:"11",
              linkTo:'productList'
            },
              {
                img_url: '/design/edu/c2.png',
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
              img_url: '/design/KTV/xiaochi.jpg',
              title: "汽水",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
          {
            title: '酒水套餐',
            product: [{
              img_url: '/design/KTV/pijiu.jpg',
              title: "啤酒",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '节假日套餐',
            product: [{
              img_url: '/design/KTV/ktv.jpg',
              title: "小包",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '工作日',
            product: [{
              img_url: '/design/KTV/ktv.jpg',
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
              img_url: '/design/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg1.jpg',
              title: "待产包",
              id:"11",
              linkTo:'productList'
            },
            ]
          },
          {
            title: '宝宝洗护',
            product: [{
              img_url: '/design/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg2.jpg',
              title: "湿巾纸",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '哺育喂养',
            product: [{
              img_url: '/design/motherAndBaby/jpg3.jpg',
              title: "奶瓶",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg4.jpg',
              title: "奶瓶",
              id:"11",
              linkTo:'productList'
            },{
              img_url: '/design/motherAndBaby/jpg4.jpg',
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
                img_url: '/design/photograph/sanya.png',
                title: "三亚",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/photograph/pujidao.png',
                title: "普吉岛",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/photograph/balidao.png',
                title: "巴厘岛",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '个性风格',
            product: [{
              img_url: '/design/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '梦幻风格',
            product: [{
              img_url: '/design/photograph/style2.png',
              title: "梦幻",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '古典风格',
            product: [{
              img_url: '/design/photograph/style3.png',
              title: "古典",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '室内风格',
            product: [{
              img_url: '/design/photograph/style4.png',
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
                img_url: '/design/Bodybuilding/7.jpg',
                title: "鸡胸肉",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/Bodybuilding/8.jpg',
                title: "牛奶",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/Bodybuilding/9.jpg',
                title: "豆浆",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '方式二',
            product: [{
              img_url: '/design/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '方式三',
            product: [{
              img_url: '/design/photograph/style2.png',
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
                img_url: '/design/meirong/wenzhang1.jpg',
                title: "面膜",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/meirong/baoshi.png',
                title: "补水保湿",
                linkTo:'productList',
                id:'11'
              },{
                img_url: '/design/meirong/tuijian4.png',
                title: "美瞳",
                linkTo:'productList',
                id:'11'
              },
            ]
          },
          {
            title: '方式二',
            product: [{
              img_url: '/design/photograph/style1.png',
              title: "个性",
              id:"11",
              linkTo:'productList'
            },
            ]
          },{
            title: '方式三',
            product: [{
              img_url: '/design/photograph/style2.png',
              title: "梦幻",
              id:"11",
              linkTo:'productList'
            },
            ]
          }
        ]
      },//8
    ],
    vUserCenter:[
      {img:"/design/default/userCenter.jpg",
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
      },{img:"/design/travel/userCenter1.png",
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
      }
    ],
    vVideo:[
      [{imgUrl:'/design/default/video.png',text:'标题标题标题'},{imgUrl:'/design/default/video.png',text:'标题标题标题'},{imgUrl:'/design/default/video.png',text:'标题标题标题'}]
    ],
    vVideoList:[
      [{
      img_url: '/design/default/video.png',
      title: '产品名称',
      new_price: '120',
      old_price: '169',
      sales: '122',
      stock: '999',
      cart_icon: '0'
    },
      {
        img_url: '/design/default/video.png',
        title: '产品名称',
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
        img:'/design/default/picdefault.svg',
        title:'商品名称示例',
        price:'120',
        id:'0'
      },{
        img:'/design/default/picdefault.svg',
        title:'商品名称示例',
        price:'120',
        id:'0'
      }
      ],

      [{
        img:'/design/electric/pro1.png',
        title:'美的(Midea)豆浆机',
        price:'200',
        id:'0'
      },{
        img:'/design/electric/pro2.png',
        title:'九阳果汁机',
        price:'200',
        id:'0'
      }
      ],

      [{
        img:'/design/motherAndBaby/jpg3.jpg',
        title:'玻璃奶瓶',
        price:'120',
        id:'0'
      },{
        img:'/design/motherAndBaby/jpg2.jpg',
        title:'湿巾纸',
        price:'200',
        id:'0'
      }
      ],

      [{
        img:'/design/farmProduct/rexiao.jpg',
        title:'阳光金果',
        price:'120',
        id:'0'
      },{
        img:'/design/farmProduct/rexiao.jpg',
        title:'阳光金果',
        price:'200',
        id:'0'
      }
      ],//3

      [{
        img:'/design/meirong/tuijian1.png',
        title:'除螨虫',
        price:'120',
        id:'0'
      },{
        img:'/design/meirong/tuijian2.png',
        title: '男生面部护理',
        price:'200',
        id:'0'
      }
      ],
    ],
    vForm:[{imgUrl:'/design/default/formBank.png',text:'兴业银行申请表单'}]

  }
}



