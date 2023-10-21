import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Home/index.tsx";
import Error404 from "./pages/error/Error.tsx";
import Footer from "./components/common/Footer.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<LandingPage />
				<Footer />
			</>
		),
		errorElement: <Error404 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
