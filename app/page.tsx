'use client';

import React from 'react';
import { WindowProvider, useWindow } from '@/contexts/WindowContext';
import Window from '@/components/Window';
import DesktopIcon from '@/components/DesktopIcon';
import StellataWaterwayWindow from '@/components/windows/StellataWaterwayWindow';
import MaryWindow from '@/components/windows/MaryWindow';
import AllTheBirdsWithOneStoneWindow from '@/components/windows/AllTheBirdsWithOneStoneWindow';
import BarnacleGooseWindow from '@/components/windows/BarnacleGooseWindow';
import GodInHeadWindow from '@/components/windows/GodInHeadWindow';
import CementWindow from '@/components/windows/CementWindow';
import AutoBattleKnightsWindow from '@/components/windows/AutoBattleKnightsWindow';
import ReversedQueenOfWandsWindow from '@/components/windows/ReversedQueenOfWandsWindow';
import FooterBar from '@/components/FooterBar';
import DesktopTree from '@/components/DesktopTree';

interface DesktopIcon {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  openPath: string;
  x?: number;
  y?: number;
}

const ICON_SPACING = 180;
const BASE_PATH = '/cedar-os';

const desktopIcons: DesktopIcon[] = [
  {
    id: 'stellata-waterway',
    label: 'Stellata Waterway',
    iconSrc: `${BASE_PATH}/images/icons/stellata-waterway.png`,
    iconAlt: 'Stellata Waterway',
    openPath: 'https://mattmora.itch.io/stellata-waterway',
    x: 0,
    y: 0,
  },
  {
    id: 'mary',
    label: 'mary',
    iconSrc: `${BASE_PATH}/images/icons/mary.gif`,
    iconAlt: 'mary',
    openPath: 'https://knarniapop.itch.io/mary',
    x: ICON_SPACING,
    y: 0,
  },
  {
    id: 'all-the-birds-with-one-stone',
    label: 'All The Birds With One Stone',
    iconSrc: `${BASE_PATH}/images/icons/birds-with-one-stone.png`,
    iconAlt: 'All The Birds With One Stone',
    openPath: 'https://autopoies.is/all-the-birds-with-one-stone/',
    x: ICON_SPACING * 2,
    y: 0,
  },
  {
    id: 'reversed-queen',
    label: 'Reversed Queen of Wands',
    iconSrc: `${BASE_PATH}/images/icons/queen-of-wands.png`,
    iconAlt: 'Reversed Queen of Wands',
    openPath: 'https://tuniks.itch.io/reversed-queen-of-wands',
    x: ICON_SPACING * 3,
    y: 0,
  },
  {
    id: 'auto-battle-knights',
    label: 'Auto Battle Knights',
    iconSrc: `${BASE_PATH}/images/icons/auto-battle-knights.png`,
    iconAlt: 'Auto Battle Knights',
    openPath: 'https://irene-li.itch.io/auto-battle-knights',
    x: ICON_SPACING * 4,
    y: 0,
  },
  {
    id: 'barnacle-goose',
    label: 'Barnacle Goose Experiment',
    iconSrc: `${BASE_PATH}/images/icons/barnacle-goose.png`,
    iconAlt: 'Barnacle Goose Experiment',
    openPath: 'https://everest-pipkin.com/barnacle-goose/',
    x: ICON_SPACING * 5,
    y: 0,
  },
  {
    id: 'god-in-head',
    label: 'A God who Lives in Your Head',
    iconSrc: `${BASE_PATH}/images/icons/god-in-head.png`,
    iconAlt: 'A God who Lives in Your Head',
    openPath: 'https://005lumens.itch.io/a-god-who-lives-in-your-head',
    x: ICON_SPACING * 6,
    y: 0,
  },
  {
    id: 'cement',
    label: 'cement',
    iconSrc: `${BASE_PATH}/images/icons/cement.png`,
    iconAlt: 'cement',
    openPath: 'https://hatimb00.itch.io/cement',
    x: ICON_SPACING * 7,
    y: 0,
  },

];

