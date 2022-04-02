import React, { useRef, useEffect } from "react";
import './style.scss'


const TimelineItem = ({ id, node, route, observe, unobserve }) => {
    const ref = useRef(null);

    const onMount = () => {
        observe(ref);
        return () => {
            unobserve(ref)
        };
    };
    useEffect(onMount, []);

    return (
        <div
            style={{
                minHeight: '1500px'
            }}
            ref={ref}
            className={`timeline-item-${id}`}
            id={route}
        >
            {node}
        </div>
    );
};

function useOnScreen(options) {
    const initialVisibility = options.items.reduce(
        (acc, item) => ({ ...acc, [`timeline-item-${item.id}`]: true }),
        {}
    );
    const [visible, setVisible] = React.useState(initialVisibility);
    const observer = useRef(
        new IntersectionObserver((entries) => {
            const newState = entries.reduce((acc, { target, isIntersecting }) => {
                return {
                    ...acc,
                    [target.className]: isIntersecting
                };
            }, {});
            setVisible((state) => ({
                ...state,
                ...newState
            }));
        }, options)
    );

    const observeEl = (ref) => {
        if (ref.current) {
            observer.current.observe(ref.current);
        }
    };

    const unobserveEl = (ref) => {
        if (ref.current) {
            observer.current.unobserve(ref.current);
        }
    };

    return [visible, observeEl, unobserveEl];
}

function Timeline(props) {
    const rightContent = props.rightContent;
    const containerRef = useRef(null);
    const [visible, observeEl, unobserveEl] = useOnScreen({
        root: containerRef.current,
        items: rightContent,
        rootMargin: "-50px 0px -100px 0px"
    });

    // calculates current page
    useEffect(() => {
        if (visible['timeline-item-0'] === true) {
            props.setVisible('about')
            props.history.replace(`/home?section=about`)
        }
        if (
            (visible['timeline-item-0'] === true && visible['timeline-item-1'] === true) ||
            (visible['timeline-item-1'] === true)
        ) {
            props.setVisible('projects')
            props.history.replace(`/home?section=projects`)
        }
        if (
            (visible['timeline-item-1'] === true && visible['timeline-item-2'] === true) ||
            (visible['timeline-item-2'] === true)
        ) {
            props.setVisible('experience')
            props.history.replace(`/home?section=experience`)
        }
        if (
            (visible['timeline-item-2'] === true && visible['timeline-item-3'] === true) ||
            (visible['timeline-item-3'] === true)
        ) {
            props.setVisible('playground')
            props.history.replace(`/home?section=playground`)
        }
        if (
            (visible['timeline-item-3'] === true && visible['timeline-item-4'] === true) ||
            (visible['timeline-item-4'] === true)
        ) {
            props.setVisible('contact')
            props.history.replace(`/home?section=contact`)
        }

    }, [visible])


    return (
        rightContent.length > 0 && (
            <div className="timeline-container HomePageWrapper__right">
                <div
                    style={{
                        height: '100%',
                        padding: '15px'
                    }}
                    className="timeline-items-container custom-scroller"
                    ref={props.ref}
                    onScroll={props.onScroll}

                >
                    {rightContent.map((data, i) => (
                        <TimelineItem
                            observe={observeEl}
                            unobserve={unobserveEl}
                            visible={visible && visible[`timeline-item-${i}`]}
                            id={i}
                            route={data.route}
                            node={data.node}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        )
    );
}

export default Timeline;
