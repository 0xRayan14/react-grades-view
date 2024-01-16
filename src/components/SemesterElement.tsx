import GradeElement from "./GradeElement.tsx";
import GradeInput from "./GradeInput.tsx";
import GradeAverage from "./GradeAverage.tsx";

export default function SemesterElement () {
    return (
        <>

            <div
                className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"
            >
                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semestre 1
                </dt>
                <dd
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5"
                >
                    <div className="flex justify-end">
                            <GradeInput/>
                            <GradeAverage gradeAverage={5}></GradeAverage>
                            <label htmlFor="sem1" className="sr-only"
                            >Search candidates</label>
                    </div>
                </dd>
            </div>
        </>
    )
}