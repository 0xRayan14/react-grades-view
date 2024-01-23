import MathAverage from "./MathAverage.tsx";
import SocieteAverage from "./SocieteAverage.tsx";
import AnglaisAverage from "./AnglaisAverage.tsx";
import InfoAverage from "./InfoAverage.tsx";
import CieAverage from "./EpsicAverage.tsx";
import EpsicAverage from "./EpsicAverage.tsx";
import GeneralAverage from "./GeneralAverage.tsx";

export default function AllSubjectsAverages() {
    return <div className="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">Averages</h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
                    <GeneralAverage/>
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