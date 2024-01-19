import MathAverage from "./allAverages/MathAverage.tsx";
import SocieteAverage from "./allAverages/SocieteAverage.tsx";
import AnglaisAverage from "./allAverages/AnglaisAverage.tsx";
import InfoAverage from "./allAverages/InfoAverage.tsx";
import CieAverage from "./allAverages/EpsicAverage.tsx";
import EpsicAverage from "./allAverages/EpsicAverage.tsx";

export default function AllSubjectsAverages() {
    return <div className="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">Averages</h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <dl
                    className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2"
                >
                    <div
                        className="col-span-2 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2 bg-white px-6 py-6"
                    >
                        <dt className="text-sm font-medium leading-6 text-gray-500">
                            Moyenne générale
                        </dt>
                        <dd className="text-xs font-medium text-green-600">+4.75%</dd>
                        <dd
                            className="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-gray-900"
                        >
                            5.5
                        </dd>
                    </div>
                    <MathAverage gradeAverage={1}/>
                    <SocieteAverage gradeAverage={2}/>
                    <AnglaisAverage gradeAverage={3}/>
                    <InfoAverage gradeAverage={4}/>
                    <EpsicAverage gradeAverage={5}/>
                    <CieAverage gradeAverage={6}/>
                </dl>
            </div>
        </section>
    </div>;
}