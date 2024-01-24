import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./_layouts/main";
import { CurriculumLayout } from "./_layouts/curriculum";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
    },
    {
        path: "/curriculum",
        element: <CurriculumLayout/>
    }
])