import { Link } from 'react-scroll';
import { ACTIVE, PI_TEXT, section, sectionsIndex } from '../constants/constants';
import { insertMiddleToArray } from '../helpers/helpers';

type NavbarProps = {
    currentLink: string;
    setCurrentLink: Function;
};

const Navbar = ({ currentLink, setCurrentLink }: NavbarProps) => {
    const completeSectionsIndex = insertMiddleToArray(sectionsIndex, { id: PI_TEXT } as section);
    const getLinks = () =>
        completeSectionsIndex.map(link =>
            link?.id === PI_TEXT ? (
                <div className="navPi" key={PI_TEXT} />
            ) : (
                <div className="navLink" key={link?.id}>
                    <Link
                        activeClass={currentLink === link.id ? ACTIVE : undefined}
                        to={link.id}
                        spy={true}
                        smooth={true}
                        duration={200}
                        onClick={() => setCurrentLink(link.id)}
                    >
                        {link?.icon && <img src={link.icon} alt={`${link.title} menu icon`} />}
                        {link.title}
                    </Link>
                </div>
            )
        );
    return (
        <div className="navBar">
            <div className="navItems">{getLinks()}</div>
        </div>
    );
};
export default Navbar;
