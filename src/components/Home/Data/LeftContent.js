import colors from '../../../globalStyles.scss';
import { Animation } from '../../core/Animation';

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

export const leftContent = [
    {
        id: 'about',
        disabledParallax: true,
        node: (
            <Animation
                type={'fadeIn'}
            >
                <div style={{ ...flexCenter, ...gridFull }}>
                    {'About'}
                </div>
            </Animation>
        ),
    },
    {
        id: 'projects',
        node: (
            <Animation>
                {'Projects'}
            </Animation>
        ),
        subNodes: [
            {
                show: 100,
                hide: 10,
                node: (
                    <Animation>
                        {'test'}
                    </Animation>
                )
            },
            {
                show: 0,
                hide: -400,
                node: (
                    <Animation>
                        {'test 2'}
                    </Animation>
                )
            },

        ]
    },
    {
        id: 'experience',
        node: (
            <Animation>
                {'Experience'}
            </Animation>
        ),
    },
    {
        id: 'playground',
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
        node: (
            <Animation>
                {'Contact'}
            </Animation>
        ),
    },

]