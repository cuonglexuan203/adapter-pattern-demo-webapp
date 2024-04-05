import Image from 'next/image';
import React from 'react'

const AdapterPatternCodePage = () => {
    return (
        <div className="grid grid-cols-2">
            <Image src={"/code/ios.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
            <Image src={"/code/android.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
            <Image src={"/code/adapter.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
            <Image src={"/code/main.png"} sizes="100%" width={0} height={0} className="w-full h-screen" />
        </div>
    )
}

export default AdapterPatternCodePage;