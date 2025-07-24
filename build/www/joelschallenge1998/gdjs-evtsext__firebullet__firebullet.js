
gdjs.evtsExt__FireBullet__FireBullet = gdjs.evtsExt__FireBullet__FireBullet || {};

/**
 * Behavior generated from Fire bullets
 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet = class FireBullet extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FireCooldown = behaviorData.FireCooldown !== undefined ? behaviorData.FireCooldown : Number("0.1") || 0;
    this._behaviorData.HasJustFired = false;
    this._behaviorData.RotateBullet = behaviorData.RotateBullet !== undefined ? behaviorData.RotateBullet : true;
    this._behaviorData.FiringArc = behaviorData.FiringArc !== undefined ? behaviorData.FiringArc : Number("45") || 0;
    this._behaviorData.BulletQuantity = behaviorData.BulletQuantity !== undefined ? behaviorData.BulletQuantity : Number("1") || 0;
    this._behaviorData.AngleVariance = behaviorData.AngleVariance !== undefined ? behaviorData.AngleVariance : Number("0") || 0;
    this._behaviorData.BulletSpeedVariance = behaviorData.BulletSpeedVariance !== undefined ? behaviorData.BulletSpeedVariance : Number("0") || 0;
    this._behaviorData.AmmoQuantity = Number("0") || 0;
    this._behaviorData.ShotsPerReload = behaviorData.ShotsPerReload !== undefined ? behaviorData.ShotsPerReload : Number("0") || 0;
    this._behaviorData.ReloadDuration = behaviorData.ReloadDuration !== undefined ? behaviorData.ReloadDuration : Number("1") || 0;
    this._behaviorData.MaxAmmo = behaviorData.MaxAmmo !== undefined ? behaviorData.MaxAmmo : Number("0") || 0;
    this._behaviorData.ShotsBeforeNextReload = Number("0") || 0;
    this._behaviorData.TotalShotsFired = Number("0") || 0;
    this._behaviorData.TotalBulletsCreated = Number("0") || 0;
    this._behaviorData.StartingAmmo = behaviorData.StartingAmmo !== undefined ? behaviorData.StartingAmmo : Number("0") || 0;
    this._behaviorData.TotalReloadsCompleted = Number("0") || 0;
    this._behaviorData.UnlimitedAmmo = behaviorData.UnlimitedAmmo !== undefined ? behaviorData.UnlimitedAmmo : true;
    this._behaviorData.ReloadInProgress = false;
    this._behaviorData.HeatIncreasePerShot = behaviorData.HeatIncreasePerShot !== undefined ? behaviorData.HeatIncreasePerShot : Number("0") || 0;
    this._behaviorData.HeatLevel = Number("0") || 0;
    this._behaviorData.AutomaticReloading = behaviorData.AutomaticReloading !== undefined ? behaviorData.AutomaticReloading : true;
    this._behaviorData.OverheatDuration = behaviorData.OverheatDuration !== undefined ? behaviorData.OverheatDuration : Number("0") || 0;
    this._behaviorData.LinearCoolingRate = behaviorData.LinearCoolingRate !== undefined ? behaviorData.LinearCoolingRate : Number("0.1") || 0;
    this._behaviorData.ExponentialCoolingRate = behaviorData.ExponentialCoolingRate !== undefined ? behaviorData.ExponentialCoolingRate : Number("0.3") || 0;
    this._behaviorData.BulletLayer = "";
    this._behaviorData.RandomizedAngle = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FireCooldown !== newBehaviorData.FireCooldown)
      this._behaviorData.FireCooldown = newBehaviorData.FireCooldown;
    if (oldBehaviorData.HasJustFired !== newBehaviorData.HasJustFired)
      this._behaviorData.HasJustFired = newBehaviorData.HasJustFired;
    if (oldBehaviorData.RotateBullet !== newBehaviorData.RotateBullet)
      this._behaviorData.RotateBullet = newBehaviorData.RotateBullet;
    if (oldBehaviorData.FiringArc !== newBehaviorData.FiringArc)
      this._behaviorData.FiringArc = newBehaviorData.FiringArc;
    if (oldBehaviorData.BulletQuantity !== newBehaviorData.BulletQuantity)
      this._behaviorData.BulletQuantity = newBehaviorData.BulletQuantity;
    if (oldBehaviorData.AngleVariance !== newBehaviorData.AngleVariance)
      this._behaviorData.AngleVariance = newBehaviorData.AngleVariance;
    if (oldBehaviorData.BulletSpeedVariance !== newBehaviorData.BulletSpeedVariance)
      this._behaviorData.BulletSpeedVariance = newBehaviorData.BulletSpeedVariance;
    if (oldBehaviorData.AmmoQuantity !== newBehaviorData.AmmoQuantity)
      this._behaviorData.AmmoQuantity = newBehaviorData.AmmoQuantity;
    if (oldBehaviorData.ShotsPerReload !== newBehaviorData.ShotsPerReload)
      this._behaviorData.ShotsPerReload = newBehaviorData.ShotsPerReload;
    if (oldBehaviorData.ReloadDuration !== newBehaviorData.ReloadDuration)
      this._behaviorData.ReloadDuration = newBehaviorData.ReloadDuration;
    if (oldBehaviorData.MaxAmmo !== newBehaviorData.MaxAmmo)
      this._behaviorData.MaxAmmo = newBehaviorData.MaxAmmo;
    if (oldBehaviorData.ShotsBeforeNextReload !== newBehaviorData.ShotsBeforeNextReload)
      this._behaviorData.ShotsBeforeNextReload = newBehaviorData.ShotsBeforeNextReload;
    if (oldBehaviorData.TotalShotsFired !== newBehaviorData.TotalShotsFired)
      this._behaviorData.TotalShotsFired = newBehaviorData.TotalShotsFired;
    if (oldBehaviorData.TotalBulletsCreated !== newBehaviorData.TotalBulletsCreated)
      this._behaviorData.TotalBulletsCreated = newBehaviorData.TotalBulletsCreated;
    if (oldBehaviorData.StartingAmmo !== newBehaviorData.StartingAmmo)
      this._behaviorData.StartingAmmo = newBehaviorData.StartingAmmo;
    if (oldBehaviorData.TotalReloadsCompleted !== newBehaviorData.TotalReloadsCompleted)
      this._behaviorData.TotalReloadsCompleted = newBehaviorData.TotalReloadsCompleted;
    if (oldBehaviorData.UnlimitedAmmo !== newBehaviorData.UnlimitedAmmo)
      this._behaviorData.UnlimitedAmmo = newBehaviorData.UnlimitedAmmo;
    if (oldBehaviorData.ReloadInProgress !== newBehaviorData.ReloadInProgress)
      this._behaviorData.ReloadInProgress = newBehaviorData.ReloadInProgress;
    if (oldBehaviorData.HeatIncreasePerShot !== newBehaviorData.HeatIncreasePerShot)
      this._behaviorData.HeatIncreasePerShot = newBehaviorData.HeatIncreasePerShot;
    if (oldBehaviorData.HeatLevel !== newBehaviorData.HeatLevel)
      this._behaviorData.HeatLevel = newBehaviorData.HeatLevel;
    if (oldBehaviorData.AutomaticReloading !== newBehaviorData.AutomaticReloading)
      this._behaviorData.AutomaticReloading = newBehaviorData.AutomaticReloading;
    if (oldBehaviorData.OverheatDuration !== newBehaviorData.OverheatDuration)
      this._behaviorData.OverheatDuration = newBehaviorData.OverheatDuration;
    if (oldBehaviorData.LinearCoolingRate !== newBehaviorData.LinearCoolingRate)
      this._behaviorData.LinearCoolingRate = newBehaviorData.LinearCoolingRate;
    if (oldBehaviorData.ExponentialCoolingRate !== newBehaviorData.ExponentialCoolingRate)
      this._behaviorData.ExponentialCoolingRate = newBehaviorData.ExponentialCoolingRate;
    if (oldBehaviorData.BulletLayer !== newBehaviorData.BulletLayer)
      this._behaviorData.BulletLayer = newBehaviorData.BulletLayer;
    if (oldBehaviorData.RandomizedAngle !== newBehaviorData.RandomizedAngle)
      this._behaviorData.RandomizedAngle = newBehaviorData.RandomizedAngle;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    FireCooldown: this._behaviorData.FireCooldown,
    HasJustFired: this._behaviorData.HasJustFired,
    RotateBullet: this._behaviorData.RotateBullet,
    FiringArc: this._behaviorData.FiringArc,
    BulletQuantity: this._behaviorData.BulletQuantity,
    AngleVariance: this._behaviorData.AngleVariance,
    BulletSpeedVariance: this._behaviorData.BulletSpeedVariance,
    AmmoQuantity: this._behaviorData.AmmoQuantity,
    ShotsPerReload: this._behaviorData.ShotsPerReload,
    ReloadDuration: this._behaviorData.ReloadDuration,
    MaxAmmo: this._behaviorData.MaxAmmo,
    ShotsBeforeNextReload: this._behaviorData.ShotsBeforeNextReload,
    TotalShotsFired: this._behaviorData.TotalShotsFired,
    TotalBulletsCreated: this._behaviorData.TotalBulletsCreated,
    StartingAmmo: this._behaviorData.StartingAmmo,
    TotalReloadsCompleted: this._behaviorData.TotalReloadsCompleted,
    UnlimitedAmmo: this._behaviorData.UnlimitedAmmo,
    ReloadInProgress: this._behaviorData.ReloadInProgress,
    HeatIncreasePerShot: this._behaviorData.HeatIncreasePerShot,
    HeatLevel: this._behaviorData.HeatLevel,
    AutomaticReloading: this._behaviorData.AutomaticReloading,
    OverheatDuration: this._behaviorData.OverheatDuration,
    LinearCoolingRate: this._behaviorData.LinearCoolingRate,
    ExponentialCoolingRate: this._behaviorData.ExponentialCoolingRate,
    BulletLayer: this._behaviorData.BulletLayer,
    RandomizedAngle: this._behaviorData.RandomizedAngle,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.FireCooldown !== undefined)
      this._behaviorData.FireCooldown = networkSyncData.props.FireCooldown;
    if (networkSyncData.props.HasJustFired !== undefined)
      this._behaviorData.HasJustFired = networkSyncData.props.HasJustFired;
    if (networkSyncData.props.RotateBullet !== undefined)
      this._behaviorData.RotateBullet = networkSyncData.props.RotateBullet;
    if (networkSyncData.props.FiringArc !== undefined)
      this._behaviorData.FiringArc = networkSyncData.props.FiringArc;
    if (networkSyncData.props.BulletQuantity !== undefined)
      this._behaviorData.BulletQuantity = networkSyncData.props.BulletQuantity;
    if (networkSyncData.props.AngleVariance !== undefined)
      this._behaviorData.AngleVariance = networkSyncData.props.AngleVariance;
    if (networkSyncData.props.BulletSpeedVariance !== undefined)
      this._behaviorData.BulletSpeedVariance = networkSyncData.props.BulletSpeedVariance;
    if (networkSyncData.props.AmmoQuantity !== undefined)
      this._behaviorData.AmmoQuantity = networkSyncData.props.AmmoQuantity;
    if (networkSyncData.props.ShotsPerReload !== undefined)
      this._behaviorData.ShotsPerReload = networkSyncData.props.ShotsPerReload;
    if (networkSyncData.props.ReloadDuration !== undefined)
      this._behaviorData.ReloadDuration = networkSyncData.props.ReloadDuration;
    if (networkSyncData.props.MaxAmmo !== undefined)
      this._behaviorData.MaxAmmo = networkSyncData.props.MaxAmmo;
    if (networkSyncData.props.ShotsBeforeNextReload !== undefined)
      this._behaviorData.ShotsBeforeNextReload = networkSyncData.props.ShotsBeforeNextReload;
    if (networkSyncData.props.TotalShotsFired !== undefined)
      this._behaviorData.TotalShotsFired = networkSyncData.props.TotalShotsFired;
    if (networkSyncData.props.TotalBulletsCreated !== undefined)
      this._behaviorData.TotalBulletsCreated = networkSyncData.props.TotalBulletsCreated;
    if (networkSyncData.props.StartingAmmo !== undefined)
      this._behaviorData.StartingAmmo = networkSyncData.props.StartingAmmo;
    if (networkSyncData.props.TotalReloadsCompleted !== undefined)
      this._behaviorData.TotalReloadsCompleted = networkSyncData.props.TotalReloadsCompleted;
    if (networkSyncData.props.UnlimitedAmmo !== undefined)
      this._behaviorData.UnlimitedAmmo = networkSyncData.props.UnlimitedAmmo;
    if (networkSyncData.props.ReloadInProgress !== undefined)
      this._behaviorData.ReloadInProgress = networkSyncData.props.ReloadInProgress;
    if (networkSyncData.props.HeatIncreasePerShot !== undefined)
      this._behaviorData.HeatIncreasePerShot = networkSyncData.props.HeatIncreasePerShot;
    if (networkSyncData.props.HeatLevel !== undefined)
      this._behaviorData.HeatLevel = networkSyncData.props.HeatLevel;
    if (networkSyncData.props.AutomaticReloading !== undefined)
      this._behaviorData.AutomaticReloading = networkSyncData.props.AutomaticReloading;
    if (networkSyncData.props.OverheatDuration !== undefined)
      this._behaviorData.OverheatDuration = networkSyncData.props.OverheatDuration;
    if (networkSyncData.props.LinearCoolingRate !== undefined)
      this._behaviorData.LinearCoolingRate = networkSyncData.props.LinearCoolingRate;
    if (networkSyncData.props.ExponentialCoolingRate !== undefined)
      this._behaviorData.ExponentialCoolingRate = networkSyncData.props.ExponentialCoolingRate;
    if (networkSyncData.props.BulletLayer !== undefined)
      this._behaviorData.BulletLayer = networkSyncData.props.BulletLayer;
    if (networkSyncData.props.RandomizedAngle !== undefined)
      this._behaviorData.RandomizedAngle = networkSyncData.props.RandomizedAngle;
  }

  // Properties:
  
  _getFireCooldown() {
    return this._behaviorData.FireCooldown !== undefined ? this._behaviorData.FireCooldown : Number("0.1") || 0;
  }
  _setFireCooldown(newValue) {
    this._behaviorData.FireCooldown = newValue;
  }
  _getHasJustFired() {
    return this._behaviorData.HasJustFired !== undefined ? this._behaviorData.HasJustFired : false;
  }
  _setHasJustFired(newValue) {
    this._behaviorData.HasJustFired = newValue;
  }
  _toggleHasJustFired() {
    this._setHasJustFired(!this._getHasJustFired());
  }
  _getRotateBullet() {
    return this._behaviorData.RotateBullet !== undefined ? this._behaviorData.RotateBullet : true;
  }
  _setRotateBullet(newValue) {
    this._behaviorData.RotateBullet = newValue;
  }
  _toggleRotateBullet() {
    this._setRotateBullet(!this._getRotateBullet());
  }
  _getFiringArc() {
    return this._behaviorData.FiringArc !== undefined ? this._behaviorData.FiringArc : Number("45") || 0;
  }
  _setFiringArc(newValue) {
    this._behaviorData.FiringArc = newValue;
  }
  _getBulletQuantity() {
    return this._behaviorData.BulletQuantity !== undefined ? this._behaviorData.BulletQuantity : Number("1") || 0;
  }
  _setBulletQuantity(newValue) {
    this._behaviorData.BulletQuantity = newValue;
  }
  _getAngleVariance() {
    return this._behaviorData.AngleVariance !== undefined ? this._behaviorData.AngleVariance : Number("0") || 0;
  }
  _setAngleVariance(newValue) {
    this._behaviorData.AngleVariance = newValue;
  }
  _getBulletSpeedVariance() {
    return this._behaviorData.BulletSpeedVariance !== undefined ? this._behaviorData.BulletSpeedVariance : Number("0") || 0;
  }
  _setBulletSpeedVariance(newValue) {
    this._behaviorData.BulletSpeedVariance = newValue;
  }
  _getAmmoQuantity() {
    return this._behaviorData.AmmoQuantity !== undefined ? this._behaviorData.AmmoQuantity : Number("0") || 0;
  }
  _setAmmoQuantity(newValue) {
    this._behaviorData.AmmoQuantity = newValue;
  }
  _getShotsPerReload() {
    return this._behaviorData.ShotsPerReload !== undefined ? this._behaviorData.ShotsPerReload : Number("0") || 0;
  }
  _setShotsPerReload(newValue) {
    this._behaviorData.ShotsPerReload = newValue;
  }
  _getReloadDuration() {
    return this._behaviorData.ReloadDuration !== undefined ? this._behaviorData.ReloadDuration : Number("1") || 0;
  }
  _setReloadDuration(newValue) {
    this._behaviorData.ReloadDuration = newValue;
  }
  _getMaxAmmo() {
    return this._behaviorData.MaxAmmo !== undefined ? this._behaviorData.MaxAmmo : Number("0") || 0;
  }
  _setMaxAmmo(newValue) {
    this._behaviorData.MaxAmmo = newValue;
  }
  _getShotsBeforeNextReload() {
    return this._behaviorData.ShotsBeforeNextReload !== undefined ? this._behaviorData.ShotsBeforeNextReload : Number("0") || 0;
  }
  _setShotsBeforeNextReload(newValue) {
    this._behaviorData.ShotsBeforeNextReload = newValue;
  }
  _getTotalShotsFired() {
    return this._behaviorData.TotalShotsFired !== undefined ? this._behaviorData.TotalShotsFired : Number("0") || 0;
  }
  _setTotalShotsFired(newValue) {
    this._behaviorData.TotalShotsFired = newValue;
  }
  _getTotalBulletsCreated() {
    return this._behaviorData.TotalBulletsCreated !== undefined ? this._behaviorData.TotalBulletsCreated : Number("0") || 0;
  }
  _setTotalBulletsCreated(newValue) {
    this._behaviorData.TotalBulletsCreated = newValue;
  }
  _getStartingAmmo() {
    return this._behaviorData.StartingAmmo !== undefined ? this._behaviorData.StartingAmmo : Number("0") || 0;
  }
  _setStartingAmmo(newValue) {
    this._behaviorData.StartingAmmo = newValue;
  }
  _getTotalReloadsCompleted() {
    return this._behaviorData.TotalReloadsCompleted !== undefined ? this._behaviorData.TotalReloadsCompleted : Number("0") || 0;
  }
  _setTotalReloadsCompleted(newValue) {
    this._behaviorData.TotalReloadsCompleted = newValue;
  }
  _getUnlimitedAmmo() {
    return this._behaviorData.UnlimitedAmmo !== undefined ? this._behaviorData.UnlimitedAmmo : true;
  }
  _setUnlimitedAmmo(newValue) {
    this._behaviorData.UnlimitedAmmo = newValue;
  }
  _toggleUnlimitedAmmo() {
    this._setUnlimitedAmmo(!this._getUnlimitedAmmo());
  }
  _getReloadInProgress() {
    return this._behaviorData.ReloadInProgress !== undefined ? this._behaviorData.ReloadInProgress : false;
  }
  _setReloadInProgress(newValue) {
    this._behaviorData.ReloadInProgress = newValue;
  }
  _toggleReloadInProgress() {
    this._setReloadInProgress(!this._getReloadInProgress());
  }
  _getHeatIncreasePerShot() {
    return this._behaviorData.HeatIncreasePerShot !== undefined ? this._behaviorData.HeatIncreasePerShot : Number("0") || 0;
  }
  _setHeatIncreasePerShot(newValue) {
    this._behaviorData.HeatIncreasePerShot = newValue;
  }
  _getHeatLevel() {
    return this._behaviorData.HeatLevel !== undefined ? this._behaviorData.HeatLevel : Number("0") || 0;
  }
  _setHeatLevel(newValue) {
    this._behaviorData.HeatLevel = newValue;
  }
  _getAutomaticReloading() {
    return this._behaviorData.AutomaticReloading !== undefined ? this._behaviorData.AutomaticReloading : true;
  }
  _setAutomaticReloading(newValue) {
    this._behaviorData.AutomaticReloading = newValue;
  }
  _toggleAutomaticReloading() {
    this._setAutomaticReloading(!this._getAutomaticReloading());
  }
  _getOverheatDuration() {
    return this._behaviorData.OverheatDuration !== undefined ? this._behaviorData.OverheatDuration : Number("0") || 0;
  }
  _setOverheatDuration(newValue) {
    this._behaviorData.OverheatDuration = newValue;
  }
  _getLinearCoolingRate() {
    return this._behaviorData.LinearCoolingRate !== undefined ? this._behaviorData.LinearCoolingRate : Number("0.1") || 0;
  }
  _setLinearCoolingRate(newValue) {
    this._behaviorData.LinearCoolingRate = newValue;
  }
  _getExponentialCoolingRate() {
    return this._behaviorData.ExponentialCoolingRate !== undefined ? this._behaviorData.ExponentialCoolingRate : Number("0.3") || 0;
  }
  _setExponentialCoolingRate(newValue) {
    this._behaviorData.ExponentialCoolingRate = newValue;
  }
  _getBulletLayer() {
    return this._behaviorData.BulletLayer !== undefined ? this._behaviorData.BulletLayer : "";
  }
  _setBulletLayer(newValue) {
    this._behaviorData.BulletLayer = newValue;
  }
  _getRandomizedAngle() {
    return this._behaviorData.RandomizedAngle !== undefined ? this._behaviorData.RandomizedAngle : Number("0") || 0;
  }
  _setRandomizedAngle(newValue) {
    this._behaviorData.RandomizedAngle = newValue;
  }
}

/**
 * Shared data generated from Fire bullets
 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.SharedData = class FireBulletSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FireBullet_FireBulletSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FireBullet_FireBulletSharedData = new gdjs.evtsExt__FireBullet__FireBullet.FireBullet.SharedData(
      initialData
    );
  }
  return instanceContainer._FireBullet_FireBulletSharedData;
}

// Methods:
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("__FireBullet.FiringCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartingAmmo());
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload());
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUnlimitedAmmo()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() - 1));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() - (1));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReloadAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOverheated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__FireBullet.OverheatDuration");
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot()));
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(false);
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__FireBullet.FiringCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalShotsFired(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalShotsFired() + (1));
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload());
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity()));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__FireBullet.ReloadingTimer") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalReloadsCompleted(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalReloadsCompleted() + (1));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadInProgress(false);
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate()));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireTowardObjectContext_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects1});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Fire(eventsFunctionContext.getArgument("XPosition"), eventsFunctionContext.getArgument("YPosition"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireTowardObjectContext_9546GDBulletObjects1Objects, (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1[i].getAngleToObject((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1.length !== 0 ? gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1[0] : null))), eventsFunctionContext.getArgument("Speed"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObject = function(XPosition, YPosition, Bullet, TargetObject, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardObjectContext.GDTargetObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireTowardPositionContext_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Fire(eventsFunctionContext.getArgument("XPosition"), eventsFunctionContext.getArgument("YPosition"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireTowardPositionContext_9546GDBulletObjects1Objects, (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1[i].getAngleToPosition(eventsFunctionContext.getArgument("TargetXPosition"), eventsFunctionContext.getArgument("TargetYPosition"))), eventsFunctionContext.getArgument("Speed"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPosition = function(XPosition, YPosition, Bullet, TargetXPosition, TargetYPosition, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "TargetXPosition") return TargetXPosition;
if (argName === "TargetYPosition") return TargetYPosition;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects4= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects4= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireContext_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireContext_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FiringArc((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getArgument("Angle") + gdjs.evtTools.common.lerp(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc()) / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc() / 2, eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity() - 1)));
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FiringArc((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getArgument("Angle") + gdjs.evtTools.common.lerp(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc()) / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc() / 2, eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity()));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FireSingleBullet(eventsFunctionContext.getArgument("XPosition"), eventsFunctionContext.getArgument("YPosition"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireContext_9546GDBulletObjects3Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getArgument("Speed"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{eventsFunctionContext.localVariables[0].getFromIndex(1).add(1);
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity();
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MultiShotAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BulletIndex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FireSingleBullet(eventsFunctionContext.getArgument("XPosition"), eventsFunctionContext.getArgument("YPosition"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireContext_9546GDBulletObjects2Objects, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getArgument("Speed"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity() > 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReadyToShoot((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(true);
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.Fire = function(XPosition, YPosition, Bullet, Angle, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects4.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects4.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects4= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects4= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireSingleBulletContext_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRandomizedAngle(eventsFunctionContext.getArgument("Angle") + gdjs.randomInRange(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance()));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].addPolarForce(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRandomizedAngle(), eventsFunctionContext.getArgument("Speed") + gdjs.randomInRange(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletSpeedVariance()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletSpeedVariance()), 1);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateBullet() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2[i].setAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRandomizedAngle());
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.mapOfGDgdjs_9546evtsExt_9595_9595FireBullet_9595_9595FireBullet_9546FireBullet_9546prototype_9546FireSingleBulletContext_9546GDBulletObjects2Objects, eventsFunctionContext.getArgument("XPosition"), eventsFunctionContext.getArgument("YPosition"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletLayer());
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalBulletsCreated(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalBulletsCreated() + (1));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBullet = function(XPosition, YPosition, Bullet, Angle, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects4.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects4.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOutOfAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadInProgress(true);
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].resetTimer("__FireBullet.ReloadingTimer");
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmo = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFired = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateBullet() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabled = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArc = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFiringArc(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetFiringArcOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArc = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVariance = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngleVariance(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAngleVarianceOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVariance = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletSpeedVariance(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVariance = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletSpeedVarianceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBulletSpeedVariance(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetBulletSpeedVarianceOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVariance = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletSpeedVarianceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantity = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBulletQuantity(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetBulletQuantityOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantity = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBulletLayer(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayer = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletLayerContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("RotateBullet") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateBullet(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("RotateBullet") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateBullet(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBullet = function(RotateBullet, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "RotateBullet") return RotateBullet;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("UnlimitedAmmo") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedAmmo(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("UnlimitedAmmo") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedAmmo(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmo = function(UnlimitedAmmo, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "UnlimitedAmmo") return UnlimitedAmmo;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFireCooldown(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.Cooldown = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFireCooldown(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCooldownOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldown = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadDuration(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDuration = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetReloadDurationOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDuration = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDuration = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOverheatDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetOverheatDurationOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDuration = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantity = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.max(0, eventsFunctionContext.getArgument("Value")));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAmmoQuantityOp(Math.max(0, eventsFunctionContext.getArgument("Value")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantity = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShot = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatIncreasePerShot(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeatPerShotOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShot = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmo = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxAmmo(eventsFunctionContext.getArgument("Value"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity()));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetMaxAmmoOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmo = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalShotsFired(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFired = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalBulletsCreated(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalReloadsCompleted(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompleted = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReload = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsPerReload(eventsFunctionContext.getArgument("Value"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload());
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetShotsPerReloadOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReload = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutomaticReloading(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutomaticReloading(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReload = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRate = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLinearCoolingRate(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetLinearCoolingRateOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRate = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRate = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setExponentialCoolingRate(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOp = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateOpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetExponentialCoolingRateOp(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRate = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() + (eventsFunctionContext.getArgument("AmmoGained")));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReloadAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmo = function(AmmoGained, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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
if (argName === "AmmoGained") return AmmoGained;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletLayer(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayer = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletLayerContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.min(1, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevel = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalShotsFired(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFired = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalBulletsCreated(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalReloadsCompleted(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompleted = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload(); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReload = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFireCooldown() - (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__FireBullet.FiringCooldown"))); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeft = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__FireBullet.OverheatDuration") > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration() - (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__FireBullet.OverheatDuration"))); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeft = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__FireBullet.ReloadingTimer") > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadDuration() - (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__FireBullet.ReloadingTimer"))); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeft = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadTimeLeftContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadInProgress() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgress = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].behaviorActivated(eventsFunctionContext.getBehaviorName("Behavior")) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOutOfAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFiringCooldownActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOverheated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = k;
}
}
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1_1final, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShoot = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabled = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUnlimitedAmmo() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmo = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmo = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeeded = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() >= 1 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OverheatTimeLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects2= [];


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CooldownTimeLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActive = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
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

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("FireBullet::FireBullet", gdjs.evtsExt__FireBullet__FireBullet.FireBullet);
