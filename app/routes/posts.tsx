import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <h1>Rahul Mohan's sad blog (he has no friends)</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
