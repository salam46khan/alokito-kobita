import love from '../../assets/icons/heart.gif'
import nature from '../../assets/icons/nature.gif'
import romance from '../../assets/icons/romance.gif'
import friend from '../../assets/icons/friendship.gif'
import war from '../../assets/icons/war.gif'
import pray from '../../assets/icons/evening-prayer.gif'
import adventure from '../../assets/icons/parachute.gif'
import dream from '../../assets/icons/dreaming.gif'

const Categories = () => {
    return (
        <div className="py-14 px-3">
            <div className="container mx-auto">
                <div className="w-full max-w-3xl mx-auto space-y-2 text-center mb-10">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Category</h2>
                    <hr className='w-[280px] mx-auto border-4 border-NavyBlue' />
                    <p className="text-gray-500">
                        Alokito Kobita Poetry Finds Its Voice and Hearts Find Their Song. Alokito Kobita invites you to explore the beauty and power of poetry in its myriad forms.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={love} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Love</p>
                            <p className='text-gray-400'>
                                Poems exploring themes of love, passion, and romantic relationships
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={nature} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Nature</p>
                            <p className='text-gray-400'>
                                Poems inspired by the natural world, including landscapes, animals, and seasons.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={romance} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Romance</p>
                            <p className='text-gray-400'>
                                Poems exploring themes of love, passion, and romantic relationships
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={friend} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Friendship</p>
                            <p className='text-gray-400'>
                                Poems celebrating the bonds of friendship and human connections.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={pray} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Spirituality</p>
                            <p className='text-gray-400'>
                                Poems exploring themes of spirituality, religion, and faith.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={war} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>War and Peace</p>
                            <p className='text-gray-400'>
                                Poems addressing the impact of war, conflict, and the quest for peace.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={dream} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Dreams</p>
                            <p className='text-gray-400'>
                                Poems inspired by dreams, fantasies, and the power of imagination.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[260px] shadow-lg shadow-[#0003] px-3 py-5 rounded">
                        <div className='h-28 w-28 mx-auto rounded-full MyIcon p-4 border'>
                            <img className='rounded-3xl' src={adventure} alt="" />
                        </div>
                        <div className='mt-2 text-center space-y-1'>
                            <p className='font-bold text-2xl text-NavyBlue'>Adventure</p>
                            <p className='text-gray-400'>
                                Poems about journeys, discovery, and the thrill of exploration.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Categories;