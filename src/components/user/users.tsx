import { useUserList } from "../../context/userListContext";

export default function Users() {
  const { userList, setuserList } = useUserList();
  return (
    <>
      {userList.map((u) => (
        <div key={u.id_user}>
          <div className="Image-Profile">
            <img src={u.image} alt="Profile.png" />
          </div>
          <div className="Username-Profile">
            <p> Nombre: {u.name}</p>
          </div>
          <div className="Username-Profile">
            <p>Username: {u.username}</p>
          </div>
          <div className="Email-Profile">
            <p>Email: {u.email}</p>
          </div>
          <button
            onClick={() => {
              setuserList(
                userList.filter((user) => user.id_user !== u.id_user)
              );
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
