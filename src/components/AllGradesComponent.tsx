import SemesterElement from "./SemesterElement.tsx";
import SemesterButton from "./SemesterButton.tsx";

export default function AllGradesComponent() {

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
                          5.5
                        </span>
                                </div>
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
