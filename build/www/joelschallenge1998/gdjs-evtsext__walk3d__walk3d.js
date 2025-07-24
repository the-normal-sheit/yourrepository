
gdjs.evtsExt__Walk3D__Walk3D = gdjs.evtsExt__Walk3D__Walk3D || {};

/**
 * Behavior generated from 3D walk
 */
gdjs.evtsExt__Walk3D__Walk3D.Walk3D = class Walk3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.RotationSpeedMax = behaviorData.RotationSpeedMax !== undefined ? behaviorData.RotationSpeedMax : Number("180") || 0;
    this._behaviorData.RotationAcceleration = behaviorData.RotationAcceleration !== undefined ? behaviorData.RotationAcceleration : Number("720") || 0;
    this._behaviorData.RotationDeceleration = behaviorData.RotationDeceleration !== undefined ? behaviorData.RotationDeceleration : Number("720") || 0;
    this._behaviorData.TranslationSpeedMax = behaviorData.TranslationSpeedMax !== undefined ? behaviorData.TranslationSpeedMax : Number("400") || 0;
    this._behaviorData.TranslationAcceleration = behaviorData.TranslationAcceleration !== undefined ? behaviorData.TranslationAcceleration : Number("1600") || 0;
    this._behaviorData.TranslationDeceleration = behaviorData.TranslationDeceleration !== undefined ? behaviorData.TranslationDeceleration : Number("1600") || 0;
    this._behaviorData.CurrentRotationSpeed = Number("0") || 0;
    this._behaviorData.PreviousRotationSpeed = Number("0") || 0;
    this._behaviorData.CurrentForwardSpeed = Number("0") || 0;
    this._behaviorData.CurrentSidewaysSpeed = Number("0") || 0;
    this._behaviorData.PreviousForwardSpeed = Number("0") || 0;
    this._behaviorData.PreviousSidewaysSpeed = Number("0") || 0;
    this._behaviorData.HasPressedTurnLeft = false;
    this._behaviorData.HasPressedTurnRight = false;
    this._behaviorData.HasPressedTurnLeftLast = false;
    this._behaviorData.HadPressedTurnLeft = false;
    this._behaviorData.HadPressedTurnRight = false;
    this._behaviorData.HasPressedMoveForward = false;
    this._behaviorData.HasPressedMoveBackward = false;
    this._behaviorData.HadPressedMoveForward = false;
    this._behaviorData.HadPressedMoveBackward = false;
    this._behaviorData.HasPressedMoveBackwardLast = false;
    this._behaviorData.HasPressedMoveLeft = false;
    this._behaviorData.HasPressedMoveRight = false;
    this._behaviorData.HadPressedMoveLeft = false;
    this._behaviorData.HadPressedMoveRight = false;
    this._behaviorData.HasPressedMoveLeftLast = false;
    this._behaviorData.TargetedForwardSpeed = Number("0") || 0;
    this._behaviorData.TargetedSidewaysSpeed = Number("0") || 0;
    this._behaviorData.TargetedRotationSpeed = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.RotationSpeedMax !== newBehaviorData.RotationSpeedMax)
      this._behaviorData.RotationSpeedMax = newBehaviorData.RotationSpeedMax;
    if (oldBehaviorData.RotationAcceleration !== newBehaviorData.RotationAcceleration)
      this._behaviorData.RotationAcceleration = newBehaviorData.RotationAcceleration;
    if (oldBehaviorData.RotationDeceleration !== newBehaviorData.RotationDeceleration)
      this._behaviorData.RotationDeceleration = newBehaviorData.RotationDeceleration;
    if (oldBehaviorData.TranslationSpeedMax !== newBehaviorData.TranslationSpeedMax)
      this._behaviorData.TranslationSpeedMax = newBehaviorData.TranslationSpeedMax;
    if (oldBehaviorData.TranslationAcceleration !== newBehaviorData.TranslationAcceleration)
      this._behaviorData.TranslationAcceleration = newBehaviorData.TranslationAcceleration;
    if (oldBehaviorData.TranslationDeceleration !== newBehaviorData.TranslationDeceleration)
      this._behaviorData.TranslationDeceleration = newBehaviorData.TranslationDeceleration;
    if (oldBehaviorData.CurrentRotationSpeed !== newBehaviorData.CurrentRotationSpeed)
      this._behaviorData.CurrentRotationSpeed = newBehaviorData.CurrentRotationSpeed;
    if (oldBehaviorData.PreviousRotationSpeed !== newBehaviorData.PreviousRotationSpeed)
      this._behaviorData.PreviousRotationSpeed = newBehaviorData.PreviousRotationSpeed;
    if (oldBehaviorData.CurrentForwardSpeed !== newBehaviorData.CurrentForwardSpeed)
      this._behaviorData.CurrentForwardSpeed = newBehaviorData.CurrentForwardSpeed;
    if (oldBehaviorData.CurrentSidewaysSpeed !== newBehaviorData.CurrentSidewaysSpeed)
      this._behaviorData.CurrentSidewaysSpeed = newBehaviorData.CurrentSidewaysSpeed;
    if (oldBehaviorData.PreviousForwardSpeed !== newBehaviorData.PreviousForwardSpeed)
      this._behaviorData.PreviousForwardSpeed = newBehaviorData.PreviousForwardSpeed;
    if (oldBehaviorData.PreviousSidewaysSpeed !== newBehaviorData.PreviousSidewaysSpeed)
      this._behaviorData.PreviousSidewaysSpeed = newBehaviorData.PreviousSidewaysSpeed;
    if (oldBehaviorData.HasPressedTurnLeft !== newBehaviorData.HasPressedTurnLeft)
      this._behaviorData.HasPressedTurnLeft = newBehaviorData.HasPressedTurnLeft;
    if (oldBehaviorData.HasPressedTurnRight !== newBehaviorData.HasPressedTurnRight)
      this._behaviorData.HasPressedTurnRight = newBehaviorData.HasPressedTurnRight;
    if (oldBehaviorData.HasPressedTurnLeftLast !== newBehaviorData.HasPressedTurnLeftLast)
      this._behaviorData.HasPressedTurnLeftLast = newBehaviorData.HasPressedTurnLeftLast;
    if (oldBehaviorData.HadPressedTurnLeft !== newBehaviorData.HadPressedTurnLeft)
      this._behaviorData.HadPressedTurnLeft = newBehaviorData.HadPressedTurnLeft;
    if (oldBehaviorData.HadPressedTurnRight !== newBehaviorData.HadPressedTurnRight)
      this._behaviorData.HadPressedTurnRight = newBehaviorData.HadPressedTurnRight;
    if (oldBehaviorData.HasPressedMoveForward !== newBehaviorData.HasPressedMoveForward)
      this._behaviorData.HasPressedMoveForward = newBehaviorData.HasPressedMoveForward;
    if (oldBehaviorData.HasPressedMoveBackward !== newBehaviorData.HasPressedMoveBackward)
      this._behaviorData.HasPressedMoveBackward = newBehaviorData.HasPressedMoveBackward;
    if (oldBehaviorData.HadPressedMoveForward !== newBehaviorData.HadPressedMoveForward)
      this._behaviorData.HadPressedMoveForward = newBehaviorData.HadPressedMoveForward;
    if (oldBehaviorData.HadPressedMoveBackward !== newBehaviorData.HadPressedMoveBackward)
      this._behaviorData.HadPressedMoveBackward = newBehaviorData.HadPressedMoveBackward;
    if (oldBehaviorData.HasPressedMoveBackwardLast !== newBehaviorData.HasPressedMoveBackwardLast)
      this._behaviorData.HasPressedMoveBackwardLast = newBehaviorData.HasPressedMoveBackwardLast;
    if (oldBehaviorData.HasPressedMoveLeft !== newBehaviorData.HasPressedMoveLeft)
      this._behaviorData.HasPressedMoveLeft = newBehaviorData.HasPressedMoveLeft;
    if (oldBehaviorData.HasPressedMoveRight !== newBehaviorData.HasPressedMoveRight)
      this._behaviorData.HasPressedMoveRight = newBehaviorData.HasPressedMoveRight;
    if (oldBehaviorData.HadPressedMoveLeft !== newBehaviorData.HadPressedMoveLeft)
      this._behaviorData.HadPressedMoveLeft = newBehaviorData.HadPressedMoveLeft;
    if (oldBehaviorData.HadPressedMoveRight !== newBehaviorData.HadPressedMoveRight)
      this._behaviorData.HadPressedMoveRight = newBehaviorData.HadPressedMoveRight;
    if (oldBehaviorData.HasPressedMoveLeftLast !== newBehaviorData.HasPressedMoveLeftLast)
      this._behaviorData.HasPressedMoveLeftLast = newBehaviorData.HasPressedMoveLeftLast;
    if (oldBehaviorData.TargetedForwardSpeed !== newBehaviorData.TargetedForwardSpeed)
      this._behaviorData.TargetedForwardSpeed = newBehaviorData.TargetedForwardSpeed;
    if (oldBehaviorData.TargetedSidewaysSpeed !== newBehaviorData.TargetedSidewaysSpeed)
      this._behaviorData.TargetedSidewaysSpeed = newBehaviorData.TargetedSidewaysSpeed;
    if (oldBehaviorData.TargetedRotationSpeed !== newBehaviorData.TargetedRotationSpeed)
      this._behaviorData.TargetedRotationSpeed = newBehaviorData.TargetedRotationSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    RotationSpeedMax: this._behaviorData.RotationSpeedMax,
    RotationAcceleration: this._behaviorData.RotationAcceleration,
    RotationDeceleration: this._behaviorData.RotationDeceleration,
    TranslationSpeedMax: this._behaviorData.TranslationSpeedMax,
    TranslationAcceleration: this._behaviorData.TranslationAcceleration,
    TranslationDeceleration: this._behaviorData.TranslationDeceleration,
    CurrentRotationSpeed: this._behaviorData.CurrentRotationSpeed,
    PreviousRotationSpeed: this._behaviorData.PreviousRotationSpeed,
    CurrentForwardSpeed: this._behaviorData.CurrentForwardSpeed,
    CurrentSidewaysSpeed: this._behaviorData.CurrentSidewaysSpeed,
    PreviousForwardSpeed: this._behaviorData.PreviousForwardSpeed,
    PreviousSidewaysSpeed: this._behaviorData.PreviousSidewaysSpeed,
    HasPressedTurnLeft: this._behaviorData.HasPressedTurnLeft,
    HasPressedTurnRight: this._behaviorData.HasPressedTurnRight,
    HasPressedTurnLeftLast: this._behaviorData.HasPressedTurnLeftLast,
    HadPressedTurnLeft: this._behaviorData.HadPressedTurnLeft,
    HadPressedTurnRight: this._behaviorData.HadPressedTurnRight,
    HasPressedMoveForward: this._behaviorData.HasPressedMoveForward,
    HasPressedMoveBackward: this._behaviorData.HasPressedMoveBackward,
    HadPressedMoveForward: this._behaviorData.HadPressedMoveForward,
    HadPressedMoveBackward: this._behaviorData.HadPressedMoveBackward,
    HasPressedMoveBackwardLast: this._behaviorData.HasPressedMoveBackwardLast,
    HasPressedMoveLeft: this._behaviorData.HasPressedMoveLeft,
    HasPressedMoveRight: this._behaviorData.HasPressedMoveRight,
    HadPressedMoveLeft: this._behaviorData.HadPressedMoveLeft,
    HadPressedMoveRight: this._behaviorData.HadPressedMoveRight,
    HasPressedMoveLeftLast: this._behaviorData.HasPressedMoveLeftLast,
    TargetedForwardSpeed: this._behaviorData.TargetedForwardSpeed,
    TargetedSidewaysSpeed: this._behaviorData.TargetedSidewaysSpeed,
    TargetedRotationSpeed: this._behaviorData.TargetedRotationSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.RotationSpeedMax !== undefined)
      this._behaviorData.RotationSpeedMax = networkSyncData.props.RotationSpeedMax;
    if (networkSyncData.props.RotationAcceleration !== undefined)
      this._behaviorData.RotationAcceleration = networkSyncData.props.RotationAcceleration;
    if (networkSyncData.props.RotationDeceleration !== undefined)
      this._behaviorData.RotationDeceleration = networkSyncData.props.RotationDeceleration;
    if (networkSyncData.props.TranslationSpeedMax !== undefined)
      this._behaviorData.TranslationSpeedMax = networkSyncData.props.TranslationSpeedMax;
    if (networkSyncData.props.TranslationAcceleration !== undefined)
      this._behaviorData.TranslationAcceleration = networkSyncData.props.TranslationAcceleration;
    if (networkSyncData.props.TranslationDeceleration !== undefined)
      this._behaviorData.TranslationDeceleration = networkSyncData.props.TranslationDeceleration;
    if (networkSyncData.props.CurrentRotationSpeed !== undefined)
      this._behaviorData.CurrentRotationSpeed = networkSyncData.props.CurrentRotationSpeed;
    if (networkSyncData.props.PreviousRotationSpeed !== undefined)
      this._behaviorData.PreviousRotationSpeed = networkSyncData.props.PreviousRotationSpeed;
    if (networkSyncData.props.CurrentForwardSpeed !== undefined)
      this._behaviorData.CurrentForwardSpeed = networkSyncData.props.CurrentForwardSpeed;
    if (networkSyncData.props.CurrentSidewaysSpeed !== undefined)
      this._behaviorData.CurrentSidewaysSpeed = networkSyncData.props.CurrentSidewaysSpeed;
    if (networkSyncData.props.PreviousForwardSpeed !== undefined)
      this._behaviorData.PreviousForwardSpeed = networkSyncData.props.PreviousForwardSpeed;
    if (networkSyncData.props.PreviousSidewaysSpeed !== undefined)
      this._behaviorData.PreviousSidewaysSpeed = networkSyncData.props.PreviousSidewaysSpeed;
    if (networkSyncData.props.HasPressedTurnLeft !== undefined)
      this._behaviorData.HasPressedTurnLeft = networkSyncData.props.HasPressedTurnLeft;
    if (networkSyncData.props.HasPressedTurnRight !== undefined)
      this._behaviorData.HasPressedTurnRight = networkSyncData.props.HasPressedTurnRight;
    if (networkSyncData.props.HasPressedTurnLeftLast !== undefined)
      this._behaviorData.HasPressedTurnLeftLast = networkSyncData.props.HasPressedTurnLeftLast;
    if (networkSyncData.props.HadPressedTurnLeft !== undefined)
      this._behaviorData.HadPressedTurnLeft = networkSyncData.props.HadPressedTurnLeft;
    if (networkSyncData.props.HadPressedTurnRight !== undefined)
      this._behaviorData.HadPressedTurnRight = networkSyncData.props.HadPressedTurnRight;
    if (networkSyncData.props.HasPressedMoveForward !== undefined)
      this._behaviorData.HasPressedMoveForward = networkSyncData.props.HasPressedMoveForward;
    if (networkSyncData.props.HasPressedMoveBackward !== undefined)
      this._behaviorData.HasPressedMoveBackward = networkSyncData.props.HasPressedMoveBackward;
    if (networkSyncData.props.HadPressedMoveForward !== undefined)
      this._behaviorData.HadPressedMoveForward = networkSyncData.props.HadPressedMoveForward;
    if (networkSyncData.props.HadPressedMoveBackward !== undefined)
      this._behaviorData.HadPressedMoveBackward = networkSyncData.props.HadPressedMoveBackward;
    if (networkSyncData.props.HasPressedMoveBackwardLast !== undefined)
      this._behaviorData.HasPressedMoveBackwardLast = networkSyncData.props.HasPressedMoveBackwardLast;
    if (networkSyncData.props.HasPressedMoveLeft !== undefined)
      this._behaviorData.HasPressedMoveLeft = networkSyncData.props.HasPressedMoveLeft;
    if (networkSyncData.props.HasPressedMoveRight !== undefined)
      this._behaviorData.HasPressedMoveRight = networkSyncData.props.HasPressedMoveRight;
    if (networkSyncData.props.HadPressedMoveLeft !== undefined)
      this._behaviorData.HadPressedMoveLeft = networkSyncData.props.HadPressedMoveLeft;
    if (networkSyncData.props.HadPressedMoveRight !== undefined)
      this._behaviorData.HadPressedMoveRight = networkSyncData.props.HadPressedMoveRight;
    if (networkSyncData.props.HasPressedMoveLeftLast !== undefined)
      this._behaviorData.HasPressedMoveLeftLast = networkSyncData.props.HasPressedMoveLeftLast;
    if (networkSyncData.props.TargetedForwardSpeed !== undefined)
      this._behaviorData.TargetedForwardSpeed = networkSyncData.props.TargetedForwardSpeed;
    if (networkSyncData.props.TargetedSidewaysSpeed !== undefined)
      this._behaviorData.TargetedSidewaysSpeed = networkSyncData.props.TargetedSidewaysSpeed;
    if (networkSyncData.props.TargetedRotationSpeed !== undefined)
      this._behaviorData.TargetedRotationSpeed = networkSyncData.props.TargetedRotationSpeed;
  }

  // Properties:
  
  _getRotationSpeedMax() {
    return this._behaviorData.RotationSpeedMax !== undefined ? this._behaviorData.RotationSpeedMax : Number("180") || 0;
  }
  _setRotationSpeedMax(newValue) {
    this._behaviorData.RotationSpeedMax = newValue;
  }
  _getRotationAcceleration() {
    return this._behaviorData.RotationAcceleration !== undefined ? this._behaviorData.RotationAcceleration : Number("720") || 0;
  }
  _setRotationAcceleration(newValue) {
    this._behaviorData.RotationAcceleration = newValue;
  }
  _getRotationDeceleration() {
    return this._behaviorData.RotationDeceleration !== undefined ? this._behaviorData.RotationDeceleration : Number("720") || 0;
  }
  _setRotationDeceleration(newValue) {
    this._behaviorData.RotationDeceleration = newValue;
  }
  _getTranslationSpeedMax() {
    return this._behaviorData.TranslationSpeedMax !== undefined ? this._behaviorData.TranslationSpeedMax : Number("400") || 0;
  }
  _setTranslationSpeedMax(newValue) {
    this._behaviorData.TranslationSpeedMax = newValue;
  }
  _getTranslationAcceleration() {
    return this._behaviorData.TranslationAcceleration !== undefined ? this._behaviorData.TranslationAcceleration : Number("1600") || 0;
  }
  _setTranslationAcceleration(newValue) {
    this._behaviorData.TranslationAcceleration = newValue;
  }
  _getTranslationDeceleration() {
    return this._behaviorData.TranslationDeceleration !== undefined ? this._behaviorData.TranslationDeceleration : Number("1600") || 0;
  }
  _setTranslationDeceleration(newValue) {
    this._behaviorData.TranslationDeceleration = newValue;
  }
  _getCurrentRotationSpeed() {
    return this._behaviorData.CurrentRotationSpeed !== undefined ? this._behaviorData.CurrentRotationSpeed : Number("0") || 0;
  }
  _setCurrentRotationSpeed(newValue) {
    this._behaviorData.CurrentRotationSpeed = newValue;
  }
  _getPreviousRotationSpeed() {
    return this._behaviorData.PreviousRotationSpeed !== undefined ? this._behaviorData.PreviousRotationSpeed : Number("0") || 0;
  }
  _setPreviousRotationSpeed(newValue) {
    this._behaviorData.PreviousRotationSpeed = newValue;
  }
  _getCurrentForwardSpeed() {
    return this._behaviorData.CurrentForwardSpeed !== undefined ? this._behaviorData.CurrentForwardSpeed : Number("0") || 0;
  }
  _setCurrentForwardSpeed(newValue) {
    this._behaviorData.CurrentForwardSpeed = newValue;
  }
  _getCurrentSidewaysSpeed() {
    return this._behaviorData.CurrentSidewaysSpeed !== undefined ? this._behaviorData.CurrentSidewaysSpeed : Number("0") || 0;
  }
  _setCurrentSidewaysSpeed(newValue) {
    this._behaviorData.CurrentSidewaysSpeed = newValue;
  }
  _getPreviousForwardSpeed() {
    return this._behaviorData.PreviousForwardSpeed !== undefined ? this._behaviorData.PreviousForwardSpeed : Number("0") || 0;
  }
  _setPreviousForwardSpeed(newValue) {
    this._behaviorData.PreviousForwardSpeed = newValue;
  }
  _getPreviousSidewaysSpeed() {
    return this._behaviorData.PreviousSidewaysSpeed !== undefined ? this._behaviorData.PreviousSidewaysSpeed : Number("0") || 0;
  }
  _setPreviousSidewaysSpeed(newValue) {
    this._behaviorData.PreviousSidewaysSpeed = newValue;
  }
  _getHasPressedTurnLeft() {
    return this._behaviorData.HasPressedTurnLeft !== undefined ? this._behaviorData.HasPressedTurnLeft : false;
  }
  _setHasPressedTurnLeft(newValue) {
    this._behaviorData.HasPressedTurnLeft = newValue;
  }
  _toggleHasPressedTurnLeft() {
    this._setHasPressedTurnLeft(!this._getHasPressedTurnLeft());
  }
  _getHasPressedTurnRight() {
    return this._behaviorData.HasPressedTurnRight !== undefined ? this._behaviorData.HasPressedTurnRight : false;
  }
  _setHasPressedTurnRight(newValue) {
    this._behaviorData.HasPressedTurnRight = newValue;
  }
  _toggleHasPressedTurnRight() {
    this._setHasPressedTurnRight(!this._getHasPressedTurnRight());
  }
  _getHasPressedTurnLeftLast() {
    return this._behaviorData.HasPressedTurnLeftLast !== undefined ? this._behaviorData.HasPressedTurnLeftLast : false;
  }
  _setHasPressedTurnLeftLast(newValue) {
    this._behaviorData.HasPressedTurnLeftLast = newValue;
  }
  _toggleHasPressedTurnLeftLast() {
    this._setHasPressedTurnLeftLast(!this._getHasPressedTurnLeftLast());
  }
  _getHadPressedTurnLeft() {
    return this._behaviorData.HadPressedTurnLeft !== undefined ? this._behaviorData.HadPressedTurnLeft : false;
  }
  _setHadPressedTurnLeft(newValue) {
    this._behaviorData.HadPressedTurnLeft = newValue;
  }
  _toggleHadPressedTurnLeft() {
    this._setHadPressedTurnLeft(!this._getHadPressedTurnLeft());
  }
  _getHadPressedTurnRight() {
    return this._behaviorData.HadPressedTurnRight !== undefined ? this._behaviorData.HadPressedTurnRight : false;
  }
  _setHadPressedTurnRight(newValue) {
    this._behaviorData.HadPressedTurnRight = newValue;
  }
  _toggleHadPressedTurnRight() {
    this._setHadPressedTurnRight(!this._getHadPressedTurnRight());
  }
  _getHasPressedMoveForward() {
    return this._behaviorData.HasPressedMoveForward !== undefined ? this._behaviorData.HasPressedMoveForward : false;
  }
  _setHasPressedMoveForward(newValue) {
    this._behaviorData.HasPressedMoveForward = newValue;
  }
  _toggleHasPressedMoveForward() {
    this._setHasPressedMoveForward(!this._getHasPressedMoveForward());
  }
  _getHasPressedMoveBackward() {
    return this._behaviorData.HasPressedMoveBackward !== undefined ? this._behaviorData.HasPressedMoveBackward : false;
  }
  _setHasPressedMoveBackward(newValue) {
    this._behaviorData.HasPressedMoveBackward = newValue;
  }
  _toggleHasPressedMoveBackward() {
    this._setHasPressedMoveBackward(!this._getHasPressedMoveBackward());
  }
  _getHadPressedMoveForward() {
    return this._behaviorData.HadPressedMoveForward !== undefined ? this._behaviorData.HadPressedMoveForward : false;
  }
  _setHadPressedMoveForward(newValue) {
    this._behaviorData.HadPressedMoveForward = newValue;
  }
  _toggleHadPressedMoveForward() {
    this._setHadPressedMoveForward(!this._getHadPressedMoveForward());
  }
  _getHadPressedMoveBackward() {
    return this._behaviorData.HadPressedMoveBackward !== undefined ? this._behaviorData.HadPressedMoveBackward : false;
  }
  _setHadPressedMoveBackward(newValue) {
    this._behaviorData.HadPressedMoveBackward = newValue;
  }
  _toggleHadPressedMoveBackward() {
    this._setHadPressedMoveBackward(!this._getHadPressedMoveBackward());
  }
  _getHasPressedMoveBackwardLast() {
    return this._behaviorData.HasPressedMoveBackwardLast !== undefined ? this._behaviorData.HasPressedMoveBackwardLast : false;
  }
  _setHasPressedMoveBackwardLast(newValue) {
    this._behaviorData.HasPressedMoveBackwardLast = newValue;
  }
  _toggleHasPressedMoveBackwardLast() {
    this._setHasPressedMoveBackwardLast(!this._getHasPressedMoveBackwardLast());
  }
  _getHasPressedMoveLeft() {
    return this._behaviorData.HasPressedMoveLeft !== undefined ? this._behaviorData.HasPressedMoveLeft : false;
  }
  _setHasPressedMoveLeft(newValue) {
    this._behaviorData.HasPressedMoveLeft = newValue;
  }
  _toggleHasPressedMoveLeft() {
    this._setHasPressedMoveLeft(!this._getHasPressedMoveLeft());
  }
  _getHasPressedMoveRight() {
    return this._behaviorData.HasPressedMoveRight !== undefined ? this._behaviorData.HasPressedMoveRight : false;
  }
  _setHasPressedMoveRight(newValue) {
    this._behaviorData.HasPressedMoveRight = newValue;
  }
  _toggleHasPressedMoveRight() {
    this._setHasPressedMoveRight(!this._getHasPressedMoveRight());
  }
  _getHadPressedMoveLeft() {
    return this._behaviorData.HadPressedMoveLeft !== undefined ? this._behaviorData.HadPressedMoveLeft : false;
  }
  _setHadPressedMoveLeft(newValue) {
    this._behaviorData.HadPressedMoveLeft = newValue;
  }
  _toggleHadPressedMoveLeft() {
    this._setHadPressedMoveLeft(!this._getHadPressedMoveLeft());
  }
  _getHadPressedMoveRight() {
    return this._behaviorData.HadPressedMoveRight !== undefined ? this._behaviorData.HadPressedMoveRight : false;
  }
  _setHadPressedMoveRight(newValue) {
    this._behaviorData.HadPressedMoveRight = newValue;
  }
  _toggleHadPressedMoveRight() {
    this._setHadPressedMoveRight(!this._getHadPressedMoveRight());
  }
  _getHasPressedMoveLeftLast() {
    return this._behaviorData.HasPressedMoveLeftLast !== undefined ? this._behaviorData.HasPressedMoveLeftLast : false;
  }
  _setHasPressedMoveLeftLast(newValue) {
    this._behaviorData.HasPressedMoveLeftLast = newValue;
  }
  _toggleHasPressedMoveLeftLast() {
    this._setHasPressedMoveLeftLast(!this._getHasPressedMoveLeftLast());
  }
  _getTargetedForwardSpeed() {
    return this._behaviorData.TargetedForwardSpeed !== undefined ? this._behaviorData.TargetedForwardSpeed : Number("0") || 0;
  }
  _setTargetedForwardSpeed(newValue) {
    this._behaviorData.TargetedForwardSpeed = newValue;
  }
  _getTargetedSidewaysSpeed() {
    return this._behaviorData.TargetedSidewaysSpeed !== undefined ? this._behaviorData.TargetedSidewaysSpeed : Number("0") || 0;
  }
  _setTargetedSidewaysSpeed(newValue) {
    this._behaviorData.TargetedSidewaysSpeed = newValue;
  }
  _getTargetedRotationSpeed() {
    return this._behaviorData.TargetedRotationSpeed !== undefined ? this._behaviorData.TargetedRotationSpeed : Number("0") || 0;
  }
  _setTargetedRotationSpeed(newValue) {
    this._behaviorData.TargetedRotationSpeed = newValue;
  }
}

