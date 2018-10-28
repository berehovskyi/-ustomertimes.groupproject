<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>reduce</fullName>
        <field>Quantity__c</field>
        <formula>Product__r.Quantity__c -  Quantity__c</formula>
        <name>reduce</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <targetObject>Product__c</targetObject>
    </fieldUpdates>
</Workflow>
