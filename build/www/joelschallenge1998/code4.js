gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];
gdjs.gameoverCode.GDNewSprite2Objects1= [];
gdjs.gameoverCode.GDNewSprite2Objects2= [];
gdjs.gameoverCode.GDNewSprite4Objects1= [];
gdjs.gameoverCode.GDNewSprite4Objects2= [];
gdjs.gameoverCode.GDNewSprite7Objects1= [];
gdjs.gameoverCode.GDNewSprite7Objects2= [];
gdjs.gameoverCode.GDNew3DBox13Objects1= [];
gdjs.gameoverCode.GDNew3DBox13Objects2= [];
gdjs.gameoverCode.GDNew3DBox12Objects1= [];
gdjs.gameoverCode.GDNew3DBox12Objects2= [];
gdjs.gameoverCode.GDNew3DBox14Objects1= [];
gdjs.gameoverCode.GDNew3DBox14Objects2= [];
gdjs.gameoverCode.GDtimeObjects1= [];
gdjs.gameoverCode.GDtimeObjects2= [];
gdjs.gameoverCode.GDminuteObjects1= [];
gdjs.gameoverCode.GDminuteObjects2= [];
gdjs.gameoverCode.GDMainmenObjects1= [];
gdjs.gameoverCode.GDMainmenObjects2= [];
gdjs.gameoverCode.GDNewSprite3Objects1= [];
gdjs.gameoverCode.GDNewSprite3Objects2= [];


gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.gameoverCode.GDNewSprite3Objects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDMainmenObjects1Objects = Hashtable.newFrom({"Mainmen": gdjs.gameoverCode.GDMainmenObjects1});
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("minute"), gdjs.gameoverCode.GDminuteObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "oyvey2_temp.mp3", true, 100, 1);
}{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameoverCode.GDminuteObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDminuteObjects1[i].getBehavior("Text").setText("Your last shekel count: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + "Your last time record: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "m And " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 1)) + "s");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.gameoverCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cutscene1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mainmen"), gdjs.gameoverCode.GDMainmenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDMainmenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox14Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox14Objects2.length = 0;
gdjs.gameoverCode.GDtimeObjects1.length = 0;
gdjs.gameoverCode.GDtimeObjects2.length = 0;
gdjs.gameoverCode.GDminuteObjects1.length = 0;
gdjs.gameoverCode.GDminuteObjects2.length = 0;
gdjs.gameoverCode.GDMainmenObjects1.length = 0;
gdjs.gameoverCode.GDMainmenObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox14Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox14Objects2.length = 0;
gdjs.gameoverCode.GDtimeObjects1.length = 0;
gdjs.gameoverCode.GDtimeObjects2.length = 0;
gdjs.gameoverCode.GDminuteObjects1.length = 0;
gdjs.gameoverCode.GDminuteObjects2.length = 0;
gdjs.gameoverCode.GDMainmenObjects1.length = 0;
gdjs.gameoverCode.GDMainmenObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
