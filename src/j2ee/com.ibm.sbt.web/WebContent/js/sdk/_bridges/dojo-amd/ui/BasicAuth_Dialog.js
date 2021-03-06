/*
 * � Copyright IBM Corp. 2012
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */

/**
 * Social Business Toolkit SDK.
 * 
 * Definition of a dojo based dialog for OAuth 1.0.
 */
define(['dijit/Dialog',"dojo/cache"], function(Dialog, cache) {
	return {
		show: function(options, dialogLoginPage) {
		  try{	
			var proxy = options.proxy.proxyUrl;
			var proxyServletURL = proxy.substring(0,proxy.lastIndexOf("/"))+"/basicAuth/"+options.proxyPath+"/JSApp";
			var d = new Dialog({
				title: "Authentication", 
	            style: "width: 350px",
	            content: cache("sbt", dialogLoginPage),
	            submitOnClickHandle : function (contentForm) {
	        		if(contentForm.username.value == "" || contentForm.password.value == ""){
	        			dojo.style(dojo.byId("wrongCredsMessage"),"display","block");
	        			return;
	        		}else{
	            		var postToProxy = {
							url:proxyServletURL, 
							content: {
								username:contentForm.username.value,
								password:contentForm.password.value
							},
							handle:function(data){
								if(data instanceof Error){
									var statusCode = data.status || data.response.status; // For dojo180 error code is in data.response.status 
									if(statusCode == 401 || statusCode == 403){
										dojo.style(dojo.byId("wrongCredsMessage"),"display","block");
										return;
									}
								}
								d.hide();
								delete sbt.dialog;
								options.callback();
						    }
	            		};
	            		options.transport.xhr("POST",postToProxy,true);
	        		}
	            }
	        });
		  }catch(er){
			  console.log("error in BasicAuth_Dialog "+er);
		  }	
		  sbt.dialog=d;
	      d.show();
		}
	};
});