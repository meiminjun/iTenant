/**
 * @desc	工单检查填写表单
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.HandoverFormContent', {
	extend: 'Ext.Container',
	xtype : 'handoverFormContent',
	requires: [
	    'Ext.TitleBar',
		'Ext.Label',
		'Ext.ux.AccordionList',
		'Ext.data.TreeStore'
	],
	config: {
		autoDestroy: false,
		style: 'padding: 3px',
		itemId: 'handoverFormContent',
		cls : 'handoverFormContent defaultFont-style',
		items: [{
			xtype: 'container',
			cls: 'head',
			itemId : 'hdFormFirstCon',
			tpl: [                
                '<div>',
                	'<div class="title">HANDOVER FORM<br>{title}</div>',
                	'<div class="row first">',
                		'<div class="left">',
	                		'<div class="title">',
	                			'{[this.getToContent()]}',
	                		'</div>',
	                		'<div class="data">',
	                			'{companyName}',
	                		'</div>',
                		'</div>',
                		'<div class="right">',
		            		'<div class="title">',
		            			'{[this.getUnitNoContent()]}',
		            		'</div>',
		            		'<div class="data">',
		            			'{unitNo}',
		            		'</div>',
		            	'</div>',
                	'</div>',
                	'<div class="row">',
	            		'<div class="title">',
	            			'{[this.getAttnContent()]}',
	            		'</div>',
	            		'<div class="data">',
	            			'{attn}',
	            		'</div>',
	            	'</div>',
	            	'<div class="row">',
	            		'<div class="title">',
	            			'{[this.getCompanyAddrContent()]}',
	            		'</div>',
	            		'<div class="data">',
	            			'{companyAddr}',
	            		'</div>',
	            	'</div>',
	            	'<div class="row">',
	            		'<div class="title">',
	            			'{[this.getContactNumberContent()]}',
	            		'</div>',
	            		'<div class="data">',
	            			'{contactNumber}',
	            		'</div>',
	            	'</div>',
	              '</div>',
                {		
                		getAttnContent: function(){
                			return 'Attn:';
                		},
                		getCompanyAddrContent: function(){
                			return 'Postal Address:';
                		},
                		getUnitNoContent: function(){
						    return 'Unit No:';
						},
						getToContent: function(){
							return 'To:';
						},
						getContactNumberContent: function(){
							return 'Contact Number:';
						}
	            }   
			]
			
		},
		{
			xtype: 'hfinspected'
		},
		{
			xtype: 'container',
			cls: 'thirdContainer',
			itemId : 'hdFormThirdCon',
			tpl: [
			'<div class="remark">Comments: <br><div></div><div></div><div></div><div></div></div>',     
			'<div class="first">{title}</div>',
			'<div class="second">{secondTitle}</div>',
			'<div class="third">',
				'<div>',
					'a)',
					'<div class="content">{cardNo}</div>',
					'access card no:',
				'</div>',
				'<div>',
					'b)',
					'<div class="content">{boxKey}</div>',
					'mail box key:',
				'</div>',
			'</div>',
			'<div class="fourthTitle">{thirdTitle}</div>',
			'<div class="five">',
				'<div class="left">',
					'Premises handed over by:',
					'<div class="content">',
						'<img id="signIcon1" width="50px" height="40px" style="margin:28px 47px auto" src="resources/images/sign.png" onclick="handingOverCtr.goToSignatureFn(\'signIcon1\',\'signRst1\')" />',
						'<img id="signRst1" width="80px" height="70px" style="margin-left:32px;display:none;"/>',
					'</div>',
					'<div style="font-weight: bold;">Authorised Signatory for Landlord</div>',
					'<div class="content" style="padding-top:50px">{designationName1}</div>',
					'<div style="font-weight: bold;">Name & Designation of Authorised Signatory</div> ',
					'<div class="content" style="padding-top:50px">{signDate1}</div>',
					'<div style="font-weight: bold;padding-bottom: 20px;">Date</div> ',
				'</div>',
				'<div class="right">',
					'Premises taken over by:',
					'<div class="content">',
						'<img id="signIcon2" width="50px" height="40px" style="margin:28px 47px auto" src="resources/images/sign.png" onclick="handingOverCtr.goToSignatureFn(\'signIcon2\',\'signRst2\')" />',
						'<img id="signRst2" width="80px" height="70px" style="margin-left:32px;display:none"/>',
					'</div>',
					'<div style="font-weight: bold;">Authorised Signatory for Tenant</div>',
					'<div class="content" style="padding-top:50px">{designationName2}</div>',
					'<div style="font-weight: bold;">Name & Designation of Authorised Signatory</div> ',
					'<div class="content" style="padding-top:50px">{signDate2}</div>',
					'<div style="font-weight: bold;padding-bottom: 20px;">Date</div> ',
				'</div>',
			'</div>'
			]
		},
		/*{
			xtype: 'hfappendix'
		}*/
		{
			xtype: 'accordionlist',
			listScrollable: false,
			scrollable: null,
			cls: 'appendix',
			displayField: 'tableName',
			headerItemTpl: [
                            '<tpl if="this.isExpanded(values)">',
                            	'<div class="tab"><div class="down"></div>{tableName}</div>',
                            '<tpl else>',
                            	'<div class="tab"><div class="right"></div>{tableName}</div>',
                            '</tpl>'
                        ].join(''),
            contentItemTpl: [
				'<tpl if="type==1">',
					'<div class="imgContent"><img src="{imgUrl}" /></div>',
				'<tpl elseif="type==2">',
					'<tpl if="title">',
						'<div class="title">{title}</div>',
					'<tpl else>',
						'<tpl if="column1">',
							'<div class="tr first">',
								'<div class="cel1">{column1}</div>',
								'<div class="cel2">{column2}</div>',
								'<div class="cel3">{column3}</div>',
							'</div>',
						'<tpl elseif="group">',
							'<div class="tr" style="font-weight:bold;background: #D9D9D9">',
								'<div class="cel1" style="text-align:left">{columnID}&nbsp;&nbsp;{columnTitle}</div>',
//								'<td style="background:#D9D9D9"><div class="cel1">{column1}</div></td>',
//								'<td colspan = "2" style="background:#D9D9D9;border-right:0px"><div class="cel2">{column2}</div></td>',
							'</div>', 
						'<tpl else>',
							'<div class="tr">',
								'<div class="cel1">{num}</div>',
								'<div class="cel2">{name}</div>',
								'<div class="cel3">{[handingOverCtr.getImgHtml(values.imgUrls)]}</div>',
							'</div>',
						'</tpl>',
					'</tpl>',
				'<tpl else>',
					'<tpl if="title">',
						'<div class="title">{title}</div>',
					'<tpl else>',
						'<tpl if="column1">',
							'<div class="tr first">',
								'<div class="cel1">{column1}</div>',
								'<div class="cel2">{column2}</div>',
								'<div class="cel3">{column3}</div>',
							'</div>',
						'<tpl else>',
							'<div class="tr">',
								'<div class="cel1">{num}</div>',
								'<div class="cel2">{name}</div>',
								'<div class="cel3">{[handingOverCtr.getHistoryHtml(values.history)]}{[handingOverCtr.getImgHtml(values.imgUrls)]}</div>',
							'</div>',
						'</tpl>',
					'</tpl>',
				'</tpl>'
            ].join(''),
            listConfig:{
            	itemHeight: null,
            },
            useSelectedHighlights: false
			 
		}]
	}
});