import { Link, useLocation } from "react-router-dom";

const Dobrodosli = () => {

    const isLoginPage = useLocation().pathname === '/prijava';

    if (isLoginPage) {
        return (
            <div className="dobrodosli-box">
                <div className="dobrodosli">
                    Dobrodošli nazaj!
                </div>
                <div className="pridruzitev">
                    Prijavite se in nadaljujte svoje jezikovno potovanje z LinguaLearn.
                </div>
                <div className="racun">
                    <div>Še nimate računa?</div>
                    <div className="ustvari-button">
                        <Link to="/registracija"><button>Ustvarite račun</button></Link>
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <div className="dobrodosli-box">
            <div className="dobrodosli">
                Dobrodošli na LinguaLearn!
            </div>
            <div className="pridruzitev">
                Pridružite se naši skupnosti in začnite svojo pot v večjezični svet.
            </div>
            <div className="racun">

                <div>Že imate račun?</div>
                <div className="ustvari-button">
                    <Link to="/prijava"><button>Prijavite se</button></Link>
                </div>
            </div>
        </div>

        );
    }
}

export default Dobrodosli;