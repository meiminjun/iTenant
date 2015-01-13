/*
// * @class iTenants.util.Global
 * @desc Tour Global
 */
var navCtr,mainCtr,fileUploadCtr;
var sprite, list = [], old1 = [0, 0], old2 = [0, 0];
var Global = {
	/*
	 * _globleParam_countryCode :全局变量 ，记录检查项编码 _globleParam_checkItemCode :全局变量
	 * ，记录检查项编码 _globleParam_floorName :全局变量 ，记录检查点编码 _globleParam_pointCode
	 * :全局变量 ，记录检查点编码 _globleParam_pointName :全局变量 ，记录检查点名称
	 * _globleParam_marketCode :全局变量 ，记录商场ID _globleParam_userName :
	 * 全局变量，记录用户账户名 _globleParam_userToken : 全局变量，记录Token值
	 * _globleParam_checkPointType :
	 * 用于在用户在checkpointview上点击不同的按钮时，取哪一个localstorage的值 _globleParam_telephone :
	 * 商场经理的电话 _globleParam_numberCode : _globleParam_floorCode : 楼层编码
	 * 
	 */
	userAccount : "huangcheng1",
	userToken : "",
//	userToken : "Mko7ozRPLsDmiFqJi7bUnNEkWUUV5wnaz%2fygR%2fWlpWE0fAWZXvTLYQChnRC6He3NaIiQLg1OnJYXVpu7qp%2fewneuLv%2bwoOyt%2fzozPiS%2frFJfGrCNVvNuqAlxgXB2lG0Kfgvh9%2fIHL3M5WBI4KdOP2KrVcKUK2sxRW2gzDC9UnhihmPLcNdXhsRyiUN2IXMLYTreaaS9LdPp6MFPYPS3fkSYIaIiu5ghC8rAfB8Av1bjge%2buh8B8g4QTUEyx%2fTygJvdYNJ4JB%2fqJ21s5h5RXuOlj%2fHVyEDvdiFps0Q%2bZtvyOIa7h2pmMTCIHFaEuUHwrvkGLXH3F%2bRXc%3d",
	// liuyifei pwd:simon_401a
	userPwd : "",
	appID : 'd716f46f-e234-4b38-b9c8-d0948b90f228',
	localUserRole : '',
	width : "",
	height : "",
	longitude : 2,
	latitude : 1,
	deviceType : "",
	requestObj : "",
	pushFlag : "",
	CMAAIOKey : null,
	language : "zh-cn",
	domain : "https://mipassuat.capitaretail.com.cn",
//	domainIEM : 'http://miemuat.capitaretail.com.cn',
//	domain : "https://miMaintenance .capitaretail.com.cn",
//	domain : "http://mitrackuat.capitaretail.com.cn:8023",
//	domain : "http://10.164.2.94:8023",
	itellDomain : 'https://mitell.capitaretail.com.cn',
//	itellDomain : 'http://10.36.64.164:2010',
	navigationViewId : 'indexNav',
	equipmentListHisVal : [],
	equipmentListHisHidden : true,
	loadingTpl : '<div class="text-overflow" style="float:left;max-width:80%">{0}</div><div style="float:left;width:30px;"><img style="width:1.4em;vertical-align: middle;padding-left: 3px;" src="./resources/images/mask/load.gif" /></div>',
	/**
	 * IEM应用认证
	 */
	interfaceCode : '41da3fb6-1265-143a-a678-b6e4786041da',
	/**
	 * IEM调用方法名
	 */
	method : '',
	/**
     * mallId
     */
    mallId : '',
    mallCode : '',
    mallName : '',
    itellId : '',
    itellStatus : '1',
	/**
     * 编辑页面上级
     */
    modifySuperior : '0',
    /**
     * 工单状态
     */
    ordersStatus : 0,
    /**
     * 工单认领人
     */
    responsePerson : '',
    /**
     * 状态记录
     */
    superiorRecord:'0',
    /**
     * 是否已经加载区域数据
     */
    loadedArea : false,
    /**
     * 是否已经加载分类数据
     */
    loadedCategory : false,
	/**
	 * back按钮
	 */
	backBtn : null,
	/**
	 * 维护设备ID
	 */
	equipmentId : null,
	/**
	 * 维护设备分类id
	 */
	categoryId : null,
	/**
	 * 提示语(加载中)配置
	 */
	/**
	 * 工单id
	 */
	orderId : null,
	/**
	 * 维护清单有无设备标识
	 */
	hasEquipment: true,
	/**
	 * 维修设备名称
	 */
	maintainEquipment : null,
	/**
	 * 维修设备位置
	 */
	maintainLocation : null,
	isRepairAdd : true,
	loadingMsg : {
		"zh-cn" : "数据加载中，请稍候...",
		"en-us" : "Data is loading, please wait..."
	},
	/*
	 * itell详情按钮 标记按钮内容
	 * */
	markBtn : {
		"markAsResolved" : {
			"zh-cn" : "标记为已解决",
			"en-us" : "Mark as resolved"		
		},
		"markAsUnresolved" : {
			"zh-cn" : "标记为待解决",
			"en-us" : "Mark as unresolved"				
		}
	},
    /*
     * 新增维修工单 设备无故障原因
     * */
    causeEmpty : {
    	"zh-cn" : "此设备无故障原因",
    	"en-us" : "No failure cause"
    },	
	/**
	 * 提示语配置
	 */
	tipsMsg : {
		"hisNoContent" : {
			"zh-cn" : "暂无备注",
			"en-us" : "No note"
		},
		"schedule" : {
			"zh-cn" : "计划",
			"en-us" : "Schedule"
		},
		"minute" : {
			"zh-cn" : "分钟前",
			"en-us" : "min ago"
		},
		"hour" : {
			"zh-cn" : "小时前",
			"en-us" : "hr ago"
		},
		"hours" : {
			"zh-cn" : "小时前",
			"en-us" : "hrs ago"
		},
		"day" : {
			"zh-cn" : "天前",
			"en-us" : "day ago"
		},
		"days" : {
			"zh-cn" : "天前",
			"en-us" : "days ago"
		},
		/**
         * 楼层列表中的title
         */
        "floorListTitle" : {
            "zh-cn" : "楼层",
            "en-us" : "Levels"
        },
        "cateListTitle" : {
            "zh-cn" : "分类",
            "en-us" : "Categories"
        },
        /**
         * 设备列表
         */
        "floorViewListTitle" : {
            "zh-cn" : "选择设备",
            "en-us" : "Equipments"
        },
        /**
         * 全部通过
         */
        "allThrough" : {
        	"zh-cn" : "全部通过",
            "en-us" : "All through"
        },
        /**
         * 逐项检查
         */
        "itemizedChecks" : {
        	"zh-cn" : "逐项检查",
            "en-us" : "Itemized checks"
        },
        /**
         * 正常
         */
        "normal" : {
        	"zh-cn" : "正常",
            "en-us" : "Normal"
        },
        /**
         * 需要维修
         */
        "needMaintenance" : {
        	"zh-cn" : "需要维修",
            "en-us" : "Need Maintenance"
        },
        /**
         * 有缺陷
         */
        "defective" : {
        	"zh-cn" : "故障、缺陷",
            "en-us" : "Defective"
        },
        /**
         * 位置
         */
        "location" : {
        	"zh-cn" : "位置",
            "en-us" : "Location"
        },
        /**
         * 维修记录
         */
        "records" : {
        	"zh-cn" : "维修记录",
            "en-us" : "Records"
        },
        /**
         * 故障原因
         */
        "reason" : {
        	"zh-cn" : "故障原因",
            "en-us" : "Reason"
        },
        /**
         * 出库申请
         */
        "goodsOutRequest" : {
        	"zh-cn" : "出库申请",
            "en-us" : "Request"
        },
        /**
         * 消耗物料
         */
        "goodsConsumption" : {
        	"zh-cn" : "消耗物料",
            "en-us" : "Consume"
        },
        /**
         * iTell工单
         */
        "iTellOrder" : {
        	"zh-cn" : "iTell工单",
            "en-us" : "iTell Order"
        },
        /**
         * 维护工单
         */
        "maintenanceOrder" : {
        	"zh-cn" : "维护工单",
            "en-us" : "Maintenance Order"
        },
        /**
         * 维修工单
         */
        "repairOrder" : {
        	"zh-cn" : "维修工单",
            "en-us" : "Repair Order"
        },
        /**
         * iTell记录
         */
        "iTellOrderRecord" : {
        	"zh-cn" : "iTell记录",
            "en-us" : "iTell Record"
        },
        /**
         * 维护记录
         */
        "maintenanceOrderRecord" : {
        	"zh-cn" : "维护记录",
            "en-us" : "Maintenance Record"
        },
        /**
         * 维修记录
         */
        "repairOrderRecord" : {
        	"zh-cn" : "维修记录",
            "en-us" : "Repair Record"
        },
        /**
         * 认领
         */
        "drl" : {
        	"zh-cn" : "认领",
            "en-us" : "Claim"
        },
        /**
         * 新建
         */
        "newCon" : {
        	"zh-cn" : "新建",
        	"en-us" : "New Construction"
        },
        /**
         * 处理中
         */
        "working" : {
        	"zh-cn" : "处理中",
        	"en-us" : "Working"
        },
        /**
         * 完工
         */
        "complete" : {
        	"zh-cn" : "完工",
        	"en-us" : "Complete"
        },
        /**
         * 认领成功
         * */
        "claimMsg" : {
        	"zh-cn" : "认领成功",
        	"en-us" : "Claiming success"
        },
        /**
         * 广播
         */
        "broadcast" : {
        	"zh-cn" : "广播",
            "en-us" : "Broadcast"
        },
        /**
         * 高
         */
        "high" : {
        	"zh-cn" : "高",
            "en-us" : "high"
        },
        /**
         * 中
         */
        "middleText" : {
        	"zh-cn" : "中",
            "en-us" : "Middle"
        },
        /**
         * 低
         */
        "low" : {
        	"zh-cn" : "低",
            "en-us" : "Low"
        },
        /**
         * 危险源
         */
        "hazard" : {
        	"zh-cn" : "危险源",
            "en-us" : "Hazard"
        },
        /**
         * 语音播放
         */
        "playingAudio":{
            "zh-cn" : "正在播放",
            "en-us" : "Playing"
        },
        /**
         * 暂停语音
         */
        "pauseAudio":{
            "zh-cn" : "暂停",
            "en-us" : "Pause"
        },
        /**
         * 停止播放
         */
        "stopAudio":{
            "zh-cn" : "停止",
            "en-us" : "Stop"
        },
        /**
         * 录音失败
         */
        "tapeFail":{
            "zh-cn" : "录音失败",
            "en-us" : "Taping fail"
        },
        /**
         * 获取资源文件失败
         */
        "loadSource":{
            "zh-cn" : "读取语音中,请稍等...",
            "en-us" : "Downloading voice, please wait..."
        },
        /**
         * 数据提交中
         */
        "submissionMsg" : {
    		"zh-cn" : "数据提交中，请稍候...",
    		"en-us" : "In the data submission, please wait..."
    	},
 		/**
		 * 提交成功
		 */
		"succeedMsg" : {
			"zh-cn" : "数据提交成功.",
			"en-us" : "Data submitted to the success."
		},
		/**
		 * 提交失败
		 */
		"failureMsg" : {
			"zh-cn" : "数据处理失败.",
			"en-us" : "Data processing failed."
		},
		/**
		 * 服务器请求错误
		 */
		"requestErrorMsg" : {
			"zh-cn" : "请求服务器失败，请稍候重试.",
			"en-us" : "Request that the server failed, please try again."
		},
		/**
		 * 空数据
		 */
		"emptyDataMsg" : {
			"zh-cn" : '<span class="defaultFont-style" style="font-size:.8em">没有相关数据.</span>',
			"en-us" : '<span class="defaultFont-style" style="font-size:.8em">No relevant data.</span>'
		},
		/**
		 * 空数据2
		 */
		"ungebetenEmptyMsg" : {
			"zh-cn" : "暂无数据.",
			"en-us" : "No data."
		},
		/**
		 * 必填项
		 */
		"requiredMsg" : {
			"zh-cn" : "请输入内容.",
			"en-us" : "Please enter the content."
		},
		/**
		 * 无网络连接
		 */
		"nonetworkconnection" : {
			"zh-cn" : "网络连接不可用.",
			"en-us" : "Network connection is unavailable."
		},
		/**
		 * 系统异常错误
		 */
		"abnormalMsg" : {
			"zh-cn" : "系统异常.",
			"en-us" : "System abnormalities."
		},
		/**
		 * 参数错误错误
		 */
		"paramsMsg" : {
			"zh-cn" : "参数错误.",
			"en-us" : "Parameter error."
		},
		/**
		 * 系统错误
		 */
		"systemErrorMsg" : {
			"zh-cn" : "系统错误.",
			"en-us" : "System Error."
		},
		/**
		 * 无权限
		 */
		"permissionsMsg" : {
			"zh-cn" : "无权限.",
			"en-us" : "No permissions."
		},
		/**
		 * 拍照提示
		 */
		"photoMsg" : {
			"zh-cn" : "最多保存三张图片.",
			"en-us" : "Only support to upload three images or less."
		},
		/**
		 * 提示
		 */
		"Prompt" : {
			"zh-cn" : "提示",
			"en-us" : "Prompt"
		},
		/**
		 * 确定
		 */
		"OK" : {
			"zh-cn" : "确定",
			"en-us" : "OK"
		},
		/**
		 * 图片上传
		 */
		"picUpload" : {
			"zh-cn" : "附件上传中，请稍候...",
			"en-us" : "Annex upload, please wait..."
		},
		/**
		 * 图片加载
		 */
		"picLoad" : {
			"zh-cn" : "图片加载中，请稍候...",
			"en-us" : "Image loading, please wait..."
		},
		/**
		 * 切换语言提示语
		 */
		"switchLanguage" : {
			"zh-cn" : "设置语言中...",
			"en-us" : "Setting Language..."
		},
		/**
		 * 检查输入项标题
		 */
		"checkInpTitle" : {
			"zh-cn" : "备注",
			"en-us" : "Remarks"
		},
		/**
		 * 显示图片
		 */
		"showPicText" : {
			"zh-cn" : "显示图片",
			"en-us" : "Show picture"
		},
		/**
		 * 总包分包空提示
		 */
		"consultantEmpty" : {
			"zh-cn" : "空",
			"en-us" : "empty"
		},
		"dateInvalid" : {
			"zh-cn" : "起始日期大于截止日期",
			"en-us" : "Start date is greater than the end date"
		},
		"saveDraftsMsg" : {
			"zh-cn" : "保存至草稿箱成功",
			"en-us" : "Save to Drafts success"
		},
		"selectRequiredMsg" : {
			"zh-cn" : "请选择要提交的数据",
			"en-us" : "Please select the data to be submitted"
		},
		/**
		 * 新增维修工单/名称为空
		 */
		"workOrderNameEmpty" : {
			"zh-cn" : "请输入标题",
			"en-us" : "Please enter the title"
		},
		/**
		 * 新增维修工单/设备为空
		 */
		"equipmentEmpty" : {
			"zh-cn" : "请选择设备",
			"en-us" : "Please select"
		},
		"equipmentChooseTips" : {
			"zh-cn" : "请选择设备",
			"en-us" : "Please select the equipment"
		},
		/**
		 * 新增维修工单/维修类型为空
		 */
		"solutionTypeEmpty" : {
			"zh-cn" : "请选择维修方式",
			"en-us" : "Please select the solution Type"
		},
		/**
		 * 新增维修工单/故障原因为空
		 */
		"failureReasonEmpty" : {
			"zh-cn" : "此设备无故障原因",
			"en-us" : "No failure cause"
		},
		/**
		 * 新增维修工单/故障描述为空
		 */
		"failureDescriptionEmpty" : {
			"zh-cn" : "请输入备注",
			"en-us" : "Please enter the Description"
		},
		/**
		 * 新增itell种类为空
		 */
		"speciesEmpty" : {
			"zh-cn" : "请选择种类",
			"en-us" : "Please select the species"
		},
		/**
         * 附件上传提示
         */
        "annexUpload":{
            "zh-cn" : "附件上传中...",
            "en-us" : "Attachment uploading..."
        },
        /**
         * 附件上传成功提示
         */
        "annexUploadSuccess":{
            "zh-cn" : "附件上传成功",
            "en-us" : "Attachment uploading success"
        },
        /**
         * 附件上传失败提示
         */
        "annexUploadFail":{
            "zh-cn" : "附件上传失败",
            "en-us" : "Attachment uploading failure"
        },
        /**
         * 与租户无关
         */
        "noTenantsMsg" : {
        	"zh-cn" : "租户无关",
            "en-us" : "The tenant has nothing to do"
        },
        /**
         * 与租户有关
         */
        "tenantsMsg" : {
        	"zh-cn" : "租户相关",
            "en-us" : "For tenant"
        },
        /*
         * 维修工单 详情 完工点击
         * 解决方式为空
         * */
        "waysValEmpty" : {
        	"zh-cn" : "请选择解决方式",
            "en-us" : "Please select the selution"
        },
        /*
         * 维修工单 详情 完工点击
         * 保修合同为空
         * */
        "contractEmpty" : {
        	"zh-cn" : "请输入保修合同",
            "en-us" : "Please select the warranty contract"
        },
        /*
         * 维修工单 详情 完工点击
         * 供应商名称为空
         * */
        "supplierEmpty" : {
        	"zh-cn" : "请输入供应商名称",
            "en-us" : "Please select the supplier name"
        },
        /*
         * 维修工单 详情 完工点击
         * 外包成本为空
         * */
        "costsEmpty" : {
        	"zh-cn" : "请输入外包成本",
            "en-us" : "Please select the cost of outsourcing"
        },        
        /*
         * 维修工单 详情 完工点击
         * 合同生效期为空
         * */
        "contractEffectiveDateEmpty" : {
        	"zh-cn" : "请输入合同生效期",
            "en-us" : "Please select the contract effective date"
        },
        /*
         * 维修工单 详情 完工点击
         * 合同终止期为空
         * */
        "contractExpirationDateEmpty" : {
        	"zh-cn" : "请输入合同终止期",
            "en-us" : "Please select the contract expiration date"
        },
        /**
         * 合同截止日期不能小于开始日期
         */
        "dateInvalid" : {
			"zh-cn" : "合同截止日期不能小于开始日期.",
			"en-us" : "The deadline cannot be less than start date."
		},
		"mainTitle" : {
			"zh-cn" : "商场",
			"en-us" : "Malls"
		},
		"filterTitle" : {
			"zh-cn" : "筛选",
			"en-us" : "Filter"		
		},
		"speciesEmptyText" : {
			"zh-cn" : "请选择种类",
			"en-us" : "Select category"
		},
		"closeText" : {
			"zh-cn" : "已结束",
			"en-us" : "CLOSED"
		},
		"reopenedText" : {
			"zh-cn" : "重新打开",
			"en-us" : "REOPENED"
		},
		"repairOrderItemsEmtpy" : {
			"zh-cn" : "维护清单未完成，不能完工！",
			"en-us" : "The list is not complete!"
		},
		"equipmentListEmpty" : {
			"zh-cn" : "设备列表未完成，不能完工！",
			"en-us" : "The list is not complete!"		
		},
		"sendMsgTips" : {
			"zh-cn" : "已成功通过邮件发送该信息，是否希望用短信方式再次发送？",
			"en-us" : "Message sent successfully by email.Do you want send SMSes to these recipients as well?"
		},
		'noMobile' : {
			"zh-cn" : "电话号码不存在!",
			"en-us" : "No Mobile!"
		},
		"success" : {
			"zh-cn" : "成功",
			"en-us" : "Success"
		},
		"noYes" : {
			"zh-cn" : "否,是的",
			"en-us" : "No,Yes"			
		}
	},
	/**
	 * 获取请求URL
	 */
	getDomainIEM : function() {
		return this.domainIEM + '/Api/MiemApiHandler.ashx?method=' + this.method
				+ '&tocken=' + encodeURIComponent(this.userToken) + '&interfaceCode='
				+ this.interfaceCode;
	},
	/**
	 * 获取LoadingMsg字符
	 * @returns
	 */
	getLoadingMsg : function() {
		var language = this.language,
		loadingMsg = this.loadingMsg[language];
		
		return loadingMsg;
	},
	/**
	 * 
	 * @param key
	 */
	getTipsMsg : function(key) {
		var language = this.language;
		if (this.tipsMsg[key]) {
			return this.tipsMsg[key][language];
		} else {
			return null;
		}
	}
};

/**
 * string format格式化
 * @param args
 * @returns {String}
 */
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                	//var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                	var reg=new RegExp ("({)"+i+"(})","g"); 
                	result = result.replace(reg, arguments[i]); 
                }
            }
        }
    }
    return result;
};

function smoothenList(points) {
    if (points.length < 3) {
        return ["M", points[0], points[1]];
    }
    var dx = [], dy = [], result = ['M'],
        i, ln = points.length;
    for (i = 0; i < ln; i += 2) {
        dx.push(points[i]);
        dy.push(points[i + 1]);
    }
    dx = Ext.draw.Draw.spline(dx);
    dy = Ext.draw.Draw.spline(dy);
    result.push(dx[0], dy[0], "C");
    for (i = 1, ln = dx.length; i < ln; i++) {
        result.push(dx[i], dy[i]);
    }
    return result;
}