import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/router"
const NotFound = () => {
        const router = useRouter();

        useEffect(() => {
                setTimeout(() => {
                        router.push('/')
                }, 2000);
                
        }, [])

        return ( 
                <div className="not-found">
                        <h1>Ooooops</h1>
                        <h2>We cant find what you are looking for</h2>
                        <p>Redirecting to <Link href="/">HOME</Link></p>
                </div>
         );
}
 
export default NotFound;