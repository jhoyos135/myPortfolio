import React, { Component } from 'react'
import TopNavigation from '../Navigation/TopNavigation'
import BottomNavigation from '../Navigation/BottomNavigation'

export class BlogContainer extends Component {
    render() {
        const { history } = this.props
        return (
            <>
                <TopNavigation history={history} />
                <div>
                    {'TODO'}
                </div>
                <BottomNavigation history={history} hasBack={true} />

            </>
        )
    }
}

export default BlogContainer