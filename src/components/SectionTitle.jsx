/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="py-5 text-center">
            <p className="text-yellow-600">{subHeading}</p>
            <hr className="w-[300px] mx-auto my-3"/>
            <h2 className="md:text-3xl uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;