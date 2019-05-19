gdjs.HT_95LGS1Code = {};
gdjs.HT_95LGS1Code.GDAnswerObjects1= [];
gdjs.HT_95LGS1Code.GDAnswerObjects2= [];
gdjs.HT_95LGS1Code.GDButtonObjects1= [];
gdjs.HT_95LGS1Code.GDButtonObjects2= [];
gdjs.HT_95LGS1Code.GDLineObjects1= [];
gdjs.HT_95LGS1Code.GDLineObjects2= [];
gdjs.HT_95LGS1Code.GDcomment2Objects1= [];
gdjs.HT_95LGS1Code.GDcomment2Objects2= [];
gdjs.HT_95LGS1Code.GDcontinueTextObjects1= [];
gdjs.HT_95LGS1Code.GDcontinueTextObjects2= [];
gdjs.HT_95LGS1Code.GDcommentText2Objects1= [];
gdjs.HT_95LGS1Code.GDcommentText2Objects2= [];
gdjs.HT_95LGS1Code.GDcommentTextObjects1= [];
gdjs.HT_95LGS1Code.GDcommentTextObjects2= [];
gdjs.HT_95LGS1Code.GDcommentObjects1= [];
gdjs.HT_95LGS1Code.GDcommentObjects2= [];
gdjs.HT_95LGS1Code.GDshadowObjects1= [];
gdjs.HT_95LGS1Code.GDshadowObjects2= [];
gdjs.HT_95LGS1Code.GDhelp1Objects1= [];
gdjs.HT_95LGS1Code.GDhelp1Objects2= [];
gdjs.HT_95LGS1Code.GDhelp1TextObjects1= [];
gdjs.HT_95LGS1Code.GDhelp1TextObjects2= [];
gdjs.HT_95LGS1Code.GDhelp2Objects1= [];
gdjs.HT_95LGS1Code.GDhelp2Objects2= [];
gdjs.HT_95LGS1Code.GDhelp2TextObjects1= [];
gdjs.HT_95LGS1Code.GDhelp2TextObjects2= [];
gdjs.HT_95LGS1Code.GDskipTObjects1= [];
gdjs.HT_95LGS1Code.GDskipTObjects2= [];
gdjs.HT_95LGS1Code.GDskipObjects1= [];
gdjs.HT_95LGS1Code.GDskipObjects2= [];

gdjs.HT_95LGS1Code.conditionTrue_0 = {val:false};
gdjs.HT_95LGS1Code.condition0IsTrue_0 = {val:false};
gdjs.HT_95LGS1Code.condition1IsTrue_0 = {val:false};


gdjs.HT_95LGS1Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.HT_95LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.HT_95LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HT_95LGS1Code.condition0IsTrue_0.val) {
gdjs.HT_95LGS1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
gdjs.HT_95LGS1Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.HT_95LGS1Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.HT_95LGS1Code.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95LGS1Code.GDhelp2TextObjects1.createFrom(runtimeScene.getObjects("help2Text"));
{for(var i = 0, len = gdjs.HT_95LGS1Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDLineObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp2TextObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp2TextObjects1[i].hide();
}
}}

}


{


gdjs.HT_95LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.HT_95LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HT_95LGS1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.HT_95LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.HT_95LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.HT_95LGS1Code.condition0IsTrue_0.val) {
gdjs.HT_95LGS1Code.GDhelp1Objects1.createFrom(runtimeScene.getObjects("help1"));
gdjs.HT_95LGS1Code.GDhelp1TextObjects1.createFrom(runtimeScene.getObjects("help1Text"));
gdjs.HT_95LGS1Code.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95LGS1Code.GDhelp2TextObjects1.createFrom(runtimeScene.getObjects("help2Text"));
{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp1Objects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp1TextObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp1TextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HT_95LGS1Code.GDhelp2TextObjects1.length ;i < len;++i) {
    gdjs.HT_95LGS1Code.GDhelp2TextObjects1[i].hide(false);
}
}}

}


{


gdjs.HT_95LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.HT_95LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.HT_95LGS1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS1", false);
}}

}


}; //End of gdjs.HT_95LGS1Code.eventsList0xb2358


gdjs.HT_95LGS1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.HT_95LGS1Code.GDAnswerObjects1.length = 0;
gdjs.HT_95LGS1Code.GDAnswerObjects2.length = 0;
gdjs.HT_95LGS1Code.GDButtonObjects1.length = 0;
gdjs.HT_95LGS1Code.GDButtonObjects2.length = 0;
gdjs.HT_95LGS1Code.GDLineObjects1.length = 0;
gdjs.HT_95LGS1Code.GDLineObjects2.length = 0;
gdjs.HT_95LGS1Code.GDcomment2Objects1.length = 0;
gdjs.HT_95LGS1Code.GDcomment2Objects2.length = 0;
gdjs.HT_95LGS1Code.GDcontinueTextObjects1.length = 0;
gdjs.HT_95LGS1Code.GDcontinueTextObjects2.length = 0;
gdjs.HT_95LGS1Code.GDcommentText2Objects1.length = 0;
gdjs.HT_95LGS1Code.GDcommentText2Objects2.length = 0;
gdjs.HT_95LGS1Code.GDcommentTextObjects1.length = 0;
gdjs.HT_95LGS1Code.GDcommentTextObjects2.length = 0;
gdjs.HT_95LGS1Code.GDcommentObjects1.length = 0;
gdjs.HT_95LGS1Code.GDcommentObjects2.length = 0;
gdjs.HT_95LGS1Code.GDshadowObjects1.length = 0;
gdjs.HT_95LGS1Code.GDshadowObjects2.length = 0;
gdjs.HT_95LGS1Code.GDhelp1Objects1.length = 0;
gdjs.HT_95LGS1Code.GDhelp1Objects2.length = 0;
gdjs.HT_95LGS1Code.GDhelp1TextObjects1.length = 0;
gdjs.HT_95LGS1Code.GDhelp1TextObjects2.length = 0;
gdjs.HT_95LGS1Code.GDhelp2Objects1.length = 0;
gdjs.HT_95LGS1Code.GDhelp2Objects2.length = 0;
gdjs.HT_95LGS1Code.GDhelp2TextObjects1.length = 0;
gdjs.HT_95LGS1Code.GDhelp2TextObjects2.length = 0;
gdjs.HT_95LGS1Code.GDskipTObjects1.length = 0;
gdjs.HT_95LGS1Code.GDskipTObjects2.length = 0;
gdjs.HT_95LGS1Code.GDskipObjects1.length = 0;
gdjs.HT_95LGS1Code.GDskipObjects2.length = 0;

gdjs.HT_95LGS1Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['HT_95LGS1Code'] = gdjs.HT_95LGS1Code;
