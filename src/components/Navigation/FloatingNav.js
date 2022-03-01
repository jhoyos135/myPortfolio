import React, { Component } from 'react'
import { navigationData } from './navigationData';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

import './style.scss';

export class FloatingNav extends Component {

    state = {
        isLast: false,
        isFirst: true
    }

    componentDidMount() {
        navigationData.forEach((x, i, arr) => {
            if (x.route === this.props.location.pathname) {
                if (i === arr.length - 1) {
                    this.setState({ isLast: true })
                }
                if (i === 1) {
                    this.setState({ isFirst: true })
                } else {
                    this.setState({ isFirst: false })
                }
            }
        })
    }

    nextLogic = () => {
        const { history } = this.props;
        navigationData.forEach((x, i, arr) => {
            if (x.route === this.props.location.pathname) {
                const next = x.index
                if (arr[next] || !this.state.isLast) history.push(`${arr[next].route}`)
            }
        })
    }

    prevLogic = () => {
        const { history } = this.props;
        navigationData.forEach((x, i, arr) => {
            if (x.route === this.props.location.pathname) {
                const prev = i - 1
                if (arr[prev]) history.push(`${arr[prev].route}`)
                if (x.index === 1) {
                    history.push('/')
                }
            }
        })
    }

    render() {
        return (
            <>
                {
                    !this.state.isLast && (
                        <div className='FloatingNav__next' onClick={() => this.nextLogic()}>
                            <AiFillCaretRight />
                        </div>
                    )
                }
                <div className='FloatingNav__prev' onClick={() => this.prevLogic()}>
                    <AiFillCaretLeft />
                </div>
            </>
        )
    }
}

export default FloatingNav