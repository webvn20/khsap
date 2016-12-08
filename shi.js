      //<![CDATA[

           simpleCart({
    cartStyle: "div", 
        //Setting the Cart Columns for the sidebar cart display.
        cartColumns: [
          { attr: "image", label: "Ảnh", view: "image"},
          //Name of the item
          { attr: "name" , label: "Tên Sản Phẩm" },
          //Quantity displayed as an input
          { attr: "quantity", label: "Số Lượng", view: "input"},
          //Price of item
          { attr: "price", label: "Giá"},

          { attr: "total" , label: "Tổng", view: "currency"  },

          { view:'remove', text: "Xóa", label: false}

        ],
        currency: "VND",
        cartStyle: "table"
      });
      $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();


      });
 donvitien=" VNĐ";

 imgr = new Array();
      imgr[0] = "http://1.bp.blogspot.com/-nZbZeV-pJFA/TavbmA0o1uI/AAAAAAAAALY/c1hLnCBq0iY/s320/no_image_book.jpg";
      showRandomImg = true;
      aBold = true;
      summaryPost = 40; 
      summaryTitle = 25; 
      numposts = 12; 
      numposts1 = 12; 
      numposts2 = 6; 
      function removeHtmlTag(strx,chop){
        var s = strx.split("<");
        for(var i=0;i<s.length;i++){
          if(s[i].indexOf(">")!=-1){
            s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
          }
        }
        s =  s.join("");
        s = s.substring(0,chop-1);
        return s;
      }
   function showrecentnewsall(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        var trtd='';
        if (numposts <= json.feed.entry.length) {
          maxpost = numposts;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {   
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          postcontent=stripHtmlTags(postcontent,summaryPost);
          
for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ ' ' + m + ' ' + y 
          if(i==0){
 trtd+='        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
 trtd+='               <article class="topnews">           <div class="row">';
 trtd+='                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">';
  trtd+='                    <a href="'+posturl+'" title="">          <img alt=""  src="'+img[i]+'" />              </a>';
   trtd+='                 </div>';
    trtd+='                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
     trtd+='                 <a href="">    <h3> '+posttitle+'</h3>     </a>';
     trtd+='   <p> '+postcontent+'</p>';
      trtd+='             </div>';
      trtd+='           </div>';
      trtd+='         </article>';
     trtd+='        </div>';
          }
          if(i==0){
     trtd+='        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
     trtd+='          <nav class="listnew">';
     trtd+='            <ul>';
          }         
          if(i==1) {
      trtd+='             <li> <a href="'+posturl+'" > <i class="fa fa-angle-double-right"></i> '+posttitle+'       </a>   </li>';
          }
      if(i==2) {
      trtd+='             <li> <a href="'+posturl+'" > <i class="fa fa-angle-double-right"></i> '+posttitle+'       </a>   </li>';
          }
      if(i==3) {
      trtd+='             <li> <a href="'+posturl+'" > <i class="fa fa-angle-double-right"></i> '+posttitle+'       </a>   </li>';
          }
          if(i==maxpost){
     trtd+='            </ul>';
       trtd+='                    </nav>';
       trtd+='                </div>';  
          }
      j++;
        }
        document.write(trtd);
      }

    

      function showrecentposts1(json) {
       j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        var trtd='';
        if (numposts <= json.feed.entry.length) {
          maxpost = numposts;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {   
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ;
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
      
 var  giaca='0';
          a1=s.indexOf("[giaban]");
          b1=s.indexOf("[/giaban]",a1+8);
          d1= s.substr(a1+8,b1-a1-8);
          giaca=d1+donvitien;
var giacu='';

          if(-1!=s.indexOf("[giacu]")){
          aa2=s.indexOf("[giacu]");
          bb2=s.indexOf("[/giacu]",aa2+8);
          dd2=s.substr(aa2+8,bb2-aa2-8);
          giacu=dd2+donvitien;
          }
var percentsaleoff=0;
          if(-1!=s.indexOf("[giacu]")){
var saleoff=100*((parseInt(giacu)-parseInt(giaca))/parseInt(giaca));
var percentsaleoff=saleoff.toFixed(0)+"%";
        }



          postcontent=stripHtmlTags(postcontent,summaryPost);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ ' ' + m + ' ' + y ;
          if (i%2==0){ trtd+="<ul>"; }
           trtd+='<li>';
      trtd+='                  <div class="product-container">';
             trtd+='             <div class="product-image">';
                   trtd+='         <a  href="'+posturl+'" ><img  src="'+img[i]+'" /></a>';
                        trtd+='  </div>';
                    trtd+='      <div class="product-meta">';
                          trtd+='  <h5 class="product-name">';
                          trtd+='  <a href="'+posturl+'" > '+posttitle+'</a>';
                      trtd+='      </h5>';
                          trtd+='  <div class="product-price">';
                       trtd+='       <span class="price"> '+giaca+' </span>';
                    trtd+='        </div>';
                   trtd+='       </div>';
                  trtd+='      </div>';
                  trtd+='    </li>';
          if (i%2!=0){ trtd+="</ul>"; }
          
          j++;
        }
        document.write(trtd);
      }
      

      function showrecentpostsall(json) {

        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        var trtd='';
        if (numposts <= json.feed.entry.length) {
          maxpost = numposts;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {   
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ;
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
      
 var  giaca='0';
          a1=s.indexOf("[giaban]");
          b1=s.indexOf("[/giaban]",a1+8);
          d1= s.substr(a1+8,b1-a1-8);
          giaca=d1+donvitien;
var giacu='';

          if(-1!=s.indexOf("[giacu]")){
          aa2=s.indexOf("[giacu]");
          bb2=s.indexOf("[/giacu]",aa2+7);
          dd2=s.substr(aa2+7,bb2-aa2-7);
          giacu=dd2+donvitien;
          }
var percentsaleoff=0;
          if(-1!=s.indexOf("[giacu]")){
var saleoff=100*((parseInt(giacu)-parseInt(giaca))/parseInt(giaca));
var percentsaleoff=saleoff.toFixed(0)+"%";
        }
var mota='';
   if(-1!=s.indexOf("[mota]")){
          mt1=s.indexOf("[mota]");
          mt2=s.indexOf("[/mota]",mt1+6);
          mt3=s.substr(mt1+6,mt2-mt1-6);
          mota=mt3;
          }

          postcontent=stripHtmlTags(postcontent,summaryPost);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ ' ' + m + ' ' + y ;
         
   trtd+='  <div class="col94 item col-lg-12">';
   trtd+='     <div class="product">';
   trtd+='         <div class="image">';
    trtd+='            <div class="img-overflow">';
     trtd+='               <a  href="'+posturl+'" title="">';
     trtd+='                   <img alt=""  src="'+img[i]+'"/> ';
      trtd+='              </a>';
      trtd+='              <div class="PStyleLi"></div>';
      trtd+='                  <div class="CStyle">';
       trtd+='                     <ul class="function">';
        trtd+='                        <li>';
          trtd+='                          <a href="" title="">';
          trtd+='                              <button class="btn btnitem" type="button">';
             trtd+='                           <i class="fa fa-shopping-cart"></i>';
             trtd+='                           </button>';
             trtd+='                       </a>';
             trtd+='                   </li>';
              trtd+='                  <li>';
                trtd+='                    <a href="'+posturl+'" title="">';
                trtd+='                        <button class="btn btnitem" type="button">';
                 trtd+='                       <i class="fa fa-refresh"></i>';
                  trtd+='                      </button>';
                  trtd+='                  </a>';
                 trtd+='               </li>';
                 trtd+='           </ul>';
                  trtd+='      </div>';
                  trtd+='      <div class="price">';
                   trtd+=' <span class="price-new">'+giaca+'</span>';
                  trtd+='     </div>';
                trtd+='    </div>';
             trtd+='   </div>';
            trtd+='    <h3><a href="'+posturl+'" title="">'+posttitle+'</a>';
            trtd+='</h3>';
              trtd+='  <p>'+stripHtmlTags(removeHtmlTag(mota,80),80)+'</p>           </div>       </div>';

         
          
          j++;
        }
        document.write(trtd);
      }

      var classicMode = false ;
      var summary = 30;
      var indent = 3;
      function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}
      function getSummaryLikeWP(id) {
        return document.getElementById(id).innerHTML.split(/<!--\s*more\s*-->/)[0];
      }
      function getSummaryImproved(post,max){
        var re = /<.*?>/gi
        var re2 = /<br.*?>/gi
        var re3 = /(<\/{1}p>)|(<\/{1}div>)/gi
        var re4 = /(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi
        post = post.replace(re4,'')
        post = post.replace(re3,'<br /> ').split(re2)
        for(var i=0; i<post.length; i++){
          post[i] = post[i].replace(re,'');
        }
        var post2 = new Array();
        for(var i in post) {
          //if(post[i]!='' && post[i]!=' ' && post[i] != '\n') post2.push(post[i]);
          if(/[a-zA-Z0-9]/.test(post[i])) post2.push(post[i]) ;
        }
        var s = "";
        var indentBlank = "";
        for(var i=0;i<indent;i++){
          indentBlank += " ";
        }
        if(post2.join('<br/>').split(' ').length < max-1 ){
          s = post2.join(indentBlank +' <br/>');
        } else {
          var i = 0;
          while(s.split(' ').length < max){
            s += indentBlank + ' ' + post2[i]+'<br/>';
            i++;
          }
        }  
        return s;
      }
      function getElementsByClass(node,searchClass,tag) {
        var classElements = new Array();
        var els = node.getElementsByTagName(tag); // use "*" for all elements
        var elsLen = els.length;
        var pattern = new RegExp('\\b'+searchClass+'\\b');
        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
            classElements[j] = els[i];
            j++;
          }
        }
        return classElements;
      }

 // JavaScript Document
      labelsumtitle = 64;
     
      var purl = location.href,
          fb_href = purl.substring(0, purl.indexOf(".html") + 5),
          fbcm = '<div class="fb-comments" data-href="' + fb_href + '" data-num-posts="12" data-width="100%" colorscheme="light"></div>';
      function removeHtmlTag(e, t) {
        for (var n = e.split("<"), r = 0; r < n.length; r++) - 1 != n[r].indexOf(">") && (n[r] = n[r].substring(n[r].indexOf(">") + 1, n[r].length));
        n = n.join(""); 
        return n.substring(0, t - 1)
      }

  function chitietsp(e, t, n) {
        var r = e.substring(7);
        e = document.getElementById(e);
        var i = ""
        , s = e.getElementsByTagName("img");
        1 <= s.length && (i = '<img src="' + s[0].src + '"/>');
        var giacu = e.innerHTML.substring(e.innerHTML.indexOf("[giacu]") + 7, e.innerHTML.indexOf("[/giacu]"))
        , u = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
        giavalue = giacu.replace(/,/gi, "");
        giagocvalue = u.replace(/,/gi, "");
        u = " " + u + "";
        if (-1 != e.innerHTML.indexOf("[giacu]")) var h = "Gi\u00e1 g\u1ed1c: ",
            giacu = "Giá cũ : " + giacu + "",
            p = ((parseInt(giagocvalue) - parseInt(giavalue)) / parseInt(giagocvalue) * 100).toFixed(0) + "%";
        else giacu = h = "", p = "0%";
        var o = e.innerHTML.substring(e.innerHTML.indexOf("[tomtat]") + 8, e.innerHTML.indexOf("[/tomtat]"));
        var chitiet = e.innerHTML.substring(e.innerHTML.indexOf("[chitiet]") + 9, e.innerHTML.indexOf("[/chitiet]"));
        var hotdeal = e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]"));
        tintuc = e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]") + 8, e.innerHTML.indexOf("[/tintuc]"));
        kythuat = -1 != e.innerHTML.indexOf("[kythuat]") ? e.innerHTML.substring(e.innerHTML.indexOf("[kythuat]") + 9, e.innerHTML.indexOf("[/kythuat]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        hot = -1 != e.innerHTML.indexOf("[hot]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        danhgia = -1 != e.innerHTML.indexOf("[danhgia]") ? e.innerHTML.substring(e.innerHTML.indexOf("[danhgia]") + 9, e.innerHTML.indexOf("[/danhgia]")) : "Đang cập nhật";
        mota = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[mota]") + 6, e.innerHTML.indexOf("[/mota]")) : "Không có mô tả cho sản phẩm này";
        video = -1 != e.innerHTML.indexOf("[video]") ? e.innerHTML.substring(e.innerHTML.indexOf("[video]") + 7, e.innerHTML.indexOf("[/video]")) : "Đang cập nhật";
        hinhanh = -1 != e.innerHTML.indexOf("[hinhanh]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hinhanh]") + 9, e.innerHTML.indexOf("[/hinhanh]")) : "Không có hình ảnh cho sản phẩm này";

var trtd;
var title=t;
var giaban=u;
var tomtat=o;
var desc=stripHtmlTags(mota,160);
var hotlines=hotline;
var danhgiap=danhgia;
var hotp=hot;
var canh = e.getElementsByTagName("img").length;
var  imgg = "http://1.bp.blogspot.com/-nZbZeV-pJFA/TavbmA0o1uI/AAAAAAAAALY/c1hLnCBq0iY/s320/no_image_book.jpg";
trtd='<article class="detail simpleCart_shelfItem">';
trtd+='<div class="row">';
trtd+='<div class="img-blog col-lg-4 col-md-4 col-sm-4 col-xs-12" id="gallery_01">';
    if(canh>0){  
trtd+='<a class="elevatezoom-gallery active" data-update="" data-image="'+s[0].src+'" href="javascript:void(0)" data-zoom-image="'+s[0].src+'">';
trtd+='<img id="main_img" class="item_image" src="'+s[0].src+'" alt=""/>';
trtd+='</a>';
    }
 trtd+=' <ul class="thumbs" id="thumbs">';
    if(canh>0){  
  
trtd+=' <li>';
 trtd+=' <a data-fancybox-group="elevatezoom-gallery" data-image="'+s[0].src+'" data-zoom-image="'+s[0].src+'" href="javascript:void(0)">';
 trtd+=' <img class="img_thumb" src="'+s[0].src+'" />';
 trtd+=' </a>';
 trtd+=' </li>';
    }

 if(canh>1){  

trtd+=' <li>';
 trtd+=' <a data-fancybox-group="elevatezoom-gallery" data-image="'+s[1].src+'" data-zoom-image= "'+s[1].src+'" href="javascript:void(0)">';
 trtd+=' <img class="img_thumb" src="'+s[1].src+'" />';
 trtd+=' </a>';
 trtd+=' </li>';
    }
    if(canh>2){
 trtd+=' <li>';
 trtd+=' <a data-fancybox-group="elevatezoom-gallery" data-image="'+s[2].src+'" data-zoom-image="'+s[2].src+'" href="javascript:void(0)" class="zoomGalleryActive">';
trtd+='<img class="img_thumb" src="'+s[2].src+'" />';
 trtd+=' </a>';
trtd+='</li>';
    }

    if(canh>3){
trtd+='<li>';
 trtd+=' <a data-fancybox-group="elevatezoom-gallery" data-image="'+s[3].src+'" data-zoom-image="'+s[3].src+'" href="javascript:void(0)">';
 trtd+=' <img class="img_thumb" src="'+s[3].src+'" />';
 trtd+=' </a>';
 trtd+=' </li>';
    }
    if(canh>4){
trtd+='<li>';
trtd+='<a data-fancybox-group="elevatezoom-gallery" data-image="'+s[4].src+'" data-zoom-image="'+s[4].src+'" href="javascript:void(0)">';
 trtd+=' <img class="img_thumb" src="'+s[4].src+'" />';
 trtd+=' </a>';
trtd+='</li>';
       }
       if(canh>5){
trtd+=' <li>';
 trtd+=' <a data-fancybox-group="elevatezoom-gallery" data-image="'+s[5].src+'" data-zoom-image="'+s[5].src+'" href="javascript:void(0)">';
 trtd+=' <img class="img_thumb" src="'+s[5].src+'" />';
 trtd+=' </a>';
 trtd+=' </li>';
    }

 trtd+=' </ul>';
 trtd+=' </div>';
trtd+='<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">';
 trtd+=' <p>Lượt xem: <strong>569</strong></p>';
 trtd+=' <h1 class="item_name">'+title+'</h1>';
 trtd+='<p><strong></strong> </p>';
trtd+=' <div class="share">';

 trtd+=' </div>';
trtd+='<p class="des">'+desc+' </p>';
trtd+='<div class="price-num">';
 trtd+=' <div class="price"> <span class="price-new item_price">'+giaban+'</span> </div>';
 trtd+=' <div class="quantity-input"> Số lượng:<input type="number" name="quantity_pd" class="item_quantity" maxlength="4" min="1" value="1" size="3" /> </div>';
 trtd+=' </div>';
trtd+='<ul class="function">';
 trtd+=' <li>';
trtd+='<a class="popup-with-move-anim btn-big" href="'+urlgiohang+'">';
 trtd+=' <button type="button" class="btn btnitem bt_buynow">';
trtd+='Mua ngay</button></a>';
 trtd+=' </li>';
 trtd+=' <li>';
 trtd+=' <input type="submit" name="btn_submit" class="btn btnitem cart-popup item_add" value="Thêm vào giỏ hàng" title="Thêm vào giỏ hàng" />';
 trtd+=' </li>';

 trtd+=' <li class="HL">Hotline: '+hotlines+'</li>';
 trtd+=' </ul>';
trtd+='</div>';
 trtd+=' </div>';
trtd+='</article>';
            trtd+=' <div class="clearfix"></div>';

trtd+='<div class="product-tab">';
trtd+='<ul class="nav-tab">';
trtd+='<li class="active">';
trtd+='<a aria-expanded="false" data-toggle="tab" href="#product-detail">Chi tiết sản phẩm</a>';
trtd+=' </li>';
trtd+=' <li class="">';
trtd+=' <a aria-expanded="true" data-toggle="tab" href="#information">Bình luận</a>';
trtd+=' </li>';
trtd+=' <li >';
trtd+='<a aria-expanded="false" data-toggle="tab" href="#review-product">Đánh giá sản phẩm</a>';
trtd+='</li>';
trtd+='</ul>';
trtd+=' <div class="clearfix"></div>';
        trtd+=' <div class="tab-container">';
            trtd+=' <div id="product-detail" class="tab-panel active ">'+chitiet+'</div>';
            trtd+=' <div class="clearfix"></div>';
            trtd+=' <div id="information" class="tab-panel ">'+hotp+'</div>';
            trtd+=' <div class="clearfix"></div>';
            trtd+=' <div id="review-product" class="tab-panel ">'+danhgiap+'</div>';
        trtd+=' </div>';
    trtd+='</div>';
    trtd+=' <div class="clearfix"></div>';
trtd+='               <div class="clearfix"></div>';
var noidungsp= trtd;
var noidungtintuc=t+tintuc;
        e.innerHTML = -1 != e.innerHTML.indexOf("[tintuc]") ? noidungtintuc : noidungsp;
     
   
  }
