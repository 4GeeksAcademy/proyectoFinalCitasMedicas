import { Outlet, useLocation } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Toaster } from "react-hot-toast"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    const location = useLocation();

    const showNavbarFooterRoutes = ['/landing-n1', '/sing-in', '/register'];
    const shouldShowNavbarFooter = showNavbarFooterRoutes.includes(location.pathname);


    return (
        <ScrollToTop>
            <div className="d-flex flex-column min-vh-100">
                {shouldShowNavbarFooter && <Navbar />}

                <main className="flex-grow-1">
                    <Outlet />
                </main>

                {shouldShowNavbarFooter && <Footer />}

            </div>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    className: "rounded-5"
                }}
            />

        </ScrollToTop>
    )
}