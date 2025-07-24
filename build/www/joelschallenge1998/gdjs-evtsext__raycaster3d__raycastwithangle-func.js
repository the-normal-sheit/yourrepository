
if (typeof gdjs.evtsExt__Raycaster3D__RaycastWithAngle !== "undefined") {
  gdjs.evtsExt__Raycaster3D__RaycastWithAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Raycaster3D__RaycastWithAngle = {};
gdjs.evtsExt__Raycaster3D__RaycastWithAngle.GDObjectObjects1= [];


gdjs.evtsExt__Raycaster3D__RaycastWithAngle.userFunc0xd13698 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    gdjs.__raycaster3DExtension.raycaster.recastWithAngle(
        eventsFunctionContext.getObjectsLists("Object"),
        objects,
        eventsFunctionContext.getArgument("OriginX"),
        eventsFunctionContext.getArgument("OriginY"),
        eventsFunctionContext.getArgument("OriginZ"),
        eventsFunctionContext.getArgument("RotationAngle"),
        eventsFunctionContext.getArgument("ElevationAngle"),
        eventsFunctionContext.getArgument("DistanceMax")
    );

};
gdjs.evtsExt__Raycaster3D__RaycastWithAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Raycaster3D__RaycastWithAngle.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Raycaster3D__RaycastWithAngle.GDObjectObjects1);
gdjs.evtsExt__Raycaster3D__RaycastWithAngle.userFunc0xd13698(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Raycaster3D__RaycastWithAngle.func = function(runtimeScene, Object, OriginX, OriginY, OriginZ, RotationAngle, ElevationAngle, DistanceMax, parentEventsFunctionContext) {
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
if (argName === "RotationAngle") return RotationAngle;
if (argName === "ElevationAngle") return ElevationAngle;
if (argName === "DistanceMax") return DistanceMax;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Raycaster3D__RaycastWithAngle.GDObjectObjects1.length = 0;

gdjs.evtsExt__Raycaster3D__RaycastWithAngle.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Raycaster3D__RaycastWithAngle.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Raycaster3D__RaycastWithAngle.registeredGdjsCallbacks = [];