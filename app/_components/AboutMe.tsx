'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 slide-up-and-fade">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-6">
                        <h3 className="text-2xl font-semibold slide-up-and-fade">
                            Purdue CS + Statistics | Class of 2027
                        </h3>
                        <p className="text-muted-foreground mt-4 slide-up-and-fade">
                            I&apos;m a CS and Statistics double major with a certificate in Entrepreneurship, building practical systems in ML, distributed architectures, and full-stack product engineering.
                        </p>

                        <p className="text-muted-foreground mt-4 slide-up-and-fade">
                            Recent internships include NASA (astronomical data pipelines), Jumpseat (high-throughput pricing engines & web scrapers), and CosmicBrain AI (end-to-end AI pipeline delivery).
                        </p>
                    </div>

                    <div className="md:col-span-6 space-y-4">
                        <div className="p-6 rounded-lg bg-secondary/20 slide-up-and-fade">
                            <h4 className="text-lg font-semibold">High-Performance Systems</h4>
                            <p className="text-muted-foreground mt-2">
                                Building scalable systems and GPU-accelerated pipelines using Rust, Python, and CUDA.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-secondary/20 slide-up-and-fade">
                            <h4 className="text-lg font-semibold">AI & Robotics</h4>
                            <p className="text-muted-foreground mt-2">
                                Developing intelligent models and robotics simulation platforms using PyTorch and deep learning.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-secondary/20 slide-up-and-fade">
                            <h4 className="text-lg font-semibold">Full-Stack Engineering</h4>
                            <p className="text-muted-foreground mt-2">
                                Creating production applications with React, Node.js, and real-time systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
