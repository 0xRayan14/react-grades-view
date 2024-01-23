import './App.css'

import AllGradesComponent from "./components/AllGradesComponent.tsx";
import AllSubjectsAverages from "./components/allAverages/AllSubjectsAverages.tsx";
import HeaderNavBar from "./components/HeaderNavBar.tsx";

function App() {
    return (
        <>
            <header className="bg-sky-600 pb-24">
                <HeaderNavBar/>
            </header>
            <main className="-mt-24 pb-8">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    <h1 className="sr-only">Averages</h1>

                    <div
                        className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8"
                    >
                        <AllGradesComponent></AllGradesComponent>
                        <AllSubjectsAverages></AllSubjectsAverages>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App