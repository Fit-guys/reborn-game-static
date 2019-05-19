gdjs.PlatformerCode = {};
gdjs.PlatformerCode.forEachIndex2 = 0;

gdjs.PlatformerCode.forEachObjects2 = [];

gdjs.PlatformerCode.forEachTemporary2 = null;

gdjs.PlatformerCode.forEachTotalCount2 = 0;

gdjs.PlatformerCode.GDPersonObjects1= [];
gdjs.PlatformerCode.GDPersonObjects2= [];
gdjs.PlatformerCode.GDPersonObjects3= [];
gdjs.PlatformerCode.GDgrassHorizontalObjects1= [];
gdjs.PlatformerCode.GDgrassHorizontalObjects2= [];
gdjs.PlatformerCode.GDgrassHorizontalObjects3= [];
gdjs.PlatformerCode.GDgrassWithAngleObjects1= [];
gdjs.PlatformerCode.GDgrassWithAngleObjects2= [];
gdjs.PlatformerCode.GDgrassWithAngleObjects3= [];
gdjs.PlatformerCode.GDgrassVerticalObjects1= [];
gdjs.PlatformerCode.GDgrassVerticalObjects2= [];
gdjs.PlatformerCode.GDgrassVerticalObjects3= [];
gdjs.PlatformerCode.GDgrass2Objects1= [];
gdjs.PlatformerCode.GDgrass2Objects2= [];
gdjs.PlatformerCode.GDgrass2Objects3= [];
gdjs.PlatformerCode.GDScoreObjects1= [];
gdjs.PlatformerCode.GDScoreObjects2= [];
gdjs.PlatformerCode.GDScoreObjects3= [];
gdjs.PlatformerCode.GDleftObjects1= [];
gdjs.PlatformerCode.GDleftObjects2= [];
gdjs.PlatformerCode.GDleftObjects3= [];
gdjs.PlatformerCode.GDrightObjects1= [];
gdjs.PlatformerCode.GDrightObjects2= [];
gdjs.PlatformerCode.GDrightObjects3= [];
gdjs.PlatformerCode.GDcheckpoint1Objects1= [];
gdjs.PlatformerCode.GDcheckpoint1Objects2= [];
gdjs.PlatformerCode.GDcheckpoint1Objects3= [];
gdjs.PlatformerCode.GDcheckpointExit4Objects1= [];
gdjs.PlatformerCode.GDcheckpointExit4Objects2= [];
gdjs.PlatformerCode.GDcheckpointExit4Objects3= [];
gdjs.PlatformerCode.GDarrowUpObjects1= [];
gdjs.PlatformerCode.GDarrowUpObjects2= [];
gdjs.PlatformerCode.GDarrowUpObjects3= [];
gdjs.PlatformerCode.GDarrowDownObjects1= [];
gdjs.PlatformerCode.GDarrowDownObjects2= [];
gdjs.PlatformerCode.GDarrowDownObjects3= [];
gdjs.PlatformerCode.GDarrowDownAngleObjects1= [];
gdjs.PlatformerCode.GDarrowDownAngleObjects2= [];
gdjs.PlatformerCode.GDarrowDownAngleObjects3= [];
gdjs.PlatformerCode.GDarrowUpAngleObjects1= [];
gdjs.PlatformerCode.GDarrowUpAngleObjects2= [];
gdjs.PlatformerCode.GDarrowUpAngleObjects3= [];
gdjs.PlatformerCode.GDLifesObjects1= [];
gdjs.PlatformerCode.GDLifesObjects2= [];
gdjs.PlatformerCode.GDLifesObjects3= [];
gdjs.PlatformerCode.GDtimeIsOverObjects1= [];
gdjs.PlatformerCode.GDtimeIsOverObjects2= [];
gdjs.PlatformerCode.GDtimeIsOverObjects3= [];
gdjs.PlatformerCode.GDtrapObjects1= [];
gdjs.PlatformerCode.GDtrapObjects2= [];
gdjs.PlatformerCode.GDtrapObjects3= [];
gdjs.PlatformerCode.GDFinishedGameObjects1= [];
gdjs.PlatformerCode.GDFinishedGameObjects2= [];
gdjs.PlatformerCode.GDFinishedGameObjects3= [];
gdjs.PlatformerCode.GDcoinNumber1Objects1= [];
gdjs.PlatformerCode.GDcoinNumber1Objects2= [];
gdjs.PlatformerCode.GDcoinNumber1Objects3= [];
gdjs.PlatformerCode.GDcoinNumber2Objects1= [];
gdjs.PlatformerCode.GDcoinNumber2Objects2= [];
gdjs.PlatformerCode.GDcoinNumber2Objects3= [];
gdjs.PlatformerCode.GDcoinNumber3Objects1= [];
gdjs.PlatformerCode.GDcoinNumber3Objects2= [];
gdjs.PlatformerCode.GDcoinNumber3Objects3= [];
gdjs.PlatformerCode.GDcoinNumber4Objects1= [];
gdjs.PlatformerCode.GDcoinNumber4Objects2= [];
gdjs.PlatformerCode.GDcoinNumber4Objects3= [];
gdjs.PlatformerCode.GDcoinNumber5Objects1= [];
gdjs.PlatformerCode.GDcoinNumber5Objects2= [];
gdjs.PlatformerCode.GDcoinNumber5Objects3= [];
gdjs.PlatformerCode.GDTimerObjects1= [];
gdjs.PlatformerCode.GDTimerObjects2= [];
gdjs.PlatformerCode.GDTimerObjects3= [];
gdjs.PlatformerCode.GDrestartImageObjects1= [];
gdjs.PlatformerCode.GDrestartImageObjects2= [];
gdjs.PlatformerCode.GDrestartImageObjects3= [];
gdjs.PlatformerCode.GDgameOverObjects1= [];
gdjs.PlatformerCode.GDgameOverObjects2= [];
gdjs.PlatformerCode.GDgameOverObjects3= [];
gdjs.PlatformerCode.GDgrass3Objects1= [];
gdjs.PlatformerCode.GDgrass3Objects2= [];
gdjs.PlatformerCode.GDgrass3Objects3= [];
gdjs.PlatformerCode.GDdeadLineBlockObjects1= [];
gdjs.PlatformerCode.GDdeadLineBlockObjects2= [];
gdjs.PlatformerCode.GDdeadLineBlockObjects3= [];
gdjs.PlatformerCode.GDredBlockObjects1= [];
gdjs.PlatformerCode.GDredBlockObjects2= [];
gdjs.PlatformerCode.GDredBlockObjects3= [];

