import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Interactive } from '@react-three/xr'
import { useState } from 'react'

extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()
    const [color, setColor] = useState("blue");

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        {/* <Interactive onSelect={(e) => {
            setColor("green")
        }}> */}
            <mesh position-x={ - 2 } onClick={(e) => {
                setColor("green")
            }}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        {/* </Interactive> */}

        <mesh position-x={ 2 } scale={ 1.5 } >
            <boxGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}