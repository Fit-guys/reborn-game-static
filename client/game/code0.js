gdjs.HT_95MapCode = {};
gdjs.HT_95MapCode.GDBackgroundObjects1= [];
gdjs.HT_95MapCode.GDBackgroundObjects2= [];
gdjs.HT_95MapCode.GDWhiteLayerObjects1= [];
gdjs.HT_95MapCode.GDWhiteLayerObjects2= [];
gdjs.HT_95MapCode.GD1ButtonObjects1= [];
gdjs.HT_95MapCode.GD1ButtonObjects2= [];
gdjs.HT_95MapCode.GD2ButtonObjects1= [];
gdjs.HT_95MapCode.GD2ButtonObjects2= [];
gdjs.HT_95MapCode.GD3ButtonObjects1= [];
gdjs.HT_95MapCode.GD3ButtonObjects2= [];
gdjs.HT_95MapCode.GD4ButtonObjects1= [];
gdjs.HT_95MapCode.GD4ButtonObjects2= [];
gdjs.HT_95MapCode.GD5ButtonObjects1= [];
gdjs.HT_95MapCode.GD5ButtonObjects2= [];
gdjs.HT_95MapCode.GD6ButtonObjects1= [];
gdjs.HT_95MapCode.GD6ButtonObjects2= [];
gdjs.HT_95MapCode.GDMapTextObjects1= [];
gdjs.HT_95MapCode.GDMapTextObjects2= [];
gdjs.HT_95MapCode.GD1Objects1= [];
gdjs.HT_95MapCode.GD1Objects2= [];
gdjs.HT_95MapCode.GD2Objects1= [];
gdjs.HT_95MapCode.GD2Objects2= [];
gdjs.HT_95MapCode.GD3Objects1= [];
gdjs.HT_95MapCode.GD3Objects2= [];
gdjs.HT_95MapCode.GD4Objects1= [];
gdjs.HT_95MapCode.GD4Objects2= [];
gdjs.HT_95MapCode.GD5Objects1= [];
gdjs.HT_95MapCode.GD5Objects2= [];
gdjs.HT_95MapCode.GD6Objects1= [];
gdjs.HT_95MapCode.GD6Objects2= [];
gdjs.HT_95MapCode.GD1TitleObjects1= [];
gdjs.HT_95MapCode.GD1TitleObjects2= [];
gdjs.HT_95MapCode.GD1PhotoObjects1= [];
gdjs.HT_95MapCode.GD1PhotoObjects2= [];
gdjs.HT_95MapCode.GD1TextObjects1= [];
gdjs.HT_95MapCode.GD1TextObjects2= [];
gdjs.HT_95MapCode.GD2TitleObjects1= [];
gdjs.HT_95MapCode.GD2TitleObjects2= [];
gdjs.HT_95MapCode.GD2PhotoObjects1= [];
gdjs.HT_95MapCode.GD2PhotoObjects2= [];
gdjs.HT_95MapCode.GD2TextObjects1= [];
gdjs.HT_95MapCode.GD2TextObjects2= [];
gdjs.HT_95MapCode.GD3TitleObjects1= [];
gdjs.HT_95MapCode.GD3TitleObjects2= [];
gdjs.HT_95MapCode.GD3PhotoObjects1= [];
gdjs.HT_95MapCode.GD3PhotoObjects2= [];
gdjs.HT_95MapCode.GD3TextObjects1= [];
gdjs.HT_95MapCode.GD3TextObjects2= [];
gdjs.HT_95MapCode.GD4TitleObjects1= [];
gdjs.HT_95MapCode.GD4TitleObjects2= [];
gdjs.HT_95MapCode.GD4TextObjects1= [];
gdjs.HT_95MapCode.GD4TextObjects2= [];
gdjs.HT_95MapCode.GD4PhotoObjects1= [];
gdjs.HT_95MapCode.GD4PhotoObjects2= [];
gdjs.HT_95MapCode.GD5TitleObjects1= [];
gdjs.HT_95MapCode.GD5TitleObjects2= [];
gdjs.HT_95MapCode.GD5TextObjects1= [];
gdjs.HT_95MapCode.GD5TextObjects2= [];
gdjs.HT_95MapCode.GD5PhotoObjects1= [];
gdjs.HT_95MapCode.GD5PhotoObjects2= [];
gdjs.HT_95MapCode.GD6TitleObjects1= [];
gdjs.HT_95MapCode.GD6TitleObjects2= [];
gdjs.HT_95MapCode.GD6TextObjects1= [];
gdjs.HT_95MapCode.GD6TextObjects2= [];
gdjs.HT_95MapCode.GD6PhotoObjects1= [];
gdjs.HT_95MapCode.GD6PhotoObjects2= [];
gdjs.HT_95MapCode.GDHButtonObjects1= [];
gdjs.HT_95MapCode.GDHButtonObjects2= [];
gdjs.HT_95MapCode.GD1TipObjects1= [];
gdjs.HT_95MapCode.GD1TipObjects2= [];
gdjs.HT_95MapCode.GDHEtapObjects1= [];
gdjs.HT_95MapCode.GDHEtapObjects2= [];
gdjs.HT_95MapCode.GD1TipTextObjects1= [];
gdjs.HT_95MapCode.GD1TipTextObjects2= [];
gdjs.HT_95MapCode.GDNewObjectObjects1= [];
gdjs.HT_95MapCode.GDNewObjectObjects2= [];
gdjs.HT_95MapCode.GDTipsDeactivatedObjects1= [];
gdjs.HT_95MapCode.GDTipsDeactivatedObjects2= [];
gdjs.HT_95MapCode.GDshadowObjects1= [];
gdjs.HT_95MapCode.GDshadowObjects2= [];
gdjs.HT_95MapCode.GDhelp1Objects1= [];
gdjs.HT_95MapCode.GDhelp1Objects2= [];
gdjs.HT_95MapCode.GDhelp1TObjects1= [];
gdjs.HT_95MapCode.GDhelp1TObjects2= [];
gdjs.HT_95MapCode.GDhelp2Objects1= [];
gdjs.HT_95MapCode.GDhelp2Objects2= [];
gdjs.HT_95MapCode.GDhelp2TObjects1= [];
gdjs.HT_95MapCode.GDhelp2TObjects2= [];
gdjs.HT_95MapCode.GDskipObjects1= [];
gdjs.HT_95MapCode.GDskipObjects2= [];
gdjs.HT_95MapCode.GDNewObject2Objects1= [];
gdjs.HT_95MapCode.GDNewObject2Objects2= [];
gdjs.HT_95MapCode.GDhelp3Objects1= [];
gdjs.HT_95MapCode.GDhelp3Objects2= [];
gdjs.HT_95MapCode.GDhelp3TObjects1= [];
gdjs.HT_95MapCode.GDhelp3TObjects2= [];

