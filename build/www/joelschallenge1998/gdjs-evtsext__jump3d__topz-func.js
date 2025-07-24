
if (typeof gdjs.evtsExt__Jump3D__TopZ !== "undefined") {
  gdjs.evtsExt__Jump3D__TopZ.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Jump3D__TopZ = {};
gdjs.evtsExt__Jump3D__TopZ.GDObjectObjects1= [];


gdjs.evtsExt__Jump3D__TopZ.userFunc0x1248470 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length === 0) {
    return;
}
const object = objects[0];
eventsFunctionContext.returnValue = object.getDrawableZ ? object.getDrawableZ() + object.getDepth() : 0;

};
gdjs.evtsExt__Jump3D__TopZ.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__TopZ.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Jump3D__TopZ.GDObjectObjects1);
gdjs.evtsExt__Jump3D__TopZ.userFunc0x1248470(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Jump3D__TopZ.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Jump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Jump3D"),
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

gdjs.evtsExt__Jump3D__TopZ.GDObjectObjects1.length = 0;

gdjs.evtsExt__Jump3D__TopZ.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__TopZ.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Jump3D__TopZ.registeredGdjsCallbacks = [];