
export default function EpsicAverage ({gradeAverage}:{gradeAverage:number}) {
    return (
        <>
            <div
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
            >
                <dt className="text-sm font-medium leading-6 text-gray-500">
                    Modules EPSIC
                </dt>
                <dd className="text-xs font-medium text-green-600">
                    +10.18%
                </dd>
                <dd
                    className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                    {gradeAverage}
                </dd>
            </div>
        </>
    )

}