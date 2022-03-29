import colors from '../../../globalStyles.scss';
import { FadeIn } from '../../core/Animation';


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
            <FadeIn>
                {'About'}
            </FadeIn>
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
            <FadeIn>
                {'Projects'}
            </FadeIn>
        ),
        subNodes: [
            {
                show: 100,
                hide: 10,
                node: (
                    <FadeIn>
                        {'test'}
                    </FadeIn>
                )
            },
            {
                show: 0,
                hide: -400,
                node: (
                    <FadeIn>
                        {'test 2'}
                    </FadeIn>
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
            <FadeIn>
                {'Experience'}
            </FadeIn>
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
            <FadeIn>
                {'Playground'}
            </FadeIn>
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
            <FadeIn>
                {'Contact'}
            </FadeIn>
        ),
    },

]