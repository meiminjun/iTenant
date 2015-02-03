/**
 * 附件操作，包含拍照、相册、录音和提交图片和语音
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.controller.FileUploadCtr', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {},
        control: {}
    },
    /**
	 * 获取图片actionsheet 从相册/拍照
	 */
	getPhoto : function() {
		if (!this.photoActionSheet) {
			this.photoActionSheet = Ext.widget('photoActionSheet');
		}
		var photoActionSheet = this.photoActionSheet;
		Ext.Viewport.add(photoActionSheet);
		photoActionSheet.show();
	},
	/**
	 * 拍照 phonegap > camera.getPicture successCallback {}, failCallback {},
	 * config {sourceType : 0 相册/sourceType : 1拍照, destinationType : 0 return
	 * base64/destinationType ：1 reurn url}
	 */
	photographFun : function() {
		if (!iTenants.util.PubOperation.isGoogleChrome()) {
			if(Ext.os.is.iOS){
              	Cordova.exec(function(data) {
              		if (Ext.getDom('myImage1').style.display == 'none') {
    					Ext.getDom('iDelBtn1').style.display = "block";
    					// Ext.getDom('myImage1').src =
    					// "data:image/jpeg;base64,"+data;
    					Ext.getDom('myImage1').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage1').style.display = 'inline';
    					console.log(data);
    					window.localStorage.setItem("_globleParam_imgeUrl1", data);
    				} else if (Ext.getDom('myImage2').style.display == 'none') {
    					Ext.getDom('iDelBtn2').style.display = "block";
    					Ext.getDom('myImage2').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage2').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl2", data);
    				} else if (Ext.getDom('myImage3').style.display == 'none') {
    					Ext.getDom('iDelBtn3').style.display = "block";
    					Ext.getDom('myImage3').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage3').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl3", data);
    				} else {
    					navigator.notification.alert(Global.getTipsMsg('photoMsg'),
    							null, Global.getTipsMsg('Prompt'), Global
    									.getTipsMsg('OK'));
    				}
				}, null, "CameraPostil", "takePicture", [ "1", "0" ]);
				// 1代表照相机、0代表相册获取图片 //0代表base64 //1代表url
			}else{
				var quality = 50;
			    var destinationType = 0;
			    var sourceType = 1;
			    var targetWidth = Global.width;
			    var targetHeight = Global.height;
			    var encodingType = 0;
			    var mediaType = 0;
			    var allowEdit = 1;
			    var correctOrientation = true;
			    var saveToPhotoAlbum = false;

			    var args = [quality, destinationType, sourceType, targetWidth, targetHeight, encodingType,
			                mediaType, allowEdit, correctOrientation, saveToPhotoAlbum];
			    
				Cordova.exec(function(data){
					if (Ext.getDom('myImage1').style.display == 'none') {
    					Ext.getDom('iDelBtn1').style.display = "block";
    					// Ext.getDom('myImage1').src =
    					// "data:image/jpeg;base64,"+data;
    					Ext.getDom('myImage1').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage1').style.display = 'inline';
    					console.log(data);
    					window.localStorage.setItem("_globleParam_imgeUrl1", data);
    				} else if (Ext.getDom('myImage2').style.display == 'none') {
    					Ext.getDom('iDelBtn2').style.display = "block";
    					Ext.getDom('myImage2').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage2').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl2", data);
    				} else if (Ext.getDom('myImage3').style.display == 'none') {
    					Ext.getDom('iDelBtn3').style.display = "block";
    					Ext.getDom('myImage3').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage3').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl3", data);
    				} else {
    					navigator.notification.alert(Global.getTipsMsg('photoMsg'),
    							null, Global.getTipsMsg('Prompt'), Global
    									.getTipsMsg('OK'));
    				}
				},null,"CameraPostil", "takePicture",args);	
			}
		} else {
			Ext.Msg.alert('手机上才能使用该功能.');
		}
	},
	/**
	 * 相册 phonegap > camera.getPicture successCallback {}, failCallback {},
	 * config {sourceType : 0 相册/sourceType : 1拍照, destinationType : 0 return
	 * base64/destinationType ：1 reurn url}
	 */
	albumFun : function() {
		if (!iTenants.util.PubOperation.isGoogleChrome()) {
			if(Ext.os.is.iOS){
              	Cordova.exec(function(data) {
              		if (Ext.getDom('myImage1').style.display == 'none') {
    					Ext.getDom('iDelBtn1').style.display = "block";
    					// Ext.getDom('myImage1').src =
    					// "data:image/jpeg;base64,"+data;
    					Ext.getDom('myImage1').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage1').style.display = 'inline';
    					console.log(data);
    					window.localStorage.setItem("_globleParam_imgeUrl1", data);
    				} else if (Ext.getDom('myImage2').style.display == 'none') {
    					Ext.getDom('iDelBtn2').style.display = "block";
    					Ext.getDom('myImage2').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage2').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl2", data);
    				} else if (Ext.getDom('myImage3').style.display == 'none') {
    					Ext.getDom('iDelBtn3').style.display = "block";
    					Ext.getDom('myImage3').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage3').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl3", data);
    				} else {
    					navigator.notification.alert(Global.getTipsMsg('photoMsg'),
    							null, Global.getTipsMsg('Prompt'), Global
    									.getTipsMsg('OK'));
    				}
				}, null, "CameraPostil", "takePicture", [ "0", "0" ]);
				// 1代表照相机、0代表相册获取图片 //0代表base64 //1代表url
			}else{
				var quality = 50;
			    var destinationType = 0;
			    var sourceType = 0;
			    var targetWidth = Global.width;
			    var targetHeight = Global.height;
			    var encodingType = 0;
			    var mediaType = 0;
			    var allowEdit = 1;
			    var correctOrientation = true;
			    var saveToPhotoAlbum = false;

			    var args = [quality, destinationType, sourceType, targetWidth, targetHeight, encodingType,
			                mediaType, allowEdit, correctOrientation, saveToPhotoAlbum];
			    
				Cordova.exec(function(data){
					if (Ext.getDom('myImage1').style.display == 'none') {
    					Ext.getDom('iDelBtn1').style.display = "block";
    					// Ext.getDom('myImage1').src =
    					// "data:image/jpeg;base64,"+data;
    					Ext.getDom('myImage1').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage1').style.display = 'inline';
    					console.log(data);
    					window.localStorage.setItem("_globleParam_imgeUrl1", data);
    				} else if (Ext.getDom('myImage2').style.display == 'none') {
    					Ext.getDom('iDelBtn2').style.display = "block";
    					Ext.getDom('myImage2').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage2').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl2", data);
    				} else if (Ext.getDom('myImage3').style.display == 'none') {
    					Ext.getDom('iDelBtn3').style.display = "block";
    					Ext.getDom('myImage3').src = "data:image/jpeg;base64," + data;;
    					Ext.getDom('myImage3').style.display = 'inline';
    					window.localStorage.setItem("_globleParam_imgeUrl3", data);
    				} else {
    					navigator.notification.alert(Global.getTipsMsg('photoMsg'),
    							null, Global.getTipsMsg('Prompt'), Global
    									.getTipsMsg('OK'));
    				}
				},null,"CameraPostil", "takePicture",args);	
			}
		} else {
			Ext.Msg.alert('手机上才能使用该功能.');
		}
	},
	/**
    * 提交图片和语音
    * @params {callbackFn}
    */
    submitAnnex : function(callbackFn,obj){
    	var me = this,
	        path1=window.localStorage.getItem("_globleParam_imgeUrl1"),
	        path2=window.localStorage.getItem("_globleParam_imgeUrl2"),
	        path3=window.localStorage.getItem("_globleParam_imgeUrl3"),
	    	imgPathArr = new Array(),
	    	annexIDArr = new Array(),
	        voice=window.localStorage.getItem("_globleParam_audioUrl");
	        
	    if(!iTenants.util.PubOperation.isGoogleChrome()){
	    	var ft = new FileTransfer();
	    }    
        //生成32位UGID
        var guid = "",
        digit = 32;
        while(digit--){
       
          guid += Math.floor(Math.random()*16.0).toString(16);
        
        }
        console.log("==guid=="+guid);
        console.log("==imgurl1=="+window.localStorage.getItem("_globleParam_imgeUrl1"));
        console.log("==imgurl2=="+window.localStorage.getItem("_globleParam_imgeUrl2"));
        console.log("==imgurl3=="+window.localStorage.getItem("_globleParam_imgeUrl3"));
        console.log("==imgurl1=="+path1);
        console.log("==imgurl2=="+path2);
        console.log("==imgurl3=="+path3);
       
       // 附件URL
       var accessoryUrl="",audioUrl="";
   		   accessoryUrl= Global.domain+"/api/MobileInterface/UploadImage?userName="+Global.userAccount;
       	   console.log("==accessoryUrl=="+accessoryUrl);
           audioUrl= Global.domain+"/api/MobileInterface/UploadAudio?userName="+Global.userAccount+"&extension=.mp3";
	        
	    if(path1){imgPathArr.push({"Key":path1});}
	    if(path2){imgPathArr.push({"Key":path2});}
	    if(path3){imgPathArr.push({"Key":path3});}
	    var params = {
	        imgStr : Ext.encode(imgPathArr),
	        userName : Global.userAccount
	    };	
	    console.log("Start to Submit Annex !!!!!!!!!!!!!!");
//				    console.log(params.imgStr);
//				    console.log(params.userName);
	    iTenants.util.PubOperation.showTips("picUpload","normal");
	   
	    //只有语音 发语音
	    if(Ext.isEmpty(path1) && Ext.isEmpty(path2) && Ext.isEmpty(path3) && !Ext.isEmpty(voice)){
	        console.log("Upload Audio File Begin:----------------------");
	        console.log('voice-----'+voice);
	        ft.upload(voice,audioUrl, function(response){
	            console.log("Upload File success:----------------------");
	            iTenants.util.PubOperation.hideLoadMask();
	            iTenants.util.PubOperation.showTips("annexUploadSuccess","success");
	            //删除语音
	            tapeActionSheetCtr.delTaping();
	            Ext.Function.defer(function(){
		             console.log(Ext.JSON.encode(response));
	              	 console.log("语音附件提交结果response："+response.response);
                     var audioResObj = Ext.JSON.decode(response.response);
                     if(audioResObj.Success && audioResObj.Result){
                		 Ext.Viewport.setMasked(false);
                		 annexIDArr.push(audioResObj.Result.FileId);
                		 callbackFn(annexIDArr.join(','),obj);
                	 }
	            },1500);
	        }, function(error){
	            console.log("Upload Audio File failure:----------------------");
	            iTenants.util.PubOperation.hideLoadMask();
	            iTenants.util.PubOperation.showTips("annexUploadFail","failure");
	            //发送按钮启用
	            obj.setDisabled(false);
	            //删除语音
	            tapeActionSheetCtr.delTaping();
	        },{},true);
	    // 图片和语音都为空
	    }else if(Ext.isEmpty(path1) && Ext.isEmpty(path2) && Ext.isEmpty(path3) && Ext.isEmpty(voice)){
	    	callbackFn("",obj);
	    // 先传图片再传语音
    	}else{
	        console.log('send pic start:');
	            Ext.Ajax.request({
	                 url:Global.domain + '/api/MobileInterface/UploadImage',
	                 params : params,
	                 timeout : 50000,
	                 method:"POST",
	                 success:function(response){
	                     console.log("图片附件提交结果："+response.responseText);
	                     var resObj = Ext.decode(response.responseText);
	                     if(resObj.Success && resObj.PageResult.Source){
	                    	 // 遍历图片附件id
	                    	 var photoFileArr = resObj.PageResult.Source;
	                    	 Ext.Array.each(photoFileArr, function(photoFile, index, countriesItSelf) {
	                    		 annexIDArr.push(photoFile.FileId);
	                		 });
	                    	 
	                         // 删除图片
	                         if(!Ext.isEmpty(path1)){
	                             photoActionSheetCtr.delPic(1);
	                         }
	                         if(!Ext.isEmpty(path2)){
	                             photoActionSheetCtr.delPic(2);
	                         }
	                         if(!Ext.isEmpty(path3)){
	                             photoActionSheetCtr.delPic(3);
	                         }
	
	                         //继续上传语音
	                         if(!Ext.isEmpty(voice)){
		                         console.log("Upload Audio File Begin:----------------------");
		                         console.log('voice-----'+voice);
		                         ft.upload(voice,audioUrl, function(response){
		                             console.log("Upload File success:----------------------");
		                             iTenants.util.PubOperation.hideLoadMask();
		                             iTenants.util.PubOperation.showTips("annexUploadSuccess","success");
		                             //删除语音
		                             tapeActionSheetCtr.delTaping();
		                             Ext.Function.defer(function(){	 
			                             console.log(Ext.JSON.encode(response));
						               	 console.log("语音附件提交结果response："+response.response);
					                     var audioResObj = Ext.JSON.decode(response.response);
					                     if(audioResObj.Success && audioResObj.Result){
					                		 Ext.Viewport.setMasked(false);
					                		 annexIDArr.push(audioResObj.Result.FileId);
					                		 callbackFn(annexIDArr.join(','),obj);
					                	 }
		                             },1500);
		                         }, function(error){
		                             console.log("Upload Audio File failure:----------------------");
		                             iTenants.util.PubOperation.hideLoadMask();
		                             iTenants.util.PubOperation.showTips("annexUploadFail","failure");
		                             //发送按钮启用
		             	             obj.setDisabled(false);
		                             //删除语音
		                             tapeActionSheetCtr.delTaping();
		                         }, {},true);
		                     // 只上传了图片
	                         }else{
	                        	 iTenants.util.PubOperation.hideLoadMask();
	                        	 iTenants.util.PubOperation.showTips("annexUploadSuccess","success");
	                             Ext.Function.defer(function(){
	                             		Ext.Viewport.setMasked(false);
	                             		callbackFn(annexIDArr.join(','),obj);
	                             },1500);
	                         }
	                     }else{
	                    	 iTenants.util.PubOperation.hideLoadMask();
	                    	 iTenants.util.PubOperation.showTips('annexUploadFail','failure');
	                    	 //发送按钮启用
             	             obj.setDisabled(false);
	                         //删除图片
	                         if(!Ext.isEmpty(path1)){
	                             photoActionSheetCtr.delPic(1);
	                         }
	                         if(!Ext.isEmpty(path2)){
	                             photoActionSheetCtr.delPic(2);
	                         }
	                         if(!Ext.isEmpty(path3)){
	                             photoActionSheetCtr.delPic(3);
	                         }
	                         //删除语音
	                         tapeActionSheetCtr.delTaping();
	                    }
	                 },
	                 failure:function(error){
	                     console.log("附件提交结果1："+error);
	                     iTenants.util.PubOperation.hideLoadMask();
	                     iTenants.util.PubOperation.showTips('annexUploadFail','failure');
	                     //发送按钮启用
	     	             obj.setDisabled(false);
	                     //删除图片
	                     if(!Ext.isEmpty(path1)){
	                         photoActionSheetCtr.delPic(1);
	                     }
	                     if(!Ext.isEmpty(path2)){
	                         photoActionSheetCtr.delPic(2);
	                     }
	                     if(!Ext.isEmpty(path3)){
	                         photoActionSheetCtr.delPic(3);
	                     }
	                     //删除语音
	                     tapeActionSheetCtr.delTaping();
	                }
	            });
	    }
    },
	/**
	 * 批注图纸预览（一张）
	 * 
	 * @param isBase64
	 * @param path
	 * @param title
	 * @param currentIndex
	 * @param hasDomain
	 */
	viewPostilPic : function(isBase64, path, title, currentIndex,hasDomain) {
		var me = this;
    	navCtr.pushToNext('iTenants.view.PostilImgView', function(view) {
    		view.down('titlebar').setTitle(title);
    		var src;
			if(hasDomain && hasDomain === true){
				src = path;
			}else{
				src = isBase64 ? "data:image/png;base64," + path : Global.domain+"/"+decodeURIComponent(path);
			}
//			console.log(src);
			if(!view.getComponent('imageView')){
				view.add({
					xtype : 'imageviewer',
					itemId : 'imageView',
					imageSrc : src,
					style : 'background : rgba(53, 49, 49,1)'
				});
			}
			me.urlImg = src;
			
			// 检查点图纸标注才显示标注按钮
			postilBtn = view.down('titlebar button[itemId=postilBtn]');
			if(handingOverCtr.imageGridSuperior == 'modifyPostil'){
				postilBtn.show();
			}else{
				postilBtn.hide();
			}
		});
	},
	/**
	 * carousel缩略图预览
	 * 
	 * @param isBase64
	 * @param path
	 * @param currentIndex
	 * @param hasDomain
	 */
	viewPic : function(isBase64, path, currentIndex,hasDomain) {
		var pathArr = path.toString().split('|'),
			subItem = [],
			src;
		if (this.carouselView) {
			this.carouselView.destroy();
		}
		this.carouselView = Ext.create('iTenants.view.CarouselView',{
			zIndex: 1
		});
		Ext.Array.each(pathArr, function(path) {
			if(hasDomain && hasDomain === true){
				src = isBase64 ? "data:image/png;base64," + path : Global.domain + "/" + decodeURIComponent(path);
			}else{
				src = isBase64 ? "data:image/png;base64," + path : decodeURIComponent(path);
			}
//			console.log(src);
			subItem.push({
				xtype : 'imageviewer',
				imageSrc : src,
				style : 'background : rgba(53, 49, 49,1)'
			});
		});
		this.carouselView.down('carousel').setItems(subItem);
		this.carouselView.down('carousel').setActiveItem(currentIndex - 1);
		Ext.Viewport.add(this.carouselView);
		this.carouselView.show();
	},
	/**
	 * 删除相机或拍照图片
	 * @param num
	 */
	delPic : function(num) {
		var numStr = num.toString(),
			path = window.localStorage.getItem("_globleParam_imgeUrl" + numStr);

		if (!Ext.isEmpty(path)) {
			Ext.getDom('iDelBtn' + numStr).style.display = "none";
			Ext.getDom('myImage' + numStr).src = "data:image/jpeg;base64,";
			Ext.getDom('myImage' + numStr).style.display = 'none';
			// clear localstorage
			window.localStorage.removeItem("_globleParam_imgeUrl" + numStr);
		}
	},
	/**
	 * 删除批注缩略图
	 * @param num
	 */
	delPostilPic : function(num){
		var numStr = num.toString(),
			path = window.localStorage.getItem("_globleParam_postilImgeUrl" + numStr);
		
		if (!Ext.isEmpty(path)) {
			Ext.getDom('postilDelBtn' + numStr).style.display = "none";
			Ext.getDom('postilImage' + numStr).src = "data:image/jpeg;base64,";
			Ext.getDom('postilImage' + numStr).style.display = 'none';
			// clear localstorage
			window.localStorage.removeItem("_globleParam_postilImgeUrl" + numStr);
		}
	},
	/**
	 * 清空相片和批注图纸
	 */
	clearPic : function(){
		var me = fileUploadCtr;
		me.delPic(1);
		me.delPic(2);
		me.delPic(3);
		me.delPostilPic(1);
	}
});