function DesktopContent() {
  const { windows, openWindow } = useWindow();

  const handleOpenWindow = (windowType: string) => {
    const existingWindow = windows.find((w) => w.id === windowType);
    if (existingWindow) {
      return; // Window already open
    }

    const windowConfigs = {
      'stellata-waterway': {
        id: 'stellata-waterway',
        title: 'Stellata Waterway',
        x: 50,
        y: 50,
        width: 1000,
        height: 700,
        isVisible: true,
      },
      'mary': {
        id: 'mary',
        title: 'mary',
        x: 100,
        y: 50,
        width: 700,
        height: 760,
        isVisible: true,
      },
      'barnacle-goose': {
        id: 'barnacle-goose',
        title: 'Barnacle Goose Experiment',
        x: 250,
        y: 50,
        width: 1000,
        height: 700,
        isVisible: true,
      },
      'all-the-birds-with-one-stone': {
        id: 'all-the-birds-with-one-stone',
        title: 'All The Birds With One Stone',
        x: 200,
        y: 50,
        width: 1000,
        height: 700,
        isVisible: true,
      },
      'reversed-queen': {
        id: 'reversed-queen',
        title: 'The Reversed Queen of Wands',
        x: 350,
        y: 50,
        width: 600,
        height: 730,
        isVisible: true,
      },
      'auto-battle-knights': {
        id: 'auto-battle-knights',
        title: 'Auto Battle Knights',
        x: 400,
        y: 50,
        width: 1000,
        height: 700,
        isVisible: true,
      },
      'cement': {
        id: 'cement',
        title: 'cement',
        x: 450,
        y: 50,
        width: 700,
        height: 700,
        isVisible: true,
      },
      'god-in-head': {
        id: 'god-in-head',
        title: 'A God who Lives in Your Head',
        x: 450,
        y: 10,
        width: 1000,
        height: 800,
        isVisible: true,
      },
    };

    const config = windowConfigs[windowType as keyof typeof windowConfigs];
    if (config) {
      openWindow(config);
    }
  };

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-[#2B85BD]'></div>

      {/* Desktop Icons */}
      <div className='absolute inset-0 m-8 pb-16 pointer-events-none'>
        <div className='flex flex-wrap gap-4 justify-start items-start h-full pointer-events-auto'>
          {desktopIcons.map((icon) => (
            <DesktopIcon
              key={icon.id}
              id={icon.id}
              label={icon.label}
              icon={
                <img
                  src={icon.iconSrc}
                  alt={icon.iconAlt}
                />
              }
              onClick={() => {
                if (icon.id === 'auto-battle-knights') {

                  window.open(
                    'https://irene-li.itch.io/auto-battle-knights',
                    'auto-battle-knights' + Date.now(),
                    'width=1000,height=700,resizable=yes,scrollbars=yes'
                  );
                } else {
                  handleOpenWindow(icon.id);
                }
              }}
              x={icon.x}
              y={icon.y}
            />
          ))}
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          initialX={window.x}
          initialY={window.y}
          initialWidth={window.width}
          initialHeight={window.height}
        >
          {window.id === 'stellata-waterway' && <StellataWaterwayWindow windowId={window.id} />}
          {window.id === 'mary' && <MaryWindow windowId={window.id} />}
          {window.id === 'barnacle-goose' && <BarnacleGooseWindow windowId={window.id} />}
          {window.id === 'god-in-head' && <GodInHeadWindow windowId={window.id} />}
          {window.id === 'cement' && <CementWindow windowId={window.id} />}
          {window.id === 'auto-battle-knights' && <AutoBattleKnightsWindow windowId={window.id} />}
          {window.id === 'reversed-queen' && <ReversedQueenOfWandsWindow windowId={window.id} />}
          {window.id === 'all-the-birds-with-one-stone' && <AllTheBirdsWithOneStoneWindow windowId={window.id} />}
        </Window>
      ))}

      {/* Footer Bar */}
      <FooterBar />

      {/* Desktop Tree */}
      <DesktopTree />
    </div>
  );
}

export default function Home() {
  return (
    <WindowProvider>
      <DesktopContent />
    </WindowProvider>
  );
}
