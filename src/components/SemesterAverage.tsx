export default function SemesterAverage ({semesterAverage }:{semesterAverage:number}) {

    let classColor = '';



    if (semesterAverage > 4) {
        classColor = 'fill-green-500 h-1.5 w-1.5';
    } else if (semesterAverage < 4) {
        classColor = 'fill-red-500 h-1.5 w-1.5';
    } else {
        classColor = 'fill-yellow-500 h-1.5 w-1.5';
    }

    if (isNaN(semesterAverage))
        return



    return (
        <>
        <span
            className="ml-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-bold text-gray-900 ring-1 ring-inset ring-gray-300"
        >
                                <svg
                                    className={classColor}
                                    viewBox="0 0 6 6"
                                    aria-hidden="true"
                                >
                                  <circle cx="3" cy="3" r="3"/>
                                </svg>
            {semesterAverage}
                              </span>
        </>
    )

}