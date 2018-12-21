<template>
 <div class="cart">
   <div class="cartHead clearfloat"><span class="edit fr">编辑</span></div>
   <div class="carts">
     <ul>
       <li  class="clearfloat cartsItem" v-for="item in $store.state.defaultData.cart[imgdata]"><input type="checkbox" class="fl procheckbox" value="procheckbox" /><label class="fl" ></label>
           <img class="box fl" :src="item.img"></img><div class="fr proDetail"><h3>{{item.title}}</h3><p class="spec">规格: 黑色/36</p><div><span class="price">￥{{item.price}}</span><span class="fr nums" ><span class="minus">-</span><span class="numi">{{nums2}}</span><span class="add">+</span> </span></div></div>
       </li>
     </ul>
   </div>
   <div class="manjian">
     <span class="yhcard">优惠卡券包</span><span class="grey">代金券满199减20</span>
   </div>
   <div class="settle">
     <input type="checkbox" class="fl procheckbox" value="procheckbox" /><label class="fl" for="procheckbox"></label><span class="allc">全选</span><div class="settleBox fr clearfloat"><div class="total fl"><p>合计:<span class="allprice">￥400</span></p><p class="freight">不包含运费</p></div><div class="settlebtn fl">结算</div></div>
   </div>
 </div>
</template>
<script>
  export default{
    props:['pData'],
      data(){
          return{
            nums1:'2',
            nums2:'1',
          }
      },
    computed:{
      imgdata(){
         return this.pData.ind ? this.pData.ind : 0 ;
      },
    }


  }
</script>
<style lang="scss">
  .cart{
    position: relative;
    .cartHead{
      background-color: #fff;
      line-height:20px;
      margin-bottom:2px;
    }
    .cartsItem{
      background-color: #fff;
      margin-bottom:3px;
      padding:3px 0;
    }
    .procheckbox{
      display: none;
    }
    .procheckbox + label{
      background-color: white;
      border-radius: 100%;
      border:1px solid #d3d3d3;
      width:14px;
      height:14px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 14px;
      margin:32px 10px;
    }
    .procheckbox:checked + label{
      background-color: #ff4401;
    }
    .procheckbox:checked + label:after{
      content:"\2714";
      color:#fff;
    }
    .box{
      width: 80px;
      height: 80px;
      /*background-color: #222;*/
      margin:auto;
    }
    .proDetail{
      width: 200px;
    }
    h3{
      line-height:20px;
      font-weight:600;
      font-size:14px;
      color:#444;
    }
    .spec{
      margin:6px 0;
      color:#888;
    }
    .price{
      color:#ff4401;
      font-weight:600;
    }
    .nums{
      text-align: center;
      border:1px solid #eee;
      .minus,.add,.numi{
        display: inline-block;
        width: 26px;
        font-size:16px;
        color:#888;
      }
      .numi{
        border-right:1px solid #eee;
        border-left:1px solid #eee;
      }
    }
    .manjian{
      background-color: #fff;
      padding:8px 0 8px 30px;
      .yhcard{
        padding:2px 5px;
        border:1px solid #ff4401;
        color:#ff4401;
        margin-right:10px;
      }
      .grey{
        color:#888;
      }
    }
    .settle{
      position: fixed;
      bottom:4px;
      left:0;
      right:0;
      background-color: #fff;
      .procheckbox + label{
        margin:7px 5px 0 0;
      }
      .allc{
        line-height:30px;
        color:#888;
      }
      p{
        font-size:12px;
      }
      .allprice{
        color: #ff4401;
      }
      .freight{
        color:#888;
      }
      .settlebtn{
        color: #fff;
        width:70px;
        line-height:30px;
        margin-left:10px;
        text-align: center;
        font-size:14px;
          background: -webkit-linear-gradient(left, #ff6d00 , #ff4200); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #ff6d00 , #ff4200); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #ff6d00 , #ff4200); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #ff6d00 , #ff4200); /* 标准的语法 */
      }

    }
  }
</style>
