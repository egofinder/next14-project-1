import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import { deleteUser } from "@/lib/action";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.name}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.button}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
