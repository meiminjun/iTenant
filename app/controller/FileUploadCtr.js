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
			navigator.camera.getPicture(function(data) {
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

			}, function(error) {
				console.log('error', error);
				return;
			}, {
				quality : 80,
				sourceType : 1,
				destinationType : 0,
				targetWidth : 720,
				targetHeight : 1280
			});
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
			navigator.camera.getPicture(function(data) {
				if (Ext.getDom('myImage1').style.display == 'none') {
					Ext.getDom('iDelBtn1').style.display = "block";
					// Ext.getDom('myImage1').src =
					// "data:image/jpeg;base64,"+data;
					Ext.getDom('myImage1').src = "data:image/jpeg;base64," + data;
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

			}, function(error) {
				console.log('error', error);
				return;
			}, {
				quality : 80,
				sourceType : 0,
				destinationType : 0,
				targetWidth : 720,
				targetHeight : 1280
			});
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
    }
});