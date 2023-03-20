import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <VRButton/>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0, 1.6, 10 ],
            } }
            className="canvas"
        >
            <XR>
                <Experience />
            </XR>
        </Canvas>
    </>
)