import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Diary. All rights reserved.</p>
            <nav>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
            </nav>
        </footer>
    );
};

export default Footer;
