export default function  GeneralAverage() {
    return <>
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
    </>
}