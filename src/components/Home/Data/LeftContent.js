import { Animation } from '../../core/Animation';
import { ParallaxBanner } from 'react-scroll-parallax';
import colors from '../../../globalStyles.scss';



export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const gridPosition = (col, row) => {
    return {
        gridColumn: col,
        gridRow: row
    }
}

export const leftContent = [
    {
        id: 'about',
        header: 'ABOUT',
        translateX: 2,
        width: '250%',
        subNodes: [
            {
                show: -1,
                hide: -1000,
                height: '100%',
                gridCol: '4',
                gridRow: '2',
                node: (
                    <Animation
                        style={{
                            fontSize: '5em',
                            fontFamily: colors.roboto,
                            letterSpacing: colors.letterSpacing
                        }}
                        timing={'ease-out'}
                        duration={'0.5s'}
                        height={'100%'}
                        type={'fadeInRight'}
                    >
                        <div style={{ ...flexCenter, ...gridPosition('1/end', '2') }}>
                            {'@CODEANYWHEREWITHJULIAN'}
                        </div>
                    </Animation>
                )
            },
        ]
    },
    {
        id: 'projects',
        header: 'PROJECTS',
        disabledParallax: true,
        translateX: 3,
        direction: true,
        subNodes: [
            {
                show: 4000,
                hide: -4000,
                height: '100%',
                gridCol: '2',
                gridRow: '2',
                node: (
                    <Animation height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('1/end', '1/end') }}>
                            {'center landing'}
                        </div>
                    </Animation>
                )
            },
            {
                show: -100,
                hide: -4000,
                height: '100%',
                gridCol: '2',
                gridRow: '3',
                node: (
                    <Animation height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('1/end', '1/end') }}>
                            {'test2'}
                        </div>
                    </Animation>
                )
            }
        ]
    },
    {
        id: 'experience',
        header: 'EXPERIENCE',
        subNodes: [
            {
                show: 1,
                hide: -500,
                height: '100%',
                node: (
                    <Animation timing={'ease-out'} duration={'0.5s'} height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('1/end', '2') }}>
                            {'center landing'}
                        </div>
                    </Animation>
                )
            },
        ]
    },
    {
        id: 'playground',
        header: 'PLAYGROUND',
        subNodes: [
            {
                show: 1000,
                hide: 60,
                height: '100%',
                node: (
                    <Animation
                        height={'100%'}
                        type={'fadeIn'}
                    >
                        <div
                            style={{
                                ...flexCenter,
                                ...gridPosition('2', '2')
                            }}
                        >
                            {'test'}
                        </div>
                    </Animation>
                )
            },
            {
                show: 1,
                hide: -500,
                height: '100%',
                node: (
                    <Animation timing={'ease-out'} duration={'0.5s'} height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('2', '2') }}>
                            {'center landing'}
                        </div>
                    </Animation>
                )
            },

        ]
    },
    {
        id: 'contact',
        header: 'CONTACT',
        subNodes: [
            {
                show: 1,
                hide: -500,
                height: '100%',
                node: (
                    <Animation timing={'ease-out'} duration={'0.5s'} height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('2', '2') }}>
                            {'center landing'}
                        </div>
                    </Animation>
                )
            },

        ]
    },

]