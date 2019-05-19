gdjs.LGS4Code = {};
gdjs.LGS4Code.GDButton1Objects1= [];
gdjs.LGS4Code.GDButton1Objects2= [];
gdjs.LGS4Code.GDButton2Objects1= [];
gdjs.LGS4Code.GDButton2Objects2= [];
gdjs.LGS4Code.GDgrayLineAngle1Objects1= [];
gdjs.LGS4Code.GDgrayLineAngle1Objects2= [];
gdjs.LGS4Code.GDgrayLineAngleObjects1= [];
gdjs.LGS4Code.GDgrayLineAngleObjects2= [];
gdjs.LGS4Code.GDLine1Objects1= [];
gdjs.LGS4Code.GDLine1Objects2= [];
gdjs.LGS4Code.GDLineObjects1= [];
gdjs.LGS4Code.GDLineObjects2= [];
gdjs.LGS4Code.GDAnswerObjects1= [];
gdjs.LGS4Code.GDAnswerObjects2= [];
gdjs.LGS4Code.GDtriangleObjects1= [];
gdjs.LGS4Code.GDtriangleObjects2= [];
gdjs.LGS4Code.GDcommentObjects1= [];
gdjs.LGS4Code.GDcommentObjects2= [];
gdjs.LGS4Code.GDcontinueTextObjects1= [];
gdjs.LGS4Code.GDcontinueTextObjects2= [];
gdjs.LGS4Code.GDcommentTextObjects1= [];
gdjs.LGS4Code.GDcommentTextObjects2= [];

gdjs.LGS4Code.conditionTrue_0 = {val:false};
gdjs.LGS4Code.condition0IsTrue_0 = {val:false};
gdjs.LGS4Code.condition1IsTrue_0 = {val:false};
gdjs.LGS4Code.condition2IsTrue_0 = {val:false};
gdjs.LGS4Code.condition3IsTrue_0 = {val:false};
gdjs.LGS4Code.conditionTrue_1 = {val:false};
gdjs.LGS4Code.condition0IsTrue_1 = {val:false};
gdjs.LGS4Code.condition1IsTrue_1 = {val:false};
gdjs.LGS4Code.condition2IsTrue_1 = {val:false};
gdjs.LGS4Code.condition3IsTrue_1 = {val:false};


gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LGS4Code.GDButton1Objects1});gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LGS4Code.GDButton1Objects1});gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.LGS4Code.GDButton2Objects1});gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.LGS4Code.GDButton2Objects1});gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDcontinueTextObjects1Objects = Hashtable.newFrom({"continueText": gdjs.LGS4Code.GDcontinueTextObjects1});gdjs.LGS4Code.eventsList0xdc9c90 = function(runtimeScene) {

{

gdjs.LGS4Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS4Code.conditionTrue_1 = gdjs.LGS4Code.condition0IsTrue_0;
gdjs.LGS4Code.condition0IsTrue_1.val = false;
gdjs.LGS4Code.condition1IsTrue_1.val = false;
{
gdjs.LGS4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS4Code.GDAnswerObjects1.length;i<l;++i) {
    if ( gdjs.LGS4Code.GDAnswerObjects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS4Code.condition1IsTrue_1.val = true;
        gdjs.LGS4Code.GDAnswerObjects1[k] = gdjs.LGS4Code.GDAnswerObjects1[i];
        ++k;
    }
}
gdjs.LGS4Code.GDAnswerObjects1.length = k;}}
gdjs.LGS4Code.conditionTrue_1.val = true && gdjs.LGS4Code.condition0IsTrue_1.val && gdjs.LGS4Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS5", false);
}}

}


}; //End of gdjs.LGS4Code.eventsList0xdc9c90
gdjs.LGS4Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
gdjs.LGS4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
gdjs.LGS4Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
gdjs.LGS4Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));
gdjs.LGS4Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));
gdjs.LGS4Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS4Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS4Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS4Code.GDgrayLineAngleObjects1.createFrom(runtimeScene.getObjects("grayLineAngle"));
{for(var i = 0, len = gdjs.LGS4Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LGS4Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLineObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDgrayLineAngleObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDgrayLineAngleObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDAnswerObjects1[i].setAnimationName("wrong");
}
}}

}


