gdjs.LGS6Code = {};
gdjs.LGS6Code.GDbutton2Objects1= [];
gdjs.LGS6Code.GDbutton2Objects2= [];
gdjs.LGS6Code.GDbutton1Objects1= [];
gdjs.LGS6Code.GDbutton1Objects2= [];
gdjs.LGS6Code.GDanswer2Objects1= [];
gdjs.LGS6Code.GDanswer2Objects2= [];
gdjs.LGS6Code.GDanswer1Objects1= [];
gdjs.LGS6Code.GDanswer1Objects2= [];
gdjs.LGS6Code.GDtriangleObjects1= [];
gdjs.LGS6Code.GDtriangleObjects2= [];
gdjs.LGS6Code.GDtriangleInversionObjects1= [];
gdjs.LGS6Code.GDtriangleInversionObjects2= [];
gdjs.LGS6Code.GDline4Objects1= [];
gdjs.LGS6Code.GDline4Objects2= [];
gdjs.LGS6Code.GDline3Objects1= [];
gdjs.LGS6Code.GDline3Objects2= [];
gdjs.LGS6Code.GDline2Objects1= [];
gdjs.LGS6Code.GDline2Objects2= [];
gdjs.LGS6Code.GDline1Objects1= [];
gdjs.LGS6Code.GDline1Objects2= [];
gdjs.LGS6Code.GDcontinueTextObjects1= [];
gdjs.LGS6Code.GDcontinueTextObjects2= [];

gdjs.LGS6Code.conditionTrue_0 = {val:false};
gdjs.LGS6Code.condition0IsTrue_0 = {val:false};
gdjs.LGS6Code.condition1IsTrue_0 = {val:false};
gdjs.LGS6Code.condition2IsTrue_0 = {val:false};
gdjs.LGS6Code.condition3IsTrue_0 = {val:false};
gdjs.LGS6Code.conditionTrue_1 = {val:false};
gdjs.LGS6Code.condition0IsTrue_1 = {val:false};
gdjs.LGS6Code.condition1IsTrue_1 = {val:false};
gdjs.LGS6Code.condition2IsTrue_1 = {val:false};
gdjs.LGS6Code.condition3IsTrue_1 = {val:false};


gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS6Code.GDbutton2Objects1});gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS6Code.GDbutton2Objects1});gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS6Code.GDbutton1Objects1});gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS6Code.GDbutton1Objects1});gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDcontinueTextObjects1Objects = Hashtable.newFrom({"continueText": gdjs.LGS6Code.GDcontinueTextObjects1});gdjs.LGS6Code.eventsList0x78e1f0 = function(runtimeScene) {

{

gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
gdjs.LGS6Code.condition2IsTrue_1.val = false;
{
gdjs.LGS6Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDanswer1Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDanswer1Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS6Code.condition1IsTrue_1.val = true;
        gdjs.LGS6Code.GDanswer1Objects1[k] = gdjs.LGS6Code.GDanswer1Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDanswer1Objects1.length = k;}if ( gdjs.LGS6Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDanswer2Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDanswer2Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS6Code.condition2IsTrue_1.val = true;
        gdjs.LGS6Code.GDanswer2Objects1[k] = gdjs.LGS6Code.GDanswer2Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDanswer2Objects1.length = k;}}
}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val && gdjs.LGS6Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS7", false);
}}

}


}; //End of gdjs.LGS6Code.eventsList0x78e1f0
gdjs.LGS6Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
gdjs.LGS6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
gdjs.LGS6Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS6Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS6Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS6Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS6Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS6Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS6Code.GDtriangleInversionObjects1.createFrom(runtimeScene.getObjects("triangleInversion"));
{for(var i = 0, len = gdjs.LGS6Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline4Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDtriangleInversionObjects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDtriangleInversionObjects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer2Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.LGS6Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
gdjs.LGS6Code.condition2IsTrue_1.val = false;
{
gdjs.LGS6Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
gdjs.LGS6Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS6Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS6Code.condition2IsTrue_1.val = true;
        gdjs.LGS6Code.GDbutton2Objects1[k] = gdjs.LGS6Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val && gdjs.LGS6Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS6Code.GDbutton2Objects1 */
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS6Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS6Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS6Code.GDtriangleInversionObjects1.createFrom(runtimeScene.getObjects("triangleInversion"));
{for(var i = 0, len = gdjs.LGS6Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline3Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline4Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDtriangleInversionObjects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDtriangleInversionObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer2Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("wrong");
}
}}

}


{

gdjs.LGS6Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
gdjs.LGS6Code.condition2IsTrue_1.val = false;
{
gdjs.LGS6Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
gdjs.LGS6Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS6Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS6Code.condition2IsTrue_1.val = true;
        gdjs.LGS6Code.GDbutton2Objects1[k] = gdjs.LGS6Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val && gdjs.LGS6Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS6Code.GDbutton2Objects1 */
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS6Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS6Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS6Code.GDtriangleInversionObjects1.createFrom(runtimeScene.getObjects("triangleInversion"));
{for(var i = 0, len = gdjs.LGS6Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline4Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDtriangleInversionObjects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDtriangleInversionObjects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer2Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("right");
}
}}

}


{

gdjs.LGS6Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
gdjs.LGS6Code.condition2IsTrue_1.val = false;
{
gdjs.LGS6Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
gdjs.LGS6Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS6Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS6Code.condition2IsTrue_1.val = true;
        gdjs.LGS6Code.GDbutton1Objects1[k] = gdjs.LGS6Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val && gdjs.LGS6Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
/* Reuse gdjs.LGS6Code.GDbutton1Objects1 */
gdjs.LGS6Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS6Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("right");
}
}}

}


