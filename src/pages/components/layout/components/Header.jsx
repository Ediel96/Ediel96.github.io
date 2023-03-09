import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <> 
            <div>
                <section></section>
                <nav>
                    <section>
                        <Link to='home' >Profile</Link>
                    </section>
                </nav>
            </div>
        </>
    )
}