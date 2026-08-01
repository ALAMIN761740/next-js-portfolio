"use client";

import { motion } from "framer-motion";

interface JourneyCardProps {
    item: {
        year: string;
        title: string;
        subtitle: string;
        description: string;
        badges: string[];
    };
    isLast?: boolean;
}

export default function JourneyCard({
    item,
    isLast = false,
}: JourneyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex gap-6"
        >
            {/* Timeline */}
            <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/40" />

                {!isLast && (
                    <div className="mt-2 w-0.5 flex-1 bg-border" />
                )}
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                {/* Year */}
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.year}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-sm text-muted-foreground">
                    {item.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 leading-7 text-muted-foreground">
                    {item.description}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                        <span
                            key={badge}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}