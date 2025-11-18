"use client"
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation';
import React from 'react'
import DotsLoader from './ui/Loader';

interface PropTypes {
    component: string
}
function SolutionPages1({ component }: PropTypes) {


    const DynamicComponent = dynamic(
        async () => {
            try {
                return await import(`./GlassShowers/${component}`);
            } catch (error) {
                return () => notFound();
            }
        },
        {
            loading: () => (
                <div className="flex items-center justify-center min-h-screen w-full">
                    <DotsLoader />
                </div>
            ),
        }
    );

    return (
        <section className='flex flex-col gap-2'>
            <DynamicComponent />
        </section>
    )
}

export default SolutionPages1