gdjs.PlatformerCode.conditionTrue_0 = {val:false};
gdjs.PlatformerCode.condition0IsTrue_0 = {val:false};
gdjs.PlatformerCode.condition1IsTrue_0 = {val:false};


gdjs.PlatformerCode.eventsList0x109f828 = function(runtimeScene) {

{

gdjs.PlatformerCode.GDredBlockObjects2.createFrom(gdjs.PlatformerCode.GDredBlockObjects1);


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDredBlockObjects2.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDredBlockObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDredBlockObjects2[k] = gdjs.PlatformerCode.GDredBlockObjects2[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDredBlockObjects2.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects2.createFrom(runtimeScene.getObjects("Person"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects2[i].setAnimation(1);
}
}}

}


{

/* Reuse gdjs.PlatformerCode.GDredBlockObjects1 */

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDredBlockObjects1.length;i<l;++i) {
    if ( !(gdjs.PlatformerCode.GDredBlockObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDredBlockObjects1[k] = gdjs.PlatformerCode.GDredBlockObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDredBlockObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.PlatformerCode.eventsList0x109f828
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDPersonObjects1Objects = Hashtable.newFrom({"Person": gdjs.PlatformerCode.GDPersonObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber1Objects1Objects = Hashtable.newFrom({"coinNumber1": gdjs.PlatformerCode.GDcoinNumber1Objects1});gdjs.PlatformerCode.eventsList0x7c6f50 = function(runtimeScene) {

}; //End of gdjs.PlatformerCode.eventsList0x7c6f50
gdjs.PlatformerCode.eventsList0x7c7970 = function(runtimeScene) {

{

gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));

for(gdjs.PlatformerCode.forEachIndex2 = 0;gdjs.PlatformerCode.forEachIndex2 < gdjs.PlatformerCode.GDcheckpoint1Objects1.length;++gdjs.PlatformerCode.forEachIndex2) {
gdjs.PlatformerCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
gdjs.PlatformerCode.GDcoinNumber1Objects2.createFrom(gdjs.PlatformerCode.GDcoinNumber1Objects1);

gdjs.PlatformerCode.GDcheckpoint1Objects2.length = 0;


gdjs.PlatformerCode.forEachTemporary2 = gdjs.PlatformerCode.GDcheckpoint1Objects1[gdjs.PlatformerCode.forEachIndex2];
gdjs.PlatformerCode.GDcheckpoint1Objects2.push(gdjs.PlatformerCode.forEachTemporary2);
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.PlatformerCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDScoreObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber1Objects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber1Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.PlatformerCode.eventsList0x7c7970
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDrestartImageObjects1Objects = Hashtable.newFrom({"restartImage": gdjs.PlatformerCode.GDrestartImageObjects1});gdjs.PlatformerCode.eventsList0x85df50 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));
{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].setPosition((( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointX("")),(( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointY("")));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "First game", false);
}}

}


}; //End of gdjs.PlatformerCode.eventsList0x85df50
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassHorizontalObjects1Objects = Hashtable.newFrom({"grassHorizontal": gdjs.PlatformerCode.GDgrassHorizontalObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.PlatformerCode.GDleftObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassHorizontalObjects1Objects = Hashtable.newFrom({"grassHorizontal": gdjs.PlatformerCode.GDgrassHorizontalObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.PlatformerCode.GDrightObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassVerticalObjects1Objects = Hashtable.newFrom({"grassVertical": gdjs.PlatformerCode.GDgrassVerticalObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowUpObjects1Objects = Hashtable.newFrom({"arrowUp": gdjs.PlatformerCode.GDarrowUpObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassVerticalObjects1Objects = Hashtable.newFrom({"grassVertical": gdjs.PlatformerCode.GDgrassVerticalObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowDownObjects1Objects = Hashtable.newFrom({"arrowDown": gdjs.PlatformerCode.GDarrowDownObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassWithAngleObjects1Objects = Hashtable.newFrom({"grassWithAngle": gdjs.PlatformerCode.GDgrassWithAngleObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowDownAngleObjects1Objects = Hashtable.newFrom({"arrowDownAngle": gdjs.PlatformerCode.GDarrowDownAngleObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassWithAngleObjects1Objects = Hashtable.newFrom({"grassWithAngle": gdjs.PlatformerCode.GDgrassWithAngleObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowUpAngleObjects1Objects = Hashtable.newFrom({"arrowUpAngle": gdjs.PlatformerCode.GDarrowUpAngleObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcheckpoint1Objects1Objects = Hashtable.newFrom({"checkpoint1": gdjs.PlatformerCode.GDcheckpoint1Objects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber3Objects1Objects = Hashtable.newFrom({"coinNumber3": gdjs.PlatformerCode.GDcoinNumber3Objects1});gdjs.PlatformerCode.eventsList0x7c5c28 = function(runtimeScene) {

}; //End of gdjs.PlatformerCode.eventsList0x7c5c28
gdjs.PlatformerCode.eventsList0x7c5aa0 = function(runtimeScene) {

{

/* Reuse gdjs.PlatformerCode.GDcoinNumber3Objects1 */

for(gdjs.PlatformerCode.forEachIndex2 = 0;gdjs.PlatformerCode.forEachIndex2 < gdjs.PlatformerCode.GDcoinNumber3Objects1.length;++gdjs.PlatformerCode.forEachIndex2) {
gdjs.PlatformerCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
gdjs.PlatformerCode.GDcoinNumber3Objects2.length = 0;


gdjs.PlatformerCode.forEachTemporary2 = gdjs.PlatformerCode.GDcoinNumber3Objects1[gdjs.PlatformerCode.forEachIndex2];
gdjs.PlatformerCode.GDcoinNumber3Objects2.push(gdjs.PlatformerCode.forEachTemporary2);
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(3);
}{for(var i = 0, len = gdjs.PlatformerCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDScoreObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber3Objects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber3Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.PlatformerCode.eventsList0x7c5aa0
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber4Objects1Objects = Hashtable.newFrom({"coinNumber4": gdjs.PlatformerCode.GDcoinNumber4Objects1});gdjs.PlatformerCode.eventsList0x7c61a8 = function(runtimeScene) {

}; //End of gdjs.PlatformerCode.eventsList0x7c61a8
gdjs.PlatformerCode.eventsList0x7c6010 = function(runtimeScene) {

{

/* Reuse gdjs.PlatformerCode.GDcoinNumber4Objects1 */

for(gdjs.PlatformerCode.forEachIndex2 = 0;gdjs.PlatformerCode.forEachIndex2 < gdjs.PlatformerCode.GDcoinNumber4Objects1.length;++gdjs.PlatformerCode.forEachIndex2) {
gdjs.PlatformerCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
gdjs.PlatformerCode.GDcoinNumber4Objects2.length = 0;


gdjs.PlatformerCode.forEachTemporary2 = gdjs.PlatformerCode.GDcoinNumber4Objects1[gdjs.PlatformerCode.forEachIndex2];
gdjs.PlatformerCode.GDcoinNumber4Objects2.push(gdjs.PlatformerCode.forEachTemporary2);
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(4);
}{for(var i = 0, len = gdjs.PlatformerCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDScoreObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber4Objects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber4Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.PlatformerCode.eventsList0x7c6010
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber5Objects1Objects = Hashtable.newFrom({"coinNumber5": gdjs.PlatformerCode.GDcoinNumber5Objects1});gdjs.PlatformerCode.eventsList0x85b208 = function(runtimeScene) {

}; //End of gdjs.PlatformerCode.eventsList0x85b208
gdjs.PlatformerCode.eventsList0x7c6590 = function(runtimeScene) {

{

/* Reuse gdjs.PlatformerCode.GDcoinNumber5Objects1 */

for(gdjs.PlatformerCode.forEachIndex2 = 0;gdjs.PlatformerCode.forEachIndex2 < gdjs.PlatformerCode.GDcoinNumber5Objects1.length;++gdjs.PlatformerCode.forEachIndex2) {
gdjs.PlatformerCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
gdjs.PlatformerCode.GDcoinNumber5Objects2.length = 0;


gdjs.PlatformerCode.forEachTemporary2 = gdjs.PlatformerCode.GDcoinNumber5Objects1[gdjs.PlatformerCode.forEachIndex2];
gdjs.PlatformerCode.GDcoinNumber5Objects2.push(gdjs.PlatformerCode.forEachTemporary2);
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(5);
}{for(var i = 0, len = gdjs.PlatformerCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDScoreObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber5Objects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber5Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.PlatformerCode.eventsList0x7c6590
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber2Objects1Objects = Hashtable.newFrom({"coinNumber2": gdjs.PlatformerCode.GDcoinNumber2Objects1});gdjs.PlatformerCode.eventsList0x85b950 = function(runtimeScene) {

}; //End of gdjs.PlatformerCode.eventsList0x85b950
gdjs.PlatformerCode.eventsList0x85b7b8 = function(runtimeScene) {

{

/* Reuse gdjs.PlatformerCode.GDcoinNumber2Objects1 */

for(gdjs.PlatformerCode.forEachIndex2 = 0;gdjs.PlatformerCode.forEachIndex2 < gdjs.PlatformerCode.GDcoinNumber2Objects1.length;++gdjs.PlatformerCode.forEachIndex2) {
gdjs.PlatformerCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
gdjs.PlatformerCode.GDcoinNumber2Objects2.length = 0;


gdjs.PlatformerCode.forEachTemporary2 = gdjs.PlatformerCode.GDcoinNumber2Objects1[gdjs.PlatformerCode.forEachIndex2];
gdjs.PlatformerCode.GDcoinNumber2Objects2.push(gdjs.PlatformerCode.forEachTemporary2);
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(2);
}{for(var i = 0, len = gdjs.PlatformerCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDScoreObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber2Objects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.PlatformerCode.eventsList0x85b7b8
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDdeadLineBlockObjects1Objects = Hashtable.newFrom({"deadLineBlock": gdjs.PlatformerCode.GDdeadLineBlockObjects1});gdjs.PlatformerCode.eventsList0x85c798 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "ScaleTime");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDcheckpoint1Objects1 */
/* Reuse gdjs.PlatformerCode.GDcheckpointExit4Objects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpoint1Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpoint1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpointExit4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpointExit4Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScaleTime");
}}

}


}; //End of gdjs.PlatformerCode.eventsList0x85c798
gdjs.PlatformerCode.eventsList0x85c4e8 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "ScaleTime");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));
/* Reuse gdjs.PlatformerCode.GDcheckpointExit4Objects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpoint1Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpoint1Objects1[i].setScale(0.01);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpointExit4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpointExit4Objects1[i].setScale(0.01);
}
}
{ //Subevents
gdjs.PlatformerCode.eventsList0x85c798(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PlatformerCode.eventsList0x85c4e8
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects = Hashtable.newFrom({"redBlock": gdjs.PlatformerCode.GDredBlockObjects1});gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcheckpointExit4Objects1Objects = Hashtable.newFrom({"checkpointExit4": gdjs.PlatformerCode.GDcheckpointExit4Objects1});gdjs.PlatformerCode.userFunc0x79d5a8 = function(runtimeScene, objects) {
var variables = runtimeScene.getVariables();
var gameID = 0;

/*runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").setNumber(variables.get("Score").getAsNumber());
runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").setNumber(80-variables.get("Time").getAsNumber());*/
var score = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").getAsNumber();
var time = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").getAsNumber();


window.top.postMessage({ 
    name: "level-done",
    data: {
        gameID,
        score,
        time,
    },
},"*");
};
gdjs.PlatformerCode.eventsList0x79cfd0 = function(runtimeScene) {

{

gdjs.PlatformerCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));

var objects = [];
objects.push.apply(objects,gdjs.PlatformerCode.GDScoreObjects1);
gdjs.PlatformerCode.userFunc0x79d5a8(runtimeScene, objects);

}


}; //End of gdjs.PlatformerCode.eventsList0x79cfd0
gdjs.PlatformerCode.userFunc0x79dec0 = function(runtimeScene, objects) {
var variables = runtimeScene.getVariables();
var gameID = 0;

/*runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").setNumber(variables.get("Score").getAsNumber());
runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").setNumber(80-variables.get("Time").getAsNumber());*/
var score = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").getAsNumber();
var time = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").getAsNumber();


window.top.postMessage({ 
    name: "level-done",
    data: {
        gameID,
        score,
        time,
    },
},"*");
};
gdjs.PlatformerCode.eventsList0x79d938 = function(runtimeScene) {

{

gdjs.PlatformerCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));

var objects = [];
objects.push.apply(objects,gdjs.PlatformerCode.GDScoreObjects1);
gdjs.PlatformerCode.userFunc0x79dec0(runtimeScene, objects);

}


}; //End of gdjs.PlatformerCode.eventsList0x79d938
gdjs.PlatformerCode.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].setPosition((( gdjs.PlatformerCode.GDredBlockObjects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDredBlockObjects1[0].getPointX("")) - 12,(( gdjs.PlatformerCode.GDredBlockObjects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDredBlockObjects1[0].getPointY("")));
}
}}

}


{

gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDredBlockObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDredBlockObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDredBlockObjects1[k] = gdjs.PlatformerCode.GDredBlockObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDredBlockObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDredBlockObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDredBlockObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDredBlockObjects1[k] = gdjs.PlatformerCode.GDredBlockObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDredBlockObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x109f828(runtimeScene);} //End of subevents
}

}


{


{
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.PlatformerCode.GDredBlockObjects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDredBlockObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
gdjs.PlatformerCode.GDcoinNumber1Objects1.createFrom(runtimeScene.getObjects("coinNumber1"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDPersonObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber1Objects1Objects, false, runtimeScene, true);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x7c7970(runtimeScene);} //End of subevents
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDFinishedGameObjects1.createFrom(runtimeScene.getObjects("FinishedGame"));
gdjs.PlatformerCode.GDarrowDownObjects1.createFrom(runtimeScene.getObjects("arrowDown"));
gdjs.PlatformerCode.GDarrowDownAngleObjects1.createFrom(runtimeScene.getObjects("arrowDownAngle"));
gdjs.PlatformerCode.GDarrowUpObjects1.createFrom(runtimeScene.getObjects("arrowUp"));
gdjs.PlatformerCode.GDarrowUpAngleObjects1.createFrom(runtimeScene.getObjects("arrowUpAngle"));
gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));
gdjs.PlatformerCode.GDgameOverObjects1.createFrom(runtimeScene.getObjects("gameOver"));
gdjs.PlatformerCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));
gdjs.PlatformerCode.GDrestartImageObjects1.createFrom(runtimeScene.getObjects("restartImage"));
gdjs.PlatformerCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
gdjs.PlatformerCode.GDtimeIsOverObjects1.createFrom(runtimeScene.getObjects("timeIsOver"));
{for(var i = 0, len = gdjs.PlatformerCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDarrowUpObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDarrowUpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDarrowDownObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDarrowDownObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDarrowDownAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDarrowDownAngleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDarrowUpAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDarrowUpAngleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDFinishedGameObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDFinishedGameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDtimeIsOverObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDtimeIsOverObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{runtimeScene.getVariables().get("Time").setNumber(80);
}{for(var i = 0, len = gdjs.PlatformerCode.GDrestartImageObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDrestartImageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDgameOverObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].setPosition((( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointX("")) + 75,(( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointY("")) + 100);
}
}}

}


{


{
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Time");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{runtimeScene.getVariables().get("Time").sub(1);
}}

}


{


{
gdjs.PlatformerCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.PlatformerCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time"))));
}
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) == 0;
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Platformer", false);
}}

}


{

gdjs.PlatformerCode.GDrestartImageObjects1.createFrom(runtimeScene.getObjects("restartImage"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDrestartImageObjects1Objects, runtimeScene, true, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x85df50(runtimeScene);} //End of subevents
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Lifes")) > 0;
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDLifesObjects1.createFrom(runtimeScene.getObjects("Lifes"));
{runtimeScene.getVariables().get("Lifes").sub(1);
}{for(var i = 0, len = gdjs.PlatformerCode.GDLifesObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDLifesObjects1[i].setString("Lifes : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Lifes"))));
}
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Lifes")) < 0;
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDtimeIsOverObjects1.createFrom(runtimeScene.getObjects("timeIsOver"));
{for(var i = 0, len = gdjs.PlatformerCode.GDtimeIsOverObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDtimeIsOverObjects1[i].setOpacity(1);
}
}}

}


{

gdjs.PlatformerCode.GDgrassHorizontalObjects1.createFrom(runtimeScene.getObjects("grassHorizontal"));
gdjs.PlatformerCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassHorizontalObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassHorizontalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.PlatformerCode.GDgrassHorizontalObjects1.createFrom(runtimeScene.getObjects("grassHorizontal"));
gdjs.PlatformerCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassHorizontalObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassHorizontalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{


{
}

}


{

gdjs.PlatformerCode.GDarrowUpObjects1.createFrom(runtimeScene.getObjects("arrowUp"));
gdjs.PlatformerCode.GDgrassVerticalObjects1.createFrom(runtimeScene.getObjects("grassVertical"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassVerticalObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowUpObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassVerticalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassVerticalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassVerticalObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariables().getFromIndex(0)).setString("Up");
}
}}

}


{

gdjs.PlatformerCode.GDarrowDownObjects1.createFrom(runtimeScene.getObjects("arrowDown"));
gdjs.PlatformerCode.GDgrassVerticalObjects1.createFrom(runtimeScene.getObjects("grassVertical"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassVerticalObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowDownObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassVerticalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassVerticalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassVerticalObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariables().getFromIndex(0)).setString("Down");
}
}}

}


{

gdjs.PlatformerCode.GDarrowDownAngleObjects1.createFrom(runtimeScene.getObjects("arrowDownAngle"));
gdjs.PlatformerCode.GDgrassWithAngleObjects1.createFrom(runtimeScene.getObjects("grassWithAngle"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassWithAngleObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowDownAngleObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassWithAngleObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariables().getFromIndex(0)).setString("Down");
}
}}

}


{

gdjs.PlatformerCode.GDarrowUpAngleObjects1.createFrom(runtimeScene.getObjects("arrowUpAngle"));
gdjs.PlatformerCode.GDgrassWithAngleObjects1.createFrom(runtimeScene.getObjects("grassWithAngle"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDgrassWithAngleObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDarrowUpAngleObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassWithAngleObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].returnVariable(gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariables().getFromIndex(0)).setString("Up");
}
}}

}


{

gdjs.PlatformerCode.GDgrassHorizontalObjects1.createFrom(runtimeScene.getObjects("grassHorizontal"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassHorizontalObjects1[k] = gdjs.PlatformerCode.GDgrassHorizontalObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassHorizontalObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassHorizontalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].addPolarForce(0, 75, 0);
}
}}

}


{

gdjs.PlatformerCode.GDgrassHorizontalObjects1.createFrom(runtimeScene.getObjects("grassHorizontal"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassHorizontalObjects1[k] = gdjs.PlatformerCode.GDgrassHorizontalObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassHorizontalObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassHorizontalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassHorizontalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassHorizontalObjects1[i].addPolarForce(180, 75, 0);
}
}}

}


{

gdjs.PlatformerCode.GDgrassVerticalObjects1.createFrom(runtimeScene.getObjects("grassVertical"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassVerticalObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariables().getFromIndex(0)) == "Up" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassVerticalObjects1[k] = gdjs.PlatformerCode.GDgrassVerticalObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassVerticalObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassVerticalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassVerticalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassVerticalObjects1[i].addPolarForce(270, 75, 0);
}
}}

}


{

gdjs.PlatformerCode.GDgrassVerticalObjects1.createFrom(runtimeScene.getObjects("grassVertical"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassVerticalObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassVerticalObjects1[i].getVariables().getFromIndex(0)) == "Down" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassVerticalObjects1[k] = gdjs.PlatformerCode.GDgrassVerticalObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassVerticalObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassVerticalObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassVerticalObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassVerticalObjects1[i].addPolarForce(90, 75, 0);
}
}}

}


{

gdjs.PlatformerCode.GDgrassWithAngleObjects1.createFrom(runtimeScene.getObjects("grassWithAngle"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariables().getFromIndex(0)) == "Up" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassWithAngleObjects1[k] = gdjs.PlatformerCode.GDgrassWithAngleObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassWithAngleObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassWithAngleObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].addPolarForce(225, 100, 0);
}
}}

}


{

gdjs.PlatformerCode.GDgrassWithAngleObjects1.createFrom(runtimeScene.getObjects("grassWithAngle"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariableString(gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].getVariables().getFromIndex(0)) == "Down" ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDgrassWithAngleObjects1[k] = gdjs.PlatformerCode.GDgrassWithAngleObjects1[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDgrassWithAngleObjects1.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDgrassWithAngleObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDgrassWithAngleObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDgrassWithAngleObjects1[i].addPolarForce(45, 100, 0);
}
}}

}


{

gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcheckpoint1Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDcheckpoint1Objects1 */
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.PlatformerCode.GDcheckpoint1Objects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDcheckpoint1Objects1[0].getPointY("")));
}}

}


