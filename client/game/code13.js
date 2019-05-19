gdjs.LGS3Code = {};
gdjs.LGS3Code.GDButton1Objects1_1final = [];

gdjs.LGS3Code.GDButton2Objects1_1final = [];

gdjs.LGS3Code.GDanswerObjects1= [];
gdjs.LGS3Code.GDanswerObjects2= [];
gdjs.LGS3Code.GDLine1Objects1= [];
gdjs.LGS3Code.GDLine1Objects2= [];
gdjs.LGS3Code.GDLine2Objects1= [];
gdjs.LGS3Code.GDLine2Objects2= [];
gdjs.LGS3Code.GDLineObjects1= [];
gdjs.LGS3Code.GDLineObjects2= [];
gdjs.LGS3Code.GDButton1Objects1= [];
gdjs.LGS3Code.GDButton1Objects2= [];
gdjs.LGS3Code.GDButton2Objects1= [];
gdjs.LGS3Code.GDButton2Objects2= [];
gdjs.LGS3Code.GDTriangle2Objects1= [];
gdjs.LGS3Code.GDTriangle2Objects2= [];
gdjs.LGS3Code.GDTriangle1Objects1= [];
gdjs.LGS3Code.GDTriangle1Objects2= [];
gdjs.LGS3Code.GDTriangleObjects1= [];
gdjs.LGS3Code.GDTriangleObjects2= [];
gdjs.LGS3Code.GDcontinueTextObjects1= [];
gdjs.LGS3Code.GDcontinueTextObjects2= [];
gdjs.LGS3Code.GDwireObjects1= [];
gdjs.LGS3Code.GDwireObjects2= [];

gdjs.LGS3Code.conditionTrue_0 = {val:false};
gdjs.LGS3Code.condition0IsTrue_0 = {val:false};
gdjs.LGS3Code.condition1IsTrue_0 = {val:false};
gdjs.LGS3Code.condition2IsTrue_0 = {val:false};
gdjs.LGS3Code.condition3IsTrue_0 = {val:false};
gdjs.LGS3Code.conditionTrue_1 = {val:false};
gdjs.LGS3Code.condition0IsTrue_1 = {val:false};
gdjs.LGS3Code.condition1IsTrue_1 = {val:false};
gdjs.LGS3Code.condition2IsTrue_1 = {val:false};
gdjs.LGS3Code.condition3IsTrue_1 = {val:false};


gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LGS3Code.GDButton1Objects1});gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LGS3Code.GDButton1Objects1});gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.LGS3Code.GDButton2Objects1});gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.LGS3Code.GDButton2Objects1});gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDcontinueTextObjects1Objects = Hashtable.newFrom({"continueText": gdjs.LGS3Code.GDcontinueTextObjects1});gdjs.LGS3Code.eventsList0x79dcf0 = function(runtimeScene) {

{

gdjs.LGS3Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
{
gdjs.LGS3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDanswerObjects1[i].isCurrentAnimationName("right") ) {
        gdjs.LGS3Code.condition1IsTrue_1.val = true;
        gdjs.LGS3Code.GDanswerObjects1[k] = gdjs.LGS3Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDanswerObjects1.length = k;}}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS4", false);
}}

}


}; //End of gdjs.LGS3Code.eventsList0x79dcf0
gdjs.LGS3Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
gdjs.LGS3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
gdjs.LGS3Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));
gdjs.LGS3Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));
gdjs.LGS3Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS3Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS3Code.GDTriangleObjects1.createFrom(runtimeScene.getObjects("Triangle"));
gdjs.LGS3Code.GDTriangle1Objects1.createFrom(runtimeScene.getObjects("Triangle1"));
gdjs.LGS3Code.GDTriangle2Objects1.createFrom(runtimeScene.getObjects("Triangle2"));
gdjs.LGS3Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS3Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS3Code.GDwireObjects1.createFrom(runtimeScene.getObjects("wire"));
{for(var i = 0, len = gdjs.LGS3Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LGS3Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangleObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangleObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle2Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDanswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLineObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDwireObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDwireObjects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS3Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
gdjs.LGS3Code.condition2IsTrue_1.val = false;
{
gdjs.LGS3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS3Code.condition1IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton1Objects1[k] = gdjs.LGS3Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton1Objects1.length = k;}if ( gdjs.LGS3Code.condition1IsTrue_1.val ) {
{
gdjs.LGS3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val && gdjs.LGS3Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS3Code.GDButton1Objects1 */
gdjs.LGS3Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS3Code.GDTriangleObjects1.createFrom(runtimeScene.getObjects("Triangle"));
{for(var i = 0, len = gdjs.LGS3Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangleObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangleObjects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLineObjects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS3Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
gdjs.LGS3Code.condition2IsTrue_1.val = false;
{
gdjs.LGS3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS3Code.condition1IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton1Objects1[k] = gdjs.LGS3Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton1Objects1.length = k;}if ( gdjs.LGS3Code.condition1IsTrue_1.val ) {
{
gdjs.LGS3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}}
}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val && gdjs.LGS3Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS3Code.GDButton1Objects1 */
gdjs.LGS3Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS3Code.GDTriangleObjects1.createFrom(runtimeScene.getObjects("Triangle"));
{for(var i = 0, len = gdjs.LGS3Code.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangleObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangleObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLineObjects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS3Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
gdjs.LGS3Code.condition2IsTrue_1.val = false;
{
gdjs.LGS3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
gdjs.LGS3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS3Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS3Code.condition2IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton2Objects1[k] = gdjs.LGS3Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton2Objects1.length = k;}}
}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val && gdjs.LGS3Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS3Code.GDButton2Objects1 */
gdjs.LGS3Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS3Code.GDTriangle1Objects1.createFrom(runtimeScene.getObjects("Triangle1"));
{for(var i = 0, len = gdjs.LGS3Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine1Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS3Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
gdjs.LGS3Code.condition2IsTrue_1.val = false;
{
gdjs.LGS3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
gdjs.LGS3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS3Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS3Code.condition2IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton2Objects1[k] = gdjs.LGS3Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton2Objects1.length = k;}}
}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val && gdjs.LGS3Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS3Code.GDButton2Objects1 */
gdjs.LGS3Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS3Code.GDTriangle1Objects1.createFrom(runtimeScene.getObjects("Triangle1"));
{for(var i = 0, len = gdjs.LGS3Code.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDButton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine1Objects1[i].setAnimationName("gray");
}
}}

}


{

gdjs.LGS3Code.GDButton1Objects1.createFrom(runtimeScene.getObjects("Button1"));
gdjs.LGS3Code.GDButton2Objects1.createFrom(runtimeScene.getObjects("Button2"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS3Code.condition0IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton1Objects1[k] = gdjs.LGS3Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton1Objects1.length = k;}if ( gdjs.LGS3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS3Code.condition1IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton2Objects1[k] = gdjs.LGS3Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton2Objects1.length = k;}}
gdjs.LGS3Code.conditionTrue_1.val = true && gdjs.LGS3Code.condition0IsTrue_1.val && gdjs.LGS3Code.condition1IsTrue_1.val;
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
gdjs.LGS3Code.GDLineObjects1.createFrom(runtimeScene.getObjects("Line"));
gdjs.LGS3Code.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.LGS3Code.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.LGS3Code.GDTriangle2Objects1.createFrom(runtimeScene.getObjects("Triangle2"));
gdjs.LGS3Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS3Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS3Code.GDwireObjects1.createFrom(runtimeScene.getObjects("wire"));
{for(var i = 0, len = gdjs.LGS3Code.GDwireObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDwireObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine1Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine1Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLineObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLineObjects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDanswerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDcontinueTextObjects1[i].setOpacity(1000);
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle2Objects1[i].setAnimationName("green");
}
}}

}


{

gdjs.LGS3Code.GDButton1Objects1.length = 0;

gdjs.LGS3Code.GDButton2Objects1.length = 0;


gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS3Code.conditionTrue_1 = gdjs.LGS3Code.condition0IsTrue_0;
gdjs.LGS3Code.GDButton1Objects1_1final.length = 0;gdjs.LGS3Code.GDButton2Objects1_1final.length = 0;gdjs.LGS3Code.condition0IsTrue_1.val = false;
gdjs.LGS3Code.condition1IsTrue_1.val = false;
{
gdjs.LGS3Code.GDButton1Objects2.createFrom(runtimeScene.getObjects("Button1"));
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton1Objects2.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton1Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS3Code.condition0IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton1Objects2[k] = gdjs.LGS3Code.GDButton1Objects2[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton1Objects2.length = k;if( gdjs.LGS3Code.condition0IsTrue_1.val ) {
    gdjs.LGS3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS3Code.GDButton1Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS3Code.GDButton1Objects1_1final.indexOf(gdjs.LGS3Code.GDButton1Objects2[j]) === -1 )
            gdjs.LGS3Code.GDButton1Objects1_1final.push(gdjs.LGS3Code.GDButton1Objects2[j]);
    }
}
}
{
gdjs.LGS3Code.GDButton2Objects2.createFrom(runtimeScene.getObjects("Button2"));
for(var i = 0, k = 0, l = gdjs.LGS3Code.GDButton2Objects2.length;i<l;++i) {
    if ( gdjs.LGS3Code.GDButton2Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS3Code.condition1IsTrue_1.val = true;
        gdjs.LGS3Code.GDButton2Objects2[k] = gdjs.LGS3Code.GDButton2Objects2[i];
        ++k;
    }
}
gdjs.LGS3Code.GDButton2Objects2.length = k;if( gdjs.LGS3Code.condition1IsTrue_1.val ) {
    gdjs.LGS3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS3Code.GDButton2Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS3Code.GDButton2Objects1_1final.indexOf(gdjs.LGS3Code.GDButton2Objects2[j]) === -1 )
            gdjs.LGS3Code.GDButton2Objects1_1final.push(gdjs.LGS3Code.GDButton2Objects2[j]);
    }
}
}
{
gdjs.LGS3Code.GDButton1Objects1.createFrom(gdjs.LGS3Code.GDButton1Objects1_1final);
gdjs.LGS3Code.GDButton2Objects1.createFrom(gdjs.LGS3Code.GDButton2Objects1_1final);
}
}
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
gdjs.LGS3Code.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.LGS3Code.GDTriangle2Objects1.createFrom(runtimeScene.getObjects("Triangle2"));
gdjs.LGS3Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS3Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));
gdjs.LGS3Code.GDwireObjects1.createFrom(runtimeScene.getObjects("wire"));
{for(var i = 0, len = gdjs.LGS3Code.GDwireObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDwireObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDLine2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDLine2Objects1[i].setAnimationName("gray");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDanswerObjects1[i].setAnimationName("wrong");
}
}{for(var i = 0, len = gdjs.LGS3Code.GDcontinueTextObjects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDcontinueTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LGS3Code.GDTriangle2Objects1.length ;i < len;++i) {
    gdjs.LGS3Code.GDTriangle2Objects1[i].setAnimationName("red");
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS3Code.GDcontinueTextObjects1.createFrom(runtimeScene.getObjects("continueText"));

gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
gdjs.LGS3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS3Code.mapOfGDgdjs_46LGS3Code_46GDcontinueTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LGS3Code.eventsList0x79dcf0(runtimeScene);} //End of subevents
}

}


{


gdjs.LGS3Code.condition0IsTrue_0.val = false;
{
gdjs.LGS3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LGS4", false);
}}

}


}; //End of gdjs.LGS3Code.eventsList0xb2358


gdjs.LGS3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS3Code.GDanswerObjects1.length = 0;
gdjs.LGS3Code.GDanswerObjects2.length = 0;
gdjs.LGS3Code.GDLine1Objects1.length = 0;
gdjs.LGS3Code.GDLine1Objects2.length = 0;
gdjs.LGS3Code.GDLine2Objects1.length = 0;
gdjs.LGS3Code.GDLine2Objects2.length = 0;
gdjs.LGS3Code.GDLineObjects1.length = 0;
gdjs.LGS3Code.GDLineObjects2.length = 0;
gdjs.LGS3Code.GDButton1Objects1.length = 0;
gdjs.LGS3Code.GDButton1Objects2.length = 0;
gdjs.LGS3Code.GDButton2Objects1.length = 0;
gdjs.LGS3Code.GDButton2Objects2.length = 0;
gdjs.LGS3Code.GDTriangle2Objects1.length = 0;
gdjs.LGS3Code.GDTriangle2Objects2.length = 0;
gdjs.LGS3Code.GDTriangle1Objects1.length = 0;
gdjs.LGS3Code.GDTriangle1Objects2.length = 0;
gdjs.LGS3Code.GDTriangleObjects1.length = 0;
gdjs.LGS3Code.GDTriangleObjects2.length = 0;
gdjs.LGS3Code.GDcontinueTextObjects1.length = 0;
gdjs.LGS3Code.GDcontinueTextObjects2.length = 0;
gdjs.LGS3Code.GDwireObjects1.length = 0;
gdjs.LGS3Code.GDwireObjects2.length = 0;

gdjs.LGS3Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS3Code'] = gdjs.LGS3Code;
