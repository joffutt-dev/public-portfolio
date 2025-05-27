import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="navbar bg-base-200 shadow-lg sticky">
        <div className="navbar-start">
          <div className="text-xl font-bold">Portfolio</div>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              import.meta.env.VITE_LINKEDIN_URL
                ? window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank")
                : undefined
            }
          >
            Contact Me
          </button>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
