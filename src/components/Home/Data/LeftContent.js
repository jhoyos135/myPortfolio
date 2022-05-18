import { Animation } from '../../core/Animation';
import colors from '../../../globalStyles.scss';
import { ParallaxBanner } from 'react-scroll-parallax';





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
        width: '250%',
        translateX: 2,
        background: 'https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subNodes: [
            {
                show: 100,
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
                        <div style={{ zIndex: '999', color: colors.white, ...flexCenter, ...gridPosition('1/end', '2') }}>
                            <a target={'_blank'} href={'https://www.instagram.com/codeanywherewithjulian/'}>
                                {'@CODEANYWHEREWITHJULIAN'}
                            </a>
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
        disabledParallax: true,
        subNodes: [
            {
                show: 4000,
                hide: -4000,
                height: '100%',
                gridCol: '2',
                gridRow: '2',
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

]