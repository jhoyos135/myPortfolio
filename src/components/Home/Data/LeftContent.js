import { Animation } from '../../core/Animation';

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
        disabledParallax: true,
        header: 'ABOUT',
        node: (
            <Animation height={'100%'} type={'fadeIn'}>
                <div style={{ ...flexCenter, ...gridPosition('1/end', '1/end') }}>
                    {'center landing'}
                </div>
            </Animation>
        ),
    },
    {
        id: 'projects',
        header: 'PROJECTS',
        subNodes: [
            {
                show: 1500,
                hide: 50,
                height: '100%',
                node: (
                    <Animation timing={'ease-out'} duration={'0.5s'} height={'100%'} type={'fadeIn'} >
                        <div style={{ ...flexCenter, ...gridPosition('1/end', '2') }}>
                            {'test'}
                        </div>
                    </Animation >
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
            {
                show: -500,
                hide: -4000,
                height: '100%',
                node: (
                    <Animation timing={'ease-out'} duration={'0.5s'} height={'100%'} type={'fadeIn'}>
                        <div style={{ ...flexCenter, ...gridPosition('2', '2') }}>
                            {'test 3'}
                        </div>
                        <div style={{ ...flexCenter, ...gridPosition('2', '3') }}>
                            {'test 4'}
                        </div>
                    </Animation >
                )
            },

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
                        <div style={{ ...flexCenter, ...gridPosition('2', '2') }}>
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