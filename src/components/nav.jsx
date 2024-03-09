import MaxWidth from "./maxWidth";
import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full">
      <MaxWidth>
        <div className="flex justify-between items-center h-10 border-b border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-900">
              Conway’s Game of Life
            </div>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <NavLink to="/" className={({ isActive }) => {
              return isActive ? 'text-red-900 font-bold' : ''
            }}>
              Home
            </NavLink>
            <Outlet />
            <NavLink to="/game" className={({ isActive }) => {
              return isActive ? 'text-red-900 font-bold' : ''
            }}>
              Game
            </NavLink>
            <Outlet />
            <NavLink to="/credits" className={({ isActive }) => {
              return isActive ? 'text-red-900 font-bold' : ''
            }}>
              Credits
              </NavLink>
            <Outlet />
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
