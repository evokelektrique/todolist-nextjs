import { SkeletonBlock, SkeletonText } from 'skeleton-elements/react';

function TodoListSkeletonComponent() {
    const skeletonItems = [];

    for (let i = 0; i < 10; i++) {
        skeletonItems.push(
            <div className='is-flex is-align-items-center mb-1 is-justify-content-center' key={i}>
                <SkeletonText width="50" effect='wave' className='mb-2 mr-2 is-inline-block'>
                    Lorem ipsum, dolor dolor repellendus neque ex.Lorem ipsum, dolor dolor repellendus neque ex.Lorem ipsum
                </SkeletonText>

                <div className='is-inline-block'>
                    <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2 is-inline-block' />
                    <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2 is-inline-block' />
                </div>
            </div>
        );
    }

    return <>
        {skeletonItems}

        <div className='my-3 is-flex is-align-items-center is-justify-content-center'>
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
            <SkeletonBlock width='50px' height='50px' effect='wave' className='mr-2' />
        </div>
    </>;
}

export default TodoListSkeletonComponent;
