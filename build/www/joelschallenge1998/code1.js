gdjs.cutscene1Code = {};
gdjs.cutscene1Code.localVariables = [];
gdjs.cutscene1Code.GDNewVideoObjects1= [];
gdjs.cutscene1Code.GDNewVideoObjects2= [];
gdjs.cutscene1Code.GDNewTextObjects1= [];
gdjs.cutscene1Code.GDNewTextObjects2= [];
gdjs.cutscene1Code.GDNewSprite7Objects1= [];
gdjs.cutscene1Code.GDNewSprite7Objects2= [];
gdjs.cutscene1Code.GDNew3DBox13Objects1= [];
gdjs.cutscene1Code.GDNew3DBox13Objects2= [];
gdjs.cutscene1Code.GDNew3DBox12Objects1= [];
gdjs.cutscene1Code.GDNew3DBox12Objects2= [];
gdjs.cutscene1Code.GDNew3DBox14Objects1= [];
gdjs.cutscene1Code.GDNew3DBox14Objects2= [];
gdjs.cutscene1Code.GDtimeObjects1= [];
gdjs.cutscene1Code.GDtimeObjects2= [];
gdjs.cutscene1Code.GDminuteObjects1= [];
gdjs.cutscene1Code.GDminuteObjects2= [];
gdjs.cutscene1Code.GDMainmenObjects1= [];
gdjs.cutscene1Code.GDMainmenObjects2= [];
gdjs.cutscene1Code.GDNewSprite3Objects1= [];
gdjs.cutscene1Code.GDNewSprite3Objects2= [];


gdjs.cutscene1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.cutscene1Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.cutscene1Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.cutscene1Code.GDNewVideoObjects1[i].play();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "oyvey.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26621876);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.cutscene1Code.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cutscene1Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.cutscene1Code.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.cutscene1Code.GDNewVideoObjects1[k] = gdjs.cutscene1Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.cutscene1Code.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};

gdjs.cutscene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutscene1Code.GDNewVideoObjects1.length = 0;
gdjs.cutscene1Code.GDNewVideoObjects2.length = 0;
gdjs.cutscene1Code.GDNewTextObjects1.length = 0;
gdjs.cutscene1Code.GDNewTextObjects2.length = 0;
gdjs.cutscene1Code.GDNewSprite7Objects1.length = 0;
gdjs.cutscene1Code.GDNewSprite7Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox13Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox13Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox12Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox12Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox14Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox14Objects2.length = 0;
gdjs.cutscene1Code.GDtimeObjects1.length = 0;
gdjs.cutscene1Code.GDtimeObjects2.length = 0;
gdjs.cutscene1Code.GDminuteObjects1.length = 0;
gdjs.cutscene1Code.GDminuteObjects2.length = 0;
gdjs.cutscene1Code.GDMainmenObjects1.length = 0;
gdjs.cutscene1Code.GDMainmenObjects2.length = 0;
gdjs.cutscene1Code.GDNewSprite3Objects1.length = 0;
gdjs.cutscene1Code.GDNewSprite3Objects2.length = 0;

gdjs.cutscene1Code.eventsList0(runtimeScene);
gdjs.cutscene1Code.GDNewVideoObjects1.length = 0;
gdjs.cutscene1Code.GDNewVideoObjects2.length = 0;
gdjs.cutscene1Code.GDNewTextObjects1.length = 0;
gdjs.cutscene1Code.GDNewTextObjects2.length = 0;
gdjs.cutscene1Code.GDNewSprite7Objects1.length = 0;
gdjs.cutscene1Code.GDNewSprite7Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox13Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox13Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox12Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox12Objects2.length = 0;
gdjs.cutscene1Code.GDNew3DBox14Objects1.length = 0;
gdjs.cutscene1Code.GDNew3DBox14Objects2.length = 0;
gdjs.cutscene1Code.GDtimeObjects1.length = 0;
gdjs.cutscene1Code.GDtimeObjects2.length = 0;
gdjs.cutscene1Code.GDminuteObjects1.length = 0;
gdjs.cutscene1Code.GDminuteObjects2.length = 0;
gdjs.cutscene1Code.GDMainmenObjects1.length = 0;
gdjs.cutscene1Code.GDMainmenObjects2.length = 0;
gdjs.cutscene1Code.GDNewSprite3Objects1.length = 0;
gdjs.cutscene1Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['cutscene1Code'] = gdjs.cutscene1Code;
