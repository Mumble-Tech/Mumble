import { useState } from 'react';

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    views: number;
}

// interface VideoContainerProps {
//   video: Video;
// }

export const StreamContainer = () => {
    const [activeStream, setActiveStream] = useState(true);

    const video: Video = {
        id: '1',
        title: 'test',
        description: 'test',
        thumbnail: 'test',
        url: 'test',
        views: 1,
    };

    return (
        <div className="fixed left-[28em] top-[6rem] h-[40rem] w-[63%] bg-blue-300">
            {activeStream ? (
                <video
                    className="h-full w-full rounded-lg border-none"
                    controls
                >
                    <source src={video.url} type="video/mp4" />
                </video>
            ) : (
                <div></div>
            )}
        </div>
    );
};
