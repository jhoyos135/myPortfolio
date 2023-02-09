import React from 'react'
import Button from '../core/Button'
import { useHistory } from 'react-router-dom';

const Blog = () => {
    const history = useHistory();

    return (
        <div>
            <Button
                text={'SEE MORE...'}
                section={'blog'}
                handleClick={() => history.push('/blog')}
            />
        </div>
    )
}

export default Blog