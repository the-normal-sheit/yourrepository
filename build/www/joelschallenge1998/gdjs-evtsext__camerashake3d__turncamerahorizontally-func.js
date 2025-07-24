
if (typeof gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally !== "undefined") {
  gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally = {};


gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.userFunc0x12ae040 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const angle = eventsFunctionContext.getArgument("Angle");
const layerName = eventsFunctionContext.getArgument("Layer");

if (angle === 0) {
    return;
}

const layer = runtimeScene.getLayer(layerName);
const camera = layer.getRenderer().getThreeCamera();
if (camera) {
    camera.rotation.z = gdjs.toRad(layer.getCameraRotation());
    
    camera.rotateY(gdjs.toRad(angle));

    layer.setCameraRotation(gdjs.toDegrees(camera.rotation.z));
}
};
gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.userFunc0x12ae040(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.func = function(runtimeScene, Angle, Layer, parentEventsFunctionContext) {
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
if (argName === "Angle") return Angle;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.registeredGdjsCallbacks = [];