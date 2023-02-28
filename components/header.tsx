import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";

// @ts-expect-error: Title are string make sureable
export default function Header({ title }): JSX.Element {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div className="flex items-center justify-center fixed w-full h-16 z-40 bg-brand-100 shadow-md">
        <div className="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full px-4">
          <p className="text-xl text-neutral-200">{title}</p>
          <span>
            {!session && (
              <>
                <a
                  className="text-lg text-neutral-200"
                  href={"/api/auth/signin"}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  You are not signed in
                </a>
              </>
            )}
            {session?.user && (
              <a className="text-lg text-neutral-200"
              href={"/api/auth/signout"}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}>Hello {session.user.email ?? session.user.name}</a>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}
