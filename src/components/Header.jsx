import axios from "axios"
import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"


const Header = () => {

    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState("palash-bag10")
    const [userData, setUserData] = useState(null)

    const fetchUserData = async () => {
        setLoading(true)

        const { data } = await axios.get(`https://api.github.com/users/${userName}`);
        console.log(data)

        if (data) {
            setUserData(data)
            setUserName('')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const handleClick = () => {
        fetchUserData()
    }

    if (!userName || loading
        ? <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">Please Wait</div>
        : userData) 
    
    return (
        <>
            <div className=" w-full bg-purple-700">
                <div className=" w-8/12 flex items-center justify-between mx-auto gap-5 py-4 px-8 ">
                    {/* Logo */}
                    <div>
                        <h1 className=" text-lg font-bold ">Dev Detective</h1>
                    </div>

                    {/* Search Box */}
                    <div className=" flex gap-x-5">
                        <input
                            type="text"
                            name="userName"
                            placeholder="Enter your Username here..."
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className=" px-4 border-none outline-none rounded-lg"
                        />
                        <button
                            onClick={handleClick}
                            className="button"> Search </button>

                    </div>
                </div>

            </div>

            {userData !== null ? <ProfileCard userData={userData}/> : null}
        </>
    )
}

export default Header
