
if (typeof gdjs.evtsExt__CameraShake3D__LayerCount !== "undefined") {
  gdjs.evtsExt__CameraShake3D__LayerCount.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__LayerCount = {};


gdjs.evtsExt__CameraShake3D__LayerCount.userFunc0x15203b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._cameraShake3DExtension = gdjs._cameraShake3DExtension || {};
gdjs._cameraShake3DExtension.layerNames = gdjs._cameraShake3DExtension.layerNames || [];
const layerNames = gdjs._cameraShake3DExtension.layerNames;
runtimeScene.getAllLayerNames(layerNames);

eventsFunctionContext.returnValue = layerNames.length;

};
gdjs.evtsExt__CameraShake3D__LayerCount.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake3D__LayerCount.userFunc0x15203b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CameraShake3D__LayerCount.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake3D__LayerCount.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__CameraShake3D__LayerCount.registeredGdjsCallbacks = [];