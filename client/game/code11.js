gdjs.LGS1Code = {};
gdjs.LGS1Code.GDAnswerObjects1= [];
gdjs.LGS1Code.GDAnswerObjects2= [];
gdjs.LGS1Code.GDButtonObjects1= [];
gdjs.LGS1Code.GDButtonObjects2= [];
gdjs.LGS1Code.GDLineObjects1= [];
gdjs.LGS1Code.GDLineObjects2= [];
gdjs.LGS1Code.GDcomment2Objects1= [];
gdjs.LGS1Code.GDcomment2Objects2= [];
gdjs.LGS1Code.GDcontinueTextObjects1= [];
gdjs.LGS1Code.GDcontinueTextObjects2= [];
gdjs.LGS1Code.GDcommentText2Objects1= [];
gdjs.LGS1Code.GDcommentText2Objects2= [];
gdjs.LGS1Code.GDcommentTextObjects1= [];
gdjs.LGS1Code.GDcommentTextObjects2= [];
gdjs.LGS1Code.GDcommentObjects1= [];
gdjs.LGS1Code.GDcommentObjects2= [];
gdjs.LGS1Code.GDshadowObjects1= [];
gdjs.LGS1Code.GDshadowObjects2= [];
gdjs.LGS1Code.GDhelp1Objects1= [];
gdjs.LGS1Code.GDhelp1Objects2= [];
gdjs.LGS1Code.GDhelp1TextObjects1= [];
gdjs.LGS1Code.GDhelp1TextObjects2= [];
gdjs.LGS1Code.GDhelp2Objects1= [];
gdjs.LGS1Code.GDhelp2Objects2= [];
gdjs.LGS1Code.GDhelp2TextObjects1= [];
gdjs.LGS1Code.GDhelp2TextObjects2= [];
gdjs.LGS1Code.GDskipTObjects1= [];
gdjs.LGS1Code.GDskipTObjects2= [];
gdjs.LGS1Code.GDskipObjects1= [];
gdjs.LGS1Code.GDskipObjects2= [];
gdjs.LGS1Code.GDTimerObjects1= [];
gdjs.LGS1Code.GDTimerObjects2= [];

gdjs.LGS1Code.conditionTrue_0 = {val:false};
gdjs.LGS1Code.condition0IsTrue_0 = {val:false};
gdjs.LGS1Code.condition1IsTrue_0 = {val:false};
gdjs.LGS1Code.condition2IsTrue_0 = {val:false};
gdjs.LGS1Code.condition3IsTrue_0 = {val:false};
gdjs.LGS1Code.conditionTrue_1 = {val:false};
gdjs.LGS1Code.condition0IsTrue_1 = {val:false};
gdjs.LGS1Code.condition1IsTrue_1 = {val:false};
gdjs.LGS1Code.condition2IsTrue_1 = {val:false};
gdjs.LGS1Code.condition3IsTrue_1 = {val:false};


gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDcontinueTextObjects1Objects = Hashtable.newFrom({"continueText": gdjs.LGS1Code.GDcontinueTextObjects1});gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.LGS1Code.GDButtonObjects1});gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.LGS1Code.GDButtonObjects1});gdjs.LGS1Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS1Code.condition0IsTrue_0.val) {
gdjs.LGS1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
gdjs.LGS1Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS1Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
{for(var i = 0, len = gdjs.LGS1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDLineObjects1[i].setAnimationName("gray");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.LGS1Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDcontinueTextObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.LGS1Code.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.LGS1Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)))));
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
gdjs.LGS1Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));

gdjs.LGS1Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS1Code.conditionTrue_1 = gdjs.LGS1Code.condition0IsTrue_0;
gdjs.LGS1Code.condition0IsTrue_1.val = false;
gdjs.LGS1Code.condition1IsTrue_1.val = false;
gdjs.LGS1Code.condition2IsTrue_1.val = false;
{
gdjs.LGS1Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDcontinueTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS1Code.condition0IsTrue_1.val ) {
{
gdjs.LGS1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS1Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS1Code.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.LGS1Code.GDButtonObjects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS1Code.condition2IsTrue_1.val = true;
        gdjs.LGS1Code.GDButtonObjects1[k] = gdjs.LGS1Code.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.LGS1Code.GDButtonObjects1.length = k;}}
}
gdjs.LGS1Code.conditionTrue_1.val = true && gdjs.LGS1Code.condition0IsTrue_1.val && gdjs.LGS1Code.condition1IsTrue_1.val && gdjs.LGS1Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS2", false);
}}

}


{


gdjs.LGS1Code.condition0IsTrue_0.val = false;
{
gdjs.LGS1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS2", false);
}}

}