function newslienquan(e) {
        j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
        img = [];
            document.write('<nav class="listnew"><ul>');

        for (var t = 0; t < 15; t++) {
          if(t == 0){

          }
          var n = e.feed.entry[t]
          , r = n.title.$t
          , i, o = n.id.$t.split("post-");
          if (t == e.feed.entry.length) break;
          for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
              i = n.link[u].href;
              break
            }
          for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
              n.link[u].title.split(" ");
              break
            }
          u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
          giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
          giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
          hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
          hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
          kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
          postdate = n.published.$t;
          j > imgr.length - 1 && (j = 0);
          img[t] = imgr[j];
          s = u;
          a = s.indexOf("<img");
          b = s.indexOf('src="', a);
          c = s.indexOf('"', b + 5);
          d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
          n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          postdate.split("-")[2].substring(0, 2);
          u = postdate.split("-")[1];
          postdate.split("-");
          for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
          r = '<li class="lli item">' + removeHtmlTag(r, labelsumtitle) + '</li>';
          document.write(r);
          j++
        }
                    document.write('</ul></nav>');

      }




    


  
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
var thumb = 200;

var giaca= new Array();
var motalq =new Array();
var giacu =new Array();

function lienquan(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
try 

{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;
 thumburl[relatedTitlesNum] = thumburl[relatedTitlesNum].replace("/s72-c/","/s"+thumb+"/");

s=entry.content.$t;

a1=s.indexOf("[giaban]");
b1=s.indexOf("[/giaban]",a1+8);
d1= s.substr(a1+8,b1-a1-8);

if((a1!=-1)&&(b1!=-1)&&(d1!=""))
{
giaca[relatedTitlesNum]=d1;
}

g1=s.indexOf("[giacu]");
g2=s.indexOf("[/giacu]",g1+7);
g3= s.substr(g1+7,g2-g1-7);

if((g1!=-1)&&(g2!=-1)&&(g3!=""))
{
giacu[relatedTitlesNum]=g3;
}
    mot1=s.indexOf("[mota]");
          mot2=s.indexOf("[/mota]",mot1+6);
          mot3=s.substr(mot1+6,mt2-mot1-6);

if((mot1!=-1)&&(mot2!=-1)&&(mot3!=""))
{
motalq[relatedTitlesNum]=stripHtmlTags(mot3,20);
}
}

catch (error){


s=entry.content.$t;

 

g1=s.indexOf("[giacu]");
g2=s.indexOf("[/giacu]",g1+7);
g3= s.substr(g1+7,g2-g1-7);

if((g1!=-1)&&(g2!=-1)&&(g3!=""))
{
giacu[relatedTitlesNum]=g3;
}


a1=s.indexOf("[giaban]");
 b1=s.indexOf("[/giaban]",a1+8);
d1= s.substr(a1+8,b1-a1-8);
 
if((a1!=-1)&&(b1!=-1)&&(d1!=""))
{
giaca[relatedTitlesNum]=d1;
}

mot1=s.indexOf("[mota]");
mot2=s.indexOf("[/mota]",mot1+6);
mot3=s.substr(mot1+6,mot2-mot1-6);

if((mot1!=-1)&&(mot2!=-1)&&(mot3!=""))
{
motalq[relatedTitlesNum]=stripHtmlTags(mot3,20);
}


a=s.indexOf("<img");
b=s.indexOf("src=\"",a);
c=s.indexOf("\"",b+5);
d=s.substr(b+5,c-b-5);
//giaca2='<br />0 VND';


if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{
thumburl[relatedTitlesNum]=d;
} 
else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png";}

}

if(relatedTitles[relatedTitlesNum].length>180)
 relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 180)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;

}
}
}
}
function removeRelatedDuplicates_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
var tmp4= new Array(0);
var tmp5= new Array(0);
var tmp6= new Array(0);

