export default function ReloadButton () {
    function refreshPage() {
        // @ts-ignore
        window.location.reload(false);
    }
    return (
        <>
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <button
                    onClick={refreshPage}
                    type="button"
                    className="relative flex-shrink-0 rounded-full p-1 text-sky-100 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Reload</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </>
    )

}