{

gdjs.PlatformerCode.GDcoinNumber3Objects1.createFrom(runtimeScene.getObjects("coinNumber3"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber3Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x7c5aa0(runtimeScene);} //End of subevents
}

}


{

gdjs.PlatformerCode.GDcoinNumber4Objects1.createFrom(runtimeScene.getObjects("coinNumber4"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber4Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x7c6010(runtimeScene);} //End of subevents
}

}


{

gdjs.PlatformerCode.GDcoinNumber5Objects1.createFrom(runtimeScene.getObjects("coinNumber5"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber5Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x7c6590(runtimeScene);} //End of subevents
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].flipX(true);
}
}}

}


{

gdjs.PlatformerCode.GDcoinNumber2Objects1.createFrom(runtimeScene.getObjects("coinNumber2"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcoinNumber2Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList0x85b7b8(runtimeScene);} //End of subevents
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].flipX(false);
}
}}

}


{

gdjs.PlatformerCode.GDdeadLineBlockObjects1.createFrom(runtimeScene.getObjects("deadLineBlock"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDdeadLineBlockObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
/* Reuse gdjs.PlatformerCode.GDredBlockObjects1 */
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Platformer", false);
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ScaleTime");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDcheckpointExit4Objects1.createFrom(runtimeScene.getObjects("checkpointExit4"));
{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpointExit4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpointExit4Objects1[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpointExit4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpointExit4Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.PlatformerCode.eventsList0x85c4e8(runtimeScene);} //End of subevents
}

}


{


{
gdjs.PlatformerCode.GDcheckpoint1Objects1.createFrom(runtimeScene.getObjects("checkpoint1"));
gdjs.PlatformerCode.GDcheckpointExit4Objects1.createFrom(runtimeScene.getObjects("checkpointExit4"));
gdjs.PlatformerCode.GDcoinNumber1Objects1.createFrom(runtimeScene.getObjects("coinNumber1"));
gdjs.PlatformerCode.GDcoinNumber2Objects1.createFrom(runtimeScene.getObjects("coinNumber2"));
gdjs.PlatformerCode.GDcoinNumber3Objects1.createFrom(runtimeScene.getObjects("coinNumber3"));
gdjs.PlatformerCode.GDcoinNumber4Objects1.createFrom(runtimeScene.getObjects("coinNumber4"));
gdjs.PlatformerCode.GDcoinNumber5Objects1.createFrom(runtimeScene.getObjects("coinNumber5"));
{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber1Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber1Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber2Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber2Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber3Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber3Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber4Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcoinNumber5Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcoinNumber5Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpoint1Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpoint1Objects1[i].rotate(30, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDcheckpointExit4Objects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDcheckpointExit4Objects1[i].rotate(30, runtimeScene);
}
}}

}


{



}


{

gdjs.PlatformerCode.GDcheckpointExit4Objects1.createFrom(runtimeScene.getObjects("checkpointExit4"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDredBlockObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDcheckpointExit4Objects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
/* Reuse gdjs.PlatformerCode.GDredBlockObjects1 */
{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").setNumber(80 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2level").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}
{ //Subevents
gdjs.PlatformerCode.eventsList0x79cfd0(runtimeScene);} //End of subevents
}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.GDPersonObjects1.createFrom(runtimeScene.getObjects("Person"));
gdjs.PlatformerCode.GDredBlockObjects1.createFrom(runtimeScene.getObjects("redBlock"));
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.PlatformerCode.GDPersonObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDPersonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDredBlockObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDredBlockObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("1level").setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("1level").setNumber(80 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2level").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}
{ //Subevents
gdjs.PlatformerCode.eventsList0x79d938(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PlatformerCode.eventsList0xb2358


gdjs.PlatformerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PlatformerCode.GDPersonObjects1.length = 0;
gdjs.PlatformerCode.GDPersonObjects2.length = 0;
gdjs.PlatformerCode.GDPersonObjects3.length = 0;
gdjs.PlatformerCode.GDgrassHorizontalObjects1.length = 0;
gdjs.PlatformerCode.GDgrassHorizontalObjects2.length = 0;
gdjs.PlatformerCode.GDgrassHorizontalObjects3.length = 0;
gdjs.PlatformerCode.GDgrassWithAngleObjects1.length = 0;
gdjs.PlatformerCode.GDgrassWithAngleObjects2.length = 0;
gdjs.PlatformerCode.GDgrassWithAngleObjects3.length = 0;
gdjs.PlatformerCode.GDgrassVerticalObjects1.length = 0;
gdjs.PlatformerCode.GDgrassVerticalObjects2.length = 0;
gdjs.PlatformerCode.GDgrassVerticalObjects3.length = 0;
gdjs.PlatformerCode.GDgrass2Objects1.length = 0;
gdjs.PlatformerCode.GDgrass2Objects2.length = 0;
gdjs.PlatformerCode.GDgrass2Objects3.length = 0;
gdjs.PlatformerCode.GDScoreObjects1.length = 0;
gdjs.PlatformerCode.GDScoreObjects2.length = 0;
gdjs.PlatformerCode.GDScoreObjects3.length = 0;
gdjs.PlatformerCode.GDleftObjects1.length = 0;
gdjs.PlatformerCode.GDleftObjects2.length = 0;
gdjs.PlatformerCode.GDleftObjects3.length = 0;
gdjs.PlatformerCode.GDrightObjects1.length = 0;
gdjs.PlatformerCode.GDrightObjects2.length = 0;
gdjs.PlatformerCode.GDrightObjects3.length = 0;
gdjs.PlatformerCode.GDcheckpoint1Objects1.length = 0;
gdjs.PlatformerCode.GDcheckpoint1Objects2.length = 0;
gdjs.PlatformerCode.GDcheckpoint1Objects3.length = 0;
gdjs.PlatformerCode.GDcheckpointExit4Objects1.length = 0;
gdjs.PlatformerCode.GDcheckpointExit4Objects2.length = 0;
gdjs.PlatformerCode.GDcheckpointExit4Objects3.length = 0;
gdjs.PlatformerCode.GDarrowUpObjects1.length = 0;
gdjs.PlatformerCode.GDarrowUpObjects2.length = 0;
gdjs.PlatformerCode.GDarrowUpObjects3.length = 0;
gdjs.PlatformerCode.GDarrowDownObjects1.length = 0;
gdjs.PlatformerCode.GDarrowDownObjects2.length = 0;
gdjs.PlatformerCode.GDarrowDownObjects3.length = 0;
gdjs.PlatformerCode.GDarrowDownAngleObjects1.length = 0;
gdjs.PlatformerCode.GDarrowDownAngleObjects2.length = 0;
gdjs.PlatformerCode.GDarrowDownAngleObjects3.length = 0;
gdjs.PlatformerCode.GDarrowUpAngleObjects1.length = 0;
gdjs.PlatformerCode.GDarrowUpAngleObjects2.length = 0;
gdjs.PlatformerCode.GDarrowUpAngleObjects3.length = 0;
gdjs.PlatformerCode.GDLifesObjects1.length = 0;
gdjs.PlatformerCode.GDLifesObjects2.length = 0;
gdjs.PlatformerCode.GDLifesObjects3.length = 0;
gdjs.PlatformerCode.GDtimeIsOverObjects1.length = 0;
gdjs.PlatformerCode.GDtimeIsOverObjects2.length = 0;
gdjs.PlatformerCode.GDtimeIsOverObjects3.length = 0;
gdjs.PlatformerCode.GDtrapObjects1.length = 0;
gdjs.PlatformerCode.GDtrapObjects2.length = 0;
gdjs.PlatformerCode.GDtrapObjects3.length = 0;
gdjs.PlatformerCode.GDFinishedGameObjects1.length = 0;
gdjs.PlatformerCode.GDFinishedGameObjects2.length = 0;
gdjs.PlatformerCode.GDFinishedGameObjects3.length = 0;
gdjs.PlatformerCode.GDcoinNumber1Objects1.length = 0;
gdjs.PlatformerCode.GDcoinNumber1Objects2.length = 0;
gdjs.PlatformerCode.GDcoinNumber1Objects3.length = 0;
gdjs.PlatformerCode.GDcoinNumber2Objects1.length = 0;
gdjs.PlatformerCode.GDcoinNumber2Objects2.length = 0;
gdjs.PlatformerCode.GDcoinNumber2Objects3.length = 0;
gdjs.PlatformerCode.GDcoinNumber3Objects1.length = 0;
gdjs.PlatformerCode.GDcoinNumber3Objects2.length = 0;
gdjs.PlatformerCode.GDcoinNumber3Objects3.length = 0;
gdjs.PlatformerCode.GDcoinNumber4Objects1.length = 0;
gdjs.PlatformerCode.GDcoinNumber4Objects2.length = 0;
gdjs.PlatformerCode.GDcoinNumber4Objects3.length = 0;
gdjs.PlatformerCode.GDcoinNumber5Objects1.length = 0;
gdjs.PlatformerCode.GDcoinNumber5Objects2.length = 0;
gdjs.PlatformerCode.GDcoinNumber5Objects3.length = 0;
gdjs.PlatformerCode.GDTimerObjects1.length = 0;
gdjs.PlatformerCode.GDTimerObjects2.length = 0;
gdjs.PlatformerCode.GDTimerObjects3.length = 0;
gdjs.PlatformerCode.GDrestartImageObjects1.length = 0;
gdjs.PlatformerCode.GDrestartImageObjects2.length = 0;
gdjs.PlatformerCode.GDrestartImageObjects3.length = 0;
gdjs.PlatformerCode.GDgameOverObjects1.length = 0;
gdjs.PlatformerCode.GDgameOverObjects2.length = 0;
gdjs.PlatformerCode.GDgameOverObjects3.length = 0;
gdjs.PlatformerCode.GDgrass3Objects1.length = 0;
gdjs.PlatformerCode.GDgrass3Objects2.length = 0;
gdjs.PlatformerCode.GDgrass3Objects3.length = 0;
gdjs.PlatformerCode.GDdeadLineBlockObjects1.length = 0;
gdjs.PlatformerCode.GDdeadLineBlockObjects2.length = 0;
gdjs.PlatformerCode.GDdeadLineBlockObjects3.length = 0;
gdjs.PlatformerCode.GDredBlockObjects1.length = 0;
gdjs.PlatformerCode.GDredBlockObjects2.length = 0;
gdjs.PlatformerCode.GDredBlockObjects3.length = 0;

gdjs.PlatformerCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['PlatformerCode'] = gdjs.PlatformerCode;
