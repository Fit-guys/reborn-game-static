gdjs.LGS7Code = {};
gdjs.LGS7Code.GDbutton1Objects1_1final = [];

gdjs.LGS7Code.GDbutton2Objects1_1final = [];

gdjs.LGS7Code.GDbutton3Objects1_1final = [];

gdjs.LGS7Code.GDsumObjects1= [];
gdjs.LGS7Code.GDsumObjects2= [];
gdjs.LGS7Code.GDbutton3Objects1= [];
gdjs.LGS7Code.GDbutton3Objects2= [];
gdjs.LGS7Code.GDbutton2Objects1= [];
gdjs.LGS7Code.GDbutton2Objects2= [];
gdjs.LGS7Code.GDbutton1Objects1= [];
gdjs.LGS7Code.GDbutton1Objects2= [];
gdjs.LGS7Code.GDline5Objects1= [];
gdjs.LGS7Code.GDline5Objects2= [];
gdjs.LGS7Code.GDline4Objects1= [];
gdjs.LGS7Code.GDline4Objects2= [];
gdjs.LGS7Code.GDline3Objects1= [];
gdjs.LGS7Code.GDline3Objects2= [];
gdjs.LGS7Code.GDline2Objects1= [];
gdjs.LGS7Code.GDline2Objects2= [];
gdjs.LGS7Code.GDline1Objects1= [];
gdjs.LGS7Code.GDline1Objects2= [];
gdjs.LGS7Code.GDcontinueObjects1= [];
gdjs.LGS7Code.GDcontinueObjects2= [];
gdjs.LGS7Code.GDanswerObjects1= [];
gdjs.LGS7Code.GDanswerObjects2= [];

gdjs.LGS7Code.conditionTrue_0 = {val:false};
gdjs.LGS7Code.condition0IsTrue_0 = {val:false};
gdjs.LGS7Code.condition1IsTrue_0 = {val:false};
gdjs.LGS7Code.condition2IsTrue_0 = {val:false};
gdjs.LGS7Code.condition3IsTrue_0 = {val:false};
gdjs.LGS7Code.conditionTrue_1 = {val:false};
gdjs.LGS7Code.condition0IsTrue_1 = {val:false};
gdjs.LGS7Code.condition1IsTrue_1 = {val:false};
gdjs.LGS7Code.condition2IsTrue_1 = {val:false};
gdjs.LGS7Code.condition3IsTrue_1 = {val:false};
gdjs.LGS7Code.conditionTrue_2 = {val:false};
gdjs.LGS7Code.condition0IsTrue_2 = {val:false};
gdjs.LGS7Code.condition1IsTrue_2 = {val:false};
gdjs.LGS7Code.condition2IsTrue_2 = {val:false};
gdjs.LGS7Code.condition3IsTrue_2 = {val:false};


gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS7Code.GDbutton1Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS7Code.GDbutton1Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS7Code.GDbutton2Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS7Code.GDbutton2Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton3Objects1Objects = Hashtable.newFrom({"button3": gdjs.LGS7Code.GDbutton3Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton3Objects1Objects = Hashtable.newFrom({"button3": gdjs.LGS7Code.GDbutton3Objects1});gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.LGS7Code.GDcontinueObjects1});gdjs.LGS7Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
gdjs.LGS7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
gdjs.LGS7Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS7Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS7Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS7Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));
gdjs.LGS7Code.GDcontinueObjects1.createFrom(runtimeScene.getObjects("continue"));
gdjs.LGS7Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS7Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS7Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS7Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS7Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline5Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline4Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline3Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline2Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDanswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDcontinueObjects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDcontinueObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton1Objects1[k] = gdjs.LGS7Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton1Objects1 */
gdjs.LGS7Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline1Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton1Objects1[k] = gdjs.LGS7Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton1Objects1 */
gdjs.LGS7Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline1Objects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS7Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton2Objects1[k] = gdjs.LGS7Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton2Objects1 */
gdjs.LGS7Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline2Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS7Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton2Objects1[k] = gdjs.LGS7Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton2Objects1 */
gdjs.LGS7Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline2Objects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS7Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition0IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton1Objects1[k] = gdjs.LGS7Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition1IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton2Objects1[k] = gdjs.LGS7Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects1.length = k;}}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
gdjs.LGS7Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
{for(var i = 0, len = gdjs.LGS7Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline3Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS7Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton3Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton3Objects1[k] = gdjs.LGS7Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton3Objects1 */
gdjs.LGS7Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton3Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline5Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS7Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDbutton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton3Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton3Objects1[k] = gdjs.LGS7Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS7Code.GDbutton3Objects1 */
gdjs.LGS7Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
{for(var i = 0, len = gdjs.LGS7Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDbutton3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline5Objects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.length = 0;

gdjs.LGS7Code.GDbutton2Objects1.length = 0;

gdjs.LGS7Code.GDbutton3Objects1.length = 0;


gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.GDbutton1Objects1_1final.length = 0;gdjs.LGS7Code.GDbutton2Objects1_1final.length = 0;gdjs.LGS7Code.GDbutton3Objects1_1final.length = 0;gdjs.LGS7Code.condition0IsTrue_1.val = false;
{
gdjs.LGS7Code.GDbutton1Objects2.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS7Code.GDbutton2Objects2.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS7Code.GDbutton3Objects2.createFrom(runtimeScene.getObjects("button3"));
{gdjs.LGS7Code.conditionTrue_2 = gdjs.LGS7Code.condition0IsTrue_1;
gdjs.LGS7Code.condition0IsTrue_2.val = false;
gdjs.LGS7Code.condition1IsTrue_2.val = false;
gdjs.LGS7Code.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects2[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition0IsTrue_2.val = true;
        gdjs.LGS7Code.GDbutton1Objects2[k] = gdjs.LGS7Code.GDbutton1Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects2.length = k;}if ( gdjs.LGS7Code.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects2[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition1IsTrue_2.val = true;
        gdjs.LGS7Code.GDbutton2Objects2[k] = gdjs.LGS7Code.GDbutton2Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects2.length = k;}if ( gdjs.LGS7Code.condition1IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton3Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton3Objects2[i].isCurrentAnimationName("on") ) {
        gdjs.LGS7Code.condition2IsTrue_2.val = true;
        gdjs.LGS7Code.GDbutton3Objects2[k] = gdjs.LGS7Code.GDbutton3Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton3Objects2.length = k;}}
}
gdjs.LGS7Code.conditionTrue_2.val = true && gdjs.LGS7Code.condition0IsTrue_2.val && gdjs.LGS7Code.condition1IsTrue_2.val && gdjs.LGS7Code.condition2IsTrue_2.val;
}
if( gdjs.LGS7Code.condition0IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton1Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton1Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton1Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton1Objects1_1final.push(gdjs.LGS7Code.GDbutton1Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton2Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton2Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton2Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton2Objects1_1final.push(gdjs.LGS7Code.GDbutton2Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton3Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton3Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton3Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton3Objects1_1final.push(gdjs.LGS7Code.GDbutton3Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton1Objects1.createFrom(gdjs.LGS7Code.GDbutton1Objects1_1final);
gdjs.LGS7Code.GDbutton2Objects1.createFrom(gdjs.LGS7Code.GDbutton2Objects1_1final);
gdjs.LGS7Code.GDbutton3Objects1.createFrom(gdjs.LGS7Code.GDbutton3Objects1_1final);
}
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
gdjs.LGS7Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS7Code.GDcontinueObjects1.createFrom(runtimeScene.getObjects("continue"));
gdjs.LGS7Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
{for(var i = 0, len = gdjs.LGS7Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline4Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDanswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDcontinueObjects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDcontinueObjects1[i].setOpacity(1000);
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.length = 0;

gdjs.LGS7Code.GDbutton2Objects1.length = 0;


gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.GDbutton1Objects1_1final.length = 0;gdjs.LGS7Code.GDbutton2Objects1_1final.length = 0;gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
{
gdjs.LGS7Code.GDbutton1Objects2.createFrom(runtimeScene.getObjects("button1"));
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition0IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton1Objects2[k] = gdjs.LGS7Code.GDbutton1Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects2.length = k;if( gdjs.LGS7Code.condition0IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton1Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton1Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton1Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton1Objects1_1final.push(gdjs.LGS7Code.GDbutton1Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton2Objects2.createFrom(runtimeScene.getObjects("button2"));
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition1IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton2Objects2[k] = gdjs.LGS7Code.GDbutton2Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects2.length = k;if( gdjs.LGS7Code.condition1IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton2Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton2Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton2Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton2Objects1_1final.push(gdjs.LGS7Code.GDbutton2Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton1Objects1.createFrom(gdjs.LGS7Code.GDbutton1Objects1_1final);
gdjs.LGS7Code.GDbutton2Objects1.createFrom(gdjs.LGS7Code.GDbutton2Objects1_1final);
}
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
gdjs.LGS7Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
{for(var i = 0, len = gdjs.LGS7Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline3Objects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS7Code.GDbutton1Objects1.length = 0;

gdjs.LGS7Code.GDbutton2Objects1.length = 0;

gdjs.LGS7Code.GDbutton3Objects1.length = 0;


gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.GDbutton1Objects1_1final.length = 0;gdjs.LGS7Code.GDbutton2Objects1_1final.length = 0;gdjs.LGS7Code.GDbutton3Objects1_1final.length = 0;gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.GDbutton1Objects2.createFrom(runtimeScene.getObjects("button1"));
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton1Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton1Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition0IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton1Objects2[k] = gdjs.LGS7Code.GDbutton1Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton1Objects2.length = k;if( gdjs.LGS7Code.condition0IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton1Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton1Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton1Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton1Objects1_1final.push(gdjs.LGS7Code.GDbutton1Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton2Objects2.createFrom(runtimeScene.getObjects("button2"));
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton2Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton2Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition1IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton2Objects2[k] = gdjs.LGS7Code.GDbutton2Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton2Objects2.length = k;if( gdjs.LGS7Code.condition1IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton2Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton2Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton2Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton2Objects1_1final.push(gdjs.LGS7Code.GDbutton2Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton3Objects2.createFrom(runtimeScene.getObjects("button3"));
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDbutton3Objects2.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDbutton3Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDbutton3Objects2[k] = gdjs.LGS7Code.GDbutton3Objects2[i];
        ++k;
    }
}
gdjs.LGS7Code.GDbutton3Objects2.length = k;if( gdjs.LGS7Code.condition2IsTrue_1.val ) {
    gdjs.LGS7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS7Code.GDbutton3Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS7Code.GDbutton3Objects1_1final.indexOf(gdjs.LGS7Code.GDbutton3Objects2[j]) === -1 )
            gdjs.LGS7Code.GDbutton3Objects1_1final.push(gdjs.LGS7Code.GDbutton3Objects2[j]);
    }
}
}
{
gdjs.LGS7Code.GDbutton1Objects1.createFrom(gdjs.LGS7Code.GDbutton1Objects1_1final);
gdjs.LGS7Code.GDbutton2Objects1.createFrom(gdjs.LGS7Code.GDbutton2Objects1_1final);
gdjs.LGS7Code.GDbutton3Objects1.createFrom(gdjs.LGS7Code.GDbutton3Objects1_1final);
}
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
gdjs.LGS7Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS7Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
{for(var i = 0, len = gdjs.LGS7Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDline4Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS7Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS7Code.GDanswerObjects1[i].setAnimationName("wrong");
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS7Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS7Code.GDcontinueObjects1.createFrom(runtimeScene.getObjects("continue"));

gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS7Code.conditionTrue_1 = gdjs.LGS7Code.condition0IsTrue_0;
gdjs.LGS7Code.condition0IsTrue_1.val = false;
gdjs.LGS7Code.condition1IsTrue_1.val = false;
gdjs.LGS7Code.condition2IsTrue_1.val = false;
{
gdjs.LGS7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS7Code.mapOfGDgdjs_46LGS7Code_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS7Code.condition0IsTrue_1.val ) {
{
gdjs.LGS7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS7Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS7Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.LGS7Code.GDanswerObjects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS7Code.condition2IsTrue_1.val = true;
        gdjs.LGS7Code.GDanswerObjects1[k] = gdjs.LGS7Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.LGS7Code.GDanswerObjects1.length = k;}}
}
gdjs.LGS7Code.conditionTrue_1.val = true && gdjs.LGS7Code.condition0IsTrue_1.val && gdjs.LGS7Code.condition1IsTrue_1.val && gdjs.LGS7Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS8", false);
}}

}


{


gdjs.LGS7Code.condition0IsTrue_0.val = false;
{
gdjs.LGS7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS8", false);
}}

}


}; //End of gdjs.LGS7Code.eventsList0xb2358


gdjs.LGS7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS7Code.GDsumObjects1.length = 0;
gdjs.LGS7Code.GDsumObjects2.length = 0;
gdjs.LGS7Code.GDbutton3Objects1.length = 0;
gdjs.LGS7Code.GDbutton3Objects2.length = 0;
gdjs.LGS7Code.GDbutton2Objects1.length = 0;
gdjs.LGS7Code.GDbutton2Objects2.length = 0;
gdjs.LGS7Code.GDbutton1Objects1.length = 0;
gdjs.LGS7Code.GDbutton1Objects2.length = 0;
gdjs.LGS7Code.GDline5Objects1.length = 0;
gdjs.LGS7Code.GDline5Objects2.length = 0;
gdjs.LGS7Code.GDline4Objects1.length = 0;
gdjs.LGS7Code.GDline4Objects2.length = 0;
gdjs.LGS7Code.GDline3Objects1.length = 0;
gdjs.LGS7Code.GDline3Objects2.length = 0;
gdjs.LGS7Code.GDline2Objects1.length = 0;
gdjs.LGS7Code.GDline2Objects2.length = 0;
gdjs.LGS7Code.GDline1Objects1.length = 0;
gdjs.LGS7Code.GDline1Objects2.length = 0;
gdjs.LGS7Code.GDcontinueObjects1.length = 0;
gdjs.LGS7Code.GDcontinueObjects2.length = 0;
gdjs.LGS7Code.GDanswerObjects1.length = 0;
gdjs.LGS7Code.GDanswerObjects2.length = 0;

gdjs.LGS7Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS7Code'] = gdjs.LGS7Code;
