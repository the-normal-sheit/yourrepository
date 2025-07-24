
if (typeof gdjs.evtsExt__Sprite3D__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__Sprite3D__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Sprite3D__DefineHelperClasses = {};


gdjs.evtsExt__Sprite3D__DefineHelperClasses.userFunc0x1665d88 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__sprite3DExtension) {
    return;
}

class Sprite3DRenderer {
    /** @type {gdjs.CustomRuntimeObject} */
    object;
    /** @type {THREE.Mesh} */
    mesh;

    /**
     * @param object {gdjs.CustomRuntimeObject}
     */
    constructor(object) {
        this.object = object;
        
        const geometry = new THREE.PlaneGeometry(1, -1);
        const animationFrame = object.getAnimator().getCurrentFrame();
        const material = animationFrame.texture;
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.order = 'ZYX';
        object.get3DRendererObject().add(this.mesh);

        this.updateFrame();
        object.getAnimator().setOnFrameChangeCallback(() => this.updateFrame());
    }

    updateFrame() {
        const frame = this.object.getAnimator().getCurrentFrame();
        const material = frame.texture;

        const image = material.map.image;
        const width = image.width;
        const height = image.height;
        const origin = frame.origin;
        this.mesh.position.set(-origin.x + width / 2, -origin.y + height / 2, 0);
        this.mesh.scale.set(width, height, 1);

        const center = frame.center;
        this.object.setRotationCenter(center.x - origin.x, center.y - origin.y);

        this.mesh.material = material;

        const hitBoxes = this.object._untransformedHitBoxes;
        if (frame.hasCustomCollisionMask) {
            let i = 0;
            for (let len = frame.customCollisionMask.length; i < len; ++i) {
                const polygonData = frame.customCollisionMask[i];

                // Add a polygon, if necessary (Avoid recreating a polygon if it already exists).
                if (i >= hitBoxes.length) {
                    hitBoxes.push(new gdjs.Polygon());
                }
                let j = 0;
                for (const len2 = polygonData.length; j < len2; ++j) {
                    const pointData = polygonData[j];

                    // Add a point, if necessary (Avoid recreating a point if it already exists).
                    if (j >= hitBoxes[i].vertices.length) {
                        hitBoxes[i].vertices.push([0, 0]);
                    }
                    hitBoxes[i].vertices[j][0] = pointData.x - origin.x;
                    hitBoxes[i].vertices[j][1] = pointData.y - origin.y;
                }
                hitBoxes[i].vertices.length = j;
            }
            hitBoxes.length = i;
        }
        else if (hitBoxes.length === 0) {
            const hitBox = new gdjs.Polygon();
            hitBoxes.push(hitBox);
            const vertices = hitBox.vertices;
            vertices.push([-origin.x, -origin.y]);
            vertices.push([-origin.x + width, -origin.y]);
            vertices.push([-origin.x + width, -origin.y + height]);
            vertices.push([-origin.x, -origin.y + height]);
        }

        const aabb = this.object._unrotatedAABB;
        aabb.min[0] = -origin.x;
        aabb.min[1] = -origin.y;
        aabb.max[0] = -origin.x + width;
        aabb.max[1] = -origin.y + height;

        this.object._isUntransformedHitBoxesDirty = false;
    }
}

gdjs.__sprite3DExtension = {
    Sprite3DRenderer
};

};
gdjs.evtsExt__Sprite3D__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Sprite3D__DefineHelperClasses.userFunc0x1665d88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sprite3D__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Sprite3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Sprite3D"),
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


gdjs.evtsExt__Sprite3D__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Sprite3D__DefineHelperClasses.registeredGdjsCallbacks = [];