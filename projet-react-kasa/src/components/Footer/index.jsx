import logoFooter from '../../assets/Logo_footer.png'

export default function Footer(){
    return (
        <footer>
            <div className="logo-footer"><img src={logoFooter}/></div>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}