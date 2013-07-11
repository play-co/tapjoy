<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:android="http://schemas.android.com/apk/res/android">

	<xsl:param name="tapJoyAppID"></xsl:param>
	<xsl:param name="tapJoySecretKey"></xsl:param>

	<xsl:template match="meta-data[@android:name='tapJoyAppID']">
		<meta-data android:name="tapJoyAppID" android:value="{$tapJoyAppID}"/>
	</xsl:template>

	<xsl:template match="meta-data[@android:name='tapJoySecretKey']">
		<meta-data android:name="tapJoySecretKey" android:value="{$tapJoySecretKey}"/>
	</xsl:template>

	<!--	<xsl:strip-space elements="*" />-->
	<xsl:output indent="yes" />

	<xsl:template match="comment()" />

	<xsl:template match="@*|node()">
		<xsl:copy>
			<xsl:apply-templates select="@*|node()" />
		</xsl:copy>
	</xsl:template>

</xsl:stylesheet>
