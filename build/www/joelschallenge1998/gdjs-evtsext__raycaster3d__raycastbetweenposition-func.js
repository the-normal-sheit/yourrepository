
if (typeof gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition !== "undefined") {
  gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition = {};
gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.GDObjectObjects1= [];


gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.userFunc0x1605fe8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    gdjs.__raycaster3DExtension.raycaster.recastBetweenPosition(
        eventsFunctionContext.getObjectsLists("Object"),
        objects,
        eventsFunctionContext.getArgument("OriginX"),
        eventsFunctionContext.getArgument("OriginY"),
        eventsFunctionContext.getArgument("OriginZ"),
        eventsFunctionContext.getArgument("TargetX"),
        eventsFunctionContext.getArgument("TargetY"),
        eventsFunctionContext.getArgument("TargetZ")
    );

};
gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.GDObjectObjects1);
gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.userFunc0x1605fe8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.func = function(runtimeScene, Object, OriginX, OriginY, OriginZ, TargetX, TargetY, TargetZ, parentEventsFunctionContext) {
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
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
if (argName === "OriginZ") return OriginZ;
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
if (argName === "TargetZ") return TargetZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.GDObjectObjects1.length = 0;

gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.registeredGdjsCallbacks = [];