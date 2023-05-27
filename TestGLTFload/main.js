import * as THREE from 'three';
import {VRButton} from 'VRButton';
import {GLTFLoader} from 'GLTFLoader';
import { mapLinear } from 'three/src/math/MathUtils';


function mapLinear(){
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGL1Renderer({antialias: true ,canvas});
    renderer.xr.enabled = true;
    document.body.appendChild(VRButton.createButton(renderer))

}

