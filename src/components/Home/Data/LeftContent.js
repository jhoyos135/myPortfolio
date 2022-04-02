import colors from '../../../globalStyles.scss';
import { Animation } from '../../core/Animation';


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
        outerStyles: {
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2/4'
        },
        node: (
            <Animation>
                {'Playground'}
            </Animation>
        ),
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