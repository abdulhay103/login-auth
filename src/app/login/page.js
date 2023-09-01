export default function loginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" placeholder="Email" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Email" name="email" />
        </div>
        <button className=" px-5 py-2 bg-sky-500 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
