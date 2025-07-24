
if (typeof gdjs.evtsExt__CameraShake3D__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CameraShake3D__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__onScenePreEvents = {};


gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString() == "__BaseLayer");
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString("");
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraShake3D__SpinCamera.func(runtimeScene, 0 - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleZ").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.func(runtimeScene, 0 - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleY").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake3D__TurnCameraVertically.func(runtimeScene, 0 - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleX").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6);
const iterableReference2 = runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("Shakable").getAsBoolean();
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("ActualLayerName", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CameraShake3D__IsShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShake3D__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraShake3D__onScenePreEvents.eventsList3(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake3D__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake3D__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake3D__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CameraShake3D__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake3D__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
