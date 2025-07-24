
gdjs.evtsExt__Jump3D__Jump3D = gdjs.evtsExt__Jump3D__Jump3D || {};

/**
 * Behavior generated from 3D jump
 */
gdjs.evtsExt__Jump3D__Jump3D.Jump3D = class Jump3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.JumpHeight = behaviorData.JumpHeight !== undefined ? behaviorData.JumpHeight : Number("150") || 0;
    this._behaviorData.MaxFallingSpeed = behaviorData.MaxFallingSpeed !== undefined ? behaviorData.MaxFallingSpeed : Number("700") || 0;
    this._behaviorData.Gravity = behaviorData.Gravity !== undefined ? behaviorData.Gravity : Number("1000") || 0;
    this._behaviorData.JumpSpeed = Number("600") || 0;
    this._behaviorData.JumpSustainDurationMax = behaviorData.JumpSustainDurationMax !== undefined ? behaviorData.JumpSustainDurationMax : Number("0.2") || 0;
    this._behaviorData.State = "Idle";
    this._behaviorData.CurrentJumpSpeed = Number("") || 0;
    this._behaviorData.CurrentFallSpeed = Number("") || 0;
    this._behaviorData.PreviousJumpSpeed = Number("") || 0;
    this._behaviorData.PreviousFallSpeed = Number("") || 0;
    this._behaviorData.HasPressedJumpKey = false;
    this._behaviorData.CanJump = true;
    this._behaviorData.ShouldStopAtZero = behaviorData.ShouldStopAtZero !== undefined ? behaviorData.ShouldStopAtZero : true;
    this._behaviorData.PreviousState = "Idle";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.JumpHeight !== newBehaviorData.JumpHeight)
      this._behaviorData.JumpHeight = newBehaviorData.JumpHeight;
    if (oldBehaviorData.MaxFallingSpeed !== newBehaviorData.MaxFallingSpeed)
      this._behaviorData.MaxFallingSpeed = newBehaviorData.MaxFallingSpeed;
    if (oldBehaviorData.Gravity !== newBehaviorData.Gravity)
      this._behaviorData.Gravity = newBehaviorData.Gravity;
    if (oldBehaviorData.JumpSpeed !== newBehaviorData.JumpSpeed)
      this._behaviorData.JumpSpeed = newBehaviorData.JumpSpeed;
    if (oldBehaviorData.JumpSustainDurationMax !== newBehaviorData.JumpSustainDurationMax)
      this._behaviorData.JumpSustainDurationMax = newBehaviorData.JumpSustainDurationMax;
    if (oldBehaviorData.State !== newBehaviorData.State)
      this._behaviorData.State = newBehaviorData.State;
    if (oldBehaviorData.CurrentJumpSpeed !== newBehaviorData.CurrentJumpSpeed)
      this._behaviorData.CurrentJumpSpeed = newBehaviorData.CurrentJumpSpeed;
    if (oldBehaviorData.CurrentFallSpeed !== newBehaviorData.CurrentFallSpeed)
      this._behaviorData.CurrentFallSpeed = newBehaviorData.CurrentFallSpeed;
    if (oldBehaviorData.PreviousJumpSpeed !== newBehaviorData.PreviousJumpSpeed)
      this._behaviorData.PreviousJumpSpeed = newBehaviorData.PreviousJumpSpeed;
    if (oldBehaviorData.PreviousFallSpeed !== newBehaviorData.PreviousFallSpeed)
      this._behaviorData.PreviousFallSpeed = newBehaviorData.PreviousFallSpeed;
    if (oldBehaviorData.HasPressedJumpKey !== newBehaviorData.HasPressedJumpKey)
      this._behaviorData.HasPressedJumpKey = newBehaviorData.HasPressedJumpKey;
    if (oldBehaviorData.CanJump !== newBehaviorData.CanJump)
      this._behaviorData.CanJump = newBehaviorData.CanJump;
    if (oldBehaviorData.ShouldStopAtZero !== newBehaviorData.ShouldStopAtZero)
      this._behaviorData.ShouldStopAtZero = newBehaviorData.ShouldStopAtZero;
    if (oldBehaviorData.PreviousState !== newBehaviorData.PreviousState)
      this._behaviorData.PreviousState = newBehaviorData.PreviousState;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    JumpHeight: this._behaviorData.JumpHeight,
    MaxFallingSpeed: this._behaviorData.MaxFallingSpeed,
    Gravity: this._behaviorData.Gravity,
    JumpSpeed: this._behaviorData.JumpSpeed,
    JumpSustainDurationMax: this._behaviorData.JumpSustainDurationMax,
    State: this._behaviorData.State,
    CurrentJumpSpeed: this._behaviorData.CurrentJumpSpeed,
    CurrentFallSpeed: this._behaviorData.CurrentFallSpeed,
    PreviousJumpSpeed: this._behaviorData.PreviousJumpSpeed,
    PreviousFallSpeed: this._behaviorData.PreviousFallSpeed,
    HasPressedJumpKey: this._behaviorData.HasPressedJumpKey,
    CanJump: this._behaviorData.CanJump,
    ShouldStopAtZero: this._behaviorData.ShouldStopAtZero,
    PreviousState: this._behaviorData.PreviousState,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.JumpHeight !== undefined)
      this._behaviorData.JumpHeight = networkSyncData.props.JumpHeight;
    if (networkSyncData.props.MaxFallingSpeed !== undefined)
      this._behaviorData.MaxFallingSpeed = networkSyncData.props.MaxFallingSpeed;
    if (networkSyncData.props.Gravity !== undefined)
      this._behaviorData.Gravity = networkSyncData.props.Gravity;
    if (networkSyncData.props.JumpSpeed !== undefined)
      this._behaviorData.JumpSpeed = networkSyncData.props.JumpSpeed;
    if (networkSyncData.props.JumpSustainDurationMax !== undefined)
      this._behaviorData.JumpSustainDurationMax = networkSyncData.props.JumpSustainDurationMax;
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
    if (networkSyncData.props.CurrentJumpSpeed !== undefined)
      this._behaviorData.CurrentJumpSpeed = networkSyncData.props.CurrentJumpSpeed;
    if (networkSyncData.props.CurrentFallSpeed !== undefined)
      this._behaviorData.CurrentFallSpeed = networkSyncData.props.CurrentFallSpeed;
    if (networkSyncData.props.PreviousJumpSpeed !== undefined)
      this._behaviorData.PreviousJumpSpeed = networkSyncData.props.PreviousJumpSpeed;
    if (networkSyncData.props.PreviousFallSpeed !== undefined)
      this._behaviorData.PreviousFallSpeed = networkSyncData.props.PreviousFallSpeed;
    if (networkSyncData.props.HasPressedJumpKey !== undefined)
      this._behaviorData.HasPressedJumpKey = networkSyncData.props.HasPressedJumpKey;
    if (networkSyncData.props.CanJump !== undefined)
      this._behaviorData.CanJump = networkSyncData.props.CanJump;
    if (networkSyncData.props.ShouldStopAtZero !== undefined)
      this._behaviorData.ShouldStopAtZero = networkSyncData.props.ShouldStopAtZero;
    if (networkSyncData.props.PreviousState !== undefined)
      this._behaviorData.PreviousState = networkSyncData.props.PreviousState;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getJumpHeight() {
    return this._behaviorData.JumpHeight !== undefined ? this._behaviorData.JumpHeight : Number("150") || 0;
  }
  _setJumpHeight(newValue) {
    this._behaviorData.JumpHeight = newValue;
  }
  _getMaxFallingSpeed() {
    return this._behaviorData.MaxFallingSpeed !== undefined ? this._behaviorData.MaxFallingSpeed : Number("700") || 0;
  }
  _setMaxFallingSpeed(newValue) {
    this._behaviorData.MaxFallingSpeed = newValue;
  }
  _getGravity() {
    return this._behaviorData.Gravity !== undefined ? this._behaviorData.Gravity : Number("1000") || 0;
  }
  _setGravity(newValue) {
    this._behaviorData.Gravity = newValue;
  }
  _getJumpSpeed() {
    return this._behaviorData.JumpSpeed !== undefined ? this._behaviorData.JumpSpeed : Number("600") || 0;
  }
  _setJumpSpeed(newValue) {
    this._behaviorData.JumpSpeed = newValue;
  }
  _getJumpSustainDurationMax() {
    return this._behaviorData.JumpSustainDurationMax !== undefined ? this._behaviorData.JumpSustainDurationMax : Number("0.2") || 0;
  }
  _setJumpSustainDurationMax(newValue) {
    this._behaviorData.JumpSustainDurationMax = newValue;
  }
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getCurrentJumpSpeed() {
    return this._behaviorData.CurrentJumpSpeed !== undefined ? this._behaviorData.CurrentJumpSpeed : Number("") || 0;
  }
  _setCurrentJumpSpeed(newValue) {
    this._behaviorData.CurrentJumpSpeed = newValue;
  }
  _getCurrentFallSpeed() {
    return this._behaviorData.CurrentFallSpeed !== undefined ? this._behaviorData.CurrentFallSpeed : Number("") || 0;
  }
  _setCurrentFallSpeed(newValue) {
    this._behaviorData.CurrentFallSpeed = newValue;
  }
  _getPreviousJumpSpeed() {
    return this._behaviorData.PreviousJumpSpeed !== undefined ? this._behaviorData.PreviousJumpSpeed : Number("") || 0;
  }
  _setPreviousJumpSpeed(newValue) {
    this._behaviorData.PreviousJumpSpeed = newValue;
  }
  _getPreviousFallSpeed() {
    return this._behaviorData.PreviousFallSpeed !== undefined ? this._behaviorData.PreviousFallSpeed : Number("") || 0;
  }
  _setPreviousFallSpeed(newValue) {
    this._behaviorData.PreviousFallSpeed = newValue;
  }
  _getHasPressedJumpKey() {
    return this._behaviorData.HasPressedJumpKey !== undefined ? this._behaviorData.HasPressedJumpKey : false;
  }
  _setHasPressedJumpKey(newValue) {
    this._behaviorData.HasPressedJumpKey = newValue;
  }
  _toggleHasPressedJumpKey() {
    this._setHasPressedJumpKey(!this._getHasPressedJumpKey());
  }
  _getCanJump() {
    return this._behaviorData.CanJump !== undefined ? this._behaviorData.CanJump : true;
  }
  _setCanJump(newValue) {
    this._behaviorData.CanJump = newValue;
  }
  _toggleCanJump() {
    this._setCanJump(!this._getCanJump());
  }
  _getShouldStopAtZero() {
    return this._behaviorData.ShouldStopAtZero !== undefined ? this._behaviorData.ShouldStopAtZero : true;
  }
  _setShouldStopAtZero(newValue) {
    this._behaviorData.ShouldStopAtZero = newValue;
  }
  _toggleShouldStopAtZero() {
    this._setShouldStopAtZero(!this._getShouldStopAtZero());
  }
  _getPreviousState() {
    return this._behaviorData.PreviousState !== undefined ? this._behaviorData.PreviousState : "Idle";
  }
  _setPreviousState(newValue) {
    this._behaviorData.PreviousState = newValue;
  }
}

