gdjs.LGS2Code = {};
gdjs.LGS2Code.GDcommentObjects1= [];
gdjs.LGS2Code.GDcommentObjects2= [];
gdjs.LGS2Code.GDbuttonObjects1= [];
gdjs.LGS2Code.GDbuttonObjects2= [];
gdjs.LGS2Code.GDLineObjects1= [];
gdjs.LGS2Code.GDLineObjects2= [];
gdjs.LGS2Code.GDtriangleObjects1= [];
gdjs.LGS2Code.GDtriangleObjects2= [];
gdjs.LGS2Code.GDAnswerObjects1= [];
gdjs.LGS2Code.GDAnswerObjects2= [];
gdjs.LGS2Code.GDLine1Objects1= [];
gdjs.LGS2Code.GDLine1Objects2= [];
gdjs.LGS2Code.GDcontinueTextObjects1= [];
gdjs.LGS2Code.GDcontinueTextObjects2= [];
gdjs.LGS2Code.GDcommentTextObjects1= [];
gdjs.LGS2Code.GDcommentTextObjects2= [];

gdjs.LGS2Code.conditionTrue_0 = {val:false};
gdjs.LGS2Code.condition0IsTrue_0 = {val:false};
gdjs.LGS2Code.condition1IsTrue_0 = {val:false};
gdjs.LGS2Code.condition2IsTrue_0 = {val:false};
gdjs.LGS2Code.condition3IsTrue_0 = {val:false};
gdjs.LGS2Code.conditionTrue_1 = {val:false};
gdjs.LGS2Code.condition0IsTrue_1 = {val:false};
gdjs.LGS2Code.condition1IsTrue_1 = {val:false};
gdjs.LGS2Code.condition2IsTrue_1 = {val:false};
gdjs.LGS2Code.condition3IsTrue_1 = {val:false};


gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDcontinueTextObjects1Objects = Hashtable.newFrom({"continueText": gdjs.LGS2Code.GDcontinueTextObjects1});gdjs.LGS2Code.eventsList0x85fad0 = function(runtimeScene) {

{

gdjs.LGS2Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));

gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS2Code.conditionTrue_1 = gdjs.LGS2Code.condition0IsTrue_0;
gdjs.LGS2Code.condition0IsTrue_1.val = false;
gdjs.LGS2Code.condition1IsTrue_1.val = false;
{
gdjs.LGS2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS2Code.GDAnswerObjects1.length;i<l;++i) {
    if ( gdjs.LGS2Code.GDAnswerObjects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS2Code.condition1IsTrue_1.val = true;
        gdjs.LGS2Code.GDAnswerObjects1[k] = gdjs.LGS2Code.GDAnswerObjects1[i];
        ++k;
    }
}
gdjs.LGS2Code.GDAnswerObjects1.length = k;}}
gdjs.LGS2Code.conditionTrue_1.val = true && gdjs.LGS2Code.condition0IsTrue_1.val && gdjs.LGS2Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS3", false);
}}

}


}; //End of gdjs.LGS2Code.eventsList0x85fad0
gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.LGS2Code.GDbuttonObjects1});gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.LGS2Code.GDbuttonObjects1});gdjs.LGS2Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
gdjs.LGS2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {
gdjs.LGS2Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
gdjs.LGS2Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS2Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS2Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));
gdjs.LGS2Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS2Code.GDtriangleObjects1.createFrom(runtimeScene.getObjects("triangle"));
{for(var i = 0, len = gdjs.LGS2Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLineObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDbuttonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDAnswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDtriangleObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDtriangleObjects1[i].setAnimationName("red");
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS2Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));

gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
gdjs.LGS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDcontinueTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LGS2Code.eventsList0x85fad0(runtimeScene);} //End of subevents
}

}


{


gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
gdjs.LGS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS3", false);
}}

}