/**
 * Shared data generated from 3D walk
 */
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.SharedData = class Walk3DSharedData {
  constructor(sharedData) {
    
    this.Cos = Number("0") || 0;
    this.Sin = sharedData.Sin !== undefined ? sharedData.Sin : Number("0") || 0;
  }
  
  // Shared properties:
  
  _getCos() {
    return this.Cos !== undefined ? this.Cos : Number("0") || 0;
  }
  _setCos(newValue) {
    this.Cos = newValue;
  }
  _getSin() {
    return this.Sin !== undefined ? this.Sin : Number("0") || 0;
  }
  _setSin(newValue) {
    this.Sin = newValue;
  }
}

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Walk3D_Walk3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Walk3D_Walk3DSharedData = new gdjs.evtsExt__Walk3D__Walk3D.Walk3D.SharedData(
      initialData
    );
  }
  return instanceContainer._Walk3D_Walk3DSharedData;
}

// Methods:
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousRotationSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnRight()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeftLast() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeedMax()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnRight() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeft()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeftLast()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeedMax());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAngle(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getAngle() + ((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousRotationSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed()) / 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedTurnLeft(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedTurnLeft(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnRight() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedTurnRight(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedTurnRight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedTurnRight(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnLeft(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnRight(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationSpeed(0);
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousForwardSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackwardLast() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedForwardSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackward()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackwardLast()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedForwardSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedForwardSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveBackward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveBackward(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveBackward(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveForward(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveForward(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveBackward(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveForward(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedForwardSpeed(0);
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed()));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


{

/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0));
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousSidewaysSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveRight()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveLeftLast() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSidewaysSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveRight() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveLeft()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveLeftLast()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSidewaysSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSidewaysSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveLeft(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveLeft(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveRight() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveRight(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveRight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHadPressedMoveRight(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveLeft(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveRight(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSidewaysSpeed(0);
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].putAroundObject(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i], (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousForwardSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed()) / 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].putAroundObject(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i], (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSidewaysSpeed() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed()) / 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()) + 90);
}
}}

}


};gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedTurnLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnLeftLast(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnLeft(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnLeftKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedTurnRight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnLeftLast(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedTurnRight(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateTurnRightKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveBackwardLast(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveBackward(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveForward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveBackwardLast(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveForward(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveLeftLast(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveLeft(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveLeftKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHadPressedMoveRight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveLeftLast(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveRight(true);
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKey = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveRightKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setCos(Math.cos(gdjs.toRad(-(eventsFunctionContext.getArgument("Angle")))));
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setSin(Math.sin(gdjs.toRad(-(eventsFunctionContext.getArgument("Angle")))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCos()) >= Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSin()));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSidewaysSpeed(eventsFunctionContext.getArgument("Force") * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax() * gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCos()));
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedForwardSpeed(eventsFunctionContext.getArgument("Force") * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSin() / Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCos()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCos()) <= Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSin()));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSidewaysSpeed(eventsFunctionContext.getArgument("Force") * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCos() / Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSin()));
}
}{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedForwardSpeed(eventsFunctionContext.getArgument("Force") * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax() * gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSin()));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStick = function(Angle, Force, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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
if (argName === "Angle") return Angle;
if (argName === "Force") return Force;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateMoveStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationSpeed(eventsFunctionContext.getArgument("Value") * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeedMax());
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStick = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SimulateRotationStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeed(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentRotationSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeed = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentRotationSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentForwardSpeed(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentForwardSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentForwardSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeed = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentForwardSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSidewaysSpeed(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.CurrentSidewaysSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSidewaysSpeed(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeed = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetCurrentSidewaysSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeedMax(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationSpeedMax(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAcceleration(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAcceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationAccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationAcceleration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAcceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationDeceleration(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDeceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.RotationDecelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationDeceleration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDeceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetRotationDecelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationSpeedMax(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTranslationSpeedMax(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAcceleration(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAcceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationAccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTranslationAcceleration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAcceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationDeceleration(); }}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDeceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.TranslationDecelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext = {};
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTranslationDeceleration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDeceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Walk3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Walk3D"),
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

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Walk3D__Walk3D.Walk3D.prototype.SetTranslationDecelerationContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Walk3D::Walk3D", gdjs.evtsExt__Walk3D__Walk3D.Walk3D);
