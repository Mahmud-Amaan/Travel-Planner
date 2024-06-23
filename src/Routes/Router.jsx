import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLoyout/MainLayout";
import Home from "../Pages/Home/Home";
import RecommendationPage from "../Pages/RecommendationPage/RecommendationPage";
import Marketplace from "./../Components/Marketplace/marketplace";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/recommendations",
                element : <RecommendationPage />
            },
            {
                path : "/sugesstedPlaces",
                element : <RecommendationPage />
            },
            {
                path : "/marketplace",
                element : <Marketplace />
            }
        ]
    }
])