gdjs.HT_95MapCode.conditionTrue_0 = {val:false};
gdjs.HT_95MapCode.condition0IsTrue_0 = {val:false};
gdjs.HT_95MapCode.condition1IsTrue_0 = {val:false};


gdjs.HT_95MapCode.userFunc0xd4e6c0 = function(runtimeScene) {
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
gdjs.HT_95MapCode.eventsList0xd4e270 = function(runtimeScene) {

{


gdjs.HT_95MapCode.userFunc0xd4e6c0(runtimeScene);

}


}; //End of gdjs.HT_95MapCode.eventsList0xd4e270
gdjs.HT_95MapCode.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.HT_95MapCode.GDWhiteLayerObjects1.createFrom(runtimeScene.getObjects("WhiteLayer"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.HT_95MapCode.GDWhiteLayerObjects1.length !== 0 ? gdjs.HT_95MapCode.GDWhiteLayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.HT_95MapCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HT_95MapCode.condition0IsTrue_0.val) {
gdjs.HT_95MapCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.HT_95MapCode.GD1ButtonObjects1.createFrom(runtimeScene.getObjects("1Button"));
gdjs.HT_95MapCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95MapCode.GDhelp2TObjects1.createFrom(runtimeScene.getObjects("help2T"));
gdjs.HT_95MapCode.GDhelp3Objects1.createFrom(runtimeScene.getObjects("help3"));
gdjs.HT_95MapCode.GDhelp3TObjects1.createFrom(runtimeScene.getObjects("help3T"));
{for(var i = 0, len = gdjs.HT_95MapCode.GD1ButtonObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD1ButtonObjects1[i].setZOrder(60);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GD1Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD1Objects1[i].setZOrder(65);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2TObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp3Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp3TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp3TObjects1[i].hide();
}
}
{ //Subevents
gdjs.HT_95MapCode.eventsList0xd4e270(runtimeScene);} //End of subevents
}

}


{


gdjs.HT_95MapCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2level")) == 1;
}if (gdjs.HT_95MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


{


gdjs.HT_95MapCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HT_95MapCode.condition0IsTrue_0.val) {
gdjs.HT_95MapCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.HT_95MapCode.GD1ButtonObjects1.createFrom(runtimeScene.getObjects("1Button"));
gdjs.HT_95MapCode.GD5ButtonObjects1.createFrom(runtimeScene.getObjects("5Button"));
gdjs.HT_95MapCode.GDhelp1Objects1.createFrom(runtimeScene.getObjects("help1"));
gdjs.HT_95MapCode.GDhelp1TObjects1.createFrom(runtimeScene.getObjects("help1T"));
gdjs.HT_95MapCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95MapCode.GDhelp2TObjects1.createFrom(runtimeScene.getObjects("help2T"));
{for(var i = 0, len = gdjs.HT_95MapCode.GD1ButtonObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD1ButtonObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GD1Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD1Objects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp1Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp1TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp1TObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GD5ButtonObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD5ButtonObjects1[i].setZOrder(60);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2TObjects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.HT_95MapCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.HT_95MapCode.condition0IsTrue_0.val) {
gdjs.HT_95MapCode.GD5ButtonObjects1.createFrom(runtimeScene.getObjects("5Button"));
gdjs.HT_95MapCode.GDhelp2Objects1.createFrom(runtimeScene.getObjects("help2"));
gdjs.HT_95MapCode.GDhelp2TObjects1.createFrom(runtimeScene.getObjects("help2T"));
gdjs.HT_95MapCode.GDhelp3Objects1.createFrom(runtimeScene.getObjects("help3"));
gdjs.HT_95MapCode.GDhelp3TObjects1.createFrom(runtimeScene.getObjects("help3T"));
{for(var i = 0, len = gdjs.HT_95MapCode.GD5ButtonObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GD5ButtonObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp2TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp2TObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp3Objects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HT_95MapCode.GDhelp3TObjects1.length ;i < len;++i) {
    gdjs.HT_95MapCode.GDhelp3TObjects1[i].hide(false);
}
}}

}


{


gdjs.HT_95MapCode.condition0IsTrue_0.val = false;
{
gdjs.HT_95MapCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.HT_95MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


}; //End of gdjs.HT_95MapCode.eventsList0xb2358


gdjs.HT_95MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.HT_95MapCode.GDBackgroundObjects1.length = 0;
gdjs.HT_95MapCode.GDBackgroundObjects2.length = 0;
gdjs.HT_95MapCode.GDWhiteLayerObjects1.length = 0;
gdjs.HT_95MapCode.GDWhiteLayerObjects2.length = 0;
gdjs.HT_95MapCode.GD1ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD1ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD2ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD2ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD3ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD3ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD4ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD4ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD5ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD5ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD6ButtonObjects1.length = 0;
gdjs.HT_95MapCode.GD6ButtonObjects2.length = 0;
gdjs.HT_95MapCode.GDMapTextObjects1.length = 0;
gdjs.HT_95MapCode.GDMapTextObjects2.length = 0;
gdjs.HT_95MapCode.GD1Objects1.length = 0;
gdjs.HT_95MapCode.GD1Objects2.length = 0;
gdjs.HT_95MapCode.GD2Objects1.length = 0;
gdjs.HT_95MapCode.GD2Objects2.length = 0;
gdjs.HT_95MapCode.GD3Objects1.length = 0;
gdjs.HT_95MapCode.GD3Objects2.length = 0;
gdjs.HT_95MapCode.GD4Objects1.length = 0;
gdjs.HT_95MapCode.GD4Objects2.length = 0;
gdjs.HT_95MapCode.GD5Objects1.length = 0;
gdjs.HT_95MapCode.GD5Objects2.length = 0;
gdjs.HT_95MapCode.GD6Objects1.length = 0;
gdjs.HT_95MapCode.GD6Objects2.length = 0;
gdjs.HT_95MapCode.GD1TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD1TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD1PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD1PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GD1TextObjects1.length = 0;
gdjs.HT_95MapCode.GD1TextObjects2.length = 0;
gdjs.HT_95MapCode.GD2TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD2TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD2PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD2PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GD2TextObjects1.length = 0;
gdjs.HT_95MapCode.GD2TextObjects2.length = 0;
gdjs.HT_95MapCode.GD3TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD3TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD3PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD3PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GD3TextObjects1.length = 0;
gdjs.HT_95MapCode.GD3TextObjects2.length = 0;
gdjs.HT_95MapCode.GD4TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD4TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD4TextObjects1.length = 0;
gdjs.HT_95MapCode.GD4TextObjects2.length = 0;
gdjs.HT_95MapCode.GD4PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD4PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GD5TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD5TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD5TextObjects1.length = 0;
gdjs.HT_95MapCode.GD5TextObjects2.length = 0;
gdjs.HT_95MapCode.GD5PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD5PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GD6TitleObjects1.length = 0;
gdjs.HT_95MapCode.GD6TitleObjects2.length = 0;
gdjs.HT_95MapCode.GD6TextObjects1.length = 0;
gdjs.HT_95MapCode.GD6TextObjects2.length = 0;
gdjs.HT_95MapCode.GD6PhotoObjects1.length = 0;
gdjs.HT_95MapCode.GD6PhotoObjects2.length = 0;
gdjs.HT_95MapCode.GDHButtonObjects1.length = 0;
gdjs.HT_95MapCode.GDHButtonObjects2.length = 0;
gdjs.HT_95MapCode.GD1TipObjects1.length = 0;
gdjs.HT_95MapCode.GD1TipObjects2.length = 0;
gdjs.HT_95MapCode.GDHEtapObjects1.length = 0;
gdjs.HT_95MapCode.GDHEtapObjects2.length = 0;
gdjs.HT_95MapCode.GD1TipTextObjects1.length = 0;
gdjs.HT_95MapCode.GD1TipTextObjects2.length = 0;
gdjs.HT_95MapCode.GDNewObjectObjects1.length = 0;
gdjs.HT_95MapCode.GDNewObjectObjects2.length = 0;
gdjs.HT_95MapCode.GDTipsDeactivatedObjects1.length = 0;
gdjs.HT_95MapCode.GDTipsDeactivatedObjects2.length = 0;
gdjs.HT_95MapCode.GDshadowObjects1.length = 0;
gdjs.HT_95MapCode.GDshadowObjects2.length = 0;
gdjs.HT_95MapCode.GDhelp1Objects1.length = 0;
gdjs.HT_95MapCode.GDhelp1Objects2.length = 0;
gdjs.HT_95MapCode.GDhelp1TObjects1.length = 0;
gdjs.HT_95MapCode.GDhelp1TObjects2.length = 0;
gdjs.HT_95MapCode.GDhelp2Objects1.length = 0;
gdjs.HT_95MapCode.GDhelp2Objects2.length = 0;
gdjs.HT_95MapCode.GDhelp2TObjects1.length = 0;
gdjs.HT_95MapCode.GDhelp2TObjects2.length = 0;
gdjs.HT_95MapCode.GDskipObjects1.length = 0;
gdjs.HT_95MapCode.GDskipObjects2.length = 0;
gdjs.HT_95MapCode.GDNewObject2Objects1.length = 0;
gdjs.HT_95MapCode.GDNewObject2Objects2.length = 0;
gdjs.HT_95MapCode.GDhelp3Objects1.length = 0;
gdjs.HT_95MapCode.GDhelp3Objects2.length = 0;
gdjs.HT_95MapCode.GDhelp3TObjects1.length = 0;
gdjs.HT_95MapCode.GDhelp3TObjects2.length = 0;

gdjs.HT_95MapCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['HT_95MapCode'] = gdjs.HT_95MapCode;
