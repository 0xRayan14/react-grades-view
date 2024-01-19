import SemesterElement from "./SemesterElement.tsx";
import SemesterButton from "./SemesterButton.tsx";
import AllAverage from "./AllAverage.tsx";
import {useState} from "react";

export default function AllGradesComponent() {
    const newAverage = (average: number) => setAverages((averages) => [...averages, average]);
    const [allAverages, setAverages] = useState<number[]>([]);

    const calculateAverage = () => {
        let sum = 0
        for (const average of allAverages) {
            sum += average
        }
        return Math.round((sum / allAverages.length) * 2) / 2

    }


    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                    <h2 className="sr-only" id="section-1-title">Grades</h2>
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="p-6">
                            <div className="md:flex md:items-center md:justify-between">
                                <div className="min-w-0 flex-1">
                                    <h2
                                        className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
                                    >
                                        Mathématiques
                                    </h2>
                                </div>
                                <AllAverage gradeAverage={calculateAverage()}/>
                            </div>

                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <SemesterElement/>
                                    <SemesterButton></SemesterButton>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
