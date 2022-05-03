import Layout from "../Layout";
import CodePenDisplay from "../CodePenDisplay";
import EmbedCode from "../EmbedCode";


export const rightContent = [
    {
        id: 0,
        route: 'about',
        node: (
            <Layout>
                <div>
                    {'testing'}
                </div>
            </Layout>
        )
    },
    {
        id: 1,
        route: 'projects',
        node: (
            <Layout>
                <div>
                    {'projects'}
                </div>
            </Layout>
        )
    },
    {
        id: 2,
        route: 'experience',
        node: (
            <Layout>

            </Layout>
        )
    },
    {
        id: 3,
        route: 'playground',
        node: (
            <Layout>
                <CodePenDisplay
                    header='Scroll Detector'
                    hash={'zYOrLzq'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Split image Hover Effect'
                    hash={'vwvgVX'}
                />
                <CodePenDisplay
                    header='Hero Image Zoom'
                    hash={'oRJBMj'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Drawing Board'
                    hash={'byOgOL'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Panel Gallery'
                    hash={'LoMxJV'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Change Background on Hover Hero Cover'
                    hash={'arPpGg'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Particle Image Trace'
                    hash={'KRVOaq'}
                    tab='js,result'
                />
                <CodePenDisplay
                    header='Text Tranform'
                    hash={'YaVqKy'}
                    tab='js,result'
                />
                <EmbedCode />
            </Layout >
        )
    },
    {
        id: 4,
        route: 'contact',
        node: (
            <Layout>

            </Layout>
        )
    },
]