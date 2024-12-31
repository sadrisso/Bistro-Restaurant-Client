import Cover from "../components/Cover";
import contactImg from '../assets/contact/banner.jpg'
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
    return (
        <div>
            <Cover title="Contact Us" img={contactImg} />
            <SectionTitle heading="Our Location" subHeading="---Visit Us---" />

            <div className="flex flex-col md:flex-row justify-evenly items-center text-center my-10">
                <div className="border p-10 rounded-2xl w-full md:w-[300px]">
                    <i className="fa-solid fa-phone text-3xl mb-4"></i>
                    <h2 className="text-2xl uppercase">Phone</h2>
                    <p>+001 909887</p>
                </div>

                <div className="border p-10 rounded-2xl w-full md:w-[300px]">
                    <i className="text-3xl fa-solid fa-location-dot mb-4"></i>
                    <h2 className="text-2xl uppercase">Address</h2>
                    <p>12b Paris Road, Rajshahi</p>
                </div>

                <div className="border p-10 rounded-2xl w-full md:w-[300px]">
                    <i className="text-3xl fa-solid fa-clock mb-4"></i>
                    <h2 className="text-2xl uppercase">Working Hour</h2>
                    <p>Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>

            <SectionTitle heading="Contact Form" subHeading="---Send Us A Message---" />

            <div className="hero bg-base-200 min-h-screen my-10 w-full md:w-2/3 mx-auto">

                <div className="w-full md:w-2/3 mx-auto">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone*</span>
                            </label>
                            <input type="text" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <label className="label mt-5">
                                <span className="label-text">Message*</span>
                            </label>
                        <textarea className="resize-none textarea textarea-bordered" placeholder="send your message here"></textarea>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral w-full mx-auto md:w-1/3">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;