for(var i = 0; i < relatedUrls.length; i++) {
if(!contains_thumbs(tmp, relatedUrls[i])) 
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp3.length += 1;
tmp4.length += 1;
tmp5.length += 1;
tmp6.length += 1;

tmp2[tmp2.length - 1] = relatedTitles[i];
tmp3[tmp3.length - 1] = thumburl[i];
tmp4[tmp4.length - 1] = giaca[i];
tmp5[tmp5.length - 1] = motalq[i];
tmp6[tmp6.length - 1] = giacu[i];

}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;
giaca=tmp4;
mota=tmp5;
giacu=tmp6;
}

function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}

function splienquan(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#d4eaf2";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
giaca.splice(i,1);
motalq.splice(i,1);


i--;
}
}

var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;

if(relatedTitles.length>0)
document.write('<ul id="related-posts">');
while (i < relatedTitles.length && i < 180 && i<maxresults) {

var posturl=relatedUrls[r];
var title=relatedTitles[r];
var giaban=giaca[r];
var imgsrc=thumburl[r];
var motat=motalq[r];
var giacut=giacu[r];
 trtd='  <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 col94 mg">';
   trtd+='     <div class="product">';
   trtd+='         <div class="image">';
    trtd+='            <div class="img-overflow">';
     trtd+='               <a  href="'+posturl+'" title="">';
     trtd+='                   <img alt=""  src="'+imgsrc+'"/> ';
      trtd+='              </a>';
      trtd+='              <div class="PStyleLi"></div>';
      trtd+='                  <div class="CStyle">';
       trtd+='                     <ul class="function">';
        trtd+='                        <li>';
          trtd+='                          <a href="" title="">';
          trtd+='                              <button class="btn btnitem" type="button">';
             trtd+='                           <i class="fa fa-shopping-cart"></i>';
             trtd+='                           </button>';
             trtd+='                       </a>';
             trtd+='                   </li>';
              trtd+='                  <li>';
                trtd+='                    <a href="'+posturl+'" title="">';
                trtd+='                        <button class="btn btnitem" type="button">';
                 trtd+='                       <i class="fa fa-refresh"></i>';
                  trtd+='                      </button>';
                  trtd+='                  </a>';
                 trtd+='               </li>';
                 trtd+='           </ul>';
                  trtd+='      </div>';
                  trtd+='      <div class="price">';
                   trtd+=' <span class="price-new">'+giaban+'</span>';
                  trtd+='     </div>';
                trtd+='    </div>';
             trtd+='   </div>';
            trtd+='    <h3><a href="'+posturl+'" title="">'+title+'</a>';
            trtd+='</h3>';
              trtd+='  <p>'+stripHtmlTags(motat,80)+'</p>           </div>       </div>';



document.write(trtd);
i++;

if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('</ul>');
relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
giaca.splice(0,giaca.length);
mota.splice(0,mota.length);
relatedTitles.splice(0,relatedTitles.length);
}
    




