gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDNewSprite2Objects1= [];
gdjs.winCode.GDNewSprite2Objects2= [];
gdjs.winCode.GDNewSprite4Objects1= [];
gdjs.winCode.GDNewSprite4Objects2= [];
gdjs.winCode.GDwinObjects1= [];
gdjs.winCode.GDwinObjects2= [];
gdjs.winCode.GDNewSprite7Objects1= [];
gdjs.winCode.GDNewSprite7Objects2= [];
gdjs.winCode.GDNew3DBox13Objects1= [];
gdjs.winCode.GDNew3DBox13Objects2= [];
gdjs.winCode.GDNew3DBox12Objects1= [];
gdjs.winCode.GDNew3DBox12Objects2= [];
gdjs.winCode.GDNew3DBox14Objects1= [];
gdjs.winCode.GDNew3DBox14Objects2= [];
gdjs.winCode.GDtimeObjects1= [];
gdjs.winCode.GDtimeObjects2= [];
gdjs.winCode.GDminuteObjects1= [];
gdjs.winCode.GDminuteObjects2= [];
gdjs.winCode.GDMainmenObjects1= [];
gdjs.winCode.GDMainmenObjects2= [];
gdjs.winCode.GDNewSprite3Objects1= [];
gdjs.winCode.GDNewSprite3Objects2= [];


gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.winCode.GDNewSprite3Objects1});
gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDMainmenObjects1Objects = Hashtable.newFrom({"Mainmen": gdjs.winCode.GDMainmenObjects1});
gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("minute"), gdjs.winCode.GDminuteObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "oyvey2_temp.mp3", true, 100, 1);
}{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.winCode.GDminuteObjects1.length ;i < len;++i) {
    gdjs.winCode.GDminuteObjects1[i].getBehavior("Text").setText("Your last shekel count: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + "Your last time record: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "m And " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 1)) + "s");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.winCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cutscene1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mainmen"), gdjs.winCode.GDMainmenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDMainmenObjects1Objects, runtimeScene, true, false);
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

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDwinObjects1.length = 0;
gdjs.winCode.GDwinObjects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDNew3DBox13Objects1.length = 0;
gdjs.winCode.GDNew3DBox13Objects2.length = 0;
gdjs.winCode.GDNew3DBox12Objects1.length = 0;
gdjs.winCode.GDNew3DBox12Objects2.length = 0;
gdjs.winCode.GDNew3DBox14Objects1.length = 0;
gdjs.winCode.GDNew3DBox14Objects2.length = 0;
gdjs.winCode.GDtimeObjects1.length = 0;
gdjs.winCode.GDtimeObjects2.length = 0;
gdjs.winCode.GDminuteObjects1.length = 0;
gdjs.winCode.GDminuteObjects2.length = 0;
gdjs.winCode.GDMainmenObjects1.length = 0;
gdjs.winCode.GDMainmenObjects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDwinObjects1.length = 0;
gdjs.winCode.GDwinObjects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDNew3DBox13Objects1.length = 0;
gdjs.winCode.GDNew3DBox13Objects2.length = 0;
gdjs.winCode.GDNew3DBox12Objects1.length = 0;
gdjs.winCode.GDNew3DBox12Objects2.length = 0;
gdjs.winCode.GDNew3DBox14Objects1.length = 0;
gdjs.winCode.GDNew3DBox14Objects2.length = 0;
gdjs.winCode.GDtimeObjects1.length = 0;
gdjs.winCode.GDtimeObjects2.length = 0;
gdjs.winCode.GDminuteObjects1.length = 0;
gdjs.winCode.GDminuteObjects2.length = 0;
gdjs.winCode.GDMainmenObjects1.length = 0;
gdjs.winCode.GDMainmenObjects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
