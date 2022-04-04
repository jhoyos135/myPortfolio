import colors from '../../../globalStyles.scss';
import { Animation } from '../../core/Animation';
import { imageData } from '../../imageData';


export const leftContent = [
    {
        id: 'about',
        outerStyles: {
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2/4'
        },
        node: (
            <Animation
                type={'fadeInLeft'}
            >
                {'About'}
            </Animation>
        ),
    },
    {
        id: 'projects',
        outerStyles: {
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2/4'
        },
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
        outerStyles: {
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2/4'
        },
        node: (
            <Animation>
                {'Experience'}
            </Animation>
        ),
    },
    {
        id: 'playground',
        node: (
            <>
                <Animation
                    type={'fadeInUpBig'}
                    style={{
                        position: 'relative',
                        gridColumn: '1/end',
                        gridRow: '1/end'
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            bottom: '0px',
                            left: '0px',
                            background: colors.overlay,
                            filter: 'blur(35px)'

                        }}
                    >
                    </div>
                    <img style={{ width: '100%', height: '100%' }} src={imageData.find(x => x.section === 'playground').image} />
                </Animation>
            </>
        ),
        subNodes: [
            {
                show: 400,
                hide: -400,
                node: (
                    <Animation
                        type={'fadeIn'}
                        style={{
                            gridColumn: '3/5',
                            gridRow: '2/4',
                            zIndex: '10',
                            color: colors.white
                        }}>
                        {'test'}
                    </Animation>
                )
            },

        ]
    },
    {
        id: 'contact',
        outerStyles: {
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2/4'
        },
        node: (
            <Animation>
                {'Contact'}
            </Animation>
        ),
    },

]