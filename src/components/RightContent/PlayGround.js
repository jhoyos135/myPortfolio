import React from 'react';
import CodePenDisplay from '../Home/CodePenDisplay'
import EmbedCode from "../Home/EmbedCode";

const PlayGround = () => {
    return (
        <>
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
        </>
    )
}

export default PlayGround