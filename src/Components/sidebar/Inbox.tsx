import { Link } from "react-router-dom";

export default function Inbox({ toggle }: any) {
  return (
    <div>
      <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
        <Link
          to="/"
          className={`block text-slate-200 hover:text-white truncate transition duration-150 `}
        >
          <div className="flex items-center">
            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
              <path
                className={`fill-current text-slate-600 `}
                d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
              />
              <path
                className={`fill-current text-slate-400 `}
                d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
              />
            </svg>
            <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              Inbox
            </span>
          </div>
        </Link>
      </li>
    </div>
  );
}
