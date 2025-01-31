import img from '../../assets/normal.jpg';
import img2 from '../../assets/platinums.png';
import img3 from '../../assets/gold.jpg';
import img4 from '../../assets/diamond.jpg';
import PropTypes from 'prop-types';
const Budget = ({ value, setValue, budgetScroll , scrollHandler, accommodationScroll }) => {
    return (
        <div ref={budgetScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'>What is your daily budget per person ? <span className='text-red-500'>*</span> </h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => {setValue("$100"); scrollHandler(accommodationScroll)}} className={value === "$100" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$100</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("$200"); scrollHandler(accommodationScroll)}} className={value === "$200" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$200</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("$300"); scrollHandler(accommodationScroll)}} className={value === "$300" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$300</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("$400"); scrollHandler(accommodationScroll)}} className={value === "$400" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$400</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;

Budget.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    budgetScroll : PropTypes.object.isRequired,
    accommodationScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}