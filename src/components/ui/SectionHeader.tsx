
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
    description

}: SectionHeaderProps) {
    return (
        <div className="max-w-2xl mx-auto text-center space-y-4">
            {/* badge */}
            {badge && (
                <span className="inline-block text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border">

                </span>
            )}
        </div>
    )
}
