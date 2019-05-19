gdjs.HT_95ShooterCode = {};
gdjs.HT_95ShooterCode.GDPlayerObjects1= [];
gdjs.HT_95ShooterCode.GDPlayerObjects2= [];
gdjs.HT_95ShooterCode.GDRockObjects1= [];
gdjs.HT_95ShooterCode.GDRockObjects2= [];
gdjs.HT_95ShooterCode.GDPlayerBulletObjects1= [];
gdjs.HT_95ShooterCode.GDPlayerBulletObjects2= [];
gdjs.HT_95ShooterCode.GDBlackEnemyObjects1= [];
gdjs.HT_95ShooterCode.GDBlackEnemyObjects2= [];
gdjs.HT_95ShooterCode.GDBlueEnemyObjects1= [];
gdjs.HT_95ShooterCode.GDBlueEnemyObjects2= [];
gdjs.HT_95ShooterCode.GDSpaceBackgroundObjects1= [];
gdjs.HT_95ShooterCode.GDSpaceBackgroundObjects2= [];
gdjs.HT_95ShooterCode.GDPlayerParticleObjects1= [];
gdjs.HT_95ShooterCode.GDPlayerParticleObjects2= [];
gdjs.HT_95ShooterCode.GDGreenEnemyObjects1= [];
gdjs.HT_95ShooterCode.GDGreenEnemyObjects2= [];
gdjs.HT_95ShooterCode.GDEnemyBulletObjects1= [];
gdjs.HT_95ShooterCode.GDEnemyBulletObjects2= [];
gdjs.HT_95ShooterCode.GDEnemyParticleObjects1= [];
gdjs.HT_95ShooterCode.GDEnemyParticleObjects2= [];
gdjs.HT_95ShooterCode.GDGameOverObjects1= [];
gdjs.HT_95ShooterCode.GDGameOverObjects2= [];
gdjs.HT_95ShooterCode.GDlifesObjects1= [];
gdjs.HT_95ShooterCode.GDlifesObjects2= [];
gdjs.HT_95ShooterCode.GDTextBugsObjects1= [];
gdjs.HT_95ShooterCode.GDTextBugsObjects2= [];
gdjs.HT_95ShooterCode.GDTextBugsDestroyedObjects1= [];
gdjs.HT_95ShooterCode.GDTextBugsDestroyedObjects2= [];
gdjs.HT_95ShooterCode.GDNewObjectObjects1= [];
gdjs.HT_95ShooterCode.GDNewObjectObjects2= [];
gdjs.HT_95ShooterCode.GDTextLifesHereObjects1= [];
gdjs.HT_95ShooterCode.GDTextLifesHereObjects2= [];
gdjs.HT_95ShooterCode.GDBugObjects1= [];
gdjs.HT_95ShooterCode.GDBugObjects2= [];
gdjs.HT_95ShooterCode.GDWarningObjects1= [];
gdjs.HT_95ShooterCode.GDWarningObjects2= [];
gdjs.HT_95ShooterCode.GDErrorObjects1= [];
gdjs.HT_95ShooterCode.GDErrorObjects2= [];
gdjs.HT_95ShooterCode.GDfinishObjects1= [];
gdjs.HT_95ShooterCode.GDfinishObjects2= [];
gdjs.HT_95ShooterCode.GDTimerObjects1= [];
gdjs.HT_95ShooterCode.GDTimerObjects2= [];
gdjs.HT_95ShooterCode.GDshadowObjects1= [];
gdjs.HT_95ShooterCode.GDshadowObjects2= [];
gdjs.HT_95ShooterCode.GDhelp1Objects1= [];
gdjs.HT_95ShooterCode.GDhelp1Objects2= [];
gdjs.HT_95ShooterCode.GDskipTObjects1= [];
gdjs.HT_95ShooterCode.GDskipTObjects2= [];
gdjs.HT_95ShooterCode.GDskipObjects1= [];
gdjs.HT_95ShooterCode.GDskipObjects2= [];
gdjs.HT_95ShooterCode.GDhelp1TextObjects1= [];
gdjs.HT_95ShooterCode.GDhelp1TextObjects2= [];
gdjs.HT_95ShooterCode.GDhelp2Objects1= [];
gdjs.HT_95ShooterCode.GDhelp2Objects2= [];
gdjs.HT_95ShooterCode.GDhelp2TextObjects1= [];
gdjs.HT_95ShooterCode.GDhelp2TextObjects2= [];
gdjs.HT_95ShooterCode.GDhelp3Objects1= [];
gdjs.HT_95ShooterCode.GDhelp3Objects2= [];
gdjs.HT_95ShooterCode.GDhelp3TextObjects1= [];
gdjs.HT_95ShooterCode.GDhelp3TextObjects2= [];