{

gdjs.LGS4Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS4Code.conditionTrue_1 = gdjs.LGS4Code.condition0IsTrue_0;
gdjs.LGS4Code.condition0IsTrue_1.val = false;
gdjs.LGS4Code.condition1IsTrue_1.val = false;
gdjs.LGS4Code.condition2IsTrue_1.val = false;
{
gdjs.LGS4Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS4Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS4Code.GDButton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS4Code.condition1IsTrue_1.val = true;
        gdjs.LGS4Code.GDButton1Objects1[k] = gdjs.LGS4Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LGS4Code.GDButton1Objects1.length = k;}if ( gdjs.LGS4Code.condition1IsTrue_1.val ) {
{
gdjs.LGS4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
gdjs.LGS4Code.conditionTrue_1.val = true && gdjs.LGS4Code.condition0IsTrue_1.val && gdjs.LGS4Code.condition1IsTrue_1.val && gdjs.LGS4Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS4Code.GDButton1Objects1 */
gdjs.LGS4Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
{for(var i = 0, len = gdjs.LGS4Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLineObjects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS4Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS4Code.conditionTrue_1 = gdjs.LGS4Code.condition0IsTrue_0;
gdjs.LGS4Code.condition0IsTrue_1.val = false;
gdjs.LGS4Code.condition1IsTrue_1.val = false;
gdjs.LGS4Code.condition2IsTrue_1.val = false;
{
gdjs.LGS4Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS4Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS4Code.GDButton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS4Code.condition1IsTrue_1.val = true;
        gdjs.LGS4Code.GDButton1Objects1[k] = gdjs.LGS4Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LGS4Code.GDButton1Objects1.length = k;}if ( gdjs.LGS4Code.condition1IsTrue_1.val ) {
{
gdjs.LGS4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}}
}
gdjs.LGS4Code.conditionTrue_1.val = true && gdjs.LGS4Code.condition0IsTrue_1.val && gdjs.LGS4Code.condition1IsTrue_1.val && gdjs.LGS4Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS4Code.GDButton1Objects1 */
gdjs.LGS4Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
{for(var i = 0, len = gdjs.LGS4Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLineObjects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS4Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS4Code.conditionTrue_1 = gdjs.LGS4Code.condition0IsTrue_0;
gdjs.LGS4Code.condition0IsTrue_1.val = false;
gdjs.LGS4Code.condition1IsTrue_1.val = false;
gdjs.LGS4Code.condition2IsTrue_1.val = false;
{
gdjs.LGS4Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS4Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS4Code.GDButton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS4Code.condition1IsTrue_1.val = true;
        gdjs.LGS4Code.GDButton2Objects1[k] = gdjs.LGS4Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LGS4Code.GDButton2Objects1.length = k;}if ( gdjs.LGS4Code.condition1IsTrue_1.val ) {
{
gdjs.LGS4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
gdjs.LGS4Code.conditionTrue_1.val = true && gdjs.LGS4Code.condition0IsTrue_1.val && gdjs.LGS4Code.condition1IsTrue_1.val && gdjs.LGS4Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
gdjs.LGS4Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
/* Reuse gdjs.LGS4Code.GDButton2Objects1 */
gdjs.LGS4Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS4Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS4Code.GDgrayLineAngleObjects1.createFrom(runtimeScene.getObjects("grayLineAngle"));
{for(var i = 0, len = gdjs.LGS4Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLine1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDgrayLineAngleObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDgrayLineAngleObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDAnswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDcontinueTextObjects1[i].setOpacity(1000);
}
}}

}


{

gdjs.LGS4Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS4Code.conditionTrue_1 = gdjs.LGS4Code.condition0IsTrue_0;
gdjs.LGS4Code.condition0IsTrue_1.val = false;
gdjs.LGS4Code.condition1IsTrue_1.val = false;
gdjs.LGS4Code.condition2IsTrue_1.val = false;
{
gdjs.LGS4Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS4Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS4Code.GDButton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS4Code.condition1IsTrue_1.val = true;
        gdjs.LGS4Code.GDButton2Objects1[k] = gdjs.LGS4Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LGS4Code.GDButton2Objects1.length = k;}if ( gdjs.LGS4Code.condition1IsTrue_1.val ) {
{
gdjs.LGS4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}}
}
gdjs.LGS4Code.conditionTrue_1.val = true && gdjs.LGS4Code.condition0IsTrue_1.val && gdjs.LGS4Code.condition1IsTrue_1.val && gdjs.LGS4Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
gdjs.LGS4Code.GDAnswerObjects1.createFrom(runtimeScene.getObjects("Answer"));
/* Reuse gdjs.LGS4Code.GDButton2Objects1 */
gdjs.LGS4Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS4Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS4Code.GDgrayLineAngleObjects1.createFrom(runtimeScene.getObjects("grayLineAngle"));
{for(var i = 0, len = gdjs.LGS4Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDButton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDgrayLineAngleObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDgrayLineAngleObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDAnswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS4Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS4Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS4Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));

gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
gdjs.LGS4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS4Code.mapOfGDgdjs_46LGS4Code_46GDcontinueTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LGS4Code.eventsList0xdc9c90(runtimeScene);} //End of subevents
}

}


{


gdjs.LGS4Code.condition0IsTrue_0.val = false;
{
gdjs.LGS4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS5", false);
}}

}


}; //End of gdjs.LGS4Code.eventsList0xb2358


gdjs.LGS4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS4Code.GDButton1Objects1.length = 0;
gdjs.LGS4Code.GDButton1Objects2.length = 0;
gdjs.LGS4Code.GDButton2Objects1.length = 0;
gdjs.LGS4Code.GDButton2Objects2.length = 0;
gdjs.LGS4Code.GDgrayLineAngle1Objects1.length = 0;
gdjs.LGS4Code.GDgrayLineAngle1Objects2.length = 0;
gdjs.LGS4Code.GDgrayLineAngleObjects1.length = 0;
gdjs.LGS4Code.GDgrayLineAngleObjects2.length = 0;
gdjs.LGS4Code.GDLine1Objects1.length = 0;
gdjs.LGS4Code.GDLine1Objects2.length = 0;
gdjs.LGS4Code.GDLineObjects1.length = 0;
gdjs.LGS4Code.GDLineObjects2.length = 0;
gdjs.LGS4Code.GDAnswerObjects1.length = 0;
gdjs.LGS4Code.GDAnswerObjects2.length = 0;
gdjs.LGS4Code.GDtriangleObjects1.length = 0;
gdjs.LGS4Code.GDtriangleObjects2.length = 0;
gdjs.LGS4Code.GDcommentObjects1.length = 0;
gdjs.LGS4Code.GDcommentObjects2.length = 0;
gdjs.LGS4Code.GDcontinueTextObjects1.length = 0;
gdjs.LGS4Code.GDcontinueTextObjects2.length = 0;
gdjs.LGS4Code.GDcommentTextObjects1.length = 0;
gdjs.LGS4Code.GDcommentTextObjects2.length = 0;

gdjs.LGS4Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS4Code'] = gdjs.LGS4Code;
