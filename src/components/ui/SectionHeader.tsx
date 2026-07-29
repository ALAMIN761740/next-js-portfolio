interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlight?: string;
    description?: string;
}

export default function SectionHeader({
    badge,
    title,
    highlight,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mx-auto max-w-2xl space-y-4 text-center">
            {/* Badge */}
            {badge && (
                <span className="inline-flex items-center rounded-full border border-border bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {badge}
                </span>
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-text md:text-4xl lg:text-5xl">
                {title}
                {highlight && <span className="text-primary"> {highlight}</span>}
            </h2>

            {/* Description */}
            {description && (
                <p className="mx-auto max-w-xl text-base leading-7 text-gray-400">
                    {description}
                </p>
            )}
        </div>
    );
}