
if (typeof gdjs.evtsExt__Raycaster3D__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__Raycaster3D__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Raycaster3D__DefineHelperClasses = {};


gdjs.evtsExt__Raycaster3D__DefineHelperClasses.userFunc0x116d168 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__raycaster3DExtension = gdjs.__raycaster3DExtension || {};

class Raycaster {
    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();
    raycastResults = [];
    lastDistance = 0;
    lastPositionX = 0;
    lastPositionY = 0;
    lastPositionZ = 0;
    lastNormalX = 0;
    lastNormalY = 0;
    lastNormalZ = 0;

    /**
     * @param objectsLists {Hashtable<gdjs.RuntimeObject[]>}
     * @param objects {gdjs.RuntimeObject[]}
     * @param pointerX {number}
     * @param pointerY {number}
     * @param distanceMax {number}
     */
    recastFromCamera(objectsLists, objects, pointerX, pointerY, distanceMax) {
        if (objects.length === 0) {
            return false;
        }
        const object = objects[0];
        const layer = object.getInstanceContainer().getLayer(object.getLayer());
        const camera = layer.getRenderer().getThreeCamera();

        const raycaster = this.raycaster;
        const pointer = this.pointer;
        pointer.x = -1 + 2 * pointerX;
        pointer.y = 1 - 2 * pointerY;
        raycaster.setFromCamera(pointer, camera);
        raycaster.far = distanceMax;

        return this._doRecast(objectsLists, objects);
    }

    /**
     * @param objectsLists {Hashtable<gdjs.RuntimeObject[]>}
     * @param objects {gdjs.RuntimeObject[]}
     * @param originX {number}
     * @param originY {number}
     * @param originZ {number}
     * @param rotationAngle {number}
     * @param elevationAngle {number}
     * @param distanceMax {number}
     */
    recastWithAngle(
        objectsLists,
        objects,
        originX,
        originY,
        originZ,
        rotationAngle,
        elevationAngle,
        distanceMax
    ) {
        if (objects.length === 0) {
            return false;
        }
        const raycaster = this.raycaster;
        raycaster.ray.origin.set(
            originX,
            -originY,
            originZ,
        );
        const rotation = rotationAngle * Math.PI / 180;
        const elevation = elevationAngle * Math.PI / 180;
        const cosElevation = Math.cos(elevation);
        raycaster.ray.direction.set(
            Math.cos(rotation) * cosElevation,
            -Math.sin(rotation) * cosElevation,
            Math.sin(elevation),
        );
        raycaster.far = distanceMax;

        return this._doRecast(objectsLists, objects);
    }

    /**
     * @param objectsLists {Hashtable<gdjs.RuntimeObject[]>}
     * @param objects {gdjs.RuntimeObject[]}
     * @param originX {number}
     * @param originY {number}
     * @param originZ {number}
     * @param targetX {number}
     * @param targetY {number}
     * @param targetZ {number}
     * @param distanceMax {number}
     */
    recastBetweenPosition(
        objectsLists,
        objects,
        originX,
        originY,
        originZ,
        targetX,
        targetY,
        targetZ
    ) {
        if (objects.length === 0) {
            return false;
        }
        const raycaster = this.raycaster;
        raycaster.ray.origin.set(
            originX,
            -originY,
            originZ,
        );
        const deltaX = targetX - originX;
        const deltaY = targetY - originY;
        const deltaZ = targetZ - originZ;
        const deltaLength = Math.hypot(deltaX, deltaY, deltaZ);
        raycaster.ray.direction.set(
            deltaX / deltaLength,
            -deltaY / deltaLength,
            deltaZ / deltaLength,
        );
        raycaster.far = deltaLength;

        return this._doRecast(objectsLists, objects);
    }

    /**
     * @param objectsLists {Hashtable<gdjs.RuntimeObject[]>}
     * @param objects {gdjs.RuntimeObject[]}
     */
    _doRecast(objectsLists, objects) {
        const raycastResults = this.raycastResults;
        let distanceMin = Number.MAX_VALUE;
        let nearestObject = null;
        for (const object of objects) {
            raycastResults.length = 0;
            const threeObject = object.get3DRendererObject();
            if (!threeObject) {
                continue;
            }
            this.raycaster.intersectObject(threeObject, true, raycastResults);
            if (raycastResults.length > 0 && raycastResults[0].distance < distanceMin) {
                const raycastResult = raycastResults[0];
                distanceMin = raycastResult.distance;
                nearestObject = object;
                this.lastDistance = raycastResult.distance;
                this.lastPositionX = raycastResult.point.x;
                this.lastPositionY = -raycastResult.point.y;
                this.lastPositionZ = raycastResult.point.z;
                this.lastNormalX = raycastResult.normal.x;
                this.lastNormalY = raycastResult.normal.y;
                this.lastNormalZ = raycastResult.normal.z;
            }
        }
        if (!nearestObject) {
            return false;
        }
        raycastResults.length = 0;
        gdjs.evtTools.object.pickOnly(
            objectsLists,
            nearestObject
        );
        return true;
    }
}

gdjs.__raycaster3DExtension.Raycaster = Raycaster;
gdjs.__raycaster3DExtension.raycaster = new Raycaster();

};
gdjs.evtsExt__Raycaster3D__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Raycaster3D__DefineHelperClasses.userFunc0x116d168(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Raycaster3D__DefineHelperClasses.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("_Raycaster3DExtension_ClassesDefined"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("_Raycaster3DExtension_ClassesDefined"), true);
}
{ //Subevents
gdjs.evtsExt__Raycaster3D__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Raycaster3D__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Raycaster3D__DefineHelperClasses.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Raycaster3D__DefineHelperClasses.registeredGdjsCallbacks = [];