// app/work/[slug]/page.tsx
import CaseStudyUI from "./CaseStudyUI";

// 1. Your Project Data Database
const projectData = {
    "muzukuru": {
        title: "Muzukuru",
        subtitle: "Connecting families globally through seamless funeral streaming.",
        role: "Lead Product Designer",
        timeline: "3 Months",
        services: ["UX Research", "UI Design", "Prototyping"],
        heroImage: "/projects/albinism-konnect-background-gray.jpg",
        challenge: "Funerals are deeply cultural and emotional events. When families are separated by borders, standard streaming tools like Zoom feel too corporate and disjointed.",
        solution: "We designed a native mobile experience focused on accessibility. We introduced a 'One-Tap Join' feature via SMS links, bypassing complex login screens."
    },
    "old-mutual": {
        title: "Old Mutual",
        subtitle: "A powerful dashboard using machine learning to predict crop yields.",
        role: "UI/UX Designer",
        timeline: "6 Months",
        services: ["Dashboard Design", "Data Visualization", "Design System"],
        heroImage: "/projects/old-mutual-dash.png",
        challenge: "Farmers were overwhelmed by raw data points regarding soil moisture, weather patterns, and crop health.",
        solution: "We created a heavily modular dashboard that prioritizes 'glanceability.' Using a card-based architecture, farmers can see critical alerts immediately."
    },
    "albinism-konnect": {
        title: "Albinism Konnect",
        subtitle: "An accessible, community-driven platform empowering lives.",
        role: "Web Designer",
        timeline: "4 Months",
        services: ["Web Design", "Accessibility", "Non-Profit"],
        heroImage: "/projects/albinism-mockup.png",
        challenge: "Information regarding albinism was fragmented and inaccessible to visually impaired users.",
        solution: "We engineered a highly accessible web platform with robust contrast toggles, screen-reader optimized architecture, and localized content."
    }
};

// 2. The Build-Time Function (This keeps GitHub Pages happy)
export function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({
        slug: slug,
    }));
}

// 3. The Server Component
// In a server component, the URL parameters are passed automatically as a prop!
export default function CaseStudy({ params }: { params: { slug: string } }) {
    const project = projectData[params.slug as keyof typeof projectData];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Project not found.
            </div>
        );
    }

    // Pass the data down to the Client Component
    return <CaseStudyUI project={project} />;
}