{

gdjs.LGS1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.LGS1Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS1Code.conditionTrue_1 = gdjs.LGS1Code.condition0IsTrue_0;
gdjs.LGS1Code.condition0IsTrue_1.val = false;
gdjs.LGS1Code.condition1IsTrue_1.val = false;
gdjs.LGS1Code.condition2IsTrue_1.val = false;
{
gdjs.LGS1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS1Code.condition0IsTrue_1.val ) {
{
gdjs.LGS1Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS1Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS1Code.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.LGS1Code.GDButtonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS1Code.condition2IsTrue_1.val = true;
        gdjs.LGS1Code.GDButtonObjects1[k] = gdjs.LGS1Code.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.LGS1Code.GDButtonObjects1.length = k;}}
}
gdjs.LGS1Code.conditionTrue_1.val = true && gdjs.LGS1Code.condition0IsTrue_1.val && gdjs.LGS1Code.condition1IsTrue_1.val && gdjs.LGS1Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS1Code.condition0IsTrue_0.val) {
gdjs.LGS1Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
/* Reuse gdjs.LGS1Code.GDButtonObjects1 */
gdjs.LGS1Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS1Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
{for(var i = 0, len = gdjs.LGS1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDButtonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDAnswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDLineObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDcontinueTextObjects1[i].hide(false);
}
}}

}


{

gdjs.LGS1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.LGS1Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS1Code.conditionTrue_1 = gdjs.LGS1Code.condition0IsTrue_0;
gdjs.LGS1Code.condition0IsTrue_1.val = false;
gdjs.LGS1Code.condition1IsTrue_1.val = false;
gdjs.LGS1Code.condition2IsTrue_1.val = false;
{
gdjs.LGS1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS1Code.condition0IsTrue_1.val ) {
{
gdjs.LGS1Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS1Code.mapOfGDgdjs_46LGS1Code_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS1Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS1Code.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.LGS1Code.GDButtonObjects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS1Code.condition2IsTrue_1.val = true;
        gdjs.LGS1Code.GDButtonObjects1[k] = gdjs.LGS1Code.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.LGS1Code.GDButtonObjects1.length = k;}}
}
gdjs.LGS1Code.conditionTrue_1.val = true && gdjs.LGS1Code.condition0IsTrue_1.val && gdjs.LGS1Code.condition1IsTrue_1.val && gdjs.LGS1Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS1Code.condition0IsTrue_0.val) {
gdjs.LGS1Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
/* Reuse gdjs.LGS1Code.GDButtonObjects1 */
gdjs.LGS1Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
{for(var i = 0, len = gdjs.LGS1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDAnswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS1Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS1Code.GDLineObjects1[i].setAnimationName("gray");
}
}}

}


}; //End of gdjs.LGS1Code.eventsList0xb2358


gdjs.LGS1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS1Code.GDAnswerObjects1.length = 0;
gdjs.LGS1Code.GDAnswerObjects2.length = 0;
gdjs.LGS1Code.GDButtonObjects1.length = 0;
gdjs.LGS1Code.GDButtonObjects2.length = 0;
gdjs.LGS1Code.GDLineObjects1.length = 0;
gdjs.LGS1Code.GDLineObjects2.length = 0;
gdjs.LGS1Code.GDcomment2Objects1.length = 0;
gdjs.LGS1Code.GDcomment2Objects2.length = 0;
gdjs.LGS1Code.GDcontinueTextObjects1.length = 0;
gdjs.LGS1Code.GDcontinueTextObjects2.length = 0;
gdjs.LGS1Code.GDcommentText2Objects1.length = 0;
gdjs.LGS1Code.GDcommentText2Objects2.length = 0;
gdjs.LGS1Code.GDcommentTextObjects1.length = 0;
gdjs.LGS1Code.GDcommentTextObjects2.length = 0;
gdjs.LGS1Code.GDcommentObjects1.length = 0;
gdjs.LGS1Code.GDcommentObjects2.length = 0;
gdjs.LGS1Code.GDshadowObjects1.length = 0;
gdjs.LGS1Code.GDshadowObjects2.length = 0;
gdjs.LGS1Code.GDhelp1Objects1.length = 0;
gdjs.LGS1Code.GDhelp1Objects2.length = 0;
gdjs.LGS1Code.GDhelp1TextObjects1.length = 0;
gdjs.LGS1Code.GDhelp1TextObjects2.length = 0;
gdjs.LGS1Code.GDhelp2Objects1.length = 0;
gdjs.LGS1Code.GDhelp2Objects2.length = 0;
gdjs.LGS1Code.GDhelp2TextObjects1.length = 0;
gdjs.LGS1Code.GDhelp2TextObjects2.length = 0;
gdjs.LGS1Code.GDskipTObjects1.length = 0;
gdjs.LGS1Code.GDskipTObjects2.length = 0;
gdjs.LGS1Code.GDskipObjects1.length = 0;
gdjs.LGS1Code.GDskipObjects2.length = 0;
gdjs.LGS1Code.GDTimerObjects1.length = 0;
gdjs.LGS1Code.GDTimerObjects2.length = 0;

gdjs.LGS1Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS1Code'] = gdjs.LGS1Code;
