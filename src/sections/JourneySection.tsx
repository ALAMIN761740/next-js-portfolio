"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import SectionHeader from "@/components/ui/SectionHeader";
import JourneyCard from "@/components/journey/JourneyCard";
import {
    developmentJourney,
    educationJourney,
} from "@/components/journey/journey-data";

type Tab = "development" | "education";

export default function JourneySection() {
    const [activeTab, setActiveTab] =
        useState<Tab>("development");

    const items = useMemo(() => {
        if (activeTab === "development") {
            return developmentJourney.map((item) => ({
                year: item.year,
                title: item.role,
                subtitle: item.company,
                description: item.description,
                badges: item.technologies,
            }));
        }

        return educationJourney.map((item) => ({
            year: item.year,
            title: item.degree,
            subtitle: item.institution,
            description: item.description,
            badges: item.highlights,
        }));
    }, [activeTab]);

    return (
        <section id="journey" className="py-24">
            <div className="container mx-auto px-4">

                <SectionHeader
                    badge="Journey"
                    title="My"
                    highlight=" Journey"
                    description="A timeline of my development journey and educational background."
                />

                {/* Tabs */}
                <div className="mt-12 flex justify-center">
                    <div className="flex rounded-full border border-border bg-card p-1">

                        <button
                            onClick={() => setActiveTab("development")}
                            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "development"
                                ? "text-white"
                                : "text-muted-foreground"
                                }`}
                        >
                            {activeTab === "development" && (
                                <motion.div
                                    layoutId="tab"
                                    className="absolute inset-0 rounded-full bg-primary"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <span className="relative z-10">
                                Development
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab("education")}
                            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "education"
                                ? "text-white"
                                : "text-muted-foreground"
                                }`}
                        >
                            {activeTab === "education" && (
                                <motion.div
                                    layoutId="tab"
                                    className="absolute inset-0 rounded-full bg-primary"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <span className="relative z-10">
                                Education
                            </span>
                        </button>

                    </div>
                </div>

                {/* Timeline */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .35 }}
                    className="mx-auto mt-16 max-w-4xl space-y-10"
                >
                    {items.map((item, index) => (
                        <JourneyCard
                            key={`${item.title}-${index}`}
                            item={item}
                            isLast={index === items.length - 1}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}