
if (typeof gdjs.evtsExt__Jump3D__SetTopZ !== "undefined") {
  gdjs.evtsExt__Jump3D__SetTopZ.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Jump3D__SetTopZ = {};
gdjs.evtsExt__Jump3D__SetTopZ.GDObjectObjects1= [];


gdjs.evtsExt__Jump3D__SetTopZ.userFunc0x1248470 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length === 0) {
    return;
}
const object = objects[0];
if (!object.getDrawableZ) {
    return;
}
const newTop = eventsFunctionContext.getArgument("Value");
const oldTop = object.getDrawableZ() + object.getDepth();
object.setZ(object.getZ() - oldTop + newTop);

};
gdjs.evtsExt__Jump3D__SetTopZ.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__SetTopZ.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Jump3D__SetTopZ.GDObjectObjects1);
gdjs.evtsExt__Jump3D__SetTopZ.userFunc0x1248470(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Jump3D__SetTopZ.func = function(runtimeScene, Value, Object, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Jump3D__SetTopZ.GDObjectObjects1.length = 0;

gdjs.evtsExt__Jump3D__SetTopZ.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__SetTopZ.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Jump3D__SetTopZ.registeredGdjsCallbacks = [];