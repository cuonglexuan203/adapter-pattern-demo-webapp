'use client'
import Image from 'next/image';
import React from 'react'
import Spline from '@splinetool/react-spline';

const AdapterPatternCodePage = () => {
    return (
        // <div className="grid grid-cols-2">
        //     <Image alt="image" src={"/code/ios.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
        //     <Image alt="image" src={"/code/android.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
        //     <Image alt="image" src={"/code/adapter.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
        //     <Image alt="image" src={"/code/main.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
        // </div>
        <div>
            <Spline scene="https://prod.spline.design/qcrdZxr3j55yQNc9/scene.splinecode" />
        </div>
    )
}

export default AdapterPatternCodePage;