import GradeElement from "./GradeElement.tsx";
import GradeInput from "./GradeInput.tsx";
import {useState} from "react";
import GradeAverage from "./GradeAverage.tsx";
export default function SemesterElement () {


    const newGrade = (grade: number) => setGrades((grades) => [...grades, grade]);
    const [allGrades, setGrades] = useState<number[]>([]);

    const calculateAverage = () => {
        let sum = 0
        for (const grade of allGrades) {
            sum += grade
        }
        return Math.round((sum / allGrades.length) * 2) / 2

    }

    return (
        <>

            <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">

                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semestre 1
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                    <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                        {allGrades.map((grades, index ) => (
                            <GradeElement key={index} grade={grades}/>
                        ))}
                    </div>
                    <div className="flex">
                        <GradeInput setNewGrade={newGrade}/>
                        <GradeAverage gradeAverage={calculateAverage()}/>
                    </div>
                </dd>
            </div>
        </>
    )
}