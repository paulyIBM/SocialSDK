package com.ibm.sbt.services.client.activitystreams;
/**
 * Activity streams ASGroup class, allows user to choose Group type
 * @author Manish Kataria
 */
public enum ASGroup {
	
	//// Possible values : @all,@following,@friends,@self,@involved
	
	ALL("@all"),
	FOLLOWING("@following"),
	FRIENDS("@friends"),
	SELF("@self"),
	INVOLVED("@involved"),
	SAVED("@saved"),
	ACTION("@actions"),
	RESPONSES("@responses"),
	NOTESFORME ("@notesforme"),
	NOTESFROMME("@notesfromme");

	
	String groupType;
	
	private ASGroup(String groupType) {
		this.groupType = groupType;
	}
	
	/**
	 * Wrapper method to return group type
	 * <p>
	 */
	public String getGroupType(){return groupType;}

}