{

gdjs.LGS6Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
gdjs.LGS6Code.condition2IsTrue_1.val = false;
{
gdjs.LGS6Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
gdjs.LGS6Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS6Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS6Code.condition2IsTrue_1.val = true;
        gdjs.LGS6Code.GDbutton1Objects1[k] = gdjs.LGS6Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val && gdjs.LGS6Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
/* Reuse gdjs.LGS6Code.GDbutton1Objects1 */
gdjs.LGS6Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS6Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("wrong");
}
}}

}


{

gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS6Code.conditionTrue_1 = gdjs.LGS6Code.condition0IsTrue_0;
gdjs.LGS6Code.condition0IsTrue_1.val = false;
gdjs.LGS6Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDanswer1Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDanswer1Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS6Code.condition0IsTrue_1.val = true;
        gdjs.LGS6Code.GDanswer1Objects1[k] = gdjs.LGS6Code.GDanswer1Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDanswer1Objects1.length = k;}if ( gdjs.LGS6Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDanswer2Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDanswer2Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS6Code.condition1IsTrue_1.val = true;
        gdjs.LGS6Code.GDanswer2Objects1[k] = gdjs.LGS6Code.GDanswer2Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDanswer2Objects1.length = k;}}
gdjs.LGS6Code.conditionTrue_1.val = true && gdjs.LGS6Code.condition0IsTrue_1.val && gdjs.LGS6Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
{for(var i = 0, len = gdjs.LGS6Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDcontinueTextObjects1[i].setOpacity(1000);
}
}}

}


{

gdjs.LGS6Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS6Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS6Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS6Code.condition0IsTrue_0.val = true;
        gdjs.LGS6Code.GDbutton1Objects1[k] = gdjs.LGS6Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS6Code.GDbutton1Objects1.length = k;}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
gdjs.LGS6Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS6Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS6Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS6Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDline2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS6Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS6Code.GDanswer1Objects1[i].setAnimationName("right");
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS6Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));

gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
gdjs.LGS6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS6Code.mapOfGDgdjs_46LGS6Code_46GDcontinueTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LGS6Code.eventsList0x78e1f0(runtimeScene);} //End of subevents
}

}


{


gdjs.LGS6Code.condition0IsTrue_0.val = false;
{
gdjs.LGS6Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS7", false);
}}

}


}; //End of gdjs.LGS6Code.eventsList0xb2358


gdjs.LGS6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS6Code.GDbutton2Objects1.length = 0;
gdjs.LGS6Code.GDbutton2Objects2.length = 0;
gdjs.LGS6Code.GDbutton1Objects1.length = 0;
gdjs.LGS6Code.GDbutton1Objects2.length = 0;
gdjs.LGS6Code.GDanswer2Objects1.length = 0;
gdjs.LGS6Code.GDanswer2Objects2.length = 0;
gdjs.LGS6Code.GDanswer1Objects1.length = 0;
gdjs.LGS6Code.GDanswer1Objects2.length = 0;
gdjs.LGS6Code.GDtriangleObjects1.length = 0;
gdjs.LGS6Code.GDtriangleObjects2.length = 0;
gdjs.LGS6Code.GDtriangleInversionObjects1.length = 0;
gdjs.LGS6Code.GDtriangleInversionObjects2.length = 0;
gdjs.LGS6Code.GDline4Objects1.length = 0;
gdjs.LGS6Code.GDline4Objects2.length = 0;
gdjs.LGS6Code.GDline3Objects1.length = 0;
gdjs.LGS6Code.GDline3Objects2.length = 0;
gdjs.LGS6Code.GDline2Objects1.length = 0;
gdjs.LGS6Code.GDline2Objects2.length = 0;
gdjs.LGS6Code.GDline1Objects1.length = 0;
gdjs.LGS6Code.GDline1Objects2.length = 0;
gdjs.LGS6Code.GDcontinueTextObjects1.length = 0;
gdjs.LGS6Code.GDcontinueTextObjects2.length = 0;

gdjs.LGS6Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS6Code'] = gdjs.LGS6Code;
