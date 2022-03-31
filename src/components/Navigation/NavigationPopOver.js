import React from 'react';
import { Popover, PopoverHeader } from 'reactstrap';


const NavigationPopOver = ({ hover, text, target }) => {
    return (
        <Popover className='custom_pop' placement="right" isOpen={hover.toLowerCase() === text.toLowerCase()} target={target} >
            <PopoverHeader>
                {text}
                <div class="container__arrow container__arrow--lc"></div>
            </PopoverHeader>
        </Popover>
    )
}

export default NavigationPopOver