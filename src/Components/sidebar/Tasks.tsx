import { Link } from "react-router-dom";

export default function Tasks() {
  return (
    <div>
      <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 `}>
        <Link
          to="/"
          className={`block text-slate-200 hover:text-white truncate transition duration-150 `}
        >
          <div className="flex items-center">
            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
              <path
                className={`fill-current text-slate-600 `}
                d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
              />
              <path
                className={`fill-current text-slate-600 `}
                d="M1 1h22v23H1z"
              />
              <path
                className={`fill-current text-slate-400`}
                d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
              />
            </svg>
            <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              Tasks
            </span>
          </div>
        </Link>
      </li>
    </div>
  );
}
