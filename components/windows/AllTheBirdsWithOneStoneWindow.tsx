'use client';

import React, { useState } from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface AllTheBirdsWithOneStoneWindowProps {
    windowId: string;
}

export default function AllTheBirdsWithOneStoneWindow({ windowId }: AllTheBirdsWithOneStoneWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;
    const [iframeError, setIframeError] = useState(false);

    const handleOpenInNewTab = () => {
        window.open('https://autopoies.is/all-the-birds-with-one-stone/', '_blank');
    };

    return (
        <div className="h-full bg-white text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-white border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl text-custom-green underline"><a href="https://autopoies.is/all-the-birds-with-one-stone/" target="_blank" rel="noopener noreferrer" className="hover:text-custom-body hover:bg-custom-green">All The Birds With One Stone</a></h2>
                    <p className="text-lg">by Chia Amisola • Text • Web • Abstract</p>
                </div>
            )}

            {/* Embedded Experience or Fallback */}
            <div className="flex-1 min-h-0">
                {!iframeError ? (
                    <iframe
                        allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share; popups"
                        allowTransparency={true}
                        allowFullScreen
                        src="https://autopoies.is/all-the-birds-with-one-stone/"
                        className="w-full h-full border-0"
                        onLoad={() => console.log('iframe loaded')}
                        onError={() => {
                            console.log('iframe error - showing fallback');
                            setIframeError(true);
                        }}>
                    </iframe>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold mb-4">Experience Not Available in Embed</h3>
                            <p className="text-lg mb-6">
                                This interactive experience works best when opened directly in your browser.
                            </p>
                            <button
                                onClick={handleOpenInNewTab}
                                className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border-2 border-black hover:border-gray-800"
                            >
                                Open All The Birds With One Stone
                            </button>
                            <p className="text-xs text-gray-500 mt-4">
                                Opens in new tab for best experience
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