gdjs.HT_95ShooterCode.conditionTrue_0 = {val:false};
gdjs.HT_95ShooterCode.condition0IsTrue_0 = {val:false};
gdjs.HT_95ShooterCode.condition1IsTrue_0 = {val:false};


gdjs.HT_95ShooterCode.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.HT_95ShooterCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.HT_95ShooterCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")))));
}
}}

}


{


gdjs.HT_95ShooterCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95ShooterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HT_95ShooterCode.condition0IsTrue_0.val) {
gdjs.HT_95ShooterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.HT_95ShooterCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95ShooterCode.GDhelp2TextObjects1.createFrom(runtimeScene.getObjects("help2Text"));
gdjs.HT_95ShooterCode.GDhelp3Objects1.createFrom(runtimeScene.getObjects("help3"));
gdjs.HT_95ShooterCode.GDhelp3TextObjects1.createFrom(runtimeScene.getObjects("help3Text"));
{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2TextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp3Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp3TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp3TextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDPlayerObjects1[i].setZOrder(160);
}
}}

}


{


gdjs.HT_95ShooterCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95ShooterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HT_95ShooterCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).add(1);
}}

}


{


gdjs.HT_95ShooterCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95ShooterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 2;
}if (gdjs.HT_95ShooterCode.condition0IsTrue_0.val) {
gdjs.HT_95ShooterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.HT_95ShooterCode.GDhelp1Objects1.createFrom(runtimeScene.getObjects("help1"));
gdjs.HT_95ShooterCode.GDhelp1TextObjects1.createFrom(runtimeScene.getObjects("help1Text"));
gdjs.HT_95ShooterCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95ShooterCode.GDhelp2TextObjects1.createFrom(runtimeScene.getObjects("help2Text"));
gdjs.HT_95ShooterCode.GDlifesObjects1.createFrom(runtimeScene.getObjects("lifes"));
{for(var i = 0, len = gdjs.HT_95ShooterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDPlayerObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp1Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp1TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp1TextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2TextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDlifesObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDlifesObjects1[i].setZOrder(160);
}
}}

}


{


gdjs.HT_95ShooterCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95ShooterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 3;
}if (gdjs.HT_95ShooterCode.condition0IsTrue_0.val) {
gdjs.HT_95ShooterCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95ShooterCode.GDhelp2TextObjects1.createFrom(runtimeScene.getObjects("help2Text"));
gdjs.HT_95ShooterCode.GDhelp3Objects1.createFrom(runtimeScene.getObjects("help3"));
gdjs.HT_95ShooterCode.GDhelp3TextObjects1.createFrom(runtimeScene.getObjects("help3Text"));
gdjs.HT_95ShooterCode.GDlifesObjects1.createFrom(runtimeScene.getObjects("lifes"));
{for(var i = 0, len = gdjs.HT_95ShooterCode.GDlifesObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDlifesObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp2TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp2TextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp3Objects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HT_95ShooterCode.GDhelp3TextObjects1.length ;i < len;++i) {
    gdjs.HT_95ShooterCode.GDhelp3TextObjects1[i].hide(false);
}
}}

}


{


gdjs.HT_95ShooterCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95ShooterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 4;
}if (gdjs.HT_95ShooterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shooter", false);
}}

}


}; //End of gdjs.HT_95ShooterCode.eventsList0xb2358


