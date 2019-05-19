gdjs.LGS9Code = {};
gdjs.LGS9Code.GDbutton1Objects1_1final = [];

gdjs.LGS9Code.GDbutton2Objects1_1final = [];

gdjs.LGS9Code.GDbutton3Objects1= [];
gdjs.LGS9Code.GDbutton3Objects2= [];
gdjs.LGS9Code.GDbutton2Objects1= [];
gdjs.LGS9Code.GDbutton2Objects2= [];
gdjs.LGS9Code.GDbutton1Objects1= [];
gdjs.LGS9Code.GDbutton1Objects2= [];
gdjs.LGS9Code.GDanswerObjects1= [];
gdjs.LGS9Code.GDanswerObjects2= [];
gdjs.LGS9Code.GDinversion3Objects1= [];
gdjs.LGS9Code.GDinversion3Objects2= [];
gdjs.LGS9Code.GDinversion2Objects1= [];
gdjs.LGS9Code.GDinversion2Objects2= [];
gdjs.LGS9Code.GDinversion1Objects1= [];
gdjs.LGS9Code.GDinversion1Objects2= [];
gdjs.LGS9Code.GDor2Objects1= [];
gdjs.LGS9Code.GDor2Objects2= [];
gdjs.LGS9Code.GDor1Objects1= [];
gdjs.LGS9Code.GDor1Objects2= [];
gdjs.LGS9Code.GDline7Objects1= [];
gdjs.LGS9Code.GDline7Objects2= [];
gdjs.LGS9Code.GDline6Objects1= [];
gdjs.LGS9Code.GDline6Objects2= [];
gdjs.LGS9Code.GDline5Objects1= [];
gdjs.LGS9Code.GDline5Objects2= [];
gdjs.LGS9Code.GDline4Objects1= [];
gdjs.LGS9Code.GDline4Objects2= [];
gdjs.LGS9Code.GDline3Objects1= [];
gdjs.LGS9Code.GDline3Objects2= [];
gdjs.LGS9Code.GDline2Objects1= [];
gdjs.LGS9Code.GDline2Objects2= [];
gdjs.LGS9Code.GDline1Objects1= [];
gdjs.LGS9Code.GDline1Objects2= [];
gdjs.LGS9Code.GDGameOverButtonObjects1= [];
gdjs.LGS9Code.GDGameOverButtonObjects2= [];

gdjs.LGS9Code.conditionTrue_0 = {val:false};
gdjs.LGS9Code.condition0IsTrue_0 = {val:false};
gdjs.LGS9Code.condition1IsTrue_0 = {val:false};
gdjs.LGS9Code.condition2IsTrue_0 = {val:false};
gdjs.LGS9Code.condition3IsTrue_0 = {val:false};
gdjs.LGS9Code.conditionTrue_1 = {val:false};
gdjs.LGS9Code.condition0IsTrue_1 = {val:false};
gdjs.LGS9Code.condition1IsTrue_1 = {val:false};
gdjs.LGS9Code.condition2IsTrue_1 = {val:false};
gdjs.LGS9Code.condition3IsTrue_1 = {val:false};


gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS9Code.GDbutton1Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS9Code.GDbutton1Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS9Code.GDbutton2Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.LGS9Code.GDbutton2Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.LGS9Code.GDbutton1Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton3Objects1Objects = Hashtable.newFrom({"button3": gdjs.LGS9Code.GDbutton3Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton3Objects1Objects = Hashtable.newFrom({"button3": gdjs.LGS9Code.GDbutton3Objects1});gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDGameOverButtonObjects1Objects = Hashtable.newFrom({"GameOverButton": gdjs.LGS9Code.GDGameOverButtonObjects1});gdjs.LGS9Code.userFunc0xdeecb8 = function(runtimeScene) {
var variables = runtimeScene.getVariables();
var gameID = 4;

/*runtimeScene.getGame().getVariables().getFromIndex(1).getChild("3level").setNumber(variables.get("Score").getAsNumber());
runtimeScene.getGame().getVariables().getFromIndex(2).getChild("3level").setNumber(variables.get("Time").getAsNumber());*/
var score = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").getAsNumber();
var time = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").getAsNumber();


window.top.postMessage({ 
    name: "level-done",
    data: {
        gameID,
        score,
        time,
    },
},"*");

};
gdjs.LGS9Code.eventsList0xdee5e8 = function(runtimeScene) {

{


gdjs.LGS9Code.userFunc0xdeecb8(runtimeScene);

}


}; //End of gdjs.LGS9Code.eventsList0xdee5e8
gdjs.LGS9Code.userFunc0xdef290 = function(runtimeScene) {
var variables = runtimeScene.getVariables();
var gameID = 4;

/*runtimeScene.getGame().getVariables().getFromIndex(1).getChild("3level").setNumber(variables.get("Score").getAsNumber());
runtimeScene.getGame().getVariables().getFromIndex(2).getChild("3level").setNumber(variables.get("Time").getAsNumber());*/
var score = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").getAsNumber();
var time = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").getAsNumber();


window.top.postMessage({ 
    name: "level-done",
    data: {
        gameID,
        score,
        time,
    },
},"*");

};
gdjs.LGS9Code.eventsList0xdeedd0 = function(runtimeScene) {

{


gdjs.LGS9Code.userFunc0xdef290(runtimeScene);

}


}; //End of gdjs.LGS9Code.eventsList0xdeedd0
gdjs.LGS9Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
gdjs.LGS9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDGameOverButtonObjects1.createFrom(runtimeScene.getObjects("GameOverButton"));
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDinversion3Objects1.createFrom(runtimeScene.getObjects("inversion3"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
gdjs.LGS9Code.GDline6Objects1.createFrom(runtimeScene.getObjects("line6"));
gdjs.LGS9Code.GDline7Objects1.createFrom(runtimeScene.getObjects("line7"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion3Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline6Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline6Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline7Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline7Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDanswerObjects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDGameOverButtonObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDGameOverButtonObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton1Objects1 */
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("off");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton1Objects1 */
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("on");
}
}}

}


{

gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton2Objects1 */
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("on");
}
}}

}