function tintuclienquan(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#d4eaf2";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
giaca.splice(i,1);
mota.splice(i,1);
i--;
}
}

var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;

if(relatedTitles.length>0)

document.write('<section class="news clearfix"><div class="itemnews"><nav class="listnew"><ul>');
while (i < relatedTitles.length && i < 180 && i<maxresults) {
 var trtd='<li class="col-lg-12 col-md-12 col-xs-6 col-sm-6">';
trtd+=' <a href="'+ relatedUrls[r] + '"> <i class="fa fa-circle"></i>';
      trtd+='  '+relatedTitles[r]+' </a>';
       
 
trtd+=' </li>';
document.write(trtd);
i++;

if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('</ul><nav></div></section>');
relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
giaca.splice(0,giaca.length);
mota.splice(0,mota.length);

relatedTitles.splice(0,relatedTitles.length);
}
    




function createSummaryAndThumb(pID,title,url,date,comment){
     var posturl= url;
        var title=title;
        var date =date;
        var comment = comment;
        var div = document.getElementById(pID);
        var content = div.innerHTML;





          
            var r = pID.substring(7);
      var  e = document.getElementById(pID);
e.innerHTML=e.innerHTML+'<img src="https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg"/>';
        var i = ""
        , s = e.getElementsByTagName("img");

        1 <= s.length && (i = '<img src="' + s[0].src + '"/>');



        var giacu = e.innerHTML.substring(e.innerHTML.indexOf("[giacu]") + 7, e.innerHTML.indexOf("[/giacu]"))
        , u = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
        giavalue = giacu.replace(/,/gi, "");
        giagocvalue = u.replace(/,/gi, "");
        u = " " + u + "";
        if (-1 != e.innerHTML.indexOf("[giacu]")) var h = "Gi\u00e1 g\u1ed1c: ",
            giacu = "Giá cũ : " + giacu + "",
            p = ((parseInt(giagocvalue) - parseInt(giavalue)) / parseInt(giagocvalue) * 100).toFixed(0) + "%";
        else giacu = h = "", p = "0%";
        var o = e.innerHTML.substring(e.innerHTML.indexOf("[tomtat]") + 8, e.innerHTML.indexOf("[/tomtat]"));
         chitiet = -1 != e.innerHTML.indexOf("[chitiet]") ? e.innerHTML.substring(e.innerHTML.indexOf("[chitiet]") + 9, e.innerHTML.indexOf("[/chitiet]")) :" update";
        kythuat = -1 != e.innerHTML.indexOf("[kythuat]") ? e.innerHTML.substring(e.innerHTML.indexOf("[kythuat]") + 9, e.innerHTML.indexOf("[/kythuat]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        var hot = -1 != e.innerHTML.indexOf("[hot]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        danhgia = -1 != e.innerHTML.indexOf("[danhgia]") ? e.innerHTML.substring(e.innerHTML.indexOf("[danhgia]") + 9, e.innerHTML.indexOf("[/danhgia]")) : "Đang cập nhật";
        mota = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[mota]") + 6, e.innerHTML.indexOf("[/mota]")) : "Không có mô tả cho sản phẩm này";
        video = -1 != e.innerHTML.indexOf("[video]") ? e.innerHTML.substring(e.innerHTML.indexOf("[video]") + 7, e.innerHTML.indexOf("[/video]")) : "Đang cập nhật";
        hinhanh = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hinhanh]") + 9, e.innerHTML.indexOf("[/hinhanh]")) : "Không có hình ảnh cho sản phẩm này";

var giaban=u;
var posturl=url;
var motat=mota;
trtd='<div class="product">';
 trtd+='<div class="image">';
trtd+='  <div class="img-overflow">';
trtd+='    <a  href="'+posturl+'"  title=""> ';
trtd+='      <img src="'+s[0].src+'" alt="" />';
 trtd+='   </a>';
  trtd+='  <div class="PStyleLi"></div>';
  trtd+='  <div class="CStyle">';
  trtd+='    <ul class="function">';
   trtd+='     <li>';
       trtd+='   <a href="" title="">';
       trtd+='     <button type="button" class="btn btnitem">';
       trtd+='     <i class="fa fa-shopping-cart"></i>';
        trtd+='    </button>';
      trtd+='    </a>';
      trtd+='  </li>        ';
      trtd+='  <li>';
         trtd+=' <a href="" title="">';
        trtd+='    <button type="button" class="btn btnitem">';
        trtd+='    <i class="fa fa-refresh"></i>';
        trtd+='    </button>';
       trtd+='   </a>';
      trtd+='  </li>';
    trtd+='  </ul>';
trtd+='    </div>    <div class="price">      <span class="price-new">'+giaban+'</span>    </div>';
 trtd+=' </div></div>';
trtd+=' <h3><a href="" title="Sáp Cube Wax Super Power Hold">'+title+'</a></h3>';
trtd+='<p>'+motat+'</p> </div> ';




        var summary1 =  trtd;
         div.innerHTML = summary1;
          div.style.display = "block";
        
     
      }

      function createSummaryAndThumbnews(pID,title,url,date,comment){
        var posturl= url;
        var title=title;
        var date =date;
        var comment = comment;
var noimg='https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg'

        var div = document.getElementById(pID);
        var content = div.innerHTML;
        if (/<!--\s*more\s*-->/.test(content)) {
          div.innerHTML = getSummaryLikeWP(pID);
          div.style.display = "block";
        } 
        else {
          var imgtag = "";
          var img = div.getElementsByTagName("img");
          var summ = summary;
          if(img.length>=1) { 
            imgtag = img[0].src;
          }
          else{
            imgtag = noimg ;
          }
var trtd='<article class="itemblog">';
trtd+='                                <div class="row">';
    trtd+='                                          <div class="img-blog img-blog col-lg-4 col-md-4 col-sm-4 col-xs-12">';
      trtd+='                                            <a href="'+posturl+'" title="">';
       trtd+='                                               <img src="'+imgtag+'" alt="">';
        trtd+='                                          </a>';
        trtd+='                     </div>';
          trtd+='                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">';
           trtd+='                                       <a  href="'+posturl+'" title="'+title+'">';
            trtd+='                                          <h2 class="fbebas">'+title+'</h2>';
            trtd+='                                      </a>';
             trtd+='                                     <div class="date">';
              trtd+='                                        <i class="fa fa-calendar"></i>    '+date+'                                    </div>';
               trtd+='                                   <p>' +stripHtmlTags(content,summary)+'...<a href="'+posturl+'"> đọc nữa .</a></p>';
                trtd+='                              </div>';
                 trtd+='                         </div>      ';                 
                   trtd+='                   </article>';

          div.innerHTML = trtd;
          div.style.display = "block";
        }
      }


   //]]>
   
