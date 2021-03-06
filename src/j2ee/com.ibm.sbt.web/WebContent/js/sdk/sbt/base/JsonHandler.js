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
 * Helpers for handling json data.
 */
define(['sbt/_bridge/declare', 'sbt/base/BaseHandler', 'sbt/xml','sbt/xpath'],function(declare, BaseHandler, xml, xpath) {

	var JsonHandler = declare("sbt.base.JsonHandler", sbt.base.BaseHandler , {	
		
		_dataType : "json",
		
		constructor : function (options){
		},
		
		_extractEntryFromSingleEntryFeed : function (data, ioArgs){			
			return data;
		},
		
		_extractIdFromEntry : function(entryData){
			return null;			
		},
		
		_extractSummaryFromEntitiesFeed : function (data, ioArgs){
			return null;
		},
		_extractEntriesFromEntitiesFeed : function (data, ioArgs){
			return data;
		},
		_constructPayload : function (requestArgs){
			return null;
		}
	
	});
	return JsonHandler;
});