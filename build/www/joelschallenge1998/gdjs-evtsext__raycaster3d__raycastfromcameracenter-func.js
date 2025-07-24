
if (typeof gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter !== "undefined") {
  gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter = {};
gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.GDObjectObjects1= [];


gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.userFunc0x116ac68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    gdjs.__raycaster3DExtension.raycaster.recastFromCamera(
        eventsFunctionContext.getObjectsLists("Object"),
        objects,
        0.5,
        0.5,
        eventsFunctionContext.getArgument("DistanceMax")
    );

};
gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.GDObjectObjects1);
gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.userFunc0x116ac68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func = function(runtimeScene, Object, DistanceMax, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Raycaster3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Raycaster3D"),
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
if (argName === "DistanceMax") return DistanceMax;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.GDObjectObjects1.length = 0;

gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.registeredGdjsCallbacks = [];