import PropTypes from 'prop-types'
const PageBanner = ({title}) => {
    return (
        <div className="MyPageBanner h-[300px] w-full">
            <div className="container mx-auto text-center flex flex-col pt-10 h-full justify-center items-center">
                <p className="text-xl text-ElectricBlue">-- Alokito Kobita --</p>
                <p className="text-white font-bold text-5xl font-TitleText">{title}</p>
            </div>
        </div>
    );
};

PageBanner.propTypes = {
    title: PropTypes.string
}
export default PageBanner;