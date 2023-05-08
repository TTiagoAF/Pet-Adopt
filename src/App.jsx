import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//É o que renderiza a página principal e a página de detalhes através do BrowserRouter 7
const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});


const App = () => {
    const adoptedPet = useState(null);
    return(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AdoptedPetContext.Provider value={adoptedPet}>
                    <header>
                        <div>
                        <Link to="/">Adopt Me!</Link>
                        </div>                   
                    </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/" element={<SearchParams />}/>
                </Routes>
            </AdoptedPetContext.Provider>
        </QueryClientProvider>
    </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);