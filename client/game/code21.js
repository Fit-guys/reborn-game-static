gdjs.MapCode = {};
gdjs.MapCode.GDBackgroundObjects1= [];
gdjs.MapCode.GDBackgroundObjects2= [];
gdjs.MapCode.GDBackgroundObjects3= [];
gdjs.MapCode.GDWhiteLayerObjects1= [];
gdjs.MapCode.GDWhiteLayerObjects2= [];
gdjs.MapCode.GDWhiteLayerObjects3= [];
gdjs.MapCode.GD1ButtonObjects1= [];
gdjs.MapCode.GD1ButtonObjects2= [];
gdjs.MapCode.GD1ButtonObjects3= [];
gdjs.MapCode.GD2ButtonObjects1= [];
gdjs.MapCode.GD2ButtonObjects2= [];
gdjs.MapCode.GD2ButtonObjects3= [];
gdjs.MapCode.GD3ButtonObjects1= [];
gdjs.MapCode.GD3ButtonObjects2= [];
gdjs.MapCode.GD3ButtonObjects3= [];
gdjs.MapCode.GD4ButtonObjects1= [];
gdjs.MapCode.GD4ButtonObjects2= [];
gdjs.MapCode.GD4ButtonObjects3= [];
gdjs.MapCode.GD5ButtonObjects1= [];
gdjs.MapCode.GD5ButtonObjects2= [];
gdjs.MapCode.GD5ButtonObjects3= [];
gdjs.MapCode.GD6ButtonObjects1= [];
gdjs.MapCode.GD6ButtonObjects2= [];
gdjs.MapCode.GD6ButtonObjects3= [];
gdjs.MapCode.GDMapTextObjects1= [];
gdjs.MapCode.GDMapTextObjects2= [];
gdjs.MapCode.GDMapTextObjects3= [];
gdjs.MapCode.GD1Objects1= [];
gdjs.MapCode.GD1Objects2= [];
gdjs.MapCode.GD1Objects3= [];
gdjs.MapCode.GD2Objects1= [];
gdjs.MapCode.GD2Objects2= [];
gdjs.MapCode.GD2Objects3= [];
gdjs.MapCode.GD3Objects1= [];
gdjs.MapCode.GD3Objects2= [];
gdjs.MapCode.GD3Objects3= [];
gdjs.MapCode.GD4Objects1= [];
gdjs.MapCode.GD4Objects2= [];
gdjs.MapCode.GD4Objects3= [];
gdjs.MapCode.GD5Objects1= [];
gdjs.MapCode.GD5Objects2= [];
gdjs.MapCode.GD5Objects3= [];
gdjs.MapCode.GD6Objects1= [];
gdjs.MapCode.GD6Objects2= [];
gdjs.MapCode.GD6Objects3= [];
gdjs.MapCode.GD1TitleObjects1= [];
gdjs.MapCode.GD1TitleObjects2= [];
gdjs.MapCode.GD1TitleObjects3= [];
gdjs.MapCode.GD1PhotoObjects1= [];
gdjs.MapCode.GD1PhotoObjects2= [];
gdjs.MapCode.GD1PhotoObjects3= [];
gdjs.MapCode.GD1TextObjects1= [];
gdjs.MapCode.GD1TextObjects2= [];
gdjs.MapCode.GD1TextObjects3= [];
gdjs.MapCode.GD2TitleObjects1= [];
gdjs.MapCode.GD2TitleObjects2= [];
gdjs.MapCode.GD2TitleObjects3= [];
gdjs.MapCode.GD2PhotoObjects1= [];
gdjs.MapCode.GD2PhotoObjects2= [];
gdjs.MapCode.GD2PhotoObjects3= [];
gdjs.MapCode.GD2TextObjects1= [];
gdjs.MapCode.GD2TextObjects2= [];
gdjs.MapCode.GD2TextObjects3= [];
gdjs.MapCode.GD3TitleObjects1= [];
gdjs.MapCode.GD3TitleObjects2= [];
gdjs.MapCode.GD3TitleObjects3= [];
gdjs.MapCode.GD3PhotoObjects1= [];
gdjs.MapCode.GD3PhotoObjects2= [];
gdjs.MapCode.GD3PhotoObjects3= [];
gdjs.MapCode.GD3TextObjects1= [];
gdjs.MapCode.GD3TextObjects2= [];
gdjs.MapCode.GD3TextObjects3= [];
gdjs.MapCode.GD4TitleObjects1= [];
gdjs.MapCode.GD4TitleObjects2= [];
gdjs.MapCode.GD4TitleObjects3= [];
gdjs.MapCode.GD4TextObjects1= [];
gdjs.MapCode.GD4TextObjects2= [];
gdjs.MapCode.GD4TextObjects3= [];
gdjs.MapCode.GD4PhotoObjects1= [];
gdjs.MapCode.GD4PhotoObjects2= [];
gdjs.MapCode.GD4PhotoObjects3= [];
gdjs.MapCode.GD5TitleObjects1= [];
gdjs.MapCode.GD5TitleObjects2= [];
gdjs.MapCode.GD5TitleObjects3= [];
gdjs.MapCode.GD5TextObjects1= [];
gdjs.MapCode.GD5TextObjects2= [];
gdjs.MapCode.GD5TextObjects3= [];
gdjs.MapCode.GD5PhotoObjects1= [];
gdjs.MapCode.GD5PhotoObjects2= [];
gdjs.MapCode.GD5PhotoObjects3= [];
gdjs.MapCode.GD6TitleObjects1= [];
gdjs.MapCode.GD6TitleObjects2= [];
gdjs.MapCode.GD6TitleObjects3= [];
gdjs.MapCode.GD6TextObjects1= [];
gdjs.MapCode.GD6TextObjects2= [];
gdjs.MapCode.GD6TextObjects3= [];
gdjs.MapCode.GD6PhotoObjects1= [];
gdjs.MapCode.GD6PhotoObjects2= [];
gdjs.MapCode.GD6PhotoObjects3= [];
gdjs.MapCode.GDHButtonObjects1= [];
gdjs.MapCode.GDHButtonObjects2= [];
gdjs.MapCode.GDHButtonObjects3= [];
gdjs.MapCode.GDskillObjects1= [];
gdjs.MapCode.GDskillObjects2= [];
gdjs.MapCode.GDskillObjects3= [];