gdjs.HT_95ShooterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.HT_95ShooterCode.GDPlayerObjects1.length = 0;
gdjs.HT_95ShooterCode.GDPlayerObjects2.length = 0;
gdjs.HT_95ShooterCode.GDRockObjects1.length = 0;
gdjs.HT_95ShooterCode.GDRockObjects2.length = 0;
gdjs.HT_95ShooterCode.GDPlayerBulletObjects1.length = 0;
gdjs.HT_95ShooterCode.GDPlayerBulletObjects2.length = 0;
gdjs.HT_95ShooterCode.GDBlackEnemyObjects1.length = 0;
gdjs.HT_95ShooterCode.GDBlackEnemyObjects2.length = 0;
gdjs.HT_95ShooterCode.GDBlueEnemyObjects1.length = 0;
gdjs.HT_95ShooterCode.GDBlueEnemyObjects2.length = 0;
gdjs.HT_95ShooterCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.HT_95ShooterCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.HT_95ShooterCode.GDPlayerParticleObjects1.length = 0;
gdjs.HT_95ShooterCode.GDPlayerParticleObjects2.length = 0;
gdjs.HT_95ShooterCode.GDGreenEnemyObjects1.length = 0;
gdjs.HT_95ShooterCode.GDGreenEnemyObjects2.length = 0;
gdjs.HT_95ShooterCode.GDEnemyBulletObjects1.length = 0;
gdjs.HT_95ShooterCode.GDEnemyBulletObjects2.length = 0;
gdjs.HT_95ShooterCode.GDEnemyParticleObjects1.length = 0;
gdjs.HT_95ShooterCode.GDEnemyParticleObjects2.length = 0;
gdjs.HT_95ShooterCode.GDGameOverObjects1.length = 0;
gdjs.HT_95ShooterCode.GDGameOverObjects2.length = 0;
gdjs.HT_95ShooterCode.GDlifesObjects1.length = 0;
gdjs.HT_95ShooterCode.GDlifesObjects2.length = 0;
gdjs.HT_95ShooterCode.GDTextBugsObjects1.length = 0;
gdjs.HT_95ShooterCode.GDTextBugsObjects2.length = 0;
gdjs.HT_95ShooterCode.GDTextBugsDestroyedObjects1.length = 0;
gdjs.HT_95ShooterCode.GDTextBugsDestroyedObjects2.length = 0;
gdjs.HT_95ShooterCode.GDNewObjectObjects1.length = 0;
gdjs.HT_95ShooterCode.GDNewObjectObjects2.length = 0;
gdjs.HT_95ShooterCode.GDTextLifesHereObjects1.length = 0;
gdjs.HT_95ShooterCode.GDTextLifesHereObjects2.length = 0;
gdjs.HT_95ShooterCode.GDBugObjects1.length = 0;
gdjs.HT_95ShooterCode.GDBugObjects2.length = 0;
gdjs.HT_95ShooterCode.GDWarningObjects1.length = 0;
gdjs.HT_95ShooterCode.GDWarningObjects2.length = 0;
gdjs.HT_95ShooterCode.GDErrorObjects1.length = 0;
gdjs.HT_95ShooterCode.GDErrorObjects2.length = 0;
gdjs.HT_95ShooterCode.GDfinishObjects1.length = 0;
gdjs.HT_95ShooterCode.GDfinishObjects2.length = 0;
gdjs.HT_95ShooterCode.GDTimerObjects1.length = 0;
gdjs.HT_95ShooterCode.GDTimerObjects2.length = 0;
gdjs.HT_95ShooterCode.GDshadowObjects1.length = 0;
gdjs.HT_95ShooterCode.GDshadowObjects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp1Objects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp1Objects2.length = 0;
gdjs.HT_95ShooterCode.GDskipTObjects1.length = 0;
gdjs.HT_95ShooterCode.GDskipTObjects2.length = 0;
gdjs.HT_95ShooterCode.GDskipObjects1.length = 0;
gdjs.HT_95ShooterCode.GDskipObjects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp1TextObjects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp1TextObjects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp2Objects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp2Objects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp2TextObjects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp2TextObjects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp3Objects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp3Objects2.length = 0;
gdjs.HT_95ShooterCode.GDhelp3TextObjects1.length = 0;
gdjs.HT_95ShooterCode.GDhelp3TextObjects2.length = 0;

gdjs.HT_95ShooterCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['HT_95ShooterCode'] = gdjs.HT_95ShooterCode;
