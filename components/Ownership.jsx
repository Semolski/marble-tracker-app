import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Ownership = ({ownership}) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
            <div className="absolute left-0 right-0 -top-14">
                <Image
                    unoptimized
                    loader={graphCMSImageLoader}
                    alt={ownership.ownershipStatus}
                    src={ownership.photo.url}
                    height="100px"
                    width="100px"
                    className="align-middle rounded-full"
                />
            </div>
                <h3 className="text-white my-4 text-xl font-bold">
                    {ownership.ownershipStatus}
                </h3>
                <p className="text-white text-lg">{ownership.description}</p>
        </div>
    )
}

export default Ownership