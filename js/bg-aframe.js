/* global AFRAME, THREE */
AFRAME.registerComponent('model-viewer', {
    schema: {
        gltfModel: { default: '' },
        gltfModelOutline: { default: ''}
    },
    init: function () {
        var el = this.el;

        el.setAttribute('renderer', { colorManagement: true });
        el.setAttribute('vr-mode-ui', {enabled: false})

        this.onModelLoaded = this.onModelLoaded.bind(this);

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);

        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);

        this.onOrientationChange = this.onOrientationChange.bind(this);

        this.initCameraRig();
        this.initEntities();

        // Disable context menu on canvas when pressing mouse right button;
        this.el.sceneEl.canvas.oncontextmenu = function (evt) { evt.preventDefault(); };

        window.addEventListener('orientationchange', this.onOrientationChange);

        // Mouse 2D controls.
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mousedown', this.onMouseDown);

        // Mobile 2D controls.
        document.addEventListener('touchend', this.onTouchEnd);
        document.addEventListener('touchmove', this.onTouchMove);

        this.modelEl.addEventListener('model-loaded', this.onModelLoaded);
    },

    update: function () {
        if (!this.data.gltfModel || !this.data.gltfModelOutline) { return; }
        this.modelEl.setAttribute('gltf-model', this.data.gltfModel);
        this.modelElOutline.setAttribute('gltf-model', this.data.gltfModelOutline);
    },

    initCameraRig: function () {
        var cameraRigEl = this.cameraRigEl = document.createElement('a-entity');
        var cameraEl = this.cameraEl = document.createElement('a-entity');

        cameraEl.setAttribute('camera', { fov: 60 });
        cameraEl.setAttribute('look-controls', {
            magicWindowTrackingEnabled: false,
            mouseEnabled: false,
            touchEnabled: false
        });

        cameraRigEl.appendChild(cameraEl);

        this.el.appendChild(cameraRigEl);
    },

    initEntities: function () {
        // Container for our entities to keep the scene clean and tidy.
        var containerEl = this.containerEl = document.createElement('a-entity');
        // Models are often not centered on the 0,0,0.
        // We will center the model and rotate a pivot.
        var modelPivotEl = this.modelPivotEl = document.createElement('a-entity');
        // This is our glTF model entity.
        var modelEl = this.modelEl = document.createElement('a-entity');
        var modelElOutline = this.modelElOutline = document.createElement('a-entity');
        // Scene lighting.
        var lightEl = this.lightEl = document.createElement('a-entity');
        var sceneLightEl = this.sceneLightEl = document.createElement('a-entity');

        modelPivotEl.id = 'modelPivot';

        sceneLightEl.setAttribute('light', {
            type: 'ambient',
            intensity: .1
          });

        this.el.appendChild(sceneLightEl);

        modelEl.id = 'model';
        modelElOutline.id = 'model-outline';
        // initial rotation
        modelEl.setAttribute('rotation', '30 0 30');
        modelElOutline.setAttribute('rotation', '30 0 30');
        // animation
        modelEl.setAttribute('animation', 'property: rotation; to: 30 360 30; dur: 20000; easing: linear; loop: true');
        modelElOutline.setAttribute('animation', 'property: rotation; to: 30 360 30; dur: 20000; easing: linear; loop: true');

        modelElOutline.setAttribute('material', 'shader: flat; side: back;');

        modelElOutline.addEventListener('model-loaded', () => {
            const modelElOutline = this.modelElOutline;
            const obj = modelElOutline.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                node.material.color.set('#000');
                node.material.side = THREE.BackSide;
                node.material.castShadow = false
                node.material.receiveShadow = false
            });
        })

        modelEl.setAttribute('shadow', 'cast: true; receive: false');

        modelPivotEl.appendChild(modelEl);
        modelPivotEl.appendChild(modelElOutline);
        
        // directional light
        lightEl.id = 'light';
        lightEl.setAttribute('position', '-2 2 2');
        lightEl.setAttribute('light', {
        type: 'directional',
        castShadow: true,
        shadowMapHeight: 1024,
        shadowMapWidth: 1024,
        shadowCameraLeft: -7,
        shadowCameraRight: 5,
        shadowCameraBottom: -5,
        shadowCameraTop: 5,
        intensity: 2,
        target: 'modelPivot'
        });

        this.containerEl.appendChild(lightEl);

        this.containerEl.appendChild(modelPivotEl);

        this.el.appendChild(containerEl);
    },

    onOrientationChange: function () {
        if (AFRAME.utils.device.isLandscape()) {
            this.cameraRigEl.object3D.position.z -= 1;
        } else {
            this.cameraRigEl.object3D.position.z += 1;
        }
    },

    onTouchMove: function (evt) {
        if (evt.touches.length === 1) { this.onSingleTouchMove(evt); }
    },

    onSingleTouchMove: function (evt) {
        var dX;
        var dY;
        var modelPivotEl = this.modelPivotEl;
        this.oldClientX = this.oldClientX || evt.touches[0].clientX;
        this.oldClientY = this.oldClientY || evt.touches[0].clientY;

        dX = this.oldClientX - evt.touches[0].clientX;
        dY = this.oldClientY - evt.touches[0].clientY;

        modelPivotEl.object3D.rotation.y -= dX / 200;
        this.oldClientX = evt.touches[0].clientX;

        modelPivotEl.object3D.rotation.x -= dY / 100;

        // Clamp x rotation to [-90,90]
        modelPivotEl.object3D.rotation.x = Math.min(Math.max(-Math.PI / 2, modelPivotEl.object3D.rotation.x), Math.PI / 2);
        this.oldClientY = evt.touches[0].clientY;
    },

    onTouchEnd: function (evt) {
        this.oldClientX = undefined;
        this.oldClientY = undefined;
        if (evt.touches.length < 2) { this.oldDistance = undefined; }
    },

    onMouseUp: function (evt) {
        this.leftRightButtonPressed = false;
        if (evt.buttons === undefined || evt.buttons !== 0) { return; }
        this.oldClientX = undefined;
        this.oldClientY = undefined;
    },

    onMouseMove: function (evt) {
        if (this.leftRightButtonPressed) {
            this.dragModel(evt);
        } else {
            this.rotateModel(evt);
        }
    },

    dragModel: function (evt) {
        var dX;
        var dY;
        var modelPivotEl = this.modelPivotEl;
        if (!this.oldClientX) { return; }
        dX = this.oldClientX - evt.clientX;
        dY = this.oldClientY - evt.clientY;
        modelPivotEl.object3D.position.y += dY / 200;
        modelPivotEl.object3D.position.x -= dX / 200;
        this.oldClientX = evt.clientX;
        this.oldClientY = evt.clientY;
    },

    rotateModel: function (evt) {
        var dX;
        var dY;
        var modelPivotEl = this.modelPivotEl;
        if (!this.oldClientX) { return; }
        dX = this.oldClientX - evt.clientX;
        dY = this.oldClientY - evt.clientY;
        modelPivotEl.object3D.rotation.y -= dX / 100;
        modelPivotEl.object3D.rotation.x -= dY / 200;

        // Clamp x rotation to [-90,90]
        modelPivotEl.object3D.rotation.x = Math.min(Math.max(-Math.PI / 2, modelPivotEl.object3D.rotation.x), Math.PI / 2);

        this.oldClientX = evt.clientX;
        this.oldClientY = evt.clientY;
    },

    onModelLoaded: function () {
        this.centerAndScaleModel();
    },

    centerAndScaleModel: function () {
        var box;
        var size;
        var center;
        var scale;
        var modelEl = this.modelEl;
        var gltfObject = modelEl.getObject3D('mesh');
        var modelElOutline = this.modelElOutline;

        // Reset position and scales.
        modelEl.object3D.position.set(0, 0, 0);
        modelEl.object3D.scale.set(1.0, 1.0, 1.0);
        modelElOutline.object3D.position.set(0, 0, 0);
        modelElOutline.object3D.scale.set(1.0, 1.0, 1.0);
        this.cameraRigEl.object3D.position.z = 3.0;

        // Calculate model size.
        modelEl.object3D.updateMatrixWorld();
        box = new THREE.Box3().setFromObject(gltfObject);
        size = box.getSize(new THREE.Vector3());

        // Calculate scale factor to resize model to human scale.
        scale = 1.6 / size.y;
        scale = 2.0 / size.x < scale ? 2.0 / size.x : scale;
        scale = 2.0 / size.z < scale ? 2.0 / size.z : scale;

        modelEl.object3D.scale.set(scale, scale, scale);
        modelElOutline.object3D.scale.set(scale, scale, scale);

        // Center model at (0, 0, 0).
        modelEl.object3D.updateMatrixWorld();
        box = new THREE.Box3().setFromObject(gltfObject);
        center = box.getCenter(new THREE.Vector3());
        size = box.getSize(new THREE.Vector3());

        modelEl.object3D.position.x = -center.x;
        modelEl.object3D.position.y = -center.y;
        modelEl.object3D.position.z = -center.z;

        modelElOutline.object3D.position.x = -center.x;
        modelElOutline.object3D.position.y = -center.y;
        modelElOutline.object3D.position.z = -center.z;
    },

    onMouseDown: function (evt) {
        if (evt.buttons) { this.leftRightButtonPressed = evt.buttons === 3; }
        this.oldClientX = evt.clientX;
        this.oldClientY = evt.clientY;
    }
});