{

gdjs.LGS2Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS2Code.conditionTrue_1 = gdjs.LGS2Code.condition0IsTrue_0;
gdjs.LGS2Code.condition0IsTrue_1.val = false;
gdjs.LGS2Code.condition1IsTrue_1.val = false;
gdjs.LGS2Code.condition2IsTrue_1.val = false;
{
gdjs.LGS2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS2Code.condition0IsTrue_1.val ) {
{
gdjs.LGS2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS2Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS2Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.LGS2Code.GDbuttonObjects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS2Code.condition2IsTrue_1.val = true;
        gdjs.LGS2Code.GDbuttonObjects1[k] = gdjs.LGS2Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.LGS2Code.GDbuttonObjects1.length = k;}}
}
gdjs.LGS2Code.conditionTrue_1.val = true && gdjs.LGS2Code.condition0IsTrue_1.val && gdjs.LGS2Code.condition1IsTrue_1.val && gdjs.LGS2Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {
gdjs.LGS2Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
gdjs.LGS2Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS2Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
/* Reuse gdjs.LGS2Code.GDbuttonObjects1 */
gdjs.LGS2Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS2Code.GDtriangleObjects1.createFrom(runtimeScene.getObjects("triangle"));
{for(var i = 0, len = gdjs.LGS2Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDbuttonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDtriangleObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDtriangleObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLineObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLine1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDAnswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDcontinueTextObjects1[i].setOpacity(1000);
}
}}

}


{

gdjs.LGS2Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.LGS2Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS2Code.conditionTrue_1 = gdjs.LGS2Code.condition0IsTrue_0;
gdjs.LGS2Code.condition0IsTrue_1.val = false;
gdjs.LGS2Code.condition1IsTrue_1.val = false;
gdjs.LGS2Code.condition2IsTrue_1.val = false;
{
gdjs.LGS2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS2Code.mapOfGDgdjs_46LGS2Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS2Code.condition0IsTrue_1.val ) {
{
gdjs.LGS2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS2Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS2Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.LGS2Code.GDbuttonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS2Code.condition2IsTrue_1.val = true;
        gdjs.LGS2Code.GDbuttonObjects1[k] = gdjs.LGS2Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.LGS2Code.GDbuttonObjects1.length = k;}}
}
gdjs.LGS2Code.conditionTrue_1.val = true && gdjs.LGS2Code.condition0IsTrue_1.val && gdjs.LGS2Code.condition1IsTrue_1.val && gdjs.LGS2Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS2Code.condition0IsTrue_0.val) {
gdjs.LGS2Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
gdjs.LGS2Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS2Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
/* Reuse gdjs.LGS2Code.GDbuttonObjects1 */
gdjs.LGS2Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS2Code.GDtriangleObjects1.createFrom(runtimeScene.getObjects("triangle"));
{for(var i = 0, len = gdjs.LGS2Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDbuttonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDtriangleObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDtriangleObjects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLineObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDAnswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS2Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS2Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.LGS2Code.eventsList0xb2358


gdjs.LGS2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS2Code.GDcommentObjects1.length = 0;
gdjs.LGS2Code.GDcommentObjects2.length = 0;
gdjs.LGS2Code.GDbuttonObjects1.length = 0;
gdjs.LGS2Code.GDbuttonObjects2.length = 0;
gdjs.LGS2Code.GDLineObjects1.length = 0;
gdjs.LGS2Code.GDLineObjects2.length = 0;
gdjs.LGS2Code.GDtriangleObjects1.length = 0;
gdjs.LGS2Code.GDtriangleObjects2.length = 0;
gdjs.LGS2Code.GDAnswerObjects1.length = 0;
gdjs.LGS2Code.GDAnswerObjects2.length = 0;
gdjs.LGS2Code.GDLine1Objects1.length = 0;
gdjs.LGS2Code.GDLine1Objects2.length = 0;
gdjs.LGS2Code.GDcontinueTextObjects1.length = 0;
gdjs.LGS2Code.GDcontinueTextObjects2.length = 0;
gdjs.LGS2Code.GDcommentTextObjects1.length = 0;
gdjs.LGS2Code.GDcommentTextObjects2.length = 0;

gdjs.LGS2Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS2Code'] = gdjs.LGS2Code;
