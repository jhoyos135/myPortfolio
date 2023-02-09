import Layout from "../Layout";
import { About, PlayGround, Blog } from "../../RightContent";


export const rightContent = [
    {
        id: 0,
        route: 'about',
        node: (
            <Layout>
                <About />
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
        route: 'blog',
        node: (
            <Layout>
                <Blog />
            </Layout>
        )
    },
    {
        id: 3,
        route: 'playground',
        node: (
            <Layout>
                <PlayGround />
            </Layout >
        )
    },
    {
        id: 4,
        route: 'contact',
        node: (
            <Layout>
                <div>
                    {'contact'}
                </div>
            </Layout>
        )
    },
]