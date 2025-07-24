
if (typeof gdjs.evtsExt__Jump3D__IsWithinZ !== "undefined") {
  gdjs.evtsExt__Jump3D__IsWithinZ.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Jump3D__IsWithinZ = {};
gdjs.evtsExt__Jump3D__IsWithinZ.GDObjectObjects1= [];


gdjs.evtsExt__Jump3D__IsWithinZ.userFunc0xac6ca0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const bottom = eventsFunctionContext.getArgument("BottomZ");
const top = eventsFunctionContext.getArgument("TopZ");

if (top <= bottom) {
    return false;
}

let isAnyObjectPicked = false;
for (const object of objects) {
    object.pick = object.getZ() < top && object.getZ() + object.getDepth() > bottom;
    isAnyObjectPicked = isAnyObjectPicked || object.pick;
}

const objectsLists = eventsFunctionContext.getObjectsLists("Object");
for (const name in objectsLists.items) {
    if (objectsLists.items.hasOwnProperty(name)) {
        const objectsList = objectsLists.items[name];
        gdjs.evtTools.object.filterPickedObjectsList(objectsList);
    }
}
eventsFunctionContext.returnValue = isAnyObjectPicked;

};
gdjs.evtsExt__Jump3D__IsWithinZ.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__IsWithinZ.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Jump3D__IsWithinZ.GDObjectObjects1);
gdjs.evtsExt__Jump3D__IsWithinZ.userFunc0xac6ca0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Jump3D__IsWithinZ.func = function(runtimeScene, Object, Object3D, BottomZ, TopZ, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Object3D": Object3D
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
if (argName === "BottomZ") return BottomZ;
if (argName === "TopZ") return TopZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Jump3D__IsWithinZ.GDObjectObjects1.length = 0;

gdjs.evtsExt__Jump3D__IsWithinZ.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__IsWithinZ.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Jump3D__IsWithinZ.registeredGdjsCallbacks = [];