
if (typeof gdjs.evtsExt__CameraShake3D__ShakeCamera !== "undefined") {
  gdjs.evtsExt__CameraShake3D__ShakeCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__ShakeCamera = {};


gdjs.evtsExt__CameraShake3D__ShakeCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(0);
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setNumber(eventsFunctionContext.getArgument("NewDuration"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).setNumber(eventsFunctionContext.getArgument("NewStartEaseDuration"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).setNumber(eventsFunctionContext.getArgument("NewStopEaseDuration"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() / (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber()));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber() * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() / (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber()));
}}

}


};

gdjs.evtsExt__CameraShake3D__ShakeCamera.func = function(runtimeScene, NewDuration, NewStartEaseDuration, NewStopEaseDuration, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewDuration") return NewDuration;
if (argName === "NewStartEaseDuration") return NewStartEaseDuration;
if (argName === "NewStopEaseDuration") return NewStopEaseDuration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake3D__ShakeCamera.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake3D__ShakeCamera.registeredGdjsCallbacks = [];