gdjs.MapCode.conditionTrue_0 = {val:false};
gdjs.MapCode.condition0IsTrue_0 = {val:false};
gdjs.MapCode.condition1IsTrue_0 = {val:false};
gdjs.MapCode.condition2IsTrue_0 = {val:false};
gdjs.MapCode.conditionTrue_1 = {val:false};
gdjs.MapCode.condition0IsTrue_1 = {val:false};
gdjs.MapCode.condition1IsTrue_1 = {val:false};
gdjs.MapCode.condition2IsTrue_1 = {val:false};


gdjs.MapCode.userFunc0x7afc00 = function(runtimeScene) {
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.data.name = "user-story") {
    event.data.data.forEach(story => {
      if(story.game_id === 0) {
        return;
      }
      runtimeScene.getGame().getVariables().getFromIndex(0).getChild(Number(story.game_id+1) + 'level').setNumber(1);
      })
  }
}

window.top.postMessage({name: "user-story-request"},"*");
};
gdjs.MapCode.eventsList0x789298 = function(runtimeScene) {

{


gdjs.MapCode.userFunc0x7afc00(runtimeScene);

}


}; //End of gdjs.MapCode.eventsList0x789298
gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD1ButtonObjects1Objects = Hashtable.newFrom({"1Button": gdjs.MapCode.GD1ButtonObjects1});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD2ButtonObjects2Objects = Hashtable.newFrom({"2Button": gdjs.MapCode.GD2ButtonObjects2});gdjs.MapCode.eventsList0x7afff0 = function(runtimeScene) {

{

gdjs.MapCode.GD2ButtonObjects2.createFrom(gdjs.MapCode.GD2ButtonObjects1);


gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD2ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD2ButtonObjects2 */
{for(var i = 0, len = gdjs.MapCode.GD2ButtonObjects2.length ;i < len;++i) {
    gdjs.MapCode.GD2ButtonObjects2[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HT_Shooter");
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD2ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD2ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD2ButtonObjects1[i].setAnimationName("Default");
}
}}

}


}; //End of gdjs.MapCode.eventsList0x7afff0
gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD3ButtonObjects2Objects = Hashtable.newFrom({"3Button": gdjs.MapCode.GD3ButtonObjects2});gdjs.MapCode.eventsList0x7b09e0 = function(runtimeScene) {

{

gdjs.MapCode.GD3ButtonObjects2.createFrom(gdjs.MapCode.GD3ButtonObjects1);


gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD3ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD3ButtonObjects2 */
{for(var i = 0, len = gdjs.MapCode.GD3ButtonObjects2.length ;i < len;++i) {
    gdjs.MapCode.GD3ButtonObjects2[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HT_CardsGame");
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD3ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD3ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD3ButtonObjects1[i].setAnimationName("Default");
}
}}

}


}; //End of gdjs.MapCode.eventsList0x7b09e0
gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD4ButtonObjects2Objects = Hashtable.newFrom({"4Button": gdjs.MapCode.GD4ButtonObjects2});gdjs.MapCode.eventsList0x780e58 = function(runtimeScene) {

{

gdjs.MapCode.GD4ButtonObjects2.createFrom(gdjs.MapCode.GD4ButtonObjects1);


gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD4ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD4ButtonObjects2 */
{for(var i = 0, len = gdjs.MapCode.GD4ButtonObjects2.length ;i < len;++i) {
    gdjs.MapCode.GD4ButtonObjects2[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HT_MazeGame");
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD4ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD4ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD4ButtonObjects1[i].setAnimationName("Default");
}
}}

}


}; //End of gdjs.MapCode.eventsList0x780e58
gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD5ButtonObjects2Objects = Hashtable.newFrom({"5Button": gdjs.MapCode.GD5ButtonObjects2});gdjs.MapCode.eventsList0x7828c8 = function(runtimeScene) {

{

gdjs.MapCode.GD5ButtonObjects2.createFrom(gdjs.MapCode.GD5ButtonObjects1);


gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD5ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD5ButtonObjects2 */
{for(var i = 0, len = gdjs.MapCode.GD5ButtonObjects2.length ;i < len;++i) {
    gdjs.MapCode.GD5ButtonObjects2[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HT_LGS1");
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD5ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD5ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD5ButtonObjects1[i].setAnimationName("Default");
}
}}

}


}; //End of gdjs.MapCode.eventsList0x7828c8
gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD6ButtonObjects2Objects = Hashtable.newFrom({"6Button": gdjs.MapCode.GD6ButtonObjects2});gdjs.MapCode.eventsList0x783480 = function(runtimeScene) {

{

gdjs.MapCode.GD6ButtonObjects2.createFrom(gdjs.MapCode.GD6ButtonObjects1);


gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD6ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD6ButtonObjects2 */
{for(var i = 0, len = gdjs.MapCode.GD6ButtonObjects2.length ;i < len;++i) {
    gdjs.MapCode.GD6ButtonObjects2[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Video");
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD6ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD6ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD6ButtonObjects1[i].setAnimationName("Default");
}
}}

}


}; //End of gdjs.MapCode.eventsList0x783480
gdjs.MapCode.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.MapCode.GDWhiteLayerObjects1.createFrom(runtimeScene.getObjects("WhiteLayer"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MapCode.GDWhiteLayerObjects1.length !== 0 ? gdjs.MapCode.GDWhiteLayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList0x789298(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MapCode.GD1ButtonObjects1.createFrom(runtimeScene.getObjects("1Button"));

gdjs.MapCode.condition0IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GD1ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if (gdjs.MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MapCode.GD1ButtonObjects1 */
{for(var i = 0, len = gdjs.MapCode.GD1ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD1ButtonObjects1[i].setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HT_Platformer", false);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD1ButtonObjects1.createFrom(runtimeScene.getObjects("1Button"));
{for(var i = 0, len = gdjs.MapCode.GD1ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD1ButtonObjects1[i].setAnimationName("Default");
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2level")) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.MapCode.GD2ButtonObjects1.createFrom(runtimeScene.getObjects("2Button"));
{for(var i = 0, len = gdjs.MapCode.GD2ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD2ButtonObjects1[i].setAnimationName("Default");
}
}{for(var i = 0, len = gdjs.MapCode.GD2Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD2Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.MapCode.eventsList0x7afff0(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2level")) == 0;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.MapCode.GD2ButtonObjects1.createFrom(runtimeScene.getObjects("2Button"));
{for(var i = 0, len = gdjs.MapCode.GD2ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD2ButtonObjects1[i].setAnimationName("Deactivated");
}
}{for(var i = 0, len = gdjs.MapCode.GD2Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD2Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3level")) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.MapCode.GD3ButtonObjects1.createFrom(runtimeScene.getObjects("3Button"));
{for(var i = 0, len = gdjs.MapCode.GD3ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD3ButtonObjects1[i].setAnimationName("Default");
}
}{for(var i = 0, len = gdjs.MapCode.GD3Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD3Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.MapCode.eventsList0x7b09e0(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3level")) == 0;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.MapCode.GD3ButtonObjects1.createFrom(runtimeScene.getObjects("3Button"));
{for(var i = 0, len = gdjs.MapCode.GD3ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD3ButtonObjects1[i].setAnimationName("Deactivated");
}
}{for(var i = 0, len = gdjs.MapCode.GD3Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD3Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4level")) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.MapCode.GD4ButtonObjects1.createFrom(runtimeScene.getObjects("4Button"));
{for(var i = 0, len = gdjs.MapCode.GD4ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD4ButtonObjects1[i].setAnimationName("Default");
}
}{for(var i = 0, len = gdjs.MapCode.GD4Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD4Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.MapCode.eventsList0x780e58(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4level")) == 0;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.MapCode.GD4ButtonObjects1.createFrom(runtimeScene.getObjects("4Button"));
{for(var i = 0, len = gdjs.MapCode.GD4ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD4ButtonObjects1[i].setAnimationName("Deactivated");
}
}{for(var i = 0, len = gdjs.MapCode.GD4Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD4Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("5level")) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
gdjs.MapCode.GD5ButtonObjects1.createFrom(runtimeScene.getObjects("5Button"));
{for(var i = 0, len = gdjs.MapCode.GD5ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD5ButtonObjects1[i].setAnimationName("Default");
}
}{for(var i = 0, len = gdjs.MapCode.GD5Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD5Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.MapCode.eventsList0x7828c8(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("5level")) == 0;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
gdjs.MapCode.GD5ButtonObjects1.createFrom(runtimeScene.getObjects("5Button"));
{for(var i = 0, len = gdjs.MapCode.GD5ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD5ButtonObjects1[i].setAnimationName("Deactivated");
}
}{for(var i = 0, len = gdjs.MapCode.GD5Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD5Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6level")) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD6Objects1.createFrom(runtimeScene.getObjects("6"));
gdjs.MapCode.GD6ButtonObjects1.createFrom(runtimeScene.getObjects("6Button"));
{for(var i = 0, len = gdjs.MapCode.GD6ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD6ButtonObjects1[i].setAnimationName("Default");
}
}{for(var i = 0, len = gdjs.MapCode.GD6Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD6Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.MapCode.eventsList0x783480(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6level")) == 0;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.MapCode.GD6Objects1.createFrom(runtimeScene.getObjects("6"));
gdjs.MapCode.GD6ButtonObjects1.createFrom(runtimeScene.getObjects("6Button"));
{for(var i = 0, len = gdjs.MapCode.GD6ButtonObjects1.length ;i < len;++i) {
    gdjs.MapCode.GD6ButtonObjects1[i].setAnimationName("Deactivated");
}
}{for(var i = 0, len = gdjs.MapCode.GD6Objects1.length ;i < len;++i) {
    gdjs.MapCode.GD6Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "F_Map");
}}

}


{


{
}

}


}; //End of gdjs.MapCode.eventsList0xb2358


gdjs.MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MapCode.GDBackgroundObjects1.length = 0;
gdjs.MapCode.GDBackgroundObjects2.length = 0;
gdjs.MapCode.GDBackgroundObjects3.length = 0;
gdjs.MapCode.GDWhiteLayerObjects1.length = 0;
gdjs.MapCode.GDWhiteLayerObjects2.length = 0;
gdjs.MapCode.GDWhiteLayerObjects3.length = 0;
gdjs.MapCode.GD1ButtonObjects1.length = 0;
gdjs.MapCode.GD1ButtonObjects2.length = 0;
gdjs.MapCode.GD1ButtonObjects3.length = 0;
gdjs.MapCode.GD2ButtonObjects1.length = 0;
gdjs.MapCode.GD2ButtonObjects2.length = 0;
gdjs.MapCode.GD2ButtonObjects3.length = 0;
gdjs.MapCode.GD3ButtonObjects1.length = 0;
gdjs.MapCode.GD3ButtonObjects2.length = 0;
gdjs.MapCode.GD3ButtonObjects3.length = 0;
gdjs.MapCode.GD4ButtonObjects1.length = 0;
gdjs.MapCode.GD4ButtonObjects2.length = 0;
gdjs.MapCode.GD4ButtonObjects3.length = 0;
gdjs.MapCode.GD5ButtonObjects1.length = 0;
gdjs.MapCode.GD5ButtonObjects2.length = 0;
gdjs.MapCode.GD5ButtonObjects3.length = 0;
gdjs.MapCode.GD6ButtonObjects1.length = 0;
gdjs.MapCode.GD6ButtonObjects2.length = 0;
gdjs.MapCode.GD6ButtonObjects3.length = 0;
gdjs.MapCode.GDMapTextObjects1.length = 0;
gdjs.MapCode.GDMapTextObjects2.length = 0;
gdjs.MapCode.GDMapTextObjects3.length = 0;
gdjs.MapCode.GD1Objects1.length = 0;
gdjs.MapCode.GD1Objects2.length = 0;
gdjs.MapCode.GD1Objects3.length = 0;
gdjs.MapCode.GD2Objects1.length = 0;
gdjs.MapCode.GD2Objects2.length = 0;
gdjs.MapCode.GD2Objects3.length = 0;
gdjs.MapCode.GD3Objects1.length = 0;
gdjs.MapCode.GD3Objects2.length = 0;
gdjs.MapCode.GD3Objects3.length = 0;
gdjs.MapCode.GD4Objects1.length = 0;
gdjs.MapCode.GD4Objects2.length = 0;
gdjs.MapCode.GD4Objects3.length = 0;
gdjs.MapCode.GD5Objects1.length = 0;
gdjs.MapCode.GD5Objects2.length = 0;
gdjs.MapCode.GD5Objects3.length = 0;
gdjs.MapCode.GD6Objects1.length = 0;
gdjs.MapCode.GD6Objects2.length = 0;
gdjs.MapCode.GD6Objects3.length = 0;
gdjs.MapCode.GD1TitleObjects1.length = 0;
gdjs.MapCode.GD1TitleObjects2.length = 0;
gdjs.MapCode.GD1TitleObjects3.length = 0;
gdjs.MapCode.GD1PhotoObjects1.length = 0;
gdjs.MapCode.GD1PhotoObjects2.length = 0;
gdjs.MapCode.GD1PhotoObjects3.length = 0;
gdjs.MapCode.GD1TextObjects1.length = 0;
gdjs.MapCode.GD1TextObjects2.length = 0;
gdjs.MapCode.GD1TextObjects3.length = 0;
gdjs.MapCode.GD2TitleObjects1.length = 0;
gdjs.MapCode.GD2TitleObjects2.length = 0;
gdjs.MapCode.GD2TitleObjects3.length = 0;
gdjs.MapCode.GD2PhotoObjects1.length = 0;
gdjs.MapCode.GD2PhotoObjects2.length = 0;
gdjs.MapCode.GD2PhotoObjects3.length = 0;
gdjs.MapCode.GD2TextObjects1.length = 0;
gdjs.MapCode.GD2TextObjects2.length = 0;
gdjs.MapCode.GD2TextObjects3.length = 0;
gdjs.MapCode.GD3TitleObjects1.length = 0;
gdjs.MapCode.GD3TitleObjects2.length = 0;
gdjs.MapCode.GD3TitleObjects3.length = 0;
gdjs.MapCode.GD3PhotoObjects1.length = 0;
gdjs.MapCode.GD3PhotoObjects2.length = 0;
gdjs.MapCode.GD3PhotoObjects3.length = 0;
gdjs.MapCode.GD3TextObjects1.length = 0;
gdjs.MapCode.GD3TextObjects2.length = 0;
gdjs.MapCode.GD3TextObjects3.length = 0;
gdjs.MapCode.GD4TitleObjects1.length = 0;
gdjs.MapCode.GD4TitleObjects2.length = 0;
gdjs.MapCode.GD4TitleObjects3.length = 0;
gdjs.MapCode.GD4TextObjects1.length = 0;
gdjs.MapCode.GD4TextObjects2.length = 0;
gdjs.MapCode.GD4TextObjects3.length = 0;
gdjs.MapCode.GD4PhotoObjects1.length = 0;
gdjs.MapCode.GD4PhotoObjects2.length = 0;
gdjs.MapCode.GD4PhotoObjects3.length = 0;
gdjs.MapCode.GD5TitleObjects1.length = 0;
gdjs.MapCode.GD5TitleObjects2.length = 0;
gdjs.MapCode.GD5TitleObjects3.length = 0;
gdjs.MapCode.GD5TextObjects1.length = 0;
gdjs.MapCode.GD5TextObjects2.length = 0;
gdjs.MapCode.GD5TextObjects3.length = 0;
gdjs.MapCode.GD5PhotoObjects1.length = 0;
gdjs.MapCode.GD5PhotoObjects2.length = 0;
gdjs.MapCode.GD5PhotoObjects3.length = 0;
gdjs.MapCode.GD6TitleObjects1.length = 0;
gdjs.MapCode.GD6TitleObjects2.length = 0;
gdjs.MapCode.GD6TitleObjects3.length = 0;
gdjs.MapCode.GD6TextObjects1.length = 0;
gdjs.MapCode.GD6TextObjects2.length = 0;
gdjs.MapCode.GD6TextObjects3.length = 0;
gdjs.MapCode.GD6PhotoObjects1.length = 0;
gdjs.MapCode.GD6PhotoObjects2.length = 0;
gdjs.MapCode.GD6PhotoObjects3.length = 0;
gdjs.MapCode.GDHButtonObjects1.length = 0;
gdjs.MapCode.GDHButtonObjects2.length = 0;
gdjs.MapCode.GDHButtonObjects3.length = 0;
gdjs.MapCode.GDskillObjects1.length = 0;
gdjs.MapCode.GDskillObjects2.length = 0;
gdjs.MapCode.GDskillObjects3.length = 0;

gdjs.MapCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['MapCode'] = gdjs.MapCode;
