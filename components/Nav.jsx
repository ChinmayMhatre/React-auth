import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function Nav() {
    const [user, loading] = useAuthState(auth);
    return (
        <nav className="flex justify-between p-8 items-center ">
            <Link href={"/"}>Logo</Link>
            <ul>
                {!user && (
                    <Link href={"/auth/Login"}>
                        <a className="py-2 px-4 text-lg bg-teal-500 rounded-lg font-medium">
                            Login
                        </a>
                    </Link>
                )}
                {user && !loading && (
                    <Link href={"/Dashboard"}>
                        <img
                            src={user.photoURL}
                            alt="avatar"
                            className="rounded-full h-10 w-10"
                            reffererpolicy="no-referrer"
                        />
                    </Link>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
