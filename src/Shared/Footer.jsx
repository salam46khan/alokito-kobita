import logo from '../../public/logo.png'
const Footer = () => {
    return (
        <div className="px-3 py-10 bg-NavyBlue">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 text-white text-center">
                <div className="md:border-r p-2 md:text-left">
                    <img className='mx-auto md:mx-0 w-2/3' src={logo} alt="" />
                    <p>
                    "Welcome to Alokito Kobita, where we believe in the transformative power of poetry. Our mission is to provide a nurturing space for poets to share their creativity and for readers to immerse themselves in the beauty of verse"
                    </p>
                </div>
                <div className="md:border-r">hi</div>
                <div className="md:border-r">hi</div>
                <div>hi</div>
            </div>
        </div>
    );
};

export default Footer;