/**
 * Shared data generated from 3D jump
 */
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.SharedData = class Jump3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Jump3D_Jump3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Jump3D_Jump3DSharedData = new gdjs.evtsExt__Jump3D__Jump3D.Jump3D.SharedData(
      initialData
    );
  }
  return instanceContainer._Jump3D_Jump3DSharedData;
}

// Methods:
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetJumpHeight((gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpHeight(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpSpeed((gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpSpeedToReach(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpHeightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.GDObjectObjects1= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.userFunc0x12cb768 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const jumpHeight = -Math.abs(eventsFunctionContext.getArgument("JumpHeight"));

/** @type {float} */
const gravity = behavior._getGravity();
/** @type {float} */
const maxFallingSpeed = behavior._getMaxFallingSpeed();
/** @type {float} */
const jumpSustainTime = behavior._getJumpSustainDurationMax();

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;

// The implementation jumps from one quadratic resolution to another
// to find the right formula to use as the time is unknown.

const sustainCase = (jumpHeight) => Math.sqrt(-jumpHeight * gravity * 2);
const maxFallingCase = (jumpHeight) => -gravity * jumpSustainTime + maxFallingSpeed
    + Math.sqrt(gravity * gravity * jumpSustainTime * jumpSustainTime - 2 * jumpHeight * gravity - maxFallingSpeed * maxFallingSpeed);

let jumpSpeed = 0;
let peakTime = 0;
if (maxFallingSpeedReachedTime > jumpSustainTime) {
    // common case
    jumpSpeed = -gravity * jumpSustainTime + Math.sqrt(2 * gravity * gravity * jumpSustainTime * jumpSustainTime - 4 * jumpHeight * gravity);
    peakTime = (gravity * jumpSustainTime + jumpSpeed) / (2 * gravity);
    if (peakTime < jumpSustainTime) {
        jumpSpeed = sustainCase(jumpHeight);
    }
    else if (peakTime > maxFallingSpeedReachedTime) {
        jumpSpeed = maxFallingCase(jumpHeight);
    }
}
else {
    // affine case can't have a maximum

    // sustain case
    jumpSpeed = sustainCase(jumpHeight);
    peakTime = jumpSpeed / gravity;
    if (peakTime > maxFallingSpeedReachedTime) {
        jumpSpeed = maxFallingCase(jumpHeight);
    }
}

eventsFunctionContext.returnValue = jumpSpeed;

};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.GDObjectObjects1);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.userFunc0x12cb768(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReach = function(JumpHeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
if (argName === "JumpHeight") return JumpHeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSpeedToReachContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanJump() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("_Jump3DExtension.SustainJump");
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("InTheAir");
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpSpeed());
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanJump(false);
}
}}

}


{

/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("_Jump3DExtension.SustainJump") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpSustainDurationMax() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].removeTimer("_Jump3DExtension.SustainJump");
}
}}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedJumpKey() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedJumpKey()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].removeTimer("_Jump3DExtension.SustainJump");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedJumpKey(false);
}
}}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("_Jump3DExtension.SustainJump") >= 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentJumpSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGravity() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() + ((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousJumpSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentJumpSpeed()) / 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFallSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGravity() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxFallingSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() - ((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousFallSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFallSpeed()) / 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldStopAtZero() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Land((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__Jump3D__SetBottomZ.func(runtimeScene, 0, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousJumpSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentJumpSpeed());
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousFallSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFallSpeed());
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState());
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentVerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Fall((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedJumpKey(true);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKey = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SimulateJumpKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex2 = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex3 = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachObjects2 = [];

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachObjects3 = [];

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary2 = null;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary3 = null;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTotalCount2 = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTotalCount3 = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2);


for (gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex3 = 0;gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex3 < gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2.length;++gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex3) {
gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3);

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3.length = 0;


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary3 = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2[gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex3];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3.push(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).VerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AbortJump((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__Jump3D__SetTopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}

}


{

/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1 */

for (gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex2 = 0;gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex2 < gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1.length;++gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex2) {
gdjs.copyArray(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2);

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2.length = 0;


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary2 = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1[gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachIndex2];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2.push(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).VerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Land((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__Jump3D__SetBottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}

}


};gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1});
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Jump3D__IsWithinZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects, eventsFunctionContext.getBehaviorName("Object3D"), gdjs.evtsExt__Jump3D__BottomZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Jump3D__TopZ.func(runtimeScene, gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1[i].separateFromObjectsList(gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.mapOfGDgdjs_9546evtsExt_9595_9595Jump3D_9595_9595Jump3D_9546Jump3D_9546prototype_9546SeparateFromPlatformsContext_9546GDPlatformObjects1Objects, false);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatforms = function(Platform, Object3D, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Platform": Platform
},
  _objectArraysMap: {
"Object": thisObjectList
, "Platform": gdjs.objectsListsToArray(Platform)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Object3D": Object3D
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects2.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SeparateFromPlatformsContext.GDPlatformObjects3.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanJump(true);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.Land = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.LandContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanJump(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("InTheAir");
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(0);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.Fall = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.FallContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(0);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.AbortJumpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanJump(true);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCanJumpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanJump() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CanJumpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentVerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFalling = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsFallingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentJumpSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsJumpingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloor = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.IsOnFloorContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousJumpSpeed(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentJumpSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentJumpSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentJumpSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousFallSpeed(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentFallSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFallSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetCurrentFallSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousJumpSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousFallSpeed(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.CurrentVerticalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentJumpSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFallSpeed(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxFallingSpeed(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.MaxFallingSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxFallingSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetMaxFallingSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGravity(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.Gravity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.GravityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGravity(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetGravityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpSustainDurationMax(); }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMax = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.JumpSustainDurationMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpSustainDurationMax(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMax = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetJumpSustainDurationMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldStopAtZero() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1[k] = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZero = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.ShouldStopAtZeroContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext = {};
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1= [];
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects2= [];


gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldStopAtZero(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldStopAtZero(true);
}
}}

}


};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZero = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Jump3D__Jump3D.Jump3D.prototype.SetShouldStopAtZeroContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Jump3D::Jump3D", gdjs.evtsExt__Jump3D__Jump3D.Jump3D);
