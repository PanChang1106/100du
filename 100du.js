 /*javascript document*/
 
 $(function(){
//		 		搜索栏——搜索切换
		 		(function(){
		 			var aLi=$("#menu li");
		 			var oText=$('.form').find('.text');
		 			var arrText=[
		 			    '例如：荷棠鱼坊烤鱼 或 樱花日本料理',
		 			    '例如：昌平区育新站龙旗广场2号楼609室',
		 			    '例如：万达影业双人情侣券',
		 			    '例如：里约体操队频频失误，问题出在哪？',
		 			    '例如：江南地区，立秋之后又现秋老虎！',
		 			];
		 			var iNow=0;
		 			
		 			oText.val(arrText[iNow]);
		 			
		 			aLi.each(function(index){
		 				$(this).click(function(){
                            aLi.attr('class','gradient');
                            $(this).attr('class','active');
                            
                            iNow=index;
                            
                            oText.val(arrText[iNow]);
		 				});
		 			});
		 			
		 			oText.focus(function(){
		 				if($(this).val()==arrText[iNow]){
		 					$(this).val('');
		 				}
		 			});
		 			oText.blur(function(){
		 				if($(this).val()==''){
		 					 oText.val(arrText[iNow]);
		 				}
		 			});
		 			
		 		})();
		 		
// 	 		            搜索栏——update文字滚动
                (function(){
                	var oDiv=$('.update');
		 			var oUl=$('.update_wrap ul');
		 			var iH=0;
		 			var arrData=[
		 			    {'name':'萱萱','time':1,'title':'女双十米台五连冠','url':'http://china.ynet.com/3.1/1608/10/11578623.html'},
		 			    {'name':'美美','time':2,'title':'举重石智勇夺冠','url':'http://china.ynet.com/3.1/1608/10/11579416.html'},
		 			    {'name':'欢欢','time':3,'title':'虐狗！张靓颖秀恩爱 ','url':'http://china.ynet.com/3.1/1608/10/11579862.html'},
		 			    {'name':'畅畅','time':4,'title':'17年春晚总导演确定','url':'http://china.ynet.com/3.1/1608/09/11577095.html'},
		 			    {'name':'萱萱','time':5,'title':'女双十米台五连冠','url':'http://china.ynet.com/3.1/1608/10/11578623.html'},
		 			    {'name':'美美','time':6,'title':'举重石智勇夺冠','url':'http://china.ynet.com/3.1/1608/10/11579416.html'},
		 			    {'name':'欢欢','time':7,'title':'虐狗！张靓颖秀恩爱 ','url':'http://china.ynet.com/3.1/1608/10/11579862.html'},
		 			    {'name':'畅畅','time':8,'title':'17年春晚总导演确定','url':'http://china.ynet.com/3.1/1608/09/11577095.html'}
		 			];
		 			
		 			var str='';
		 			var oBtnUp=$('#updateUpbtn');
		 			var oBtnDown=$('#updateDownbtn');
		 			var iNow=0;
		 			var timer=null;
		 			
		 			for(var i=0;i<arrData.length;i++){
		 				str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong>&nbsp;&nbsp;<span>'+arrData[i].time+'分钟前</span>&nbsp;&nbsp;发表了一篇新文章，'+arrData[i].title+'...</a></li>';
		 			}
                    
                    oUl.html(str);
                    iH=oUl.find('li').height();
                    oBtnUp.click(function(){
                    	doMove(-1);
                    });
                    oBtnDown.click(function(){
                    	doMove(1);
                    });
                    
                    oDiv.hover(function(){
                    	clearInterval(timer);
                    },function(){
                    	autoPlay();
                    });
                    
                    function autoPlay(){
                    	timer=setInterval(function(){
                    		doMove(-1);
                    	},3000);
                    }
                    autoPlay();
                    
                    function doMove(num){
                    	iNow+=num;
                    	if(Math.abs(iNow)>arrData.length-1){
                    		iNow=0;
                    	}
                    	if(iNow>0){
                    		iNow=-(arrData.length-1);
                    	}
                    	oUl.stop().animate({'top':iH*iNow},2000);
                    }
                    
		 		})();
		 		
//		 		红衣店、新开张/地铁交通、生活圈/知道分子/抢券儿——option 选项卡切换
                (function(){
                	fnTab($('.tabNav1'),$('.tabCon1'));
                	fnTab($('.tabNav2'),$('.tabCon2'));
                	fnTab($('.tabNav3'),$('.tabCon3'));
                	fnTab($('.tabNav4'),$('.tabCon4'));
                	function fnTab(oNav,aCon){
                		var aElem = oNav.children();
                		aCon.hide().eq(0).show();
                		
                		aElem.each(function(index){
                			
                			$(this).click(function(){
                				aElem.removeClass('active').addClass('gradient');
                				$(this).removeClass('gradient').addClass('active');
                				aElem.find("a").attr('class','triangle_down_gray');
                				$(this).find("a").attr('class','triangle_down_red');
                				
                				aCon.hide().eq(index).show();
                			});
                		});
                	}
                })();
             
//              精彩推荐——焦点图自动播放
               (function(){

               	var oDiv=$('#fade');
               	var aUlLi=oDiv.find("ul li");
               	var aOlLi=oDiv.find("ol li");
               	var aP=oDiv.find('p');
               	var arr=['爸爸去哪儿啦~','人像摄影中的光影感','娇柔妩媚，美艳大方'];
                var iNow=0;
                var timer=null;
  
                fnFade();
                
                aOlLi.click(function(){
                	iNow=$(this).index();
                	fnFade();
                });
                
                oDiv.hover(function(){
                	clearInterval(timer);
                },function(){
                	autoPaly();
                });
     
                function autoPaly(){
                	timer=setInterval(function(){
                		iNow++;
                		iNow%=arr.length;
                		fnFade();
                	},2000);
                }
                autoPaly();
                
               	function fnFade(){
               	  aUlLi.each(function(i){
               	  	if(i!=iNow){
               	  		aUlLi.eq(i).fadeOut().css('z-index',1);
               	  		aOlLi.eq(i).removeClass('active');
               	  	}else{
               	  		aUlLi.eq(i).fadeIn().css('z-index',2);
               	  		aOlLi.eq(i).addClass('active');
               	  	}
               	  });
               	  aP.text(arr[iNow]);
               	} 	
               })();
		 	
//		 	          每日活动——日历提示
                (function(){
                	var aSpan=$('.calendar h3 span');
                	var aImg=$('.calendar ol .img');
                	var oPrompt=$('.toaday_info');
                	var oImg=oPrompt.find('span img');
                	var oStrong=oPrompt.find('strong');
                	var oP=oPrompt.find('p');
                	
                	aImg.hover(function(){
                		var iTop=$(this).parent().position().top-30;
             		    var iLeft=$(this).parent().position().left+55;
             		    var index=$(this).parent().index()%aSpan.size();
             		    
             		  
             		    
                		oPrompt.show().css({'left':iLeft ,'top':iTop});
                		oP.text($(this).attr('info'));
                		oImg.attr('src',$(this).attr('src'));
                		oStrong.text(aSpan.eq(index).text());
                		
                	},function(){
                		oPrompt.hide();
                	});
                })();
                
//              BBS论坛——高亮显示
                (function(){
                	var hot=$('.bbs ol li');
                	hot.mouseover(function(){
                		hot.removeClass('active').eq($(this).index()).addClass('active');
                	});
                })();
		 	});