

export default function AllAverage ({gradeAverage}:{gradeAverage:number}) {
    return (
        <>
            <div className="mt-4 flex md:ml-4 md:mt-0">
                        <span
                            className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-200"
                        >
                          <svg
                              className="h-1.5 w-1.5 fill-green-500"
                              viewBox="0 0 6 6"
                              aria-hidden="true"
                          >
                            <circle cx="3" cy="3" r="3"/>
                          </svg>
                            {gradeAverage}
                        </span>
            </div>
        </>
    )

}