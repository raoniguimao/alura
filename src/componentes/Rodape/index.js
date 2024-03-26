import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li><a href="http://facebook.com" target='_blank' rel="noreferrer"><img src="/imagens/fb.png" alt="facebook.com" /></a></li>
                    <li><a href="http://twitter.com" target='_blank' rel="noreferrer"><img src="/imagens/tw.png" alt="twitter.com" /></a></li>
                    <li><a href="http://instagram.com" target='_blank' rel="noreferrer"><img src="/imagens/ig.png" alt="instagram.com" /></a></li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="organo" />
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    );
};

export default Rodape;