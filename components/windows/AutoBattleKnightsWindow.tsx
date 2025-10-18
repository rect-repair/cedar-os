'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface AutoBattleKnightsWindowProps {
    windowId: string;
}

export default function AutoBattleKnightsWindow({ windowId }: AutoBattleKnightsWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full bg-green-600 text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-custom-body border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl text-custom-green underline"><a href="https://irene-li.itch.io/auto-battle-knights" target="_blank" rel="noopener noreferrer" className="hover:text-custom-body hover:bg-custom-green">Auto Battle Knights</a></h2>
                    <p className="text-lg">by Irene Li • Web • Arcade</p>
                    <p className="text-lg"> 本游戏需要🪜连接 googlesheet，留言时请保持友好和文明。如果无法连接请告知 @修四边形</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 min-h-0">
                <iframe
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
                    allowTransparency={true}
                    allowFullScreen
                    src="https://html-classic.itch.zone/html/9246941/Proto_Wk12/index.html"
                    className="w-full h-full border-0">
                </iframe>
            </div>
        </div>
    );
}
