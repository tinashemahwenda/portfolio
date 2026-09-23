import CaseStudyUI from "./CaseStudyUI";

const projectData = {
    "albinism-konnect": {
        title: "Albinism Konnect",
        subtitle: "Designing To Save 200 000 Lives",
        role: "UX/UI Product Designer",
        timeline: "4 Months",
        services: ["UX Research", "Accessibility", "Mobile App Design"],
        heroImage: "/projects/albinism-banner-2.png", // Ensure this is a 16:10 high-res image
        sections: [
            {
                title: "Challenge Overview",
                content: [
                    "Albinism affects more than 200,000 people in Sub-Saharan Africa which means 1 in every 4,000–5,000, which is 4–5 times the global rate, with over 70,000 cases in Zimbabwe. Tragically, 98% of people with albinism in the region die before age 40, and 80% of those deaths are from skin cancer caused by UV hypersensitivity.",
                    "This presented an exciting challenge to design for saving lives. From our research findings, I discovered several critical gaps in existing solutions:"
                ],
                list: [
                    {
                        heading: "Fragmented Systems",
                        text: "No existing platform combines AI-based lesion classification, environmental UV risk monitoring, community health worker (CHW) coordination, and privacy-preserving edge deployment in one system."
                    },
                    {
                        heading: "Lack of Localization",
                        text: "No platform is tailored to hypopigmented skin phenotypes or delivers education in local languages (Shona, Ndebele). Digital health tools for LMICs succeed only when locally adapted."
                    },
                    {
                        heading: "Misaligned Focus",
                        text: "Existing mHealth tools target high-burden diseases (HIV, TB). NgoziYangu (Tanzania) is the only albinism-adjacent app, but it is a manual teledermatology tool with no AI classification or UV monitoring."
                    }
                ],
                images: ["placeholder"] // Great spot for a persona or ecosystem map
            },
            {
                title: "Proposed Solution",
                content: [
                    "As a result of these findings, I embarked on a journey to create an ML-powered digital health platform offering automated skin lesion screening, real-time UV alerts, CHW referral dashboards, and multilingual education.",
                    "The ecosystem was split into two main user groups: a Dashboard App for health practitioners, and a dedicated Mobile App for people with albinism."
                ],
                images: ["placeholder", "placeholder"] // Showcase the Dashboard and Mobile App side-by-side
            },
            {
                title: "UX Research: Biological Constraints",
                quote: "For a user with albinism, holding a phone displaying a white screen is like staring directly into a flashlight. It causes squinting, excessive tearing, and sharp physical pain.",
                quoteAuthor: "Research Insight",
                content: [
                    "Designing an app for people with albinism in Sub-Saharan Africa sits at the intersection of biology, accessibility, and regional technology constraints. Albinism presents major physical challenges, including severe visual impairments."
                ],
                list: [
                    {
                        heading: "Nystagmus (The Moving Target)",
                        text: "An involuntary, rapid darting of the eyes. Because the fovea is missing, the brain struggles to lock onto a target, rapidly shifting the eye back and forth to construct a clear image."
                    },
                    {
                        heading: "Photophobia (The Pain of Light)",
                        text: "Extreme sensitivity to light. The iris lacks pigment and is translucent, meaning light scatters right through it, flooding the inside of the eye and causing blinding glare."
                    },
                    {
                        heading: "Low Visual Acuity (The Blur)",
                        text: "Many people with albinism have visual acuity ranging from 20/70 to 20/400. Because the issue is retinal, this cannot be fully corrected with glasses."
                    }
                ]
            },
            {
                title: "Why Standard UI Fails",
                content: [
                    "Imagine trying to tap a 44x44 pixel 'Submit' button on a smartphone while someone is vigorously shaking your hand. Small touch targets and dense paragraphs of text become moving targets.",
                    "Furthermore, modern design heavily favors 'Light Mode' and low-contrast trends. For our users, intricate graphs or light gray placeholder text inside a white search bar disappear entirely into unreadable smudges."
                ]
            },
            {
                title: "Rewriting WCAG Standards",
                content: [
                    "To build a truly functional product, standard accessibility guidelines weren't enough. I had to fundamentally rewrite WCAG baselines to accommodate our users' physical realities."
                ],
                list: [
                    {
                        heading: "Expanded Touch Targets",
                        text: "To account for the 'tremor radius' caused by nystagmus, I pushed critical touch targets from the WCAG standard of 44x44 pixels up to 64x64 pixels, significantly reducing error rates."
                    },
                    {
                        heading: "Engineered Line Spacing",
                        text: "Cramped text forces the eye to work harder. I implemented a 1.75 - 2.0 line spacing (leading) to create enough whitespace 'rails' to prevent the user from losing their place."
                    }
                ],
                images: ["placeholder"] // Perfect place to show a UI comparison of standard vs. 64px targets
            },
            {
                title: "Introducing: 3D Accessibility",
                content: [
                    "To cater to all these factors, I coined a new UX Accessibility Standard called '3D Accessibility'. This framework builds features utilizing Sound, Gestures, and Colors for ultimate ease of use."
                ],
                list: [
                    {
                        heading: "Sound Integration",
                        text: "An auto-play voice feature instantly narrates the UV status, weather updates, and doctor’s advice in local languages, bridging the gap between visual impairment and reading literacy."
                    },
                    {
                        heading: "Ambient Colors",
                        text: "The screen floods with ambient color that easily registers in peripheral vision, allowing users to understand application status even through squinted eyes."
                    },
                    {
                        heading: "Motion Gestures",
                        text: "Users can seamlessly play or pause the audio narration simply by shaking the phone, bypassing the need to hunt for a pause button."
                    }
                ],
                images: ["placeholder", "placeholder", "placeholder"] // Showcase the final high-fidelity screens utilizing these 3D principles
            }
        ]
    },
    "autolog": {
        title: "Autolog",
        subtitle: "Solving Workplace Punctuality Through Gamification.",
        role: "UX/UI Product Designer",
        timeline: "4 Weeks",
        services: ["UX Research", "Gamification", "Hardware Integration"],
        heroImage: "/projects/autolog-main-mockup.png",
        sections: [
            {
                title: "Overview",
                content: [
                    "Getting employees & team members to arrive on time is a universal business challenge. For Muzukuru Funeral Streaming, consistent lateness at the Area 46 offices was disrupting daily operations.",
                    "This led to the design of Autolog. Autolog is a location-aware, auto-logging ecosystem designed to completely remove the friction of clocking in by replacing the anxiety of the morning rush with a rewarding, gamified experience."
                ]
            },
            {
                title: "Ideation: Reverse-engineering an Accident",
                content: [
                    "The idea for Autolog actually came from a personal mishap. On a Thursday evening, I left my MacBook at the office. A few kilometers into my commute, my phone buzzed with an Apple 'Find My' notification.",
                    "That notification triggered a thought: What if I reverse-engineered this exact process for the workplace? The solution had to be invisible; we didn't want workers fumbling with an app at the gate."
                ]
            },
            {
                title: "Discovery: Understanding the 'WHY'",
                quote: "Leaders start with WHY",
                quoteAuthor: "Simon Sinek",
                content: [
                    "I had to understand the root cause of the punctuality drop. A solution built on assumptions is a setup for failure, so I deployed a mixed-methods research approach involving the Muzukuru team."
                ],
                list: [
                    {
                        heading: "The 30-Minute Window",
                        text: "Data revealed that 68% of recorded tardiness fell within a tight 15-to-30-minute window. Employees weren't sleeping in for hours; they were barely missing the mark."
                    },
                    {
                        heading: "The Friday Dip",
                        text: "On-time arrival rates consistently dropped by 22% on Fridays, indicating a week-long fatigue with the morning routine."
                    },
                    {
                        heading: "The Commute Variable",
                        text: "Workers were punished equally for factors out of their control, like unpredictable transit from Chitungwiza into Harare, and genuine laziness."
                    }
                ],
                images: ["placeholder"]
            },
            {
                title: "White Arts: Gamification Mechanics",
                content: [
                    "To shift the company culture from punitive to motivational, I broke down the user journey into a series of micro-rewards borrowed from fitness apps and developer tools."
                ],
                list: [
                    {
                        heading: "Punctuality Points (P-Score)",
                        text: "Timestamps are boring; scores are engaging. Users earn points based on their exact arrival times, shifting the narrative from 'I have to be at work' to 'I can boost my P-Score'."
                    },
                    {
                        heading: "GitHub-Style Heatmaps",
                        text: "A contribution graph maps punctuality onto a color-coded grid. Solid blue squares feel satisfying, while red 'absent' squares disrupt the pattern, encouraging consistency."
                    }
                ],
                // Generates two side-by-side placeholders
                images: ["placeholder", "placeholder"]
            },
            {
                title: "Edge Cases & Failsafes",
                quote: "If the system lets you make the error, it is badly designed.",
                quoteAuthor: "Donald A. Norman",
                content: [
                    "A system is only as good as its backup plan. If the physical tracker fails to ping the system, the Autolog smartphone app automatically activates the phone's GPS 30 minutes prior to the worker's shift."
                ]
            }
        ]
    },
    "old-mutual": {
        title: "Old Mutual Tenant Portal",
        subtitle: "Scaling B2B Partnerships Through Design",
        role: "Lead Designer",
        timeline: "2 Months",
        services: ["Dashboard Design", "Data Visualization", "B2B SaaS"],
        heroImage: "/projects/old-mutual-banner.png",
        sections: [
            {
                title: "The Problem: Drowning in Paperwork",
                content: [
                    "Muzukuru’s partnership with Old Mutual Funeral Services was a massive win, but the operational execution was stuck in the past. The team was tracking stream allocations on physical paper.",
                    "At the end of every stream, we had to spend hours manually exporting data and designing PDF reports in Canva to send to Old Mutual stakeholders. It was unscalable, prone to human error, and meant the client was always looking at historical data rather than real-time insights."
                ]
            },
            {
                title: "The Solution: A Centralized B2B Hub",
                content: [
                    "We crafted a fully customizable plug & play system—a dedicated B2B tenant dashboard built on top of the existing Muzukuru Memorial Management System (MMS).",
                    "It serves as a centralized self-service hub for Old Mutual to manage bookings, view live streams, and auto-generate analytics without requiring constant manual intervention from our team."
                ],
                images: ["placeholder"]
            },
            {
                title: "User Experience Audit",
                content: [
                    "I mapped out the flow to identify where the highest friction occurred between both parties. The research revealed three core bottlenecks:"
                ],
                list: [
                    {
                        heading: "Quota Anxiety",
                        text: "Administrators never knew exactly how much they used, leading to hesitation in offering streams to grieving families."
                    },
                    {
                        heading: "Logistics Black Hole",
                        text: "On days of streams, there were constant calls to ask, 'Has the camera crew arrived yet?'"
                    },
                    {
                        heading: "Data Lag",
                        text: "Viewer engagement data in the backend was unable to provide immediate value for their own use."
                    }
                ]
            },
            {
                title: "UX Decisions & Execution",
                content: [
                    "By making the most critical elements visible on page one, users could cross-reference data seamlessly without navigating through complex menus."
                ],
                list: [
                    {
                        heading: "Curing Quota Anxiety",
                        text: "We solved the uncertainty around priority limits. Both parties wanted an easy way to check usage for specific months, alongside previous performance trends.",
                        image: "placeholder"
                    },
                    {
                        heading: "Eliminating Phone Calls via AI",
                        text: "To prevent draining resources bridging field workers ('Pixel Pilots') and office staff, I drew inspiration from ride-share apps to create a live status tracker (Setup, Shooting, Wrapping)."
                    },
                    {
                        heading: "Automating the Workflow",
                        text: "We created a digital interface for metrics, including a platform breakdown (Website, YouTube, Facebook) and geographic viewer data."
                    }
                ],
                images: ["placeholder", "placeholder", "placeholder"]
            }
        ]
    }
};



export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projectData[resolvedParams.slug as keyof typeof projectData];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Project not found.
            </div>
        );
    }

    return <CaseStudyUI project={project} />;
}