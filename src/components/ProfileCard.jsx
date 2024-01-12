/* eslint-disable react/prop-types */
const ProfileCard = ({ userData }) => {

  const createDate = new Date(userData.created_at);

  return (
    <>
      <div className=" flex max-w-max justify-center mx-auto gap-3 p-8 mt-20 bg-gray-700 rounded-md ">
        <div className=" w-fit">
          <img src={userData.avatar_url} alt="" className=" w-24 h-24 rounded-full" />
        </div>

        <div className=" flex flex-col justify-between ">
          <div className=" flex flex-col ">
            <h3 className=" font-bold text-xl"> {userData.name || userData.login} </h3>
            <a 
            href={`https://github.com/${userData.login}`} 
            target="blank"
            className=""> @{userData.name || userData.login} </a>
            <p className=" text-gray-400"> {userData.bio} </p>
          </div>

          <div>
            <span className=" text-xs text-gray-200">
              Joined: {`${createDate.getDate()} ${createDate.toLocaleString("en-us", { month: "short", })} ${createDate.getFullYear()}`}
            </span>
          </div>

          <div className=" flex justify-between w-[450px] mt-5">
            <div className=" flex flex-col gap-y-2">
              <p className=" text-lg font-light"> Followers: <span className=" font-extrabold">{userData.followers}</span> </p>
              <p className=" text-lg font-light"> Following: <span className=" font-extrabold">{userData.following}</span> </p>
            </div>

            <div className=" flex flex-col gap-y-2">
              <p className=" text-lg font-light">
                Location: <span className=" font-extrabold">{userData.location}</span>
              </p>
              <p className=" text-lg font-light">
                Repo: <span className=" font-extrabold">{userData.public_repos}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
