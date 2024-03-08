import PropTypes from 'prop-types';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ProfileUpdateFrm = ({proInfo}) => {

    const axiosPublic = useAxiosPublic()
    const {_id, email, address, phone, bio, birthday} = proInfo;
    const handleProUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const address = form.address.value;
        const phone = form.phone.value;
        const birthday = form.birthday.value;
        const bio = form.bio.value;
        const updatePro = { address, phone, birthday, bio }
        console.log(updatePro);

        axiosPublic.put(`/user/${_id}`, updatePro)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Your Profile update successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="py-10 px-2">
            <p className="text-xl font-bold text-NavyBlue text-center mb-4">Update Profile</p>
            <form onSubmit={handleProUpdate}>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Address
                    </label>
                    <input name='address' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={address} placeholder="Address" />
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Phone Number
                    </label>
                    <input name='phone' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" defaultValue={phone} />
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Date of Birth
                    </label>
                    <input name='birthday' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" defaultValue={birthday} />
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Bio
                    </label>
                    <textarea name='bio' className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={bio} placeholder='Say somthing about you' />
                </div>
                <div className="mt-5 flex justify-center">
                    <input className="bg-cyan-200 rounded-full inline-block px-8 uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md cursor-pointer shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 font-semibold" type="submit" value={'Update Profile'} />
                </div>
            </form>
        </div>
    );
};

ProfileUpdateFrm.propTypes = {
    proInfo: PropTypes.object
}
export default ProfileUpdateFrm;