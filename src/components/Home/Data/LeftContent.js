import colors from '../../../globalStyles.scss';
import { Animation } from '../../core/Animation';
import HeaderContentWrapper from '../HeaderContentWrapper'

export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
export const gridCenter = {
    gridColumn: '2',
    gridRow: '2'
}
export const gridFull = {
    gridColumn: '1/end',
    gridRow: '1/end'
}
export const absoluteTopLeft = {
    position: 'absolute',
    top: '0',
    left: '0',
    margin: '15px'
}

export const leftContent = [
    {
        id: 'about',
        disabledParallax: true,
        header: 'ABOUT',
        subNodes: [
            {
                show: 0,
                hide: -10000,
                node: (
                    <Animation>
                        <div style={{ ...flexCenter, ...gridFull }}>
                            {'about test'}
                        </div>
                    </Animation>
                )
            },
        ]
    },
    {
        id: 'projects',
        header: 'PROJECTS',
        subNodes: [
            {
                show: 0,
                hide: 10,
                node: (
                    <Animation>
                        <div style={{ ...flexCenter }}>
                            {'test'}
                        </div>
                    </Animation>
                )
            },
            {
                show: 0,
                hide: -400,
                node: (
                    <Animation>
                        <div style={{ ...flexCenter }}>
                            {'test'}
                        </div>
                    </Animation>
                )
            },

        ]
    },
    {
        id: 'experience',
        header: 'EXPERIENCE',
        subNodes: [
            {
                show: 100,
                hide: 10,
                node: (
                    <Animation>
                        <div style={{ ...flexCenter }}>
                            {'test'}
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
                show: 600,
                hide: -600,
                node: (
                    <Animation
                        height={'100%'}
                        style={{
                            zIndex: '10',
                            color: colors.black,
                        }}
                        type={'fadeInUp'}
                    >
                        <div style={{ ...flexCenter, ...gridCenter }}>
                            {'test'}
                        </div>
                    </Animation>
                )
            },
            {
                show: 400,
                hide: -600,
                node: (
                    <Animation
                        height={'50%'}
                        type={'fadeInUp'}
                        style={{
                            color: colors.black,
                        }}
                    >
                        {'test 2'}
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
                show: 100,
                hide: 10,
                node: (
                    <Animation>
                        <div style={{ ...flexCenter }}>
                            {'test'}
                        </div>
                    </Animation>
                )
            },

        ]
    },

]