{

gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton2Objects1 */
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("off");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.length = 0;

gdjs.LGS9Code.GDbutton2Objects1.length = 0;


gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.GDbutton1Objects1_1final.length = 0;gdjs.LGS9Code.GDbutton2Objects1_1final.length = 0;gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
{
gdjs.LGS9Code.GDbutton1Objects2.createFrom(runtimeScene.getObjects("button1"));
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects2.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects2[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition0IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects2[k] = gdjs.LGS9Code.GDbutton1Objects2[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects2.length = k;if( gdjs.LGS9Code.condition0IsTrue_1.val ) {
    gdjs.LGS9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS9Code.GDbutton1Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS9Code.GDbutton1Objects1_1final.indexOf(gdjs.LGS9Code.GDbutton1Objects2[j]) === -1 )
            gdjs.LGS9Code.GDbutton1Objects1_1final.push(gdjs.LGS9Code.GDbutton1Objects2[j]);
    }
}
}
{
gdjs.LGS9Code.GDbutton2Objects2.createFrom(runtimeScene.getObjects("button2"));
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects2.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects2[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition1IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects2[k] = gdjs.LGS9Code.GDbutton2Objects2[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects2.length = k;if( gdjs.LGS9Code.condition1IsTrue_1.val ) {
    gdjs.LGS9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LGS9Code.GDbutton2Objects2.length;j<jLen;++j) {
        if ( gdjs.LGS9Code.GDbutton2Objects1_1final.indexOf(gdjs.LGS9Code.GDbutton2Objects2[j]) === -1 )
            gdjs.LGS9Code.GDbutton2Objects1_1final.push(gdjs.LGS9Code.GDbutton2Objects2[j]);
    }
}
}
{
gdjs.LGS9Code.GDbutton1Objects1.createFrom(gdjs.LGS9Code.GDbutton1Objects1_1final);
gdjs.LGS9Code.GDbutton2Objects1.createFrom(gdjs.LGS9Code.GDbutton2Objects1_1final);
}
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("on");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton1Objects1 */
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("off");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition0IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition1IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDinversion3Objects1.createFrom(runtimeScene.getObjects("inversion3"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
gdjs.LGS9Code.GDline6Objects1.createFrom(runtimeScene.getObjects("line6"));
gdjs.LGS9Code.GDline7Objects1.createFrom(runtimeScene.getObjects("line7"));
{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline6Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline6Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline7Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline7Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion3Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDanswerObjects1[i].setAnimationName("red");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition0IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition1IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDGameOverButtonObjects1.createFrom(runtimeScene.getObjects("GameOverButton"));
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDinversion3Objects1.createFrom(runtimeScene.getObjects("inversion3"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
gdjs.LGS9Code.GDline6Objects1.createFrom(runtimeScene.getObjects("line6"));
gdjs.LGS9Code.GDline7Objects1.createFrom(runtimeScene.getObjects("line7"));
{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline6Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline6Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline7Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline7Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion3Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDanswerObjects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDGameOverButtonObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDGameOverButtonObjects1[i].setOpacity(1000);
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition0IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition1IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDinversion3Objects1.createFrom(runtimeScene.getObjects("inversion3"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
gdjs.LGS9Code.GDline6Objects1.createFrom(runtimeScene.getObjects("line6"));
gdjs.LGS9Code.GDline7Objects1.createFrom(runtimeScene.getObjects("line7"));
{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion3Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline6Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline6Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline7Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline7Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDanswerObjects1[i].setAnimationName("red");
}
}}

}


{

gdjs.LGS9Code.GDbutton1Objects1.createFrom(runtimeScene.getObjects("button1"));
gdjs.LGS9Code.GDbutton2Objects1.createFrom(runtimeScene.getObjects("button2"));
gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton1Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition0IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton1Objects1[k] = gdjs.LGS9Code.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton1Objects1.length = k;}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton2Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition1IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton2Objects1[k] = gdjs.LGS9Code.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton2Objects1.length = k;}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));
gdjs.LGS9Code.GDinversion1Objects1.createFrom(runtimeScene.getObjects("inversion1"));
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDinversion3Objects1.createFrom(runtimeScene.getObjects("inversion3"));
gdjs.LGS9Code.GDline1Objects1.createFrom(runtimeScene.getObjects("line1"));
gdjs.LGS9Code.GDline2Objects1.createFrom(runtimeScene.getObjects("line2"));
gdjs.LGS9Code.GDline3Objects1.createFrom(runtimeScene.getObjects("line3"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
gdjs.LGS9Code.GDline6Objects1.createFrom(runtimeScene.getObjects("line6"));
gdjs.LGS9Code.GDline7Objects1.createFrom(runtimeScene.getObjects("line7"));
{for(var i = 0, len = gdjs.LGS9Code.GDinversion1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion1Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("green");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion3Objects1[i].setAnimationName("red");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline1Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline1Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline2Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline6Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline6Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline7Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline7Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDanswerObjects1[i].setAnimationName("red");
}
}}

}


{

gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("off") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton3Objects1 */
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton3Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("red");
}
}}

}


{

gdjs.LGS9Code.GDbutton3Objects1.createFrom(runtimeScene.getObjects("button3"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDbutton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDbutton3Objects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDbutton3Objects1[i].isCurrentAnimationName("on") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDbutton3Objects1[k] = gdjs.LGS9Code.GDbutton3Objects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDbutton3Objects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LGS9Code.GDbutton3Objects1 */
gdjs.LGS9Code.GDinversion2Objects1.createFrom(runtimeScene.getObjects("inversion2"));
gdjs.LGS9Code.GDline4Objects1.createFrom(runtimeScene.getObjects("line4"));
gdjs.LGS9Code.GDline5Objects1.createFrom(runtimeScene.getObjects("line5"));
{for(var i = 0, len = gdjs.LGS9Code.GDbutton3Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDbutton3Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline4Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline4Objects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDline5Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDline5Objects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LGS9Code.GDinversion2Objects1.length ;i < len;++i) {
    gdjs.LGS9Code.GDinversion2Objects1[i].setAnimationName("green");
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.LGS9Code.GDGameOverButtonObjects1.createFrom(runtimeScene.getObjects("GameOverButton"));
gdjs.LGS9Code.GDanswerObjects1.createFrom(runtimeScene.getObjects("answer"));

gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
{gdjs.LGS9Code.conditionTrue_1 = gdjs.LGS9Code.condition0IsTrue_0;
gdjs.LGS9Code.condition0IsTrue_1.val = false;
gdjs.LGS9Code.condition1IsTrue_1.val = false;
gdjs.LGS9Code.condition2IsTrue_1.val = false;
{
gdjs.LGS9Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LGS9Code.mapOfGDgdjs_46LGS9Code_46GDGameOverButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LGS9Code.condition0IsTrue_1.val ) {
{
gdjs.LGS9Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LGS9Code.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.LGS9Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.LGS9Code.GDanswerObjects1[i].isCurrentAnimationName("green") ) {
        gdjs.LGS9Code.condition2IsTrue_1.val = true;
        gdjs.LGS9Code.GDanswerObjects1[k] = gdjs.LGS9Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.LGS9Code.GDanswerObjects1.length = k;}}
}
gdjs.LGS9Code.conditionTrue_1.val = true && gdjs.LGS9Code.condition0IsTrue_1.val && gdjs.LGS9Code.condition1IsTrue_1.val && gdjs.LGS9Code.condition2IsTrue_1.val;
}
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6level").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}
{ //Subevents
gdjs.LGS9Code.eventsList0xdee5e8(runtimeScene);} //End of subevents
}

}


{


gdjs.LGS9Code.condition0IsTrue_0.val = false;
{
gdjs.LGS9Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.LGS9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("5level").add(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("5level").add(20 - Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6level").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}
{ //Subevents
gdjs.LGS9Code.eventsList0xdeedd0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.LGS9Code.eventsList0xb2358


gdjs.LGS9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LGS9Code.GDbutton3Objects1.length = 0;
gdjs.LGS9Code.GDbutton3Objects2.length = 0;
gdjs.LGS9Code.GDbutton2Objects1.length = 0;
gdjs.LGS9Code.GDbutton2Objects2.length = 0;
gdjs.LGS9Code.GDbutton1Objects1.length = 0;
gdjs.LGS9Code.GDbutton1Objects2.length = 0;
gdjs.LGS9Code.GDanswerObjects1.length = 0;
gdjs.LGS9Code.GDanswerObjects2.length = 0;
gdjs.LGS9Code.GDinversion3Objects1.length = 0;
gdjs.LGS9Code.GDinversion3Objects2.length = 0;
gdjs.LGS9Code.GDinversion2Objects1.length = 0;
gdjs.LGS9Code.GDinversion2Objects2.length = 0;
gdjs.LGS9Code.GDinversion1Objects1.length = 0;
gdjs.LGS9Code.GDinversion1Objects2.length = 0;
gdjs.LGS9Code.GDor2Objects1.length = 0;
gdjs.LGS9Code.GDor2Objects2.length = 0;
gdjs.LGS9Code.GDor1Objects1.length = 0;
gdjs.LGS9Code.GDor1Objects2.length = 0;
gdjs.LGS9Code.GDline7Objects1.length = 0;
gdjs.LGS9Code.GDline7Objects2.length = 0;
gdjs.LGS9Code.GDline6Objects1.length = 0;
gdjs.LGS9Code.GDline6Objects2.length = 0;
gdjs.LGS9Code.GDline5Objects1.length = 0;
gdjs.LGS9Code.GDline5Objects2.length = 0;
gdjs.LGS9Code.GDline4Objects1.length = 0;
gdjs.LGS9Code.GDline4Objects2.length = 0;
gdjs.LGS9Code.GDline3Objects1.length = 0;
gdjs.LGS9Code.GDline3Objects2.length = 0;
gdjs.LGS9Code.GDline2Objects1.length = 0;
gdjs.LGS9Code.GDline2Objects2.length = 0;
gdjs.LGS9Code.GDline1Objects1.length = 0;
gdjs.LGS9Code.GDline1Objects2.length = 0;
gdjs.LGS9Code.GDGameOverButtonObjects1.length = 0;
gdjs.LGS9Code.GDGameOverButtonObjects2.length = 0;

gdjs.LGS9Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['LGS9Code'] = gdjs.LGS9Code;
