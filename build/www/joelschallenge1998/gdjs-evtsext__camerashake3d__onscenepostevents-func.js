
if (typeof gdjs.evtsExt__CameraShake3D__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraShake3D__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__onScenePostEvents = {};


gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(4).setString(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString() == "__BaseLayer");
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(4).setString("");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraShake3D__SetFrequency.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber());
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleZ").setNumber(0);
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleY").setNumber(0);
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleX").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6), "Frequency");
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraShake3D__SetFrequency.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild("Frequency").getAsNumber(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6), "AmplitudeAngleZ");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild("AmplitudeAngleZ").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6), "AmplitudeAngleY");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild("AmplitudeAngleY").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6), "AmplitudeAngleX");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild("AmplitudeAngleX").getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleZ").setNumber(gdjs.evtsExt__CameraShake3D__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}{gdjs.evtsExt__CameraShake3D__SpinCamera.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleZ").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(4).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleY").setNumber(gdjs.evtsExt__CameraShake3D__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}{gdjs.evtsExt__CameraShake3D__TurnCameraHorizontally.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleY").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(4).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleX").setNumber(gdjs.evtsExt__CameraShake3D__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 3000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}{gdjs.evtsExt__CameraShake3D__TurnCameraVertically.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("CameraDeltaAngleX").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(4).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() > eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(gdjs.evtTools.common.clamp(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber(), 0, 1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() > eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(gdjs.evtTools.common.clamp((eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber()) / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber(), 0, 1));
}}

}


{


const keyIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5);
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
gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeAngleZ", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeAngleY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeAngleX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("EaseFactor", variable);
}
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
gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CameraShake3D__IsShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShake3D__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraShake3D__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake3D__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake3D__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake3D__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraShake3D__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake3D__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
