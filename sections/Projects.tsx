import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="work" className="w-full">
            <div className="max-w-6xl mx-auto px-8 py-16">
                <h2 className="text-6xl font-extrabold tracking-tight text-[#1A1A1A]">Projects</h2>
                <p className="text-gray-500 mt-4 max-w-md">
                    Over the last few seasons I was learning products that have massive impact.
                </p>
            </div>

            <ProjectCard
                title="Albinism Konnect"
                subtitle="Health Tech / Android / Accessibility"
                tags={["Health Tech", "Android", "Accessibility"]}
                description="Scaled the platform to 5x its original user base through improved accessibility & multilingual support"
                theme="dark"
            />

            <ProjectCard
                title="Old Mutual"
                subtitle="Financial Stream App"
                tags={["UI/UX", "Web"]}
                description="Led the redesign of an AI-powered SaaS tenant portal which led to client retention."
                theme="light"
                reverse={true}
            />

            <ProjectCard
                title="CHEMA Wallet"
                subtitle="Fintech / Crowd-funding / iOS / Android"
                tags={["Fintech", "Crowd-funding", "iOS", "Android"]}
                description="Scaled the platform to 5x its original user base through improved accessibility & multilingual support"
                theme="dark"
            />
        </section>
    );
}