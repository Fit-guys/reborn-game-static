gdjs.LGS5Code = {};
gdjs.LGS5Code.GDbutton2Objects1= [];
gdjs.LGS5Code.GDbutton2Objects2= [];
gdjs.LGS5Code.GDbutton1Objects1= [];
gdjs.LGS5Code.GDbutton1Objects2= [];
gdjs.LGS5Code.GDanswer2Objects1= [];
gdjs.LGS5Code.GDanswer2Objects2= [];
gdjs.LGS5Code.GDanswer1Objects1= [];
gdjs.LGS5Code.GDanswer1Objects2= [];
gdjs.LGS5Code.GDLine3Objects1= [];
gdjs.LGS5Code.GDLine3Objects2= [];
gdjs.LGS5Code.GDLine2Objects1= [];
gdjs.LGS5Code.GDLine2Objects2= [];
gdjs.LGS5Code.GDLine1Objects1= [];
gdjs.LGS5Code.GDLine1Objects2= [];
gdjs.LGS5Code.GDtriangleObjects1= [];
gdjs.LGS5Code.GDtriangleObjects2= [];
gdjs.LGS5Code.GDtrianleInversionObjects1= [];
gdjs.LGS5Code.GDtrianleInversionObjects2= [];
gdjs.LGS5Code.GDcontinueButtonObjects1= [];
gdjs.LGS5Code.GDcontinueButtonObjects2= [];

gdjs.LGS5Code.conditionTrue_0 = {val:false};
gdjs.LGS5Code.condition0IsTrue_0 = {val:false};
gdjs.LGS5Code.condition1IsTrue_0 = {val:false};
gdjs.LGS5Code.condition2IsTrue_0 = {val:false};
gdjs.LGS5Code.condition3IsTrue_0 = {val:false};
gdjs.LGS5Code.condition4IsTrue_0 = {val:false};
gdjs.LGS5Code.conditionTrue_1 = {val:false};
gdjs.LGS5Code.condition0IsTrue_1 = {val:false};
gdjs.LGS5Code.condition1IsTrue_1 = {val:false};
gdjs.LGS5Code.condition2IsTrue_1 = {val:false};
gdjs.LGS5Code.condition3IsTrue_1 = {val:false};
gdjs.LGS5Code.condition4IsTrue_1 = {val:false};


gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS5Code.GDbutton1Objects1});gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS5Code.GDbutton1Objects1});gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS5Code.GDbutton2Objects1});gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS5Code.GDbutton2Objects1});gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDcontinueButtonObjects1Objects = Hashtable.newFrom({"continueButton": gdjs.LGS5Code.GDcontinueButtonObjects1});gdjs.LGS5Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
gdjs.LGS5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS5Code.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
gdjs.LGS5Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS5Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS5Code.GDcontinueButtonObjects1.createFrom(runtimeScene.getObjects("continueButton"));
{for(var i = 0, len = gdjs.LGS5Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer1Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDcontinueButtonObjects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDcontinueButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LGS5Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton1Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.LGS5Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
gdjs.LGS5Code.condition2IsTrue_1.val = false;
{
gdjs.LGS5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
gdjs.LGS5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS5Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS5Code.condition2IsTrue_1.val = true;
        gdjs.LGS5Code.GDbutton1Objects1[k] = gdjs.LGS5Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val && gdjs.LGS5Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS5Code.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS5Code.GDbutton1Objects1 */
gdjs.LGS5Code.GDtrianleInversionObjects1.createFrom(runtimeScene.getObjects("trianleInversion"));
{for(var i = 0, len = gdjs.LGS5Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine2Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer1Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDtrianleInversionObjects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDtrianleInversionObjects1[i].setAnimationName("red");
}
}}

}


{

gdjs.LGS5Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS5Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
gdjs.LGS5Code.condition2IsTrue_1.val = false;
gdjs.LGS5Code.condition3IsTrue_1.val = false;
{
gdjs.LGS5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
gdjs.LGS5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS5Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS5Code.condition2IsTrue_1.val = true;
        gdjs.LGS5Code.GDbutton1Objects1[k] = gdjs.LGS5Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS5Code.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS5Code.condition3IsTrue_1.val = true;
        gdjs.LGS5Code.GDbutton2Objects1[k] = gdjs.LGS5Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton2Objects1.length = k;}}
}
}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val && gdjs.LGS5Code.condition2IsTrue_1.val && gdjs.LGS5Code.condition3IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS5Code.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS5Code.GDbutton1Objects1 */
gdjs.LGS5Code.GDtrianleInversionObjects1.createFrom(runtimeScene.getObjects("trianleInversion"));
{for(var i = 0, len = gdjs.LGS5Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer1Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDtrianleInversionObjects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDtrianleInversionObjects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS5Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
gdjs.LGS5Code.condition2IsTrue_1.val = false;
{
gdjs.LGS5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
gdjs.LGS5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS5Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS5Code.condition2IsTrue_1.val = true;
        gdjs.LGS5Code.GDbutton2Objects1[k] = gdjs.LGS5Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val && gdjs.LGS5Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS5Code.GDbutton2Objects1 */
{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton2Objects1[i].setAnimationName("on");
}
}}

}


{

gdjs.LGS5Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
gdjs.LGS5Code.condition2IsTrue_1.val = false;
{
gdjs.LGS5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
gdjs.LGS5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS5Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS5Code.condition2IsTrue_1.val = true;
        gdjs.LGS5Code.GDbutton2Objects1[k] = gdjs.LGS5Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val && gdjs.LGS5Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
/* Reuse gdjs.LGS5Code.GDbutton2Objects1 */
{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDbutton2Objects1[i].setAnimationName("off");
}
}}

}


{

gdjs.LGS5Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDanswer1Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDanswer1Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS5Code.condition0IsTrue_1.val = true;
        gdjs.LGS5Code.GDanswer1Objects1[k] = gdjs.LGS5Code.GDanswer1Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDanswer1Objects1.length = k;}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDanswer2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDanswer2Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS5Code.condition1IsTrue_1.val = true;
        gdjs.LGS5Code.GDanswer2Objects1[k] = gdjs.LGS5Code.GDanswer2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDanswer2Objects1.length = k;}}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDcontinueButtonObjects1.createFrom(runtimeScene.getObjects("continueButton"));
{for(var i = 0, len = gdjs.LGS5Code.GDcontinueButtonObjects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDcontinueButtonObjects1[i].hide(false);
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS5Code.GDanswer1Objects1.createFrom(runtimeScene.getObjects("answer1"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
gdjs.LGS5Code.GDcontinueButtonObjects1.createFrom(runtimeScene.getObjects("continueButton"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS5Code.conditionTrue_1 = gdjs.LGS5Code.condition0IsTrue_0;
gdjs.LGS5Code.condition0IsTrue_1.val = false;
gdjs.LGS5Code.condition1IsTrue_1.val = false;
gdjs.LGS5Code.condition2IsTrue_1.val = false;
gdjs.LGS5Code.condition3IsTrue_1.val = false;
{
gdjs.LGS5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS5Code.condition0IsTrue_1.val ) {
{
gdjs.LGS5Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS5Code.mapOfGDgdjs_46LGS5Code_46GDcontinueButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS5Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDanswer1Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDanswer1Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS5Code.condition2IsTrue_1.val = true;
        gdjs.LGS5Code.GDanswer1Objects1[k] = gdjs.LGS5Code.GDanswer1Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDanswer1Objects1.length = k;}if ( gdjs.LGS5Code.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDanswer2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDanswer2Objects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS5Code.condition3IsTrue_1.val = true;
        gdjs.LGS5Code.GDanswer2Objects1[k] = gdjs.LGS5Code.GDanswer2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDanswer2Objects1.length = k;}}
}
}
gdjs.LGS5Code.conditionTrue_1.val = true && gdjs.LGS5Code.condition0IsTrue_1.val && gdjs.LGS5Code.condition1IsTrue_1.val && gdjs.LGS5Code.condition2IsTrue_1.val && gdjs.LGS5Code.condition3IsTrue_1.val;
}
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS6", false);
}}

}


{


gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
gdjs.LGS5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS6", false);
}}

}


{

gdjs.LGS5Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton1Objects1[i].isCurrentAnimationName("") ) {
        gdjs.LGS5Code.condition0IsTrue_0.val = true;
        gdjs.LGS5Code.GDbutton1Objects1[k] = gdjs.LGS5Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton1Objects1.length = k;}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine1Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS5Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS5Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS5Code.GDbutton2Objects1[i].isCurrentAnimationName("") ) {
        gdjs.LGS5Code.condition0IsTrue_0.val = true;
        gdjs.LGS5Code.GDbutton2Objects1[k] = gdjs.LGS5Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS5Code.GDbutton2Objects1.length = k;}if (gdjs.LGS5Code.condition0IsTrue_0.val) {
gdjs.LGS5Code.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.LGS5Code.GDanswer2Objects1.createFrom(runtimeScene.getObjects("answer2"));
{for(var i = 0, len = gdjs.LGS5Code.GDLine3Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDLine3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS5Code.GDanswer2Objects1.length ;i < len;++i) {
    gdjs.LGS5Code.GDanswer2Objects1[i].setAnimationName("right");
}
}}

}


}; //End of gdjs.LGS5Code.eventsList0xb2358


gdjs.LGS5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS5Code.GDbutton2Objects1.length = 0;
gdjs.LGS5Code.GDbutton2Objects2.length = 0;
gdjs.LGS5Code.GDbutton1Objects1.length = 0;
gdjs.LGS5Code.GDbutton1Objects2.length = 0;
gdjs.LGS5Code.GDanswer2Objects1.length = 0;
gdjs.LGS5Code.GDanswer2Objects2.length = 0;
gdjs.LGS5Code.GDanswer1Objects1.length = 0;
gdjs.LGS5Code.GDanswer1Objects2.length = 0;
gdjs.LGS5Code.GDLine3Objects1.length = 0;
gdjs.LGS5Code.GDLine3Objects2.length = 0;
gdjs.LGS5Code.GDLine2Objects1.length = 0;
gdjs.LGS5Code.GDLine2Objects2.length = 0;
gdjs.LGS5Code.GDLine1Objects1.length = 0;
gdjs.LGS5Code.GDLine1Objects2.length = 0;
gdjs.LGS5Code.GDtriangleObjects1.length = 0;
gdjs.LGS5Code.GDtriangleObjects2.length = 0;
gdjs.LGS5Code.GDtrianleInversionObjects1.length = 0;
gdjs.LGS5Code.GDtrianleInversionObjects2.length = 0;
gdjs.LGS5Code.GDcontinueButtonObjects1.length = 0;
gdjs.LGS5Code.GDcontinueButtonObjects2.length = 0;

gdjs.LGS5Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS5Code'] = gdjs.